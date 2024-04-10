# Governance On See3

::: warning Important Note

We're committed to cautious incentive design, therefore we have chosen to redesign our institutional mechanisms for decision making, voting and slashing. As of currently, our system is underpinned by the democratic voting of the community of See3 Bond Holders, and ownership of the token is gated to prevent adverse influence. Since it is our imperative to establish transparent and highly legitimate institutional system for See3, we are constantly reviewing our options, and will soon update this document to reflect our research.

:::

## Arbitration on Aleph Zero

The See3 Arbitration Contract, operating on the Aleph Zero blockchain, secures our system of incentives and enforce penalties within the ecosystem. This contract is designed to uphold the integrity and trust of the hardware-attested content provenance system by ensuring that only secure and reliable hardware is utilized in the creation of content: it rewards the community for identifying cases of camera-hacking and slashes camera manufacturers who do not sufficiently tamper-proof their hardware. 

## How Does Governance Uphold See3's Security?

1. **Deposits**: those who wish to act as trusted signing authorities within the See3 ecosystem, such as mobile app developers and camera manufacturers, must deposit USDC into the See3 Arbitration Contract as security. This deposit acts as assurance of their commitment to maintaining good security practices, thereby it is a prerequisite for their keys to be added to the See3 Trust List.

2. **Trust List Management**: the Arbitration Contract maintains a list of trusted authorities. Admission to this list is determined through a voting process among the token-holders within the See3 ecosystem, ensuring only manufacturers with a proven track record are included.

3. **Slashing for Misconduct**: if a trusted authority permits the creation of misleading content, the smart contract penalizes them by slashing their deposit. This enforcement relies on accumulated signed messages from the blacklist keepers, evidencing the repeated failures of the manufacturer's anti-tampering.

4. **Taxation and Compliance**: regular taxation is applied to trusted authorities, thereby financing the See3 Treasury. Failure to comply results in their removal from the trust list, ensuring ongoing participation and adherence to ecosystem standards.

## Treasury and Compensation

1. **Handling Compensation Claims**: if it is discovered that a misleading image bears a valid See3 Attestation, members of the community can submit a fraud claim to the See3 Arbitration Contract. These claims are evaluated through a community voting process, where evidence supporting the claim must be presented. If the vote succeeds, the malicious camera is blacklisted.

2. **Issuing Compensation**: valid claims are compensated from the See3 Treasury. This serves both to deter misuse and to incentivize the community to report security vulnerabilities.

## Organizing the Keepers

1. **Securing the Blacklist:** for privacy and security reasons, the Camera Blacklist is _always_ held in an encrypted form, and is never fully decrypted. It is broken up into encrypted chunks, such that it can only be decrypted or modified by the joint participation of the Keeper Committee. The Keeper Committee use Multi-Party Computation to jointly maintain the blacklist, acting as the Keeper.

2. **Rotation of the Keeper Committee:** the Keeper Committee is a group of three members, elected by the See3 Bond Holders. They are responsible for maintaining the Camera Blacklist, and are expected to act in good faith and with the best of their abilities. If a Keeper is found to be incompetent or negligent, the See3 Bond Holders can elect a new Keeper Committee to replace them.

## System Rationale

This arbitration system is designed to ensure accountability and integrity within the See3 ecosystem. The requirement for manufacturers to make deposits and the potential for financial penalties serve as incentives for maintaining secure hardware. Meanwhile, the treasury and compensation mechanisms encourage active community engagement in identifying and reporting breaches of trust.

