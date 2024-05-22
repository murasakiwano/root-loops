/*
 * Autogenerated file.
 * Do not touch
 * Willy
 */

export const elixirSnippet = `<span class="ansi-magenta-fg">defmodule</span> <span class="ansi-yellow-fg">HelloWeb</span>.<span class="ansi-yellow-fg">ProductController</span> <span class="ansi-magenta-fg">do</span>
  <span class="ansi-magenta-fg">use</span> <span class="ansi-yellow-fg">HelloWeb</span>, <span class="ansi-green-fg">:</span><span class="ansi-green-fg">controller</span>

  <span class="ansi-magenta-fg">alias</span> <span class="ansi-yellow-fg">Hello</span>.<span class="ansi-yellow-fg">Catalog</span>
  <span class="ansi-magenta-fg">alias</span> <span class="ansi-yellow-fg">Hello</span>.<span class="ansi-yellow-fg">Catalog</span>.<span class="ansi-yellow-fg">Product</span>

<span class="ansi-green-fg">  </span><span class="ansi-green-fg">#</span><span class="ansi-green-fg"> list all products</span>
  <span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">index</span>(conn, _params) <span class="ansi-magenta-fg">do</span>
    products <span class="ansi-magenta-fg">=</span> <span class="ansi-yellow-fg">Catalog</span>.list_products()
    render(conn, <span class="ansi-green-fg">:</span><span class="ansi-green-fg">index</span>, <span class="ansi-yellow-fg">products</span><span class="ansi-yellow-fg">:</span> products)
  <span class="ansi-magenta-fg">end</span>

  <span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">new</span>(conn, _params) <span class="ansi-magenta-fg">do</span>
    changeset <span class="ansi-magenta-fg">=</span> <span class="ansi-yellow-fg">Catalog</span>.change_product(%<span class="ansi-yellow-fg">Product</span>{})
    render(conn, <span class="ansi-green-fg">:</span><span class="ansi-green-fg">new</span>, <span class="ansi-yellow-fg">changeset</span><span class="ansi-yellow-fg">:</span> changeset)
  <span class="ansi-magenta-fg">end</span>

  <span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">create</span>(conn, %{<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">product</span><span class="ansi-green-fg">&quot;</span> <span class="ansi-magenta-fg">=&gt;</span> product_params}) <span class="ansi-magenta-fg">do</span>
    <span class="ansi-magenta-fg">case</span> <span class="ansi-yellow-fg">Catalog</span>.create_product(product_params) <span class="ansi-magenta-fg">do</span>
      {<span class="ansi-green-fg">:</span><span class="ansi-green-fg">ok</span>, product} <span class="ansi-magenta-fg">-&gt;</span>
        conn
        <span class="ansi-magenta-fg">|&gt;</span> put_flash(<span class="ansi-green-fg">:</span><span class="ansi-green-fg">info</span>, <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">Product created successfully.</span><span class="ansi-green-fg">&quot;</span>)
        <span class="ansi-magenta-fg">|&gt;</span> redirect(<span class="ansi-yellow-fg">to</span><span class="ansi-yellow-fg">:</span> <span class="ansi-magenta-fg">~p</span><span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">/products/</span><span class="ansi-green-fg">#{</span>product}<span class="ansi-green-fg">&quot;</span>)

      {<span class="ansi-green-fg">:</span><span class="ansi-green-fg">error</span>, %<span class="ansi-yellow-fg">Ecto</span>.<span class="ansi-yellow-fg">Changeset</span>{} <span class="ansi-magenta-fg">=</span> changeset} <span class="ansi-magenta-fg">-&gt;</span>
        render(conn, <span class="ansi-green-fg">:</span><span class="ansi-green-fg">new</span>, <span class="ansi-yellow-fg">changeset</span><span class="ansi-yellow-fg">:</span> changeset)
    <span class="ansi-magenta-fg">end</span>
  <span class="ansi-magenta-fg">end</span>

  <span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">show</span>(conn, %{<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">id</span><span class="ansi-green-fg">&quot;</span> <span class="ansi-magenta-fg">=&gt;</span> id}) <span class="ansi-magenta-fg">do</span>
    product <span class="ansi-magenta-fg">=</span> <span class="ansi-yellow-fg">Catalog</span>.get_product!(id)
    render(conn, <span class="ansi-green-fg">:</span><span class="ansi-green-fg">show</span>, <span class="ansi-yellow-fg">product</span><span class="ansi-yellow-fg">:</span> product)
  <span class="ansi-magenta-fg">end</span>
<span class="ansi-magenta-fg">end</span>
`;

