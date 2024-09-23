import{_ as i,c as a,a0 as s,o as t}from"./chunks/framework.JYSz7C5c.js";const u=JSON.parse('{"title":"see3_python","description":"","frontmatter":{},"headers":[],"relativePath":"Implementations/see3-python/Overview.md","filePath":"Implementations/see3-python/Overview.md"}'),n={name:"Implementations/see3-python/Overview.md"};function r(l,e,o,h,d,p){return t(),a("div",null,e[0]||(e[0]=[s(`<h1 id="see3-python" tabindex="-1">see3_python <a class="header-anchor" href="#see3-python" aria-label="Permalink to &quot;see3_python&quot;">​</a></h1><p>see3_python is a full-stack solution for anonymous credentials.</p><p>It provides everything you need to generate, manage, and use anonymous credentials. This includes:</p><ul><li>A library for working with anonymous credentials.</li><li>A CLI for generating, managing, and using anonymous credentials.</li><li>A server for issuing and revoking anonymous credentials.</li></ul><p>see3_python is part of the See3 SDK, which is implemented for Kotlin, Swift, Expo, TypeScript (Node.js and WASM), Python and Rust. It supports iOS, Android, Linux, MacOS and Windows.</p><p>Every library in the SDK is compatible with the Python-based See3 server, and they are all <a href="https://en.wikipedia.org/wiki/Language_binding" target="_blank" rel="noreferrer">bindings</a> to the <a href="https://github.com/VeracityLabs/see3_rust" target="_blank" rel="noreferrer">Rust implementation</a>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li><strong>Anonymous Credentials</strong>: Generate and manage anonymous credentials.</li><li><strong>Signing</strong>: Use credentials to sign messages and other data.</li><li><strong>Credential Issuance</strong>: Issue credentials using the built-in <code>see3-server</code> command.</li><li><strong>Server Management</strong>: Manage server data with the <code>see3-server-manager</code> command.</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To install the library, use pip:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> see3_python</span></span></code></pre></div><h2 id="library" tabindex="-1">Library <a class="header-anchor" href="#library" aria-label="Permalink to &quot;Library&quot;">​</a></h2><p>Here&#39;s a quick example of how to use the library:</p><p>See the <a href="./Library.html">library documentation</a> for more information.</p><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><h3 id="see3-cli" tabindex="-1">see3-cli <a class="header-anchor" href="#see3-cli" aria-label="Permalink to &quot;see3-cli&quot;">​</a></h3><p>The <code>see3-cli</code> command is a versatile tool for managing anonymous credentials. It includes the following functionalities:</p><ul><li><code>setup_credential_request &lt;output_path&gt;</code>: Helps you set up a credential request configuration file.</li><li><code>request_credential &lt;config_path&gt;</code>: Requests a credential using the provided configuration file.</li><li><code>verify_signature [--from-file &lt;path&gt;] &lt;public_key&gt; &lt;proof&gt; &lt;accumulator&gt; &lt;data&gt;</code>: Verifies a signature.</li><li><code>sign_with_credential &lt;credential_id&gt; &lt;data_to_sign&gt; &lt;public_indices&gt; [--output &lt;path&gt;]</code>: Signs data using a credential.</li></ul><h3 id="see3-server-manager" tabindex="-1">see3-server-manager <a class="header-anchor" href="#see3-server-manager" aria-label="Permalink to &quot;see3-server-manager&quot;">​</a></h3><p>The <code>see3-server-manager</code> command is used to manage server data. It includes the following functionalities:</p><ul><li><code>list</code>: List all server IDs.</li><li><code>change_default &lt;server_id&gt;</code>: Change the default server.</li><li><code>decrypt &lt;server_id&gt; &lt;output_path&gt;</code>: Decrypt server data.</li></ul><h3 id="see3-server" tabindex="-1">see3-server <a class="header-anchor" href="#see3-server" aria-label="Permalink to &quot;see3-server&quot;">​</a></h3><p>The <code>see3-server</code> command is used to start the server. It takes one argument:</p><ul><li><code>--port</code>: Set the port for the server.</li></ul><p>You must also provide the path to a script conditional.</p><p>The CLI will prompt you to generate a server configuration, which will be encrypted. All server configurations are stored in the <code>~/.veracity_server</code> directory.</p><h4 id="what-is-a-script-conditional" tabindex="-1">What Is A Script Conditional? <a class="header-anchor" href="#what-is-a-script-conditional" aria-label="Permalink to &quot;What Is A Script Conditional?&quot;">​</a></h4><p>It&#39;s a Python script that the server will use to determine whether a credential should be issued or revoked, when the corresponding endpoint is called.</p><p>The use of a Script Conditional keeps the issuing-related logic, key-management separate and server configuration separate from the business logic of your application.</p><p>The Script Conditional must have three functions:</p><ul><li><code>issue(credential_request: bytes, auxillary_data: object, issue_function: Callable[[bytes], bytes]) -&gt; dict</code>: Determines whether a credential should be issued.</li><li><code>revoke(user_id: bytes, auxillary_data: object, revoke_function: Callable[[bytes], bytes]) -&gt; dict</code>: Determines whether a credential should be revoked.</li><li><code>open(proof_data: bytes, auxillary_data: object, open_function: Callable[[bytes], bytes]) -&gt; dict</code>: Determines whether the User ID should be extracted from the proof.</li></ul><p>The <code>dict</code> returned by each function will be returned to the client when the function is called.</p><p>We strongly recommend that the <code>dict</code> you return is consistent with the HTTP <code>Result</code> type, as follows:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> issue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(credential_request: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, auxillary_data: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, issue_function: Callable[[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> success:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error Message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}</span></span></code></pre></div><p><code>see3-server</code> will automatically infer the status code from the <code>Result</code>, when possible.</p><h4 id="what-else-can-i-do" tabindex="-1">What Else Can I Do? <a class="header-anchor" href="#what-else-can-i-do" aria-label="Permalink to &quot;What Else Can I Do?&quot;">​</a></h4><p>You can also define additional endpoints, featuring your own endpoints and your own business logic, in the Script Conditional.</p><h4 id="why-script-conditionals" tabindex="-1">Why Script Conditionals? <a class="header-anchor" href="#why-script-conditionals" aria-label="Permalink to &quot;Why Script Conditionals?&quot;">​</a></h4><p>We understand that there will be many different applications for anonymous credentials. Therefore, we have made this server as flexible as possible. With script conditionals, it becomes trivial to integrate anonymous credentials into your application.</p><h4 id="give-me-an-example" tabindex="-1">Give Me An Example <a class="header-anchor" href="#give-me-an-example" aria-label="Permalink to &quot;Give Me An Example&quot;">​</a></h4><p>We recommend that you look at the <a href="https://github.com/VeracityLabs/see3_python/tree/master/examples/test_script.py" target="_blank" rel="noreferrer">example script conditional</a>. It&#39;s designed to be super simple.</p>`,41)]))}const k=i(n,[["render",r]]);export{u as __pageData,k as default};
