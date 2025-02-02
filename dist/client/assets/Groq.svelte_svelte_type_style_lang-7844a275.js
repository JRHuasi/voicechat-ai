const ge={LLaMA3_8b:"llama3-8b-8192",Mixtral_8x7b:"mixtral-8x7b-32768"},w="0.5.0";let X=!1,R,Q,z,T,Y,Z,ee,te,ne;function be(t,e={auto:!1}){if(X)throw new Error(`you must \`import 'groq-sdk/shims/${t.kind}'\` before importing anything else from groq-sdk`);if(R)throw new Error(`can't \`import 'groq-sdk/shims/${t.kind}'\` after \`import 'groq-sdk/shims/${R}'\``);X=e.auto,R=t.kind,Q=t.fetch,t.Request,t.Response,t.Headers,z=t.FormData,t.Blob,T=t.File,Y=t.ReadableStream,Z=t.getMultipartRequestOptions,ee=t.getDefaultAgent,te=t.fileFromPath,ne=t.isFsReadStream}class xe{constructor(e){this.body=e}get[Symbol.toStringTag](){return"MultipartBody"}}function Re({manuallyImported:t}={}){const e=t?"You may need to use polyfills":"Add one of these imports before your first `import … from 'groq-sdk'`:\n- `import 'groq-sdk/shims/node'` (if you're running on Node)\n- `import 'groq-sdk/shims/web'` (otherwise)\n";let n,s,r,o;try{n=fetch,s=Request,r=Response,o=Headers}catch(i){throw new Error(`this environment is missing the following Web Fetch API type: ${i.message}. ${e}`)}return{kind:"web",fetch:n,Request:s,Response:r,Headers:o,FormData:typeof FormData<"u"?FormData:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${e}`)}},Blob:typeof Blob<"u"?Blob:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${e}`)}},File:typeof File<"u"?File:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${e}`)}},ReadableStream:typeof ReadableStream<"u"?ReadableStream:class{constructor(){throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${e}`)}},getMultipartRequestOptions:async(i,a)=>({...a,body:new xe(i)}),getDefaultAgent:i=>{},fileFromPath:()=>{throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/groq/groq-typescript#file-uploads")},isFsReadStream:i=>!1}}R||be(Re(),{auto:!0});class h extends Error{}class d extends h{constructor(e,n,s,r){super(`${d.makeMessage(e,n,s)}`),this.status=e,this.headers=r,this.error=n}static makeMessage(e,n,s){const r=n!=null&&n.message?typeof n.message=="string"?n.message:JSON.stringify(n.message):n?JSON.stringify(n):s;return e&&r?`${e} ${r}`:e?`${e} status code (no body)`:r||"(no status code or body)"}static generate(e,n,s,r){if(!e)return new _({cause:j(n)});const o=n;return e===400?new se(e,o,s,r):e===401?new oe(e,o,s,r):e===403?new ie(e,o,s,r):e===404?new ae(e,o,s,r):e===409?new ue(e,o,s,r):e===422?new ce(e,o,s,r):e===429?new le(e,o,s,r):e>=500?new fe(e,o,s,r):new d(e,o,s,r)}}class U extends d{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0),this.status=void 0}}class _ extends d{constructor({message:e,cause:n}){super(void 0,void 0,e||"Connection error.",void 0),this.status=void 0,n&&(this.cause=n)}}class re extends _{constructor({message:e}={}){super({message:e??"Request timed out."})}}class se extends d{constructor(){super(...arguments),this.status=400}}class oe extends d{constructor(){super(...arguments),this.status=401}}class ie extends d{constructor(){super(...arguments),this.status=403}}class ae extends d{constructor(){super(...arguments),this.status=404}}class ue extends d{constructor(){super(...arguments),this.status=409}}class ce extends d{constructor(){super(...arguments),this.status=422}}class le extends d{constructor(){super(...arguments),this.status=429}}class fe extends d{}class g{constructor(e,n){this.iterator=e,this.controller=n}static fromSSEResponse(e,n){let s=!1;const r=new Se;async function*o(){if(!e.body)throw n.abort(),new h("Attempted to iterate over a response with no body");const a=new m,u=V(e.body);for await(const l of u)for(const f of a.decode(l)){const p=r.decode(f);p&&(yield p)}for(const l of a.flush()){const f=r.decode(l);f&&(yield f)}}async function*i(){if(s)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let a=!1;try{for await(const u of o())if(!a){if(u.data.startsWith("[DONE]")){a=!0;continue}if(u.event===null){let l;try{l=JSON.parse(u.data)}catch(f){throw console.error("Could not parse message into JSON:",u.data),console.error("From chunk:",u.raw),f}if(l&&l.error)throw new d(void 0,l.error,void 0,void 0);yield l}}a=!0}catch(u){if(u instanceof Error&&u.name==="AbortError")return;throw u}finally{a||n.abort()}}return new g(i,n)}static fromReadableStream(e,n){let s=!1;async function*r(){const i=new m,a=V(e);for await(const u of a)for(const l of i.decode(u))yield l;for(const u of i.flush())yield u}async function*o(){if(s)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let i=!1;try{for await(const a of r())i||a&&(yield JSON.parse(a));i=!0}catch(a){if(a instanceof Error&&a.name==="AbortError")return;throw a}finally{i||n.abort()}}return new g(o,n)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],n=[],s=this.iterator(),r=o=>({next:()=>{if(o.length===0){const i=s.next();e.push(i),n.push(i)}return o.shift()}});return[new g(()=>r(e),this.controller),new g(()=>r(n),this.controller)]}toReadableStream(){const e=this;let n;const s=new TextEncoder;return new Y({async start(){n=e[Symbol.asyncIterator]()},async pull(r){try{const{value:o,done:i}=await n.next();if(i)return r.close();const a=s.encode(JSON.stringify(o)+`
`);r.enqueue(a)}catch(o){r.error(o)}},async cancel(){var r;await((r=n.return)==null?void 0:r.call(n))}})}}class Se{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const o={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],o}if(this.chunks.push(e),e.startsWith(":"))return null;let[n,s,r]=Ee(e,":");return r.startsWith(" ")&&(r=r.substring(1)),n==="event"?this.event=r:n==="data"&&this.data.push(r),null}}class m{constructor(){this.buffer=[],this.trailingCR=!1}decode(e){let n=this.decodeText(e);if(this.trailingCR&&(n="\r"+n,this.trailingCR=!1),n.endsWith("\r")&&(this.trailingCR=!0,n=n.slice(0,-1)),!n)return[];const s=m.NEWLINE_CHARS.has(n[n.length-1]||"");let r=n.split(m.NEWLINE_REGEXP);return r.length===1&&!s?(this.buffer.push(r[0]),[]):(this.buffer.length>0&&(r=[this.buffer.join("")+r[0],...r.slice(1)],this.buffer=[]),s||(this.buffer=[r.pop()||""]),r)}decodeText(e){if(e==null)return"";if(typeof e=="string")return e;if(typeof Buffer<"u"){if(e instanceof Buffer)return e.toString();if(e instanceof Uint8Array)return Buffer.from(e).toString();throw new h(`Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)}if(typeof TextDecoder<"u"){if(e instanceof Uint8Array||e instanceof ArrayBuffer)return this.textDecoder??(this.textDecoder=new TextDecoder("utf8")),this.textDecoder.decode(e);throw new h(`Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`)}throw new h("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")}flush(){if(!this.buffer.length&&!this.trailingCR)return[];const e=[this.buffer.join("")];return this.buffer=[],this.trailingCR=!1,e}}m.NEWLINE_CHARS=new Set([`
`,"\r","\v","\f","","","","","\u2028","\u2029"]);m.NEWLINE_REGEXP=/\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;function Ee(t,e){const n=t.indexOf(e);return n!==-1?[t.substring(0,n),e,t.substring(n+e.length)]:[t,"",""]}function V(t){if(t[Symbol.asyncIterator])return t;const e=t.getReader();return{async next(){try{const n=await e.read();return n!=null&&n.done&&e.releaseLock(),n}catch(n){throw e.releaseLock(),n}},async return(){const n=e.cancel();return e.releaseLock(),await n,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}const de=t=>t!=null&&typeof t=="object"&&typeof t.url=="string"&&typeof t.blob=="function",he=t=>t!=null&&typeof t=="object"&&typeof t.name=="string"&&typeof t.lastModified=="number"&&N(t),N=t=>t!=null&&typeof t=="object"&&typeof t.size=="number"&&typeof t.type=="string"&&typeof t.text=="function"&&typeof t.slice=="function"&&typeof t.arrayBuffer=="function",Ae=t=>he(t)||de(t)||ne(t);async function pe(t,e,n){var r;if(t=await t,n??(n=he(t)?{lastModified:t.lastModified,type:t.type}:{}),de(t)){const o=await t.blob();return e||(e=new URL(t.url).pathname.split(/[\\/]/).pop()??"unknown_file"),new T([o],e,n)}const s=await Pe(t);if(e||(e=qe(t)??"unknown_file"),!n.type){const o=(r=s[0])==null?void 0:r.type;typeof o=="string"&&(n={...n,type:o})}return new T(s,e,n)}async function Pe(t){var n;let e=[];if(typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer)e.push(t);else if(N(t))e.push(await t.arrayBuffer());else if($e(t))for await(const s of t)e.push(s);else throw new Error(`Unexpected data type: ${typeof t}; constructor: ${(n=t==null?void 0:t.constructor)==null?void 0:n.name}; props: ${ke(t)}`);return e}function ke(t){return`[${Object.getOwnPropertyNames(t).map(n=>`"${n}"`).join(", ")}]`}function qe(t){var e;return O(t.name)||O(t.filename)||((e=O(t.path))==null?void 0:e.split(/[\\/]/).pop())}const O=t=>{if(typeof t=="string")return t;if(typeof Buffer<"u"&&t instanceof Buffer)return String(t)},$e=t=>t!=null&&typeof t=="object"&&typeof t[Symbol.asyncIterator]=="function",H=t=>t&&typeof t=="object"&&t.body&&t[Symbol.toStringTag]==="MultipartBody",ye=async t=>{const e=await Be(t.body);return Z(e,t)},Be=async t=>{const e=new z;return await Promise.all(Object.entries(t||{}).map(([n,s])=>M(e,n,s))),e},M=async(t,e,n)=>{if(n!==void 0){if(n==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof n=="string"||typeof n=="number"||typeof n=="boolean")t.append(e,String(n));else if(Ae(n)){const s=await pe(n);t.append(e,s)}else if(Array.isArray(n))await Promise.all(n.map(s=>M(t,e+"[]",s)));else if(typeof n=="object")await Promise.all(Object.entries(n).map(([s,r])=>M(t,`${e}[${s}]`,r)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}};globalThis&&globalThis.__classPrivateFieldSet;globalThis&&globalThis.__classPrivateFieldGet;async function me(t){const{response:e}=t;if(t.options.stream)return b("response",e.status,e.url,e.headers,e.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(e,t.controller):g.fromSSEResponse(e,t.controller);if(e.status===204)return null;if(t.options.__binaryResponse)return e;const n=e.headers.get("content-type");if((n==null?void 0:n.includes("application/json"))||(n==null?void 0:n.includes("application/vnd.api+json"))){const o=await e.json();return b("response",e.status,e.url,e.headers,o),o}const r=await e.text();return b("response",e.status,e.url,e.headers,r),r}class C extends Promise{constructor(e,n=me){super(s=>{s(null)}),this.responsePromise=e,this.parseResponse=n}_thenUnwrap(e){return new C(this.responsePromise,async n=>e(await this.parseResponse(n)))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,n]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:n}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(this.parseResponse)),this.parsedPromise}then(e,n){return this.parse().then(e,n)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}class De{constructor({baseURL:e,maxRetries:n=2,timeout:s=6e4,httpAgent:r,fetch:o}){this.baseURL=e,this.maxRetries=F("maxRetries",n),this.timeout=F("timeout",s),this.httpAgent=r,this.fetch=o??Q}authHeaders(e){return{}}defaultHeaders(e){return{Accept:"application/json","Content-Type":"application/json","User-Agent":this.getUserAgent(),...Oe(),...this.authHeaders(e)}}validateHeaders(e,n){}defaultIdempotencyKey(){return`stainless-node-retry-${Xe()}`}get(e,n){return this.methodRequest("get",e,n)}post(e,n){return this.methodRequest("post",e,n)}patch(e,n){return this.methodRequest("patch",e,n)}put(e,n){return this.methodRequest("put",e,n)}delete(e,n){return this.methodRequest("delete",e,n)}methodRequest(e,n,s){return this.request(Promise.resolve(s).then(async r=>{const o=r&&N(r==null?void 0:r.body)?new DataView(await r.body.arrayBuffer()):(r==null?void 0:r.body)instanceof DataView?r.body:(r==null?void 0:r.body)instanceof ArrayBuffer?new DataView(r.body):r&&ArrayBuffer.isView(r==null?void 0:r.body)?new DataView(r.body.buffer):r==null?void 0:r.body;return{method:e,path:n,...r,body:o}}))}getAPIList(e,n,s){return this.requestAPIList(n,{method:"get",path:e,...s})}calculateContentLength(e){if(typeof e=="string"){if(typeof Buffer<"u")return Buffer.byteLength(e,"utf8").toString();if(typeof TextEncoder<"u")return new TextEncoder().encode(e).length.toString()}else if(ArrayBuffer.isView(e))return e.byteLength.toString();return null}buildRequest(e){var x;const{method:n,path:s,query:r,headers:o={}}=e,i=ArrayBuffer.isView(e.body)||e.__binaryRequest&&typeof e.body=="string"?e.body:H(e.body)?e.body.body:e.body?JSON.stringify(e.body,null,2):null,a=this.calculateContentLength(i),u=this.buildURL(s,r);"timeout"in e&&F("timeout",e.timeout);const l=e.timeout??this.timeout,f=e.httpAgent??this.httpAgent??ee(u),p=l+1e3;typeof((x=f==null?void 0:f.options)==null?void 0:x.timeout)=="number"&&p>(f.options.timeout??0)&&(f.options.timeout=p),this.idempotencyHeader&&n!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),o[this.idempotencyHeader]=e.idempotencyKey);const S=this.buildHeaders({options:e,headers:o,contentLength:a});return{req:{method:n,...i&&{body:i},headers:S,...f&&{agent:f},signal:e.signal??null},url:u,timeout:l}}buildHeaders({options:e,headers:n,contentLength:s}){const r={};s&&(r["content-length"]=s);const o=this.defaultHeaders(e);return K(r,o),K(r,n),H(e.body)&&R!=="node"&&delete r["content-type"],this.validateHeaders(r,n),r}async prepareOptions(e){}async prepareRequest(e,{url:n,options:s}){}parseHeaders(e){return e?Symbol.iterator in e?Object.fromEntries(Array.from(e).map(n=>[...n])):{...e}:{}}makeStatusError(e,n,s,r){return d.generate(e,n,s,r)}request(e,n=null){return new C(this.makeRequest(e,n))}async makeRequest(e,n){var f,p;const s=await e;n==null&&(n=s.maxRetries??this.maxRetries),await this.prepareOptions(s);const{req:r,url:o,timeout:i}=this.buildRequest(s);if(await this.prepareRequest(r,{url:o,options:s}),b("request",o,s,r.headers),(f=s.signal)!=null&&f.aborted)throw new U;const a=new AbortController,u=await this.fetchWithTimeout(o,r,i,a).catch(j);if(u instanceof Error){if((p=s.signal)!=null&&p.aborted)throw new U;if(n)return this.retryRequest(s,n);throw u.name==="AbortError"?new re:new _({cause:u})}const l=Ce(u.headers);if(!u.ok){if(n&&this.shouldRetry(u)){const L=`retrying, ${n} attempts remaining`;return b(`response (error; ${L})`,u.status,o,l),this.retryRequest(s,n,l)}const S=await u.text().catch(L=>j(L).message),I=Fe(S),x=I?void 0:S;throw b(`response (error; ${n?"(error; no more retries left)":"(error; not retryable)"})`,u.status,o,l,x),this.makeStatusError(u.status,I,x,l)}return{response:u,options:s,controller:a}}requestAPIList(e,n){const s=this.makeRequest(n,null);return new _e(this,s,e)}buildURL(e,n){const s=Ue(e)?new URL(e):new URL(this.baseURL+(this.baseURL.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),r=this.defaultQuery();return je(r)||(n={...r,...n}),typeof n=="object"&&n&&!Array.isArray(n)&&(s.search=this.stringifyQuery(n)),s.toString()}stringifyQuery(e){return Object.entries(e).filter(([n,s])=>typeof s<"u").map(([n,s])=>{if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")return`${encodeURIComponent(n)}=${encodeURIComponent(s)}`;if(s===null)return`${encodeURIComponent(n)}=`;throw new h(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}async fetchWithTimeout(e,n,s,r){const{signal:o,...i}=n||{};o&&o.addEventListener("abort",()=>r.abort());const a=setTimeout(()=>r.abort(),s);return this.getRequestClient().fetch.call(void 0,e,{signal:r.signal,...i}).finally(()=>{clearTimeout(a)})}getRequestClient(){return{fetch:this.fetch}}shouldRetry(e){const n=e.headers.get("x-should-retry");return n==="true"?!0:n==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,n,s){let r;const o=s==null?void 0:s["retry-after-ms"];if(o){const a=parseFloat(o);Number.isNaN(a)||(r=a)}const i=s==null?void 0:s["retry-after"];if(i&&!r){const a=parseFloat(i);Number.isNaN(a)?r=Date.parse(i)-Date.now():r=a*1e3}if(!(r&&0<=r&&r<60*1e3)){const a=e.maxRetries??this.maxRetries;r=this.calculateDefaultRetryTimeoutMillis(n,a)}return await Me(r),this.makeRequest(e,n-1)}calculateDefaultRetryTimeoutMillis(e,n){const o=n-e,i=Math.min(.5*Math.pow(2,o),8),a=1-Math.random()*.25;return i*a*1e3}getUserAgent(){return`${this.constructor.name}/JS ${w}`}}class _e extends C{constructor(e,n,s){super(n,async r=>new s(e,r.response,await me(r),r.options))}async*[Symbol.asyncIterator](){const e=await this;for await(const n of e)yield n}}const Ce=t=>new Proxy(Object.fromEntries(t.entries()),{get(e,n){const s=n.toString();return e[s.toLowerCase()]||e[s]}}),Ie=()=>{var e;if(typeof Deno<"u"&&Deno.build!=null)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":w,"X-Stainless-OS":v(Deno.build.os),"X-Stainless-Arch":W(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:((e=Deno.version)==null?void 0:e.deno)??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":w,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":process.version};if(Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":w,"X-Stainless-OS":v(process.platform),"X-Stainless-Arch":W(process.arch),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":process.version};const t=Le();return t?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":w,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":w,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function Le(){if(typeof navigator>"u"||!navigator)return null;const t=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:n}of t){const s=n.exec(navigator.userAgent);if(s){const r=s[1]||0,o=s[2]||0,i=s[3]||0;return{browser:e,version:`${r}.${o}.${i}`}}}return null}const W=t=>t==="x32"?"x32":t==="x86_64"||t==="x64"?"x64":t==="arm"?"arm":t==="aarch64"||t==="arm64"?"arm64":t?`other:${t}`:"unknown",v=t=>(t=t.toLowerCase(),t.includes("ios")?"iOS":t==="android"?"Android":t==="darwin"?"MacOS":t==="win32"?"Windows":t==="freebsd"?"FreeBSD":t==="openbsd"?"OpenBSD":t==="linux"?"Linux":t?`Other:${t}`:"Unknown");let G;const Oe=()=>G??(G=Ie()),Fe=t=>{try{return JSON.parse(t)}catch{return}},Te=new RegExp("^(?:[a-z]+:)?//","i"),Ue=t=>Te.test(t),Me=t=>new Promise(e=>setTimeout(e,t)),F=(t,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new h(`${t} must be an integer`);if(e<0)throw new h(`${t} must be a positive integer`);return e},j=t=>t instanceof Error?t:new Error(t),J=t=>{var e,n,s,r,o;if(typeof process<"u")return((n=(e=process.env)==null?void 0:e[t])==null?void 0:n.trim())??void 0;if(typeof Deno<"u")return(o=(r=(s=Deno.env)==null?void 0:s.get)==null?void 0:r.call(s,t))==null?void 0:o.trim()};function je(t){if(!t)return!0;for(const e in t)return!1;return!0}function Ne(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function K(t,e){for(const n in e){if(!Ne(e,n))continue;const s=n.toLowerCase();if(!s)continue;const r=e[n];r===null?delete t[s]:r!==void 0&&(t[s]=r)}}function b(t,...e){var n;typeof process<"u"&&((n=process==null?void 0:process.env)==null?void 0:n.DEBUG)==="true"&&console.log(`Groq:DEBUG:${t}`,...e)}const Xe=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)}),Ve=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";class y{constructor(e){this._client=e}}class E extends y{create(e,n){return this._client.post("/openai/v1/audio/transcriptions",ye({body:e,...n}))}}E||(E={});class A extends y{create(e,n){return this._client.post("/openai/v1/audio/translations",ye({body:e,...n}))}}A||(A={});class P extends y{constructor(){super(...arguments),this.transcriptions=new E(this._client),this.translations=new A(this._client)}}(function(t){t.Transcriptions=E,t.Translations=A})(P||(P={}));let k=class extends y{create(e,n){return this._client.post("/openai/v1/chat/completions",{body:e,...n,stream:e.stream??!1})}};k||(k={});class q extends y{constructor(){super(...arguments),this.completions=new k(this._client)}}(function(t){t.Completions=k})(q||(q={}));class $ extends y{}$||($={});class B extends y{create(e,n){return this._client.post("/openai/v1/embeddings",{body:e,...n})}}B||(B={});class D extends y{retrieve(e,n){return this._client.get(`/openai/v1/models/${e}`,n)}list(e){return this._client.get("/openai/v1/models",e)}delete(e,n){return this._client.delete(`/openai/v1/models/${e}`,n)}}D||(D={});var we;class c extends De{constructor({baseURL:e=J("GROQ_BASE_URL"),apiKey:n=J("GROQ_API_KEY"),...s}={}){if(n===void 0)throw new h("The GROQ_API_KEY environment variable is missing or empty; either provide it, or instantiate the Groq client with an apiKey option, like new Groq({ apiKey: 'My API Key' }).");const r={apiKey:n,...s,baseURL:e||"https://api.groq.com"};if(!r.dangerouslyAllowBrowser&&Ve())throw new h(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Groq({ apiKey, dangerouslyAllowBrowser: true })`);super({baseURL:r.baseURL,timeout:r.timeout??6e4,httpAgent:r.httpAgent,maxRetries:r.maxRetries,fetch:r.fetch}),this.completions=new $(this),this.chat=new q(this),this.embeddings=new B(this),this.audio=new P(this),this.models=new D(this),this._options=r,this.apiKey=n}defaultQuery(){return this._options.defaultQuery}defaultHeaders(e){return{...super.defaultHeaders(e),...this._options.defaultHeaders}}authHeaders(e){return{Authorization:`Bearer ${this.apiKey}`}}}we=c;c.Groq=we;c.GroqError=h;c.APIError=d;c.APIConnectionError=_;c.APIConnectionTimeoutError=re;c.APIUserAbortError=U;c.NotFoundError=ae;c.ConflictError=ue;c.RateLimitError=le;c.BadRequestError=se;c.AuthenticationError=oe;c.InternalServerError=fe;c.PermissionDeniedError=ie;c.UnprocessableEntityError=ce;c.toFile=pe;c.fileFromPath=te;(function(t){t.Completions=$,t.Chat=q,t.Embeddings=B,t.Audio=P,t.Models=D})(c||(c={}));const He=c,et=async t=>{const e=await ve(t);console.log(e);const n=s=>{window.speechSynthesis.cancel();let r=new SpeechSynthesisUtterance(s);r.lang="es-ES";const i=window.speechSynthesis.getVoices().find(a=>a.lang.includes("es"));i&&(r.voice=i),r.volume=1,r.voice=window.speechSynthesis.getVoices()[2],window.speechSynthesis.speak(r)};return speechSynthesis.getVoices().length===0?speechSynthesis.onvoiceschanged=()=>n(e):(console.log("Voces",speechSynthesis.getVoices()),n(e)),e},We=new He({apiKey:"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",dangerouslyAllowBrowser:!0}),ve=async t=>{let e;return await We.chat.completions.create({messages:[{role:"system",content:"Responde de manera sintética y acertiva"},{role:"user",content:t}],model:ge.LLaMA3_8b}).then(n=>{var s,r;e=((r=(s=n.choices[0])==null?void 0:s.message)==null?void 0:r.content)||"",console.log({response:e})}),e};export{et as o};
