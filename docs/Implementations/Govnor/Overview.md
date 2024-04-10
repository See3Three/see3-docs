# Gov'nor

Gov'nor is a proof-of-concept central governance system for See3. It follows the description given in [the introduction.](../../Introduction/Governance.md)

The codebase can be found [here.](https://github.com/see3-js/See3-DAO)

The smart-contract that it uses is deployed on the Aleph Zero testnet as the following address: `5DhQMCBCP7QibiRPcJ8oZSFLYeEWWknVkuicjQPydTcq5gZa`

## Usage

It's currently just a CLI tool.

```bash
See3 Gov\'nor CLI

Usage: ./govnor.sh [option] ...

   --suri              Your private key, formatted as a hex string that begins with 0x.
   transfer            Send funds to another contract.
                       Usage: ./govnor.sh transfer RECIPIENT_ADDRESS AMOUNT --suri SURI
   kick-keepers        Initiate a vote to replace a keeper.
                       Usage: ./govnor.sh kick-keepers OLD_KEEPER NEW_KEEPER --suri SURI
   untrust             Remove a trusted authority.
                       Usage: ./govnor.sh untrust ACCOUNT_ID --suri SURI
   trust               Add a trusted authority.
                       Usage: ./govnor.sh trust ACCOUNT_ID TRUST_KEY --suri SURI
   get-voting-power    Get the voting power of an account.
                       Usage: ./govnor.sh get-voting-power ACCOUNT_ID
   get-balance         Get the balance of an account.
                       Usage: ./govnor.sh get-balance ACCOUNT_ID
   finalize-vote       Finalize the current vote.
                       Usage: ./govnor.sh finalize-vote --suri SURI
   withdraw            Withdraw funds.
                       Usage: ./govnor.sh withdraw --suri SURI
```

## Why No GUI?

We're invested in giving everyone a reliable, and simple, experience. CLI is the simplest way to interact with the system, and has saved us development time thus far, which has been invested in features such as verifiable image proofs.

We're already working on a glossy web-ui for the system, which will be available soon. This is only an interim measure.