# How See3 Works


::: warning Important Note

This explanation can be made more concise, and is also incomplete. It has not been checked for mistakes or misleading parts.

Read at your own risk.

:::

We'll start by introducing basic concepts, and we'll get increasingly specific.

## High-Level Introduction

See3 leverages your device's built-in secure hardware to prove that an image comes from a real, trustworthy camera.

This proof is called a "See3 Certification", and it is stored in the image's metadata. It is not a digital signature, we will describe it in this article.

When an image bears a See3 Certification, the user can be sure of the following:

- The image was captured using an approved application on a verified device.
- The approved application confirms the image is real.
- The image has not been altered since it was taken.

Sharing identifiable information about the camera device is strictly optional -- See3 is fully anonymous by default.

Here's how it works:

1. Your device must register with a See3 Operator (SO). The SO uses hardware checks to verify that your device is genuine and will behave honestly.
2. If your device passes all security checks, the SO issues it a unique "cryptographic descriptor", which it will store securely and keep secret.
3. When you take a photo, your device uses its cryptographic descriptor to generate a See3 Certification for that image.
4. The See3 Certification is embedded within the image's metadata as soon as the image is captured.
5. Anyone viewing the image can check the See3 Certification to confirm the photo is genuine. 

Any changes to the image data will make the See3 Certification invalid: See3-certified images are tamper-proof.

This process raises three key questions:

1. How does the SO thoroughly vet devices?
2. How does the SO ensure devices won't misuse their ability to mark images as real?
3. How do cryptographic descriptors function, and why are they necessary?

We'll explore each of these questions in the following sections.

## How does the SO thoroughly vet devices?

The See3 Operator (SO) thoroughly vets devices by leveraging **Remote Attestation Procedures (RATS)**, a method that enables verification of a device's integrity and authenticity remotely. This process ensures that only genuine, uncompromised devices running approved applications can register with the SO and receive a cryptographic descriptor.

### Remote Attestation with Play Integrity and Device Attest

On Android and iOS platforms, remote attestation is facilitated by services like **Google's Play Integrity API** (for Android) and **Apple's DeviceCheck and App Attest APIs** (for iOS). These services allow applications to generate cryptographic proofs of the device's current state, which the SO can verify.

#### What Information Does Remote Attestation Provide?

Remote attestation gives the SO cryptographic evidence of:

- **Device Integrity**: Confirmation that the device hardware is genuine and hasn't been tampered with.
- **Operating System State**: Assurance that the device is running an unmodified, secure version of the OS.
- **Application Authenticity**: Verification that the application is the approved, untampered version.
- **Secure Boot State**: Confirmation that the device booted securely, indicating that the bootloader and system firmware are uncompromised.
- **App ID and Device Platform**: Identification of the specific application and platform in use.

#### The Vetting Process Step-by-Step

1. **Attestation Request**: When a device seeks to register, the approved application initiates an attestation request using the platform's secure attestation service.
2. **Generation of Attestation Evidence**: The device's secure enclave creates a cryptographic attestation containing details about the device hardware, OS, and application.
3. **Transmission to the SO**: This attestation evidence is securely sent to the SO.
4. **Verification by the SO**: The SO examines the attestation to confirm:
   - The device is genuine and not rooted or jailbroken.
   - The OS is up-to-date and securely configured.
   - The application is authentic and untampered.
   - The device's secure boot process is uncompromised.
5. **Issuance of Cryptographic Descriptor**: If the device passes all checks, the SO issues a unique cryptographic descriptor, securely stored within the device's secure hardware.

## How does the SO ensure devices won't misuse their ability to mark images as real?

The See3 Operator (SO) ensures that devices cannot misuse their ability to certify images by **enforcing correct application behavior from the outset**. This is achieved through a combination of secure hardware environments, application integrity checks, and remote attestation procedures. These measures collectively prevent unauthorized certification of images—such as deepfakes—and ensure that only genuine photos captured by the device's camera can receive See3 Certification.

### Enforcing Correct Application Behavior from the Outset

1. **Binding the Cryptographic Descriptor to the Approved Application**

   - **Application Binding**: The cryptographic descriptor is tied exclusively to the approved application's unique **App ID**. Only this specific, trusted application can access and use the descriptor.
   - **Result**: This ensures that only the authorized application can initiate the certification process, preventing any other apps from misusing the credential.

2. **Secure Hardware Environments and Secure Boot**

   - **Secure Enclaves/Trusted Execution Environments (TEEs)**: Devices utilize secure hardware components that provide a protected space for sensitive operations and data storage.
     - **Secure Storage of Descriptors**: The cryptographic descriptor is stored within this secure environment, making it inaccessible to unauthorized code or applications.
   - **Secure Boot Verification**: The device verifies its own integrity during startup, ensuring it hasn't been tampered with at a fundamental level.
   - **Result**: Secure hardware and secure boot processes guarantee that the device operates in a trusted state, preventing attackers from compromising the system to misuse the credential.

3. **Application Integrity and Code Verification**

   - **Remote Attestation Services**: Platforms like **Google's Play Integrity API** (Android) and **Apple's DeviceCheck and App Attest APIs** (iOS) provide cryptographic proofs that:
     - The application is authentic and has not been modified.
     - The operating system is genuine and secure.
   - **Continuous Integrity Checks**: Every time the application attempts to access the cryptographic descriptor, it undergoes integrity verification.
     - Any tampering or modification invalidates the attestation, blocking access to the descriptor.
   - **Result**: Only the original, untampered application can use the descriptor, preventing malicious versions from certifying unauthorized images.

