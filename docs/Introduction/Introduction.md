# See3: An Open Standard for Hardware-Attested Content Provenance

## The TL;DR

See3 enables you to take pictures and videos which are provably real. Our reference implementation of See3 includes all of the tools needed to capture and verify authenticated media on modern smartphones. It also supports the non-malicious editing of provably real media -- a verifiable history of edits is attached to each image. See3 is scalable, does not doxx the user, and is built around an extensible open-standard. The security of See3 depends on the tamper-proof cryptographic hardware which is included in all modern smartphones. 

## What Makes See3 Special

* It's totally privacy preserving, yet secure.
* It's very easy to scale, and does not require new infrastructure.
* It can be introduced in a frictionless, nearly invisible, manner.
* It works offline.

**Killer Feature:** See3 lets you take and verify authenticated photos from mobile devices, without requiring any modifications to the underlying hardware or software. It uses native hardware-attestation features of modern smartphones, initially used by banks to secure their mobile infrastructure, to provide a great degree of security. 

**We've built an SDK for taking and verifying authenticated photos that can be rolled-into any React Native smartphone app.**

See3 also supports **Verifiable Media Edits**. This enables you edit images such that you can prove that the edited version corresponds to the verified original image. This allows us to **verify the authenticity of images which have been edited.** Additionally, the media metadata must include a verifiable edit history for each edited image -- this prevents misleading edits from going unnoticed.

See3 is an alternative to C2PA. It rectifies C2PA's faults by replacing the traceable implicit-attestation system with our privacy-preserving technology, and also replaces the default edit-signing mechanism such that all edits are fully transparent and verifiable.

## What Does The Reference Implementation Include?

- **see3_rust**
- **see3_python**
- **see3_react_native**