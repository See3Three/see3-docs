# see3-js

see3-js is a JavaScript library for implementing See3-compliant JavaScript applications. It supports the generation and verification of attestation proofs, as well as basic editing capabilities.

It is built on noir.js, WebWorkers, and WebAssembly.

::: danger

see3-js is still in development. It is not ready for production use, features known bugs, and is not yet fully documented. Workarounds are used heavily for the sake of the demo. The codebase is being rewritten and refactored.

:::

## Demo Application

There is a demo application which leverages see3-js on [GitHub](https://github.com/see3-js/see3-js/tree/main/apps/demo). The build instructions are given in the repository's `README.md`.

### Zod Schemas in `utils/schemas.ts`

This file defines various Zod schemas for validating the structure of data objects used throughout the application. These schemas ensure that data conforms to expected formats before processing or storage.

#### Types and Schemas

Each schema has a corresponding TypeScript type. The schemas are defined in `utils/schemas.ts` and the types are defined in `utils/types.ts`.

Types are named identically to the schemas, except without the trailing `Schema`.

These are used throughout.

1. **StringNumberSchema**
   - Validates strings that contain only numeric characters.
   - Regex: `/^[0-9]+$/`

2. **HexStringSchema**
   - Validates strings representing hexadecimal values.
   - Regex: `/^([0-9a-f][0-9a-f])+$/`

3. **HexNumberSchema**
   - Validates strings representing hexadecimal numbers prefixed with `0x`.
   - Regex: `/^0x([0-9a-f][0-9a-f])+$/`

4. **Base64Schema**
   - Validates Base64 encoded strings.
   - Regex: `/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/`

5. **UUIDSchema**
   - Validates strings formatted as UUIDs.
   - Regex: `/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/`

6. **ECPointSchema**
   - Validates objects representing elliptic curve points with `x` and `y` coordinates as hexadecimal numbers.

7. **SignatureSchema**
   - Validates signature objects containing:
     - `signature-R`: An elliptic curve point.
     - `signature-s`: A hexadecimal number.

8. **CaptureDeviceDataSchema**
   - Validates data related to a capture device, including:
     - `camera-private-key`: A hexadecimal number.
     - `ta-public-key`: An elliptic curve point.
     - `ta-signature`: A signature.

9. **CropDataSchema**
   - Validates data for an image crop operation, including:
     - `position`: Coordinates `x` and `y` as numeric strings.
     - `previous-size` and `new-size`: Dimensions `width` and `height` as numeric strings.

10. **ManifestNameSchema**
    - Alias for `UUIDSchema`, used for validating manifest names.

11. **ResizeDataSchema**
    - Validates data for an image resize operation, specifically the `factor` as a hexadecimal number.

12. **EditSchema**
    - A union schema that validates either a crop or resize operation.

13. **ManifestPointerSchema**
    - Validates manifest pointers, including:
      - `hash`: A hexadecimal string.
      - `contained-in`: An optional UUID.

14. **ManifestPointerStrictSchema**
    - Similar to `ManifestPointerSchema` but with `contained-in` as a required UUID.

15. **AttestationProverInputMapSchema**
    - Validates complex structures used in cryptographic attestations.

16. **See3AttestationDataSchema**
    - Validates data for a See3 attestation, including zero-knowledge proof components and public keys.

17. **See3AttestationSchema**
    - Validates a complete See3 attestation object.

18. **See3EqProofDataSchema**
    - Validates data for an equality proof, including the cryptographic proof and edit history.

19. **See3EqProofSchema**
    - Validates a complete See3 equality proof object.

These schemas are crucial for maintaining data integrity and ensuring that all data interactions within the application are predictable and secure.