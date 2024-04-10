# The See3 Technical Specification

::: warning

This is a pre-release version of the See3 Technical Specification. It is incomplete, and there may be breaking changes before the official release.

:::

## Introductory

The design rationale, and most aspects of See3's implementation, are given in the ["How Does See3 Work?" section.](../Introduction/Introduction.md) This is necessary reading before you proceed to read the technical specification.

The purpose of this technical specification is to define the data structures, choices of cryptography, and other elements which are unique to See3, as an aid for producing See3-compliant software implementations.

Here's the vital information about our media attestation technology:

- See3 Attestations and Edit Proofs are stored in the image metadata, using C2PA manifests.
- See3 is agnostic to the proving system and circuit - the community has implementation choices, although we provide a default cross-platform circuit implementation which must be supported by all See3-compliant software. 
  - The use of hashes and signature schemes is dependent on the prover, and the data structures are therefore interpreted within the context of the specified circuit. 
- See3 is not agnostic to the keeper selection -- being compliant with See3's specification mandates that you interface with See3's arbitration tooling.
- See3 defines some standard cryptography for use in all See3-compliant implementations.
  - We enforce the use of the GMiMC encryption scheme for the camera identifier -- this is necessary to ensure that it is decryptable by the keeper. 
  - The ECDH Key is defined on the BabyJubJub elliptic curve, and this can not be changed for similar compatibility reasons.

## C2PA

This section of the document lists the C2PA assertions for use by See3 implementations, in conjunction with the set of standard set of assertions mandated for C2PA. We describe their syntax, usage, etc.

The data structures, embedded in the image metadata, are the franca-lingua between differing implementations of this specification.

