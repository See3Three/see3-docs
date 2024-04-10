# See3: An Open Standard for Hardware-Attested Content Provenance

## The TL;DR

See3 enables you to take pictures and videos which are provably real. Our reference implementation of See3 includes all of the tools needed to capture and verify authenticated media on modern smartphones. It also supports the non-malicious editing of provably real media -- a verifiable history of edits is attached to each image. See3 is scalable, does not doxx the user, and is built around an extensible open-standard. The security of See3 depends on the tamper-proof cryptographic hardware which is included in all modern smartphones. We've fortified the security of our standard using advanced fraud-detection, arbitration, and robust economic incentives, all of which are built on Aleph Zero. 

In this document, we define our open standard for hardware-attested content provenance, around which the See3 SDKs, demos and tooling are built.

## The Basics

We use a chain of cryptographic signatures to tie each piece of media (image, video or audio), which is captured by trusted secure hardware, to a root of trust: the trusted and reputable manufacturer of the capture device. Using zero-knowledge cryptography, we prove the correctness of this cryptographic chain without revealing the camera signer identity, and store this correctness proof within the metadata of the media. 

If the signer identity were not concealed, as it is in See3, it would be possible images with the same origin to be associated: the camera could accidentally de-anonymize its user, as is currently possible for C2PA's native attestation scheme. **See3 is the first signature-based attestation scheme which is truly privacy-preserving.**

To mitigate the risk of camera compromise, we implement an arbitration layer for the banning of malicious camera identities on Aleph Zero. It uses the encrypted camera identifiers (strikers) embedded in the media metadata, which are only decipherable by the trusted Keeper of the Camera Blacklist, to add malicious camera identifies to the blacklist. By querying the Keeper, See3-enabled apps can detect whether an image is from a blacklisted camera, and subsequently reject it. 

The use of encrypted strikers preserves the non-doxxing property of our scheme, since the identity of the camera can only be known to the Keeper, whilst accommodating for the existence of the Camera Blacklist. The security and confidentiality of this blacklist is guaranteed using Multi-Party Computation (MPC), since **the Keeper is not a single entity**, but rather a group of oblivious nodes operating jointly on encrypted data. The credibility of the arbitration layer is supported by economic incentives and smart-contracting on Aleph Zero.

## What Makes See3 Special

* It's totally privacy preserving, yet secure.
* It's very easy to scale, and does not require new infrastructure.
* It can be introduced in a frictionless, nearly invisible, manner.
* It works offline.

**Killer Feature:** See3 lets you take and verify authenticated photos from mobile devices, without requiring any modifications to the underlying hardware or software. It uses native hardware-attestation features of modern smartphones, initially used by banks to secure their mobile infrastructure, to provide a great degree of security. 

**We've built an SDK for taking and verifying authenticated photos that can be rolled-into any React Native smartphone app.**

See3 also supports **Verifiable Media Edits**. This enables you edit images such that you can prove that the edited version corresponds to the verified original image. This allows us to **verify the authenticity of images which have been edited.** Additionally, the media metadata must include a verifiable edit history for each edited image -- this prevents misleading edits from going unnoticed.

See3 is built on C2PA, and is therefore compatible with existing, and future, C2PA software and hardware. It patches over C2PA's faults by replacing the traceable implicit-attestation system with our privacy-preserving technology, and also replaces the default edit-signing mechanism such that all edits are fully transparent and verifiable.

## What Does The Reference Implementation Include?

- **See3.js**: a JavaScript library for the creation and verification of authenticated media.
- **Mayor**: a server which securely issues trust certificates to See3-enabled apps.
- **Gov'nor**: the central trust-management system used by all See3-compliant software.
- **Wink**: a demo application, built for Android devices, which uses See3.js to take and verify authenticated photos.
