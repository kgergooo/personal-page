(self.webpackChunkwapp=self.webpackChunkwapp||[]).push([[446],{5446:(N,s,l)=>{"use strict";l.r(s),l.d(s,{MainModule:()=>I});var i=l(6895),o=l(6485),e=l(7332),t=l(8256);function r(w,B,n,g,f,d,C){try{var p=w[d](C),m=p.value}catch(b){return void n(b)}p.done?B(m):Promise.resolve(m).then(g,f)}function a(w){return function(){var B=this,n=arguments;return new Promise(function(g,f){var d=w.apply(B,n);function C(m){r(d,g,f,C,p,"next",m)}function p(m){r(d,g,f,C,p,"throw",m)}C(void 0)})}}var c=l(3259),u=l(1481);const h=["qrcElement"];let T=(()=>{class w{constructor(n,g){this.renderer=n,this.sanitizer=g,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new t.vpe,this.context=null}ngOnChanges(){var n=this;return a(function*(){yield n.createQRCode()})()}isValidQrCodeText(n){return!1===this.allowEmptyString?!(typeof n>"u"||""===n||"null"===n||null===n):!(typeof n>"u")}toDataURL(n){return new Promise((g,f)=>{(0,c.hz)(this.qrdata,n,(d,C)=>{d?f(d):g(C)})})}toCanvas(n,g){return new Promise((f,d)=>{(0,c.rT)(n,this.qrdata,g,C=>{C?d(C):f("success")})})}toSVG(n){return new Promise((g,f)=>{(0,c.toString)(this.qrdata,n,(d,C)=>{d?f(d):g(C)})})}renderElement(n){for(const g of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,g);this.renderer.appendChild(this.qrcElement.nativeElement,n)}createQRCode(){var n=this;return a(function*(){n.version&&n.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),n.version=40):n.version&&n.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),n.version=1):void 0!==n.version&&isNaN(n.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),n.version=void 0);try{if(!n.isValidQrCodeText(n.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");n.isValidQrCodeText(n.qrdata)&&""===n.qrdata&&(n.qrdata=" ");const g={color:{dark:n.colorDark,light:n.colorLight},errorCorrectionLevel:n.errorCorrectionLevel,margin:n.margin,scale:n.scale,version:n.version,width:n.width},f=n.imageSrc,d=n.imageHeight||40,C=n.imageWidth||40;switch(n.elementType){case"canvas":const p=n.renderer.createElement("canvas");n.context=p.getContext("2d"),n.toCanvas(p,g).then(()=>{if(n.ariaLabel&&n.renderer.setAttribute(p,"aria-label",`${n.ariaLabel}`),n.title&&n.renderer.setAttribute(p,"title",`${n.title}`),f&&n.context){n.centerImage=new Image(C,d),f!==n.centerImage.src&&(n.centerImage.src=f),d!==n.centerImage.height&&(n.centerImage.height=d),C!==n.centerImage.width&&(n.centerImage.width=C);const A=n.centerImage;A&&(A.onload=()=>{n.context?.drawImage(A,p.width/2-C/2,p.height/2-d/2,C,d)})}n.renderElement(p),n.emitQRCodeURL(p)}).catch(A=>{console.error("[angularx-qrcode] canvas error:",A)});break;case"svg":const m=n.renderer.createElement("div");n.toSVG(g).then(A=>{n.renderer.setProperty(m,"innerHTML",A);const D=m.firstChild;n.renderer.setAttribute(D,"height",`${n.width}`),n.renderer.setAttribute(D,"width",`${n.width}`),n.renderElement(D),n.emitQRCodeURL(D)}).catch(A=>{console.error("[angularx-qrcode] svg error:",A)});break;default:const b=n.renderer.createElement("img");n.toDataURL(g).then(A=>{n.alt&&b.setAttribute("alt",n.alt),n.ariaLabel&&b.setAttribute("aria-label",n.ariaLabel),b.setAttribute("src",A),n.title&&b.setAttribute("title",n.title),n.renderElement(b),n.emitQRCodeURL(b)}).catch(A=>{console.error("[angularx-qrcode] img/url error:",A)})}}catch(g){console.error("[angularx-qrcode] Error generating QR Code:",g.message)}})()}emitQRCodeURL(n){const g=n.constructor.name;if(g===SVGSVGElement.name){const C=new Blob([n.outerHTML],{type:"image/svg+xml"}),p=URL.createObjectURL(C),m=this.sanitizer.bypassSecurityTrustUrl(p);return void this.qrCodeURL.emit(m)}let f="";g===HTMLCanvasElement.name&&(f=n.toDataURL("image/png")),g===HTMLImageElement.name&&(f=n.src),fetch(f).then(d=>d.blob()).then(d=>URL.createObjectURL(d)).then(d=>this.sanitizer.bypassSecurityTrustUrl(d)).then(d=>{this.qrCodeURL.emit(d)}).catch(d=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+d)})}}return w.\u0275fac=function(n){return new(n||w)(t.Y36(t.Qsj),t.Y36(u.H7))},w.\u0275cmp=t.Xpm({type:w,selectors:[["qrcode"]],viewQuery:function(n,g){if(1&n&&t.Gf(h,7),2&n){let f;t.iGM(f=t.CRH())&&(g.qrcElement=f.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[t.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(n,g){1&n&&t._UZ(0,"div",null,0),2&n&&t.Tol(g.cssClass)},encapsulation:2,changeDetection:0}),w})(),R=(()=>{class w{}return w.\u0275fac=function(n){return new(n||w)},w.\u0275mod=t.oAB({type:w}),w.\u0275inj=t.cJS({}),w})();function E(w,B){if(1&w&&(t.TgZ(0,"a",19),t._UZ(1,"img",20),t.qZA()),2&w){const n=t.oxw().$implicit;t.Q6J("href",n.androidGooglePlayUrl,t.LSH)}}function y(w,B){if(1&w&&(t.TgZ(0,"a",21),t._UZ(1,"img",22),t.qZA()),2&w){const n=t.oxw().$implicit;t.Q6J("href",n.iosAppStoreUrl,t.LSH)}}function M(w,B){1&w&&(t.TgZ(0,"span"),t._uU(1,"Upload in progress"),t.qZA())}const U=function(w){return["/app-details",w]};function v(w,B){if(1&w&&(t.TgZ(0,"div",7)(1,"div",8),t._UZ(2,"img",9),t.qZA(),t.TgZ(3,"div",10)(4,"div",11)(5,"div",12)(6,"h3",2),t._uU(7),t.qZA()(),t.TgZ(8,"div",13),t._uU(9),t.qZA(),t.TgZ(10,"div",14),t._UZ(11,"qrcode",15),t.YNc(12,E,2,1,"a",16),t.qZA(),t.TgZ(13,"div",14),t._UZ(14,"qrcode",15),t.YNc(15,y,2,1,"a",17),t.qZA(),t.TgZ(16,"div",10),t.YNc(17,M,2,0,"span",18),t.qZA()()()()),2&w){const n=B.$implicit;t.Q6J("routerLink",t.VKq(13,U,n.id)),t.xp6(2),t.Q6J("src",n.iconURL,t.LSH),t.xp6(5),t.hij(" ",n.title," "),t.xp6(2),t.Oqu(n.intro),t.xp6(2),t.Q6J("qrdata",(null==n?null:n.androidGooglePlayUrl)+"")("width",135)("errorCorrectionLevel","M"),t.xp6(1),t.Q6J("ngIf",null==n?null:n.androidGooglePlayUrl),t.xp6(2),t.Q6J("qrdata",(null==n?null:n.iosAppStoreUrl)+"")("width",135)("errorCorrectionLevel","M"),t.xp6(1),t.Q6J("ngIf",null==n?null:n.iosAppStoreUrl),t.xp6(2),t.Q6J("ngIf",!(null!=n&&n.androidGooglePlayUrl||null!=n&&n.iosAppStoreUrl))}}const P=[{path:"",component:(()=>{const B=class{constructor(){this.appList=e.e}};let w=B;return B.\u0275fac=function(f){return new(f||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["app-main"]],decls:11,vars:1,consts:[[1,"card-custom-avatar"],["src","assets/img/me.jpg","alt","Avatar",1,"img-fluid"],[1,"card-title"],[1,"card-text"],[1,"card-footer","pt-2","mb-2",2,"background","inherit","border-color","inherit"],[1,"card-title","pb-2"],["class","row app-row",3,"routerLink",4,"ngFor","ngForOf"],[1,"row","app-row",3,"routerLink"],[1,"col-auto"],[1,"app-icon",3,"src"],[1,"col"],[1,"row"],[1,"col-12"],[1,"col-12","pb-4"],[1,"col-6"],[3,"qrdata","width","errorCorrectionLevel"],["target","_blank","class","pr-2",3,"href",4,"ngIf"],["target","_blank",3,"href",4,"ngIf"],[4,"ngIf"],["target","_blank",1,"pr-2",3,"href"],["src","assets/img/google.png",2,"width","128px"],["target","_blank",3,"href"],["src","assets/img/apple.png",2,"width","128px"]],template:function(f,d){1&f&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"h2",2),t._uU(3,"GLab."),t.qZA(),t.TgZ(4,"p",3),t._uU(5," I am a highly motivated front-end developer with expertise in creating responsive web and hybrid mobile applications. I am proficient in Ionic, Angular, TypeScript, and JavaScript, and enjoy developing new ideas as a passion project.\n"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"br"),t.TgZ(8,"h2",5),t._uU(9,"My recent work:"),t.qZA(),t.YNc(10,v,18,15,"div",6),t.qZA()),2&f&&(t.xp6(10),t.Q6J("ngForOf",d.appList))},dependencies:[i.sg,i.O5,o.rH,T],styles:[".app-row[_ngcontent-%COMP%]{border-bottom:1px solid #e6e2e2;padding:20px 5px;margin-bottom:10px}.app-row[_ngcontent-%COMP%]:hover{border-bottom:1px solid rgb(151,160,154);cursor:pointer}"]}),w})()}];let S=(()=>{const B=class{};let w=B;return B.\u0275fac=function(f){return new(f||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[o.Bz.forChild(P),o.Bz]}),w})(),I=(()=>{const B=class{};let w=B;return B.\u0275fac=function(f){return new(f||B)},B.\u0275mod=t.oAB({type:B}),B.\u0275inj=t.cJS({imports:[i.ez,S,R]}),w})()},4901:N=>{"use strict";var s={single_source_shortest_paths:function(l,i,o){var e={},t={};t[i]=0;var a,c,u,h,T,E,r=s.PriorityQueue.make();for(r.push(i,0);!r.empty();)for(u in h=(a=r.pop()).cost,T=l[c=a.value]||{})T.hasOwnProperty(u)&&(E=h+T[u],(typeof t[u]>"u"||t[u]>E)&&(t[u]=E,r.push(u,E),e[u]=c));if(typeof o<"u"&&typeof t[o]>"u"){var U=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(U)}return e},extract_shortest_path_from_predecessor_list:function(l,i){for(var o=[],e=i;e;)o.push(e),e=l[e];return o.reverse(),o},find_path:function(l,i,o){var e=s.single_source_shortest_paths(l,i,o);return s.extract_shortest_path_from_predecessor_list(e,o)},PriorityQueue:{make:function(l){var e,i=s.PriorityQueue,o={};for(e in l=l||{},i)i.hasOwnProperty(e)&&(o[e]=i[e]);return o.queue=[],o.sorter=l.sorter||i.default_sorter,o},default_sorter:function(l,i){return l.cost-i.cost},push:function(l,i){this.queue.push({value:l,cost:i}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};N.exports=s},8419:N=>{"use strict";N.exports=function(l){for(var i=[],o=l.length,e=0;e<o;e++){var t=l.charCodeAt(e);if(t>=55296&&t<=56319&&o>e+1){var r=l.charCodeAt(e+1);r>=56320&&r<=57343&&(t=1024*(t-55296)+r-56320+65536,e+=1)}t<128?i.push(t):t<2048?(i.push(t>>6|192),i.push(63&t|128)):t<55296||t>=57344&&t<65536?(i.push(t>>12|224),i.push(t>>6&63|128),i.push(63&t|128)):t>=65536&&t<=1114111?(i.push(t>>18|240),i.push(t>>12&63|128),i.push(t>>6&63|128),i.push(63&t|128)):i.push(239,191,189)}return new Uint8Array(i).buffer}},3259:(N,s,l)=>{const o=l(8695),e=l(1465),t=l(3210),r=l(2334);function a(c,u,h,T,R){const E=[].slice.call(arguments,1),y=E.length,M="function"==typeof E[y-1];if(!M&&!o())throw new Error("Callback required as last argument");if(!M){if(y<1)throw new Error("Too few arguments provided");return 1===y?(h=u,u=T=void 0):2===y&&!u.getContext&&(T=h,h=u,u=void 0),new Promise(function(U,v){try{const L=e.create(h,T);U(c(L,u,T))}catch(L){v(L)}})}if(y<2)throw new Error("Too few arguments provided");2===y?(R=h,h=u,u=T=void 0):3===y&&(u.getContext&&typeof R>"u"?(R=T,T=void 0):(R=T,T=h,h=u,u=void 0));try{const U=e.create(h,T);R(null,c(U,u,T))}catch(U){R(U)}}s.rT=a.bind(null,t.render),s.hz=a.bind(null,t.renderToDataURL),s.toString=a.bind(null,function(c,u,h){return r.render(c,h)})},8695:N=>{N.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},6221:(N,s,l)=>{const i=l(4792).getSymbolSize;s.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,r=i(e),a=145===r?26:2*Math.ceil((r-13)/(2*t-2)),c=[r-7];for(let u=1;u<t-1;u++)c[u]=c[u-1]-a;return c.push(6),c.reverse()},s.getPositions=function(e){const t=[],r=s.getRowColCoords(e),a=r.length;for(let c=0;c<a;c++)for(let u=0;u<a;u++)0===c&&0===u||0===c&&u===a-1||c===a-1&&0===u||t.push([r[c],r[u]]);return t}},2424:(N,s,l)=>{const i=l(4016),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(t){this.mode=i.ALPHANUMERIC,this.data=t}e.getBitsLength=function(r){return 11*Math.floor(r/2)+r%2*6},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(r){let a;for(a=0;a+2<=this.data.length;a+=2){let c=45*o.indexOf(this.data[a]);c+=o.indexOf(this.data[a+1]),r.put(c,11)}this.data.length%2&&r.put(o.indexOf(this.data[a]),6)},N.exports=e},2118:N=>{function s(){this.buffer=[],this.length=0}s.prototype={get:function(l){const i=Math.floor(l/8);return 1==(this.buffer[i]>>>7-l%8&1)},put:function(l,i){for(let o=0;o<i;o++)this.putBit(1==(l>>>i-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(l){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),l&&(this.buffer[i]|=128>>>this.length%8),this.length++}},N.exports=s},4425:N=>{function s(l){if(!l||l<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=l,this.data=new Uint8Array(l*l),this.reservedBit=new Uint8Array(l*l)}s.prototype.set=function(l,i,o,e){const t=l*this.size+i;this.data[t]=o,e&&(this.reservedBit[t]=!0)},s.prototype.get=function(l,i){return this.data[l*this.size+i]},s.prototype.xor=function(l,i,o){this.data[l*this.size+i]^=o},s.prototype.isReserved=function(l,i){return this.reservedBit[l*this.size+i]},N.exports=s},5663:(N,s,l)=>{const i=l(8419),o=l(4016);function e(t){this.mode=o.BYTE,"string"==typeof t&&(t=i(t)),this.data=new Uint8Array(t)}e.getBitsLength=function(r){return 8*r},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let r=0,a=this.data.length;r<a;r++)t.put(this.data[r],8)},N.exports=e},4655:(N,s,l)=>{const i=l(2259),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];s.getBlocksCount=function(r,a){switch(a){case i.L:return o[4*(r-1)+0];case i.M:return o[4*(r-1)+1];case i.Q:return o[4*(r-1)+2];case i.H:return o[4*(r-1)+3];default:return}},s.getTotalCodewordsCount=function(r,a){switch(a){case i.L:return e[4*(r-1)+0];case i.M:return e[4*(r-1)+1];case i.Q:return e[4*(r-1)+2];case i.H:return e[4*(r-1)+3];default:return}}},2259:(N,s)=>{s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},s.from=function(o,e){if(s.isValid(o))return o;try{return function l(i){if("string"!=typeof i)throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+i)}}(o)}catch{return e}}},3114:(N,s,l)=>{const i=l(4792).getSymbolSize;s.getPositions=function(t){const r=i(t);return[[0,0],[r-7,0],[0,r-7]]}},7078:(N,s,l)=>{const i=l(4792),t=i.getBCHDigit(1335);s.getEncodedBits=function(a,c){const u=a.bit<<3|c;let h=u<<10;for(;i.getBCHDigit(h)-t>=0;)h^=1335<<i.getBCHDigit(h)-t;return 21522^(u<<10|h)}},5339:(N,s)=>{const l=new Uint8Array(512),i=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)l[t]=e,i[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)l[t]=l[t-255]})(),s.log=function(e){if(e<1)throw new Error("log("+e+")");return i[e]},s.exp=function(e){return l[e]},s.mul=function(e,t){return 0===e||0===t?0:l[i[e]+i[t]]}},449:(N,s,l)=>{const i=l(4016),o=l(4792);function e(t){this.mode=i.KANJI,this.data=t}e.getBitsLength=function(r){return 13*r},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){let r;for(r=0;r<this.data.length;r++){let a=o.toSJIS(this.data[r]);if(a>=33088&&a<=40956)a-=33088;else{if(!(a>=57408&&a<=60351))throw new Error("Invalid SJIS character: "+this.data[r]+"\nMake sure your charset is UTF-8");a-=49472}a=192*(a>>>8&255)+(255&a),t.put(a,13)}},N.exports=e},3667:(N,s)=>{s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function i(o,e,t){switch(o){case s.Patterns.PATTERN000:return(e+t)%2==0;case s.Patterns.PATTERN001:return e%2==0;case s.Patterns.PATTERN010:return t%3==0;case s.Patterns.PATTERN011:return(e+t)%3==0;case s.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2==0;case s.Patterns.PATTERN101:return e*t%2+e*t%3==0;case s.Patterns.PATTERN110:return(e*t%2+e*t%3)%2==0;case s.Patterns.PATTERN111:return(e*t%3+(e+t)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}s.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},s.from=function(e){return s.isValid(e)?parseInt(e,10):void 0},s.getPenaltyN1=function(e){const t=e.size;let r=0,a=0,c=0,u=null,h=null;for(let T=0;T<t;T++){a=c=0,u=h=null;for(let R=0;R<t;R++){let E=e.get(T,R);E===u?a++:(a>=5&&(r+=a-5+3),u=E,a=1),E=e.get(R,T),E===h?c++:(c>=5&&(r+=c-5+3),h=E,c=1)}a>=5&&(r+=a-5+3),c>=5&&(r+=c-5+3)}return r},s.getPenaltyN2=function(e){const t=e.size;let r=0;for(let a=0;a<t-1;a++)for(let c=0;c<t-1;c++){const u=e.get(a,c)+e.get(a,c+1)+e.get(a+1,c)+e.get(a+1,c+1);(4===u||0===u)&&r++}return 3*r},s.getPenaltyN3=function(e){const t=e.size;let r=0,a=0,c=0;for(let u=0;u<t;u++){a=c=0;for(let h=0;h<t;h++)a=a<<1&2047|e.get(u,h),h>=10&&(1488===a||93===a)&&r++,c=c<<1&2047|e.get(h,u),h>=10&&(1488===c||93===c)&&r++}return 40*r},s.getPenaltyN4=function(e){let t=0;const r=e.data.length;for(let c=0;c<r;c++)t+=e.data[c];return 10*Math.abs(Math.ceil(100*t/r/5)-10)},s.applyMask=function(e,t){const r=t.size;for(let a=0;a<r;a++)for(let c=0;c<r;c++)t.isReserved(c,a)||t.xor(c,a,i(e,c,a))},s.getBestMask=function(e,t){const r=Object.keys(s.Patterns).length;let a=0,c=1/0;for(let u=0;u<r;u++){t(u),s.applyMask(u,e);const h=s.getPenaltyN1(e)+s.getPenaltyN2(e)+s.getPenaltyN3(e)+s.getPenaltyN4(e);s.applyMask(u,e),h<c&&(c=h,a=u)}return a}},4016:(N,s,l)=>{const i=l(4406),o=l(2699);s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!i.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return o.testNumeric(r)?s.NUMERIC:o.testAlphanumeric(r)?s.ALPHANUMERIC:o.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits},s.from=function(r,a){if(s.isValid(r))return r;try{return function e(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+t)}}(r)}catch{return a}}},7783:(N,s,l)=>{const i=l(4016);function o(e){this.mode=i.NUMERIC,this.data=e.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let r,a,c;for(r=0;r+3<=this.data.length;r+=3)a=this.data.substr(r,3),c=parseInt(a,10),t.put(c,10);const u=this.data.length-r;u>0&&(a=this.data.substr(r),c=parseInt(a,10),t.put(c,3*u+1))},N.exports=o},1106:(N,s,l)=>{const i=l(5339);s.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let a=0;a<e.length;a++)for(let c=0;c<t.length;c++)r[a+c]^=i.mul(e[a],t[c]);return r},s.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const a=r[0];for(let u=0;u<t.length;u++)r[u]^=i.mul(t[u],a);let c=0;for(;c<r.length&&0===r[c];)c++;r=r.slice(c)}return r},s.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let r=0;r<e;r++)t=s.mul(t,new Uint8Array([1,i.exp(r)]));return t}},1465:(N,s,l)=>{const i=l(4792),o=l(2259),e=l(2118),t=l(4425),r=l(6221),a=l(3114),c=l(3667),u=l(4655),h=l(2636),T=l(2088),R=l(7078),E=l(4016),y=l(2033);function P(n,g,f){const d=n.size,C=R.getEncodedBits(g,f);let p,m;for(p=0;p<15;p++)m=1==(C>>p&1),n.set(p<6?p:p<8?p+1:d-15+p,8,m,!0),n.set(8,p<8?d-p-1:p<9?15-p-1+1:15-p-1,m,!0);n.set(d-8,8,1,!0)}function B(n,g,f,d){let C;if(Array.isArray(n))C=y.fromArray(n);else{if("string"!=typeof n)throw new Error("Invalid data");{let D=g;if(!D){const H=y.rawSplit(n);D=T.getBestVersionForData(H,f)}C=y.fromString(n,D||40)}}const p=T.getBestVersionForData(C,f);if(!p)throw new Error("The amount of data is too big to be stored in a QR Code");if(g){if(g<p)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+p+".\n")}else g=p;const m=function I(n,g,f){const d=new e;f.forEach(function(A){d.put(A.mode.bit,4),d.put(A.getLength(),E.getCharCountIndicator(A.mode,n)),A.write(d)});const m=8*(i.getSymbolTotalCodewords(n)-u.getTotalCodewordsCount(n,g));for(d.getLengthInBits()+4<=m&&d.put(0,4);d.getLengthInBits()%8!=0;)d.putBit(0);const b=(m-d.getLengthInBits())/8;for(let A=0;A<b;A++)d.put(A%2?17:236,8);return function w(n,g,f){const d=i.getSymbolTotalCodewords(g),p=d-u.getTotalCodewordsCount(g,f),m=u.getBlocksCount(g,f),A=m-d%m,D=Math.floor(d/m),H=Math.floor(p/m),q=H+1,x=D-H,G=new h(x);let Z=0;const Q=new Array(m),K=new Array(m);let J=0;const _=new Uint8Array(n.buffer);for(let z=0;z<m;z++){const O=z<A?H:q;Q[z]=_.slice(Z,Z+O),K[z]=G.encode(Q[z]),Z+=O,J=Math.max(J,O)}const V=new Uint8Array(d);let F,k,Y=0;for(F=0;F<J;F++)for(k=0;k<m;k++)F<Q[k].length&&(V[Y++]=Q[k][F]);for(F=0;F<x;F++)for(k=0;k<m;k++)V[Y++]=K[k][F];return V}(d,n,g)}(g,f,C),b=i.getSymbolSize(g),A=new t(b);return function M(n,g){const f=n.size,d=a.getPositions(g);for(let C=0;C<d.length;C++){const p=d[C][0],m=d[C][1];for(let b=-1;b<=7;b++)if(!(p+b<=-1||f<=p+b))for(let A=-1;A<=7;A++)m+A<=-1||f<=m+A||n.set(p+b,m+A,b>=0&&b<=6&&(0===A||6===A)||A>=0&&A<=6&&(0===b||6===b)||b>=2&&b<=4&&A>=2&&A<=4,!0)}}(A,g),function U(n){const g=n.size;for(let f=8;f<g-8;f++){const d=f%2==0;n.set(f,6,d,!0),n.set(6,f,d,!0)}}(A),function v(n,g){const f=r.getPositions(g);for(let d=0;d<f.length;d++){const C=f[d][0],p=f[d][1];for(let m=-2;m<=2;m++)for(let b=-2;b<=2;b++)n.set(C+m,p+b,-2===m||2===m||-2===b||2===b||0===m&&0===b,!0)}}(A,g),P(A,f,0),g>=7&&function L(n,g){const f=n.size,d=T.getEncodedBits(g);let C,p,m;for(let b=0;b<18;b++)C=Math.floor(b/3),p=b%3+f-8-3,m=1==(d>>b&1),n.set(C,p,m,!0),n.set(p,C,m,!0)}(A,g),function S(n,g){const f=n.size;let d=-1,C=f-1,p=7,m=0;for(let b=f-1;b>0;b-=2)for(6===b&&b--;;){for(let A=0;A<2;A++)if(!n.isReserved(C,b-A)){let D=!1;m<g.length&&(D=1==(g[m]>>>p&1)),n.set(C,b-A,D),p--,-1===p&&(m++,p=7)}if(C+=d,C<0||f<=C){C-=d,d=-d;break}}}(A,m),isNaN(d)&&(d=c.getBestMask(A,P.bind(null,A,f))),c.applyMask(d,A),P(A,f,d),{modules:A,version:g,errorCorrectionLevel:f,maskPattern:d,segments:C}}s.create=function(g,f){if(typeof g>"u"||""===g)throw new Error("No input text");let C,p,d=o.M;return typeof f<"u"&&(d=o.from(f.errorCorrectionLevel,o.M),C=T.from(f.version),p=c.from(f.maskPattern),f.toSJISFunc&&i.setToSJISFunction(f.toSJISFunc)),B(g,C,d,p)}},2636:(N,s,l)=>{const i=l(1106);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=i.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(t.length+this.degree);r.set(t);const a=i.mod(r,this.genPoly),c=this.degree-a.length;if(c>0){const u=new Uint8Array(this.degree);return u.set(a,c),u}return a},N.exports=o},2699:(N,s)=>{const l="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";s.KANJI=new RegExp(o,"g"),s.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),s.BYTE=new RegExp(e,"g"),s.NUMERIC=new RegExp(l,"g"),s.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const t=new RegExp("^"+o+"$"),r=new RegExp("^"+l+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");s.testKanji=function(u){return t.test(u)},s.testNumeric=function(u){return r.test(u)},s.testAlphanumeric=function(u){return a.test(u)}},2033:(N,s,l)=>{const i=l(4016),o=l(7783),e=l(2424),t=l(5663),r=l(449),a=l(2699),c=l(4792),u=l(4901);function h(L){return unescape(encodeURIComponent(L)).length}function T(L,P,S){const I=[];let w;for(;null!==(w=L.exec(S));)I.push({data:w[0],index:w.index,mode:P,length:w[0].length});return I}function R(L){const P=T(a.NUMERIC,i.NUMERIC,L),S=T(a.ALPHANUMERIC,i.ALPHANUMERIC,L);let I,w;return c.isKanjiModeEnabled()?(I=T(a.BYTE,i.BYTE,L),w=T(a.KANJI,i.KANJI,L)):(I=T(a.BYTE_KANJI,i.BYTE,L),w=[]),P.concat(S,I,w).sort(function(n,g){return n.index-g.index}).map(function(n){return{data:n.data,mode:n.mode,length:n.length}})}function E(L,P){switch(P){case i.NUMERIC:return o.getBitsLength(L);case i.ALPHANUMERIC:return e.getBitsLength(L);case i.KANJI:return r.getBitsLength(L);case i.BYTE:return t.getBitsLength(L)}}function v(L,P){let S;const I=i.getBestModeForData(L);if(S=i.from(P,I),S!==i.BYTE&&S.bit<I.bit)throw new Error('"'+L+'" cannot be encoded with mode '+i.toString(S)+".\n Suggested mode is: "+i.toString(I));switch(S===i.KANJI&&!c.isKanjiModeEnabled()&&(S=i.BYTE),S){case i.NUMERIC:return new o(L);case i.ALPHANUMERIC:return new e(L);case i.KANJI:return new r(L);case i.BYTE:return new t(L)}}s.fromArray=function(P){return P.reduce(function(S,I){return"string"==typeof I?S.push(v(I,null)):I.data&&S.push(v(I.data,I.mode)),S},[])},s.fromString=function(P,S){const w=function M(L){const P=[];for(let S=0;S<L.length;S++){const I=L[S];switch(I.mode){case i.NUMERIC:P.push([I,{data:I.data,mode:i.ALPHANUMERIC,length:I.length},{data:I.data,mode:i.BYTE,length:I.length}]);break;case i.ALPHANUMERIC:P.push([I,{data:I.data,mode:i.BYTE,length:I.length}]);break;case i.KANJI:P.push([I,{data:I.data,mode:i.BYTE,length:h(I.data)}]);break;case i.BYTE:P.push([{data:I.data,mode:i.BYTE,length:h(I.data)}])}}return P}(R(P,c.isKanjiModeEnabled())),B=function U(L,P){const S={},I={start:{}};let w=["start"];for(let B=0;B<L.length;B++){const n=L[B],g=[];for(let f=0;f<n.length;f++){const d=n[f],C=""+B+f;g.push(C),S[C]={node:d,lastCount:0},I[C]={};for(let p=0;p<w.length;p++){const m=w[p];S[m]&&S[m].node.mode===d.mode?(I[m][C]=E(S[m].lastCount+d.length,d.mode)-E(S[m].lastCount,d.mode),S[m].lastCount+=d.length):(S[m]&&(S[m].lastCount=d.length),I[m][C]=E(d.length,d.mode)+4+i.getCharCountIndicator(d.mode,P))}}w=g}for(let B=0;B<w.length;B++)I[w[B]].end=0;return{map:I,table:S}}(w,S),n=u.find_path(B.map,"start","end"),g=[];for(let f=1;f<n.length-1;f++)g.push(B.table[n[f]].node);return s.fromArray(function y(L){return L.reduce(function(P,S){const I=P.length-1>=0?P[P.length-1]:null;return I&&I.mode===S.mode?(P[P.length-1].data+=S.data,P):(P.push(S),P)},[])}(g))},s.rawSplit=function(P){return s.fromArray(R(P,c.isKanjiModeEnabled()))}},4792:(N,s)=>{let l;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];s.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},s.getSymbolTotalCodewords=function(e){return i[e]},s.getBCHDigit=function(o){let e=0;for(;0!==o;)e++,o>>>=1;return e},s.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');l=e},s.isKanjiModeEnabled=function(){return typeof l<"u"},s.toSJIS=function(e){return l(e)}},4406:(N,s)=>{s.isValid=function(i){return!isNaN(i)&&i>=1&&i<=40}},2088:(N,s,l)=>{const i=l(4792),o=l(4655),e=l(2259),t=l(4016),r=l(4406),c=i.getBCHDigit(7973);function h(E,y){return t.getCharCountIndicator(E,y)+4}function T(E,y){let M=0;return E.forEach(function(U){const v=h(U.mode,y);M+=v+U.getBitsLength()}),M}s.from=function(y,M){return r.isValid(y)?parseInt(y,10):M},s.getCapacity=function(y,M,U){if(!r.isValid(y))throw new Error("Invalid QR Code version");typeof U>"u"&&(U=t.BYTE);const P=8*(i.getSymbolTotalCodewords(y)-o.getTotalCodewordsCount(y,M));if(U===t.MIXED)return P;const S=P-h(U,y);switch(U){case t.NUMERIC:return Math.floor(S/10*3);case t.ALPHANUMERIC:return Math.floor(S/11*2);case t.KANJI:return Math.floor(S/13);default:return Math.floor(S/8)}},s.getBestVersionForData=function(y,M){let U;const v=e.from(M,e.M);if(Array.isArray(y)){if(y.length>1)return function R(E,y){for(let M=1;M<=40;M++)if(T(E,M)<=s.getCapacity(M,y,t.MIXED))return M}(y,v);if(0===y.length)return 1;U=y[0]}else U=y;return function u(E,y,M){for(let U=1;U<=40;U++)if(y<=s.getCapacity(U,M,E))return U}(U.mode,U.getLength(),v)},s.getEncodedBits=function(y){if(!r.isValid(y)||y<7)throw new Error("Invalid QR Code version");let M=y<<12;for(;i.getBCHDigit(M)-c>=0;)M^=7973<<i.getBCHDigit(M)-c;return y<<12|M}},3210:(N,s,l)=>{const i=l(6355);s.render=function(r,a,c){let u=c,h=a;typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),a||(h=function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),u=i.getOptions(u);const T=i.getImageWidth(r.modules.size,u),R=h.getContext("2d"),E=R.createImageData(T,T);return i.qrToImageData(E.data,r,u),function o(t,r,a){t.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}(R,h,T),R.putImageData(E,0,0),h},s.renderToDataURL=function(r,a,c){let u=c;return typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),u||(u={}),s.render(r,a,u).toDataURL(u.type||"image/png",(u.rendererOpts||{}).quality)}},2334:(N,s,l)=>{const i=l(6355);function o(r,a){const c=r.a/255,u=a+'="'+r.hex+'"';return c<1?u+" "+a+'-opacity="'+c.toFixed(2).slice(1)+'"':u}function e(r,a,c){let u=r+a;return typeof c<"u"&&(u+=" "+c),u}s.render=function(a,c,u){const h=i.getOptions(c),T=a.modules.size,R=a.modules.data,E=T+2*h.margin,y=h.color.light.a?"<path "+o(h.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",M="<path "+o(h.color.dark,"stroke")+' d="'+function t(r,a,c){let u="",h=0,T=!1,R=0;for(let E=0;E<r.length;E++){const y=Math.floor(E%a),M=Math.floor(E/a);!y&&!T&&(T=!0),r[E]?(R++,E>0&&y>0&&r[E-1]||(u+=T?e("M",y+c,.5+M+c):e("m",h,0),h=0,T=!1),y+1<a&&r[E+1]||(u+=e("h",R),R=0)):h++}return u}(R,T,h.margin)+'"/>',L='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+'viewBox="0 0 '+E+" "+E+'" shape-rendering="crispEdges">'+y+M+"</svg>\n";return"function"==typeof u&&u(null,L),L}},6355:(N,s)=>{function l(i){if("number"==typeof i&&(i=i.toString()),"string"!=typeof i)throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||5===o.length||o.length>8)throw new Error("Invalid hex color: "+i);(3===o.length||4===o.length)&&(o=Array.prototype.concat.apply([],o.map(function(t){return[t,t]}))),6===o.length&&o.push("F","F");const e=parseInt(o.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+o.slice(0,6).join("")}}s.getOptions=function(o){o||(o={}),o.color||(o.color={});const t=o.width&&o.width>=21?o.width:void 0;return{width:t,scale:t?4:o.scale||4,margin:typeof o.margin>"u"||null===o.margin||o.margin<0?4:o.margin,color:{dark:l(o.color.dark||"#000000ff"),light:l(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},s.getScale=function(o,e){return e.width&&e.width>=o+2*e.margin?e.width/(o+2*e.margin):e.scale},s.getImageWidth=function(o,e){const t=s.getScale(o,e);return Math.floor((o+2*e.margin)*t)},s.qrToImageData=function(o,e,t){const r=e.modules.size,a=e.modules.data,c=s.getScale(r,t),u=Math.floor((r+2*t.margin)*c),h=t.margin*c,T=[t.color.light,t.color.dark];for(let R=0;R<u;R++)for(let E=0;E<u;E++){let y=4*(R*u+E),M=t.color.light;R>=h&&E>=h&&R<u-h&&E<u-h&&(M=T[a[Math.floor((R-h)/c)*r+Math.floor((E-h)/c)]?1:0]),o[y++]=M.r,o[y++]=M.g,o[y++]=M.b,o[y]=M.a}}}}]);