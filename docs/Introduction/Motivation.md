# Why, and How?

On January 23, an AI-generated voice message falsely claiming to be President Biden discouraged Democrats from voting in the 2024 primary. A week later, a finance worker lost $25 million to scammers using a deepfake video call. Meanwhile, an AI-generated image of an explosion at the Pentagon caused a significant drop in the Dow Jones Industrial Average. These incidents highlight the damaging impact deepfakes across various sectors, including politics, finance, and social media.

## How See3 Makes A Difference

The proliferation of deepfakes poses risks not just to individuals but to societal trust as a whole. Reliable image certification can protect vulnerable communities, journalists, and whistleblowers from exploitation and misinformation.

**Commercial Applications**: 
- **Media and Journalism**: Authenticating news footage to prevent the spread of false information.
- **Finance**: Verifying identities in transactions to combat fraud.
- **Healthcare**: Ensuring the integrity of medical images and data.
- **Legal**: Certifying evidence presented in court.
- **Social Media**: Enabling platforms to identify and mitigate misleading content quickly.

See3 scrubs sensitive information using zero-knowledge proofs, protecting user identities without inhibiting a platform's ability to perform moderation in case somebody misbehaves. This balance between privacy and accountability is crucial for maintaining trust in digital media.

## See3 Is The Only Sound Approach

Traditional forgeries were relatively easy to detect, but deepfakes can now create images almost indistinguishable from real ones at a low cost. For instance, services like “OnlyFake” generate realistic fake IDs for just $15, enabling fraud even against trained professionals. This has lead

Current detection methods -- such as AI models -- are quickly becoming obsolete as the technology for creating deepfakes evolves faster than detection capabilities. Techniques for watermark deepfakes, marking them as not real, don't prevent deepfakes generated with malicious intent from spreading because adding watermarks to deepfakes is optional, and they are also easy to remove. Ultimately, most approaches did not address the core problem of knowing whether or not images were indeed taken by cameras, which is what actually makes an image real, thus industries began to consolidate around C2PA.

C2PA and See3 are technologies for media authentication. C2PA attaches origin information to media files, which could be used to prove that images came from a real camera. See3 is built on the same principle: a tamper-proof chip embeds a cryptographic proof in each photo, verifying its origin. 

However, See3 was developed to address the privacy and regulatory-compliance limitations of C2PA, including:

1. **Compliance and Privacy Issues**
   - **Dependence on CAs**: C2PA relies heavily on Certificate Authorities (CAs) to manage and validate cryptographic keys, granting them significant control.
   - **Tracking and GDPR:** C2PA can't be implemented without granting CAs the ability to trace devices across images, creating GDPR-related concerns.
   - **Potential for Abuse**: CAs can revoke or ban devices without transparent oversight, posing risks of censorship and misuse of power, which may be illegal.

2. **Scalability Issues**
   - **Operational Overhead**: Managing unique keys for millions of devices creates substantial logistical and cost challenges.
   - **Offline Device Limitations**: Devices without consistent internet access struggle with essential duties, such as key rotation and revocation checks.

3. **Geopolitical and Legal Concerns**
   - **Data Sovereignty Conflicts**: C2PA's reliance on CAs operating under specific jurisdictions can lead to conflicts with regional governments.
   - **Vulnerability to Foreign Influence**: External entities could pressure CAs to manipulate content authenticity, impacting political sovereignty.
