# see3_python Library Documentation

## Supported Platforms

- Kotlin, With Android Support (All Architectures).
- Swift, With iOS Support (All Architectures).
- Expo (React Native), With Android and iOS Support (All Architectures).
- TypeScript and JavaScript, Via WebAssembly.
- TypeScript and JavaScript, Via Node.js.
- Python, for x86_64.
- Rust, for all supported platforms.

## Teaching By Example

### Basic Setup

```python
###
# Issuer Setup (They Generate Credentials For Users/Holders)
###

# Configure the issuer that supports up to two fields of data. These could be used in any number of ways to describe the holder, such as their name, age, or other information.
issuer = Issuer(2)
```

```python
###
# Holder Setup (They Use Credentials To Sign Messages, ie, Users)
###

# Holder is initialized with the Issuer's public key and an empty metadata object. This ensures that the Holder is ready to receive credentials from the correct Issuer.
holder = Holder(issuer.get_server_public_key(), {})
```

We could have put some metadata in the holder's metadata object, but we're not going to do that in this example. Usually, it will contain information about the Issuer, such as the Issuer's name and the URL of the Credential Server.

```python
# The Holder's credential is going to contain some data fields, which describe facts about the holder. Let's set-up the Holder's credential messages.
messages = MessageList()

# This is a public message, meaning that it will be visible to the issuer when the credential is issued.
messages.append_public_message(b"test")

# This is a private message, meaning that it will not be visible to the issuer when the credential is issued.
messages.append_private_message(b"test")

# We can change the visibility of a message later, and even remove messages.
messages.make_message_private(0)
messages.remove_message(1)

# Let's set the Holder's credential messages.
holder.set_credential_messages(messages)

# Now, the Holder generates a request for a credential.
credential_request = holder.credential_request()
```

Messages must be less than 32 bytes.

### Fetching a New Credential

```python
###
# Issuing A Credential
### 

# The Issuer receives the credential request and issues a credential.
credential = issuer.issue_requested_credential(credential_request)

# The Holder imports the credential.
holder.import_credential(credential)
```

Credentials can become out-of-date when other Holders are removed by the Issuer. Without the ability to refresh credentials, out-of-date credentials may be used to sign messages even after the Holder has been removed.

Issuers may update credentials upon a Holder's request, in an anonymous manner. This means that the Holder does not need to reveal any information about their credential, in order to request an update.

This library will soon support the ability to refresh signatures in an anonymous manner, without the participation of the Holder, so that out-of-date credentials may be used to sign messages. This enables the Holder to remain entirely offline.

This is because the Issuer has a record of all the Holders that have been removed from the system, and is able to check that the signature was created for a Holder that has not been removed.

```python
# Credentials can be "updated", but only by the Issuer.
credential_update = issuer.update_credential(holder.credential_request_update())

# The Holder imports the credential update.
holder.import_credential_update(credential_update)
```

### Signing Data

```python
###
# Signing Data
###

# The Holder signs some data with their credential.
signature = holder.sign_with_credential(b"test", [0])

# Here, "[0]" refers to the index of the message that the Holder is revealing when they produce the signature.
# This allows the Holder to reveal specific fields, representing facts about themselves, when they sign a message.

# The Verifier verifies the signature, yielding a true-false value.
verifier = Verifier(issuer.get_server_public_key())
print(verifier.verify_signature(signature, b"test"))

# The Verifier can also verify the signature, yielding a list of revealed fields.
print(verifier.verify_signature_with_attributes(signature, b"test"))
```

## Reference

### MessageList Class

The `MessageList` class is used to manage a list of messages with different visibility settings (public or private).

#### Methods

- `__init__(self) -> None`: Initializes an empty message list.
- `get_message_list(self) -> list[dict]`: Returns the entire list of messages.
- `get_public_message_list(self) -> list[dict]`: Returns a list of public messages.
- `get_private_message_list(self) -> list[dict]`: Returns a list of private messages.
- `get_all_messages_raw(self) -> list[bytes]`: Returns a list of all message values in raw byte format.
- `append_private_message(self, message: dict) -> None`: Appends a private message to the list.
- `append_public_message(self, message: dict) -> None`: Appends a public message to the list.
- `remove_message(self, index: int) -> None`: Removes a message from the list by index.
- `recover_message_list(self, message_list: list[dict]) -> None`: Recovers a message list from a list of dictionaries.

### Issuer Class

The `Issuer` class is responsible for managing the issuance and updating of credentials.

#### Methods

- `__init__(self, max_messages: int) -> None`: Initializes the issuer with a maximum number of messages.
- `issue_requested_credential(self, credential_request: bytes) -> bytes`: Issues a requested credential.
- `update_credential(self, request: bytes) -> bytes`: Updates a credential.
- `get_current_accumulator(self) -> bytes`: Retrieves the current accumulator.
- `get_auxiliary_data(self) -> bytes`: Not implemented.
- `get_server_public_key(self) -> bytes`: Retrieves the server's public key.
- `get_max_messages(self) -> int`: Returns the maximum number of messages.
- `revoke_user(self, user_id: bytes) -> bytes`: Revokes a user.
- `decrypt_user_id_in_proof(self, proof: bytes) -> bytes`: Not implemented.

### Holder Class

The `Holder` class is used to manage user data and credentials.

#### Methods

- `__init__(self, public_key: bytes, server_metadata: object) -> None`: Initializes the holder with a public key and server metadata.
- `set_credential_messages(self, messages: MessageList) -> None`: Sets the credential messages.
- `request_credential(self) -> bytes`: Requests a credential.
- `request_credential_update(self) -> bytes`: Requests a credential update.
- `import_credential(self, response_credential: bytes) -> None`: Imports a credential.
- `import_credential_update(self, credential_update: bytes) -> None`: Imports a credential update.
- `sign_with_credential(self, data_to_prove: bytes, public_indices: list[int]) -> bytes`: Signs data with a credential.

### Verifier Class

The `Verifier` class is used to verify signatures.

#### Methods

- `__init__(self, public_key: bytes) -> None`: Initializes the verifier with a public key.
- `verify_signature(self, proof: bytes, accumulator: bytes, data: bytes) -> bool`: Verifies a signature.