export const pythonSnippet = `<span class="ansi-magenta-fg">from</span> flask <span class="ansi-magenta-fg">import</span> Flask

app <span class="ansi-magenta-fg">=</span> Flask(__name__)

<span class="ansi-green-fg">#</span><span class="ansi-green-fg"> just a dummy route</span>
@app.route(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">/</span><span class="ansi-green-fg">&quot;</span>)
<span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">hello_world</span>():
    <span class="ansi-magenta-fg">return</span> <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">&lt;p&gt;Hello, World!&lt;/p&gt;</span><span class="ansi-green-fg">&quot;</span>

@app.route(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">/me</span><span class="ansi-green-fg">&quot;</span>)
<span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">me_api</span>():
    user <span class="ansi-magenta-fg">=</span> get_current_user()
    <span class="ansi-magenta-fg">return</span> {
        <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">username</span><span class="ansi-green-fg">&quot;</span>: user.username,
        <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">theme</span><span class="ansi-green-fg">&quot;</span>: user.theme,
        <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">image</span><span class="ansi-green-fg">&quot;</span>: url_for(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">user_image</span><span class="ansi-green-fg">&quot;</span>, filename<span class="ansi-magenta-fg">=</span>user.image),
    }

@app.route(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">/users</span><span class="ansi-green-fg">&quot;</span>)
<span class="ansi-magenta-fg">def</span> <span class="ansi-blue-fg">users_api</span>():
    users <span class="ansi-magenta-fg">=</span> get_all_users()
    <span class="ansi-magenta-fg">return</span> [user.to_json() <span class="ansi-magenta-fg">for</span> user <span class="ansi-magenta-fg">in</span> users]
`;

export const typescriptSnippet = `<span class="ansi-magenta-fg">import</span> express, { Express, Request, Response } <span class="ansi-magenta-fg">from</span> <span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">express</span><span class="ansi-green-fg">&quot;</span>;

<span class="ansi-magenta-fg">const</span> app<span class="ansi-magenta-fg">:</span> Express <span class="ansi-magenta-fg">=</span> <span class="ansi-blue-fg">express</span>();
<span class="ansi-magenta-fg">const</span> port <span class="ansi-magenta-fg">=</span> process.env.PORT <span class="ansi-magenta-fg">||</span> <span class="ansi-yellow-fg">3000</span>;

app.<span class="ansi-cyan-fg">get</span>(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">/</span><span class="ansi-green-fg">&quot;</span>, (_req<span class="ansi-magenta-fg">:</span> Request, res<span class="ansi-magenta-fg">:</span> Response) <span class="ansi-magenta-fg">=&gt;</span> {
  res.<span class="ansi-cyan-fg">send</span>(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">Hello, World!</span><span class="ansi-green-fg">&quot;</span>);
});

<span class="ansi-green-fg">//</span><span class="ansi-green-fg"> start the server</span>
app.<span class="ansi-blue-fg">listen</span>(port, () <span class="ansi-magenta-fg">=&gt;</span> {
  <span class="ansi-yellow-fg">console</span>.<span class="ansi-cyan-fg">log</span>(<span class="ansi-green-fg">&quot;</span><span class="ansi-green-fg">[server]: Server is running at http://localhost:</span><span class="ansi-green-fg">&quot;</span> <span class="ansi-magenta-fg">+</span> port);
});
`;

export const vitestSnippet = `
<span style="font-weight:bold" class="ansi-cyan-fg"> RUN </span> <span class="ansi-cyan-fg">v1.5.0</span> <span class="ansi-bright-black-fg">/home/ham/dev/root-loops/snippets</span>

 <span class="ansi-green-fg">✓</span> test.js &gt; root loops color generator &gt; pours milk into the bowl
 <span class="ansi-green-fg">✓</span> test.js &gt; root loops color generator &gt; adds unhealthy amounts of sugar
 <span class="ansi-green-fg">✓</span> test.js &gt; root loops color generator &gt; includes worrying amounts of artificial flavours
 <span class="ansi-green-fg">✓</span> test.js &gt; root loops color generator &gt; lets the bowl sit for maximum sogginess
 <span class="ansi-red-fg">×</span> test.js &gt; root loops color generator &gt; adds fresh fruit
<span class="ansi-red-fg">   → expected true to be false // Object.is equality</span>

 Test Files  <span style="font-weight:bold" class="ansi-red-fg">1 failed</span><span class="ansi-bright-black-fg"> (1)</span>
      Tests  <span style="font-weight:bold" class="ansi-red-fg">1 failed</span> | <span style="font-weight:bold" class="ansi-green-fg">4 passed</span> | <span class="ansi-bright-black-fg">1 todo</span><span class="ansi-bright-black-fg"> (6)</span>
   Start at  18:45:54
   Duration  251ms (transform 25ms, setup 0ms, collect 10ms, tests 8ms, environment 0ms, prepare 64ms)


<span class="ansi-red-fg">⎯⎯⎯⎯⎯⎯⎯</span><span style="font-weight:bold" class="ansi-red-fg"> Failed Tests 1 </span><span class="ansi-red-fg">⎯⎯⎯⎯⎯⎯⎯</span>

<span style="font-weight:bold" class="ansi-red-fg"> FAIL </span> test.js &gt; root loops color generator &gt; adds fresh fruit
<span style="font-weight:bold" class="ansi-red-fg">AssertionError</span><span class="ansi-red-fg">: expected true to be false // Object.is equality</span>

- Expected
+ Received

- false
+ true

<span class="ansi-cyan-fg"> </span><span style="opacity:0.7" class="ansi-cyan-fg">❯</span><span class="ansi-cyan-fg"> test.js:</span><span style="opacity:0.7" class="ansi-cyan-fg">21:18</span>
    <span class="ansi-bright-black-fg"> 19| </span>
    <span class="ansi-bright-black-fg"> 20| </span>  <span class="ansi-blue-fg">it</span>(<span class="ansi-green-fg">&quot;adds fresh fruit&quot;</span><span class="ansi-yellow-fg">,</span> () <span class="ansi-yellow-fg">=&gt;</span> {
    <span class="ansi-bright-black-fg"> 21| </span>    <span class="ansi-blue-fg">expect</span>(<span class="ansi-magenta-fg">true</span>)<span class="ansi-yellow-fg">.</span><span class="ansi-blue-fg">toBe</span>(<span class="ansi-magenta-fg">false</span>)<span class="ansi-yellow-fg">;</span>
    <span class="ansi-bright-black-fg">   | </span>                 <span class="ansi-red-fg">^</span>
    <span class="ansi-bright-black-fg"> 22| </span>  })<span class="ansi-yellow-fg">;</span>
    <span class="ansi-bright-black-fg"> 23| </span>

<span style="opacity:0.7" class="ansi-red-fg">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯</span>

`;

