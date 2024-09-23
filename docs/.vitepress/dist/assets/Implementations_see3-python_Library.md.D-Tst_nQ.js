import{_ as e,c as i,a0 as a,o as t}from"./chunks/framework.DKbIOA5p.js";const k=JSON.parse('{"title":"see3_python Library Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"Implementations/see3-python/Library.md","filePath":"Implementations/see3-python/Library.md"}'),n={name:"Implementations/see3-python/Library.md"};function l(r,s,h,p,d,o){return t(),i("div",null,s[0]||(s[0]=[a(`<h1 id="see3-python-library-documentation" tabindex="-1">see3_python Library Documentation <a class="header-anchor" href="#see3-python-library-documentation" aria-label="Permalink to &quot;see3_python Library Documentation&quot;">​</a></h1><h2 id="supported-platforms" tabindex="-1">Supported Platforms <a class="header-anchor" href="#supported-platforms" aria-label="Permalink to &quot;Supported Platforms&quot;">​</a></h2><ul><li>Kotlin, With Android Support (All Architectures).</li><li>Swift, With iOS Support (All Architectures).</li><li>Expo (React Native), With Android and iOS Support (All Architectures).</li><li>TypeScript and JavaScript, Via WebAssembly.</li><li>TypeScript and JavaScript, Via Node.js.</li><li>Python, for x86_64.</li><li>Rust, for all supported platforms.</li></ul><h2 id="teaching-by-example" tabindex="-1">Teaching By Example <a class="header-anchor" href="#teaching-by-example" aria-label="Permalink to &quot;Teaching By Example&quot;">​</a></h2><h3 id="basic-setup" tabindex="-1">Basic Setup <a class="header-anchor" href="#basic-setup" aria-label="Permalink to &quot;Basic Setup&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Issuer Setup (They Generate Credentials For Users/Holders)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Configure the issuer that supports up to two fields of data. These could be used in any number of ways to describe the holder, such as their name, age, or other information.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">issuer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Issuer(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Holder Setup (They Use Credentials To Sign Messages, ie, Users)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Holder is initialized with the Issuer&#39;s public key and an empty metadata object. This ensures that the Holder is ready to receive credentials from the correct Issuer.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Holder(issuer.get_server_public_key(), {})</span></span></code></pre></div><p>We could have put some metadata in the holder&#39;s metadata object, but we&#39;re not going to do that in this example. Usually, it will contain information about the Issuer, such as the Issuer&#39;s name and the URL of the Credential Server.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Holder&#39;s credential is going to contain some data fields, which describe facts about the holder. Let&#39;s set-up the Holder&#39;s credential messages.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MessageList()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is a public message, meaning that it will be visible to the issuer when the credential is issued.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages.append_public_message(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is a private message, meaning that it will not be visible to the issuer when the credential is issued.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages.append_private_message(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># We can change the visibility of a message later, and even remove messages.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages.make_message_private(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages.remove_message(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Let&#39;s set the Holder&#39;s credential messages.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.set_credential_messages(messages)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Now, the Holder generates a request for a credential.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">credential_request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holder.credential_request()</span></span></code></pre></div><p>Messages must be less than 32 bytes.</p><h3 id="fetching-a-new-credential" tabindex="-1">Fetching a New Credential <a class="header-anchor" href="#fetching-a-new-credential" aria-label="Permalink to &quot;Fetching a New Credential&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Issuing A Credential</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Issuer receives the credential request and issues a credential.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">credential </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> issuer.issue_requested_credential(credential_request)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Holder imports the credential.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.import_credential(credential)</span></span></code></pre></div><p>Credentials can become out-of-date when other Holders are removed by the Issuer. Without the ability to refresh credentials, out-of-date credentials may be used to sign messages even after the Holder has been removed.</p><p>Issuers may update credentials upon a Holder&#39;s request, in an anonymous manner. This means that the Holder does not need to reveal any information about their credential, in order to request an update.</p><p>This library will soon support the ability to refresh signatures in an anonymous manner, without the participation of the Holder, so that out-of-date credentials may be used to sign messages. This enables the Holder to remain entirely offline.</p><p>This is because the Issuer has a record of all the Holders that have been removed from the system, and is able to check that the signature was created for a Holder that has not been removed.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Credentials can be &quot;updated&quot;, but only by the Issuer.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">credential_update </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> issuer.update_credential(holder.credential_request_update())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Holder imports the credential update.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">holder.import_credential_update(credential_update)</span></span></code></pre></div><h3 id="signing-data" tabindex="-1">Signing Data <a class="header-anchor" href="#signing-data" aria-label="Permalink to &quot;Signing Data&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Signing Data</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Holder signs some data with their credential.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">signature </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> holder.sign_with_credential(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Here, &quot;[0]&quot; refers to the index of the message that the Holder is revealing when they produce the signature.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This allows the Holder to reveal specific fields, representing facts about themselves, when they sign a message.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Verifier verifies the signature, yielding a true-false value.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">verifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Verifier(issuer.get_server_public_key())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(verifier.verify_signature(signature, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Verifier can also verify the signature, yielding a list of revealed fields.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(verifier.verify_signature_with_attributes(signature, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><h3 id="messagelist-class" tabindex="-1">MessageList Class <a class="header-anchor" href="#messagelist-class" aria-label="Permalink to &quot;MessageList Class&quot;">​</a></h3><p>The <code>MessageList</code> class is used to manage a list of messages with different visibility settings (public or private).</p><h4 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><ul><li><code>__init__(self) -&gt; None</code>: Initializes an empty message list.</li><li><code>get_message_list(self) -&gt; list[dict]</code>: Returns the entire list of messages.</li><li><code>get_public_message_list(self) -&gt; list[dict]</code>: Returns a list of public messages.</li><li><code>get_private_message_list(self) -&gt; list[dict]</code>: Returns a list of private messages.</li><li><code>get_all_messages_raw(self) -&gt; list[bytes]</code>: Returns a list of all message values in raw byte format.</li><li><code>append_private_message(self, message: dict) -&gt; None</code>: Appends a private message to the list.</li><li><code>append_public_message(self, message: dict) -&gt; None</code>: Appends a public message to the list.</li><li><code>remove_message(self, index: int) -&gt; None</code>: Removes a message from the list by index.</li><li><code>recover_message_list(self, message_list: list[dict]) -&gt; None</code>: Recovers a message list from a list of dictionaries.</li></ul><h3 id="issuer-class" tabindex="-1">Issuer Class <a class="header-anchor" href="#issuer-class" aria-label="Permalink to &quot;Issuer Class&quot;">​</a></h3><p>The <code>Issuer</code> class is responsible for managing the issuance and updating of credentials.</p><h4 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><ul><li><code>__init__(self, max_messages: int) -&gt; None</code>: Initializes the issuer with a maximum number of messages.</li><li><code>issue_requested_credential(self, credential_request: bytes) -&gt; bytes</code>: Issues a requested credential.</li><li><code>update_credential(self, request: bytes) -&gt; bytes</code>: Updates a credential.</li><li><code>get_current_accumulator(self) -&gt; bytes</code>: Retrieves the current accumulator.</li><li><code>get_auxiliary_data(self) -&gt; bytes</code>: Not implemented.</li><li><code>get_server_public_key(self) -&gt; bytes</code>: Retrieves the server&#39;s public key.</li><li><code>get_max_messages(self) -&gt; int</code>: Returns the maximum number of messages.</li><li><code>revoke_user(self, user_id: bytes) -&gt; bytes</code>: Revokes a user.</li><li><code>decrypt_user_id_in_proof(self, proof: bytes) -&gt; bytes</code>: Not implemented.</li></ul><h3 id="holder-class" tabindex="-1">Holder Class <a class="header-anchor" href="#holder-class" aria-label="Permalink to &quot;Holder Class&quot;">​</a></h3><p>The <code>Holder</code> class is used to manage user data and credentials.</p><h4 id="methods-2" tabindex="-1">Methods <a class="header-anchor" href="#methods-2" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><ul><li><code>__init__(self, public_key: bytes, server_metadata: object) -&gt; None</code>: Initializes the holder with a public key and server metadata.</li><li><code>set_credential_messages(self, messages: MessageList) -&gt; None</code>: Sets the credential messages.</li><li><code>request_credential(self) -&gt; bytes</code>: Requests a credential.</li><li><code>request_credential_update(self) -&gt; bytes</code>: Requests a credential update.</li><li><code>import_credential(self, response_credential: bytes) -&gt; None</code>: Imports a credential.</li><li><code>import_credential_update(self, credential_update: bytes) -&gt; None</code>: Imports a credential update.</li><li><code>sign_with_credential(self, data_to_prove: bytes, public_indices: list[int]) -&gt; bytes</code>: Signs data with a credential.</li></ul><h3 id="verifier-class" tabindex="-1">Verifier Class <a class="header-anchor" href="#verifier-class" aria-label="Permalink to &quot;Verifier Class&quot;">​</a></h3><p>The <code>Verifier</code> class is used to verify signatures.</p><h4 id="methods-3" tabindex="-1">Methods <a class="header-anchor" href="#methods-3" aria-label="Permalink to &quot;Methods&quot;">​</a></h4><ul><li><code>__init__(self, public_key: bytes) -&gt; None</code>: Initializes the verifier with a public key.</li><li><code>verify_signature(self, proof: bytes, accumulator: bytes, data: bytes) -&gt; bool</code>: Verifies a signature.</li></ul>`,36)]))}const g=e(n,[["render",l]]);export{k as __pageData,g as default};