All assertions documented here shall be serialized as CBOR, and their schemas shall be defined using CDDL. More information about CBOR and how C2PA attestations are defined can be found in [C2PA's official standard specification.](https://c2pa.org/specifications/specifications/2.0/index.html)

**We will use terms which are C2PA-specific very heavily, thus we recommend that you familiarize yourself with C2PA first.**

::: info

We're in the process of overhauling the following definitions, they are still subject to change.

:::

`org.see3.attestation` corresponds to the ZK-based image attestation proofs that we've described in other documentation. `org.see3.eq-proof` corresponds to the ZK-based image equivalence tech that powers our Proof of Edit.

When an `org.see3.attestation` assertion is found in the active manifest of an asset, it is immediately parsed and sent to the verifier. This will occur if an image has been proved and features no edits -- the attestation data for the asset in question should always be in the active manifest if the asset is unedited.

If no `org.see3.attestation` assertion is found, the verifier will check for an `org.see3.eq-proof`, and if one is found, the verifier will parse and verify it. This equivalence proof demonstrates that an **edited image**, identified by a given hash, corresponds to the **original image**, given the edits specified in the Edit History. This appears in the active manifest if the See3 Attestation data does NOT correspond to the current, edited version of the manifest. Instead, the See3 Attestation data will be stored in an ingredients manifest. 

The `org.see3.eq-proof` which is found in the active manifest will feature an UUID which points to the next manifest. This UUID will be used to fetch the next manifest, and so on, until the UUID points to the manifest in which there is a valid `org.see3.attestation`. This allows for the chaining of edits, and the verification of the entire edit history.

### org.see3.attestation and org.see3.equals

```CDDL
manifest-pointer = {
  hash: hex-str,
  "contained-in"?: uuid-str
}

manifest-pointer-strict = {
  hash: hex-str,
  "contained-in": uuid-str
}

attestation-map = {
  label: "org.see3.attestation",
  data: {
    zkp: zkp,
    "ta-public-key": ecpoint,
    "keeper-data": {
      "public-key": ecpoint,
      "ecdh-key": ecpoint
    },
    "camera-identifier": [ hex-str ]
  }
}

equals-map = {
  label: "org.see3.eq-proof",
  data: {
    "edit-history": [ edit ],
    zkp: zkp,
    from: manifest-pointer-strict,
    to: manifest-pointer
  }
}

```

The following should help you understand this CBOR-defined data structure.

- `ta-public-key` refers to the public key which uniquely identifies the Trusted Authority. They're the root of trust.
- `keeper-data` includes the Keeper Public Key and ECDH Public Key -- these are needed to check that the encrypted camera identifier was generated correctly, else malicious actors can avoid being blacklisted by attaching an incorrect encrypted camera identifier. If the encrypted camera identifier is incorrect, the verification will fail, thereby penalizing the malicious party. The ECDH Public Key is used by the Keeper to decrypt the Encrypted Camera Identifier.
- `camera-identifier` is the encrypted camera identifier.
- The `manifest-pointer` is a pointer used in the equality proof to indicate where the verifiable authenticity proof of the original is located in the manifest. You can use these to chain together manifests, thereby keeping an extensive edit history.
- We define the data-types used here later in the document.

```CDDL
cropper-inputs = {
  position: {
    x: uint,
    y: uint
  },
  "new-size": {
    width: uint,
    height: uint
  },
  "previous-size": {
    width: uint,
    height: uint
  }
}

resize-data = {
  factor: uint
}

edit = { type: tstr, data: cropper-inputs / resize-data }
```

These data structures correspond to the resizing and cropping operations, and are used within the `org.see3.eq-proof`.

```CDDL
; Hexadecimal strings represented as byte strings
hex-str = bstr

; Base64 strings for proofs
base64-str = tstr .regexp "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"

; UUIDs
uuid-str = tstr .regexp "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"

; EC Points
ecpoint = {
  x: hex-str,
  y: hex-str
}

; Zero-Knowledge Proofs
zkp = {
  proof: base64-str,
  "circuit-id": tstr
}
```

These definitions should clarify the data-types. Unless otherwise stated, all data is given in big-endian.

## Standard Circuits and Provers

- Specifications for how to pass the inputs to the verifier, etc, are unique for each proving scheme and are therefore documented alongside the prover.
- The prover circuit also determines what kinds of hashes, signatures and encryptions are used throughout.

### Attestation Proofs

#### Default (v1)

::: warning

This implementation is experimental, features known bugs, and is not yet ready for production use. It will be overhauled very soon.

:::

Given by `"circuit-id": "default-v1"`. The specifications for the circuit, prover details and implementation details are given in the [reference implementation](https://github.com/See3Three/see3-js).

It is based on Aztec's Barretenberg (SNARK/PLONK) ZK proving system, and is currently written in the Noir domain-specific language.

It uses BabyJubJub in combination with SWIFFT-Poseidon for hashing, and EDDSA-BabyJubJub for signing, consistently throughout. The prover and verifier input schemas are described in plain JavaScript/JSON as part of our reference implementation.

### Equivalency Proofs

#### Default (v1)

::: warning

This implementation is experimental, features known bugs, and is not yet ready for production use. It will be overhauled very soon.

:::

Given by `"circuit-id": "default-v1"`, for the transformation `"type": "crop"`. The specifications for the circuit, prover details and implementation details are identical to the `default-v1` attestation circuit, and are given in the same [reference implementation](https://github.com/See3Three/see3-js).

## Standard Cryptographic Functions

### Hash Functions

#### SWIFFT

- SWIFFT can hash large amounts of data verifiably and provably, by doing most of the compute outside the ZK circuit. It's extremely fast.
- We implemented a version of SWIFFT in Rust, for our own purposes.

We may switch to SWIFFT-Poseidon to fortify our security, since SWIFFT has a homomorphic property which may have unforeseen security implications.

### Elliptic Curves

#### BabyJubJub

- SNARK Friendly.
- Standard Cryptography In Noir.

### Signature Schemes

#### EDDSA-BabyJubJub

- Combination of SNARK Friendly components, deterministic and well-understood.
- Follows RFC 8032.
- Uses Poseidon with parameters that are consistent with [the Noir Standard Library.](https://github.com/noir-lang/noir/blob/9a241f9622b342cd9d56bf8481219cfc374c0510/noir_stdlib/src/hash/poseidon/bn254/consts.nr) Noir implements x5_3 to produce hashes for two field elements, and x5_6 to produce hashes for five field elements.

### Encryption Schemes

#### GMiMC

See [GitHub](https://github.com/TaceoLabs/noir-GMiMC) for details.

