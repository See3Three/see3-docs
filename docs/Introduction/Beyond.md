# Roadmap, and FAQ

## FAQ

**Q: Are ZK Proofs Necessary for See3?**

**A:** The current of iteration of See3 uses ZK-SNARKS to prove image attestations. This is possibly inefficient, thus we are exploring a new approach which uses Group Signatures. Group Signatures have all of the same security features as our existing solutions, but are much faster to generate and verify. They're also more compact.

**Q: How Long Does Proof Generation and Verification Take?**

**A:** Proof verification is near-instant, and attestation proof generation currently takes approximately ten seconds on a modern mid-tier laptop. Proof times will be heavily optimized in the forseeable future.

## Roadmap

We will continue to announce new tooling and solutions on a regular basis, once they have gone thorough internal testing.

### Overcoming The Cold Start Problem

We're exploring the following approaches to overcome the cold start problem:

1. **Attestation Daemon**: this is a tool that automatically attaches our attestation proofs to any image the user takes on their device, regardless of which app they're using to capture the image.
2. **Retrospective Edit Detection:** we don't need to depend on See3-enabled editing tools -- we can guess which edits were made after the fact, and adjust the proof accordingly.
3. **Attested Image Record:** we can use Retrospective Edit Detection, in combination with a database, to tell people which edited images are attested by See3, anywhere they appear on the internet.
4. **Strategic Partnerships:** we can establish strategic partnerships with internet platforms, capture device manufacturers, and other stakeholders to introduce See3 into the user's workflow. We can also press downstream parties to adopt See3 by working with our partners to establish new financial incentives.
5. **Augmentation:** we can augment existing platforms to include See3-enabled verification and editing tools using techniques such as browser plugins.
6. **Implementation Subsidies:** we can subsidize the deployment and implementation of See3 across social media platforms.

We look forward to announcing new solutions across all of these categories.

### Our Distribution Model

This primarily depends a series of strategic partnerships with internet platforms, capture device manufacturers, and other stakeholders to introduce See3 into their workflows.

Among other avenues, we're exploring the following monetization paths:

* Authenticity APIs, which allows developers to access our bulk-verification and bulk-editing infrastructure.
* Conversion APIs, which enable backwards-compatibility with other attestation products.
* A Licensing Model for Trusted Parties.

We will be trialing these approaches over the coming months.

### When, and How?

We recommend that you join our [Twitter](https://twitter.com/see3xyz) and [Telegram](https://t.me/see3isthetruth) to get the latest updates and get exclusive early access to our tooling.