### Ensuring Deepfakes Cannot Receive See3 Certification

By enforcing these stringent measures, the SO makes it practically impossible for deepfakes or manipulated images to receive See3 Certification:

- **Controlled Certification Process**:
  - **Real-Time Camera Capture Only**: The approved application is designed to certify only images captured directly from the device's camera in real-time.
    - It blocks attempts to certify images from storage, edited photos, or synthetic content.
  - **Secure Image Processing**: Image capture and certification occur within the secure hardware environment.
    - This prevents any external interference or injection of fake image data.
- **Result**: Since deepfakes are typically generated or manipulated outside of this secure, controlled process, they cannot be certified by the application. The system only allows genuine, unaltered images captured at the moment by the camera to receive certification.

### Summary

By knowing the device's verified characteristics—such as the App ID, device platform, and secure boot state—the SO can trust that the system will behave as intended. The combination of secure hardware, exclusive application binding, and continuous integrity checks ensures there is no feasible way for the system to misbehave or for attackers to misuse the credential. This means only authentic images captured by the camera using the approved application can receive See3 Certification, effectively preventing deepfakes and manipulated images from being falsely certified.

## How do cryptographic descriptors function in detail?

See3 means knowing that images came from real devices, without exposing the specific devices and users that took the images. We explored existing techniques for authenticating the source of data, but they weren’t privacy-preserving, couldn’t scale, or lacked essential features needed for moderation.

We created cryptographic descriptors to fill this gap.

### Why Not Use Digital Signatures, Like C2PA?

Digital signatures require you to know and trust the author's public identity (key), which isn't desirable when regulatory compliance or privacy is a concern. Attempts have been made to fix (such as key rotation), but they all depend heavily on the Certificate Authority -- a trusted entity with unchecked power to ban specific cameras or allow malicious devices to sign deepfakes. The control of CAs by large corporations and governments is deeply concerning, and gives rise to a legitimate concern these technologies will be banned in the EU.

We discuss this further in our blog, [click here to read it.](https://veracity-labs.medium.com/c2pa-is-an-american-surveillance-network-b523c5457cc3)

### The Advantages of Cryptographic Descriptors in See3

Cryptographic descriptors address these issues by redefining how device-related portions of metadata are authenticated. Instead of relying on individual devices to generate and sign the metadata, trust is placed in a central authority (the See3 Operator) that verifies the information associated with an image's origin and creates a reusable descriptor for it. In this case, the central authority is the See3 Operator and the author is actually the device's camera.

When a device requests a descriptor, it suggests exactly what its metadata should contain and provides evidence that this information is correct to the See3 Operator. The Operator then evaluates this information to decide whether to issue a descriptor and what content it should reference. This process is entirely programmable, enabling See3 to adapt cryptographic descriptors for various image authentication contexts.

Devices have the freedom to disclose parts of their metadata and hide others when certifying their images — only necessary information is shared. This enables verifiers to authenticate the images using valid, centrally-approved metadata without deanonymizing the specific device. This allows, for instance, verification that an image was taken by a certified See3 device without exposing the device's unique identifier.

### Balancing Privacy With Accountability in See3

Cryptographic descriptors in See3 offer indistinguishability. This means that, even with multiple images certified by some cryptographic descriptor, there's no way to tell which ones came from the same device and which didn't. This level of anonymity surpasses pseudonyms such as public keys, ensuring devices can remain truly anonymous if desired.

Yet, cryptographic descriptors also address the need for holding malicious parties accountable. In situations where it's necessary — for example, for regulatory compliance — a majority of trusted moderators can work together to reveal the descriptor's unique identifier, needing only a single example of a falsely certified image.

If misuse is detected, such as a hacked device using See3 to post misleading images, the trusted moderators will recover the descriptor's identifier and use it to revoke the descriptor. This renders the cryptographic descriptor invalid — it can't be used again to certify images.

With advanced cryptographic tools, it's even possible to issue cryptographic descriptors without revealing the device's information to the See3 Operator itself. This preserves device privacy during the issuance process, making cryptographic descriptors particularly suitable for applications which require compliance with stringent data-protection regulations.

### It Works Offline

Cryptographic descriptors in See3 are built to function effectively both online and offline. In an online context, verifiers can quickly check the status of descriptors, ensuring they haven't been revoked. In offline scenarios, verifiers can still trust the validity of descriptors based on the last known status, thanks to timestamps included within the descriptors.

The timestamp indicates when the descriptor was last updated, providing assurance that the device was in good standing at that time. Once connectivity is restored, any updates — including revocations — can be processed to maintain overall system integrity.

## The See3 TrustCouncil

The capability to recover the device identifier from an example of an image, as well as the ability to revoke devices from a system, may be implemented using the See3 Impartial Misinformation Committee. This committee will play a crucial role in flagging misleading images and mitigating cyber-attacks which compromise legitimate devices to post fraudulent images. 

By delegating the responsibility of identifying and revoking fraudulent content to an impartial committee, we ensure that accountability is maintained without compromising the privacy of honest users. This approach reconciles the need for effective content moderation with the protection of individual privacy.

We look forward to sharing further details over the coming weeks.