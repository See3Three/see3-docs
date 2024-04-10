# Usage

::: info

Although Mayor is relatively stable, we're expecting an influx of new features, thus breaking changes are possible.

:::

Mayor is a tool for issuing Camera Trust Signatures, from the perspective of a Trusted Authority. As of currently, it verifies the device and app integrity of an Android App using Google's Play Integrity APIs before issuing a Camera Trust Signature.

## Usage

1. Set-up a `config.json` file with the following fields:

```json
{ "errorLevel": "log",
  "validCertificateSha256Digest": ["VALID_CERTIFICATE_SHA256_DIGEST_HERE"],
  "taPrivateKeyHex": "TA_PRIVATE_KEY_HEX_HERE", // 0xHexString
  "googleCredentials": {
    "type": "service_account",
    "project_id": "PROJECT_ID_HERE",
    "private_key_id": "PRIVATE_KEY_ID_HERE",
    "private_key": "PRIVATE_KEY_HERE",
    "client_email": "CLIENT_EMAIL_HERE",
    "client_id": "CLIENT_ID_HERE",
    "auth_uri": "AUTH_URI_HERE",
    "token_uri": "TOKEN_URI_HERE",
    "auth_provider_x509_cert_url": "AUTH_PROVIDER_X509_CERT_URL_HERE",
    "client_x509_cert_url": "CLIENT_X509_CERT_URL_HERE",
    "universe_domain": "UNIVERSE_DOMAIN_HERE"
  },
  "packageName": "PACKAGE_NAME_HERE",
  "encodedDecryptionKey": "ENCODED_DECRYPTION_KEY_HERE",
  "encodedVerificationKey": "ENCODED_VERIFICATION_KEY_HERE"
}
```
2. `npm run dev`
3. The server should now serve an endpoint for verifying device attestations and producing corresponding trust signatures. The endpoint is `/api/playintegrity/check`.

It uses the standard cryptography defined in the [Specification](../../Specification/Specification.md).

## Data Types

It expects 

```JSON
CertificateRequest = {
    'ta-public-key': string,
    'camera-public-key': {
        x: string, // 0xHexString,
        y: string // 0xHexString
    },
    'request-body': {
        token: string,
        mode?: string,
        nonce?: string
    }
};
```

and returns 

```JSON
trustedAuthoritySignature: {
    "signature-R": {
        x: string, // 0xHexString;
        y: string // 0xHexString;
    };
    "signature-s": string; // 0xHexString;
};
```