export const screenfetchSnippet = `<span class="ansi-green-fg">                               </span>
<span class="ansi-green-fg">                 -/+:.         </span><span style="font-weight:bold" class="ansi-blue-fg"> ham</span><span style="font-weight:bold">@</span><span style="font-weight:bold" class="ansi-blue-fg">hambook-2</span>
<span class="ansi-green-fg">                :++++.         </span><span style="font-weight:bold" class="ansi-blue-fg"> OS:</span> Ubuntu 24.04 noble
<span class="ansi-green-fg">               /+++/.          </span><span style="font-weight:bold" class="ansi-blue-fg"> Kernel:</span> x86_64 Linux 6.8.0-31-generic
<span class="ansi-green-fg">       .:-::- .+/:-\`\`.::-      </span><span style="font-weight:bold" class="ansi-blue-fg"> Uptime:</span> 10d 4h 48m
<span class="ansi-green-fg">    .:/++++++/::::/++++++/:\`   </span><span style="font-weight:bold" class="ansi-blue-fg"> Packages:</span> 2664
<span class="ansi-yellow-fg">  .:///////////////////////:\`  </span><span style="font-weight:bold" class="ansi-blue-fg"> Shell:</span> node
<span class="ansi-yellow-fg">  ////////////////////////\`    </span><span style="font-weight:bold" class="ansi-blue-fg"> Resolution:</span> 5142x3840
<span style="font-weight:bold" class="ansi-red-fg"> -+++++++++++++++++++++++\`     </span><span style="font-weight:bold" class="ansi-blue-fg"> DE:</span> GNOME 46.0.1
<span style="font-weight:bold" class="ansi-red-fg"> /++++++++++++++++++++++/      </span><span style="font-weight:bold" class="ansi-blue-fg"> WM:</span> Mutter
<span class="ansi-red-fg"> /sssssssssssssssssssssss.     </span><span style="font-weight:bold" class="ansi-blue-fg"> WM Theme:</span> Adwaita
<span class="ansi-red-fg"> :ssssssssssssssssssssssss-    </span><span style="font-weight:bold" class="ansi-blue-fg"> GTK Theme:</span> Yaru-red-dark [GTK2/3]
<span class="ansi-magenta-fg">  osssssssssssssssssssssssso/\` </span><span style="font-weight:bold" class="ansi-blue-fg"> Icon Theme:</span> Yaru-red
<span class="ansi-magenta-fg">  \`syyyyyyyyyyyyyyyyyyyyyyyy+\` </span><span style="font-weight:bold" class="ansi-blue-fg"> Font:</span> Ubuntu 11
<span class="ansi-blue-fg">   \`ossssssssssssssssssssss/   </span><span style="font-weight:bold" class="ansi-blue-fg"> Disk:</span> 385G / 469G (87%)
<span class="ansi-blue-fg">     :ooooooooooooooooooo+.    </span><span style="font-weight:bold" class="ansi-blue-fg"> CPU:</span> Intel Core i7-1065G7 @ 8x 3.9GHz [64.0°C]
<span class="ansi-blue-fg">      \`:+oo+/:-..-:/+o+/-      </span><span style="font-weight:bold" class="ansi-blue-fg"> GPU:</span> Intel Corporation Iris Plus Graphics G7 (rev 07)
<span class="ansi-blue-fg">                               </span><span style="font-weight:bold" class="ansi-blue-fg"> RAM:</span> 11114MiB / 15573MiB
`;
