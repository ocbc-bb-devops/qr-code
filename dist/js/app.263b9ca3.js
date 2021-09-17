(function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],d=0,b=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var u=a[l];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1a46":function(e,t,a){"use strict";a("8e09")},"408d":function(e,t,a){},"4b03":function(e,t,a){},"4f87":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=a("6c02"),o={class:"container"},c={class:"text-center"};function l(e,t,a,n,l,u){var i=Object(r["y"])("qr-code");return Object(r["s"])(),Object(r["f"])("div",o,[Object(r["g"])("div",c,[Object(r["i"])(i)])])}a("b0c0");var u={class:"qr-wrapper"},i=["for"],s=["id","onUpdate:modelValue","type","pattern","required"],d={key:0,class:"form-text text-muted"},b=["id","onUpdate:modelValue","required"],p=Object(r["g"])("option",{selected:"",disabled:"",value:""},"Please select one",-1),f=["value"],v={class:"form-group mt-4 mb-3"},O={class:"row"},j={class:"col-8 m-0 border text-truncate"},m={class:"row"},g={class:"col-8 m-0 p-0"},y={class:"col-4 m-0 p-0 d-flex align-items-center"},h=["href"];function w(e,t,a,n,o,c){var l=Object(r["y"])("vue-qrcode");return Object(r["s"])(),Object(r["f"])("div",u,[Object(r["g"])("form",{ref:"generate",class:Object(r["o"])(["qr-code text-left",{"was-validated":o.errors.length}]),onSubmit:t[1]||(t[1]=Object(r["I"])((function(){return c.generate&&c.generate.apply(c,arguments)}),["prevent"]))},[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.formData,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e,class:"form-group mb-3"},[Object(r["g"])("label",{for:e.name,class:"form-label"},Object(r["B"])(e.label),9,i),"input"===e.element?(Object(r["s"])(),Object(r["f"])(r["a"],{key:0},[Object(r["H"])(Object(r["g"])("input",{id:e.name,"onUpdate:modelValue":function(t){return e.value=t},type:e.type,class:"form-control",pattern:e.pattern,required:e.required},null,8,s),[[r["D"],e.value]]),e.helperText?(Object(r["s"])(),Object(r["f"])("small",d,Object(r["B"])(e.helperText),1)):Object(r["e"])("",!0)],64)):Object(r["e"])("",!0),"select"===e.element?Object(r["H"])((Object(r["s"])(),Object(r["f"])("select",{key:1,id:e.name,"onUpdate:modelValue":function(t){return e.value=t},class:"custom-select","aria-label":"Please select one",required:e.required},[p,(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(e.options,(function(e){return Object(r["s"])(),Object(r["f"])("option",{key:e,value:e.value},Object(r["B"])(e.label),9,f)})),128))],8,b)),[[r["E"],e.value]]):Object(r["e"])("",!0)])})),128)),Object(r["g"])("div",v,[Object(r["g"])("button",{class:"btn btn-primary",type:"submit",onClick:t[0]||(t[0]=function(){return c.generate&&c.generate.apply(c,arguments)})},"Generate")])],34),o.url&&!o.errors.length?(Object(r["s"])(),Object(r["f"])(r["a"],{key:0},[Object(r["g"])("div",O,[Object(r["g"])("div",j,Object(r["B"])(o.url),1),Object(r["g"])("a",{href:"#",class:"col-4 m-0 p-0 btn btn-secondary border rounded-right",onClick:t[2]||(t[2]=function(){return c.copy&&c.copy.apply(c,arguments)})},"Copy URL")]),Object(r["g"])("div",m,[Object(r["g"])("div",g,[Object(r["i"])(l,{id:"qr",value:o.url,options:o.options,onReady:c.onReady},null,8,["value","options","onReady"])]),Object(r["g"])("div",y,[Object(r["g"])("a",{class:"btn btn-secondary",download:"qr.png",href:o.imageURL,onClick:t[3]||(t[3]=function(){return c.download&&c.download.apply(c,arguments)})},"Download",8,h)])])],64)):Object(r["e"])("",!0)])}var x=a("1da1"),k=a("b85c"),q=(a("96cf"),a("99af"),a("d56f")),C={name:"QrCode",components:{VueQrcode:q["a"]},data:function(){return{formData:[{element:"input",type:"url",name:"base_url",query:"baseURL",label:"Base URL",value:"https://internet.ocbc.com/deeplink",helperText:"Only accepts HTTPS protocol.",required:!0,pattern:"https://.*"},{element:"input",type:"text",name:"product_code",query:"productCode",label:"Product Code",value:"",helperText:"",required:!0},{element:"select",type:"",options:[{value:"card_activation",label:"Card Activation"}],name:"redirect_to",query:"redirectTo",label:"Redirect To",value:"",helperText:"",required:!0}],errors:[],canvas:"",url:"",imageURL:"",isBaseURLValid:!0,options:{errorCorrectionLevel:"H",width:200}}},methods:{onReady:function(e){var t=this,a=e.getContext("2d"),r=new Image;r.onload=function(){var n=.15,o=Math.round(e.width*n),c=(e.width-o)/2;t.drawImage(a,r,c,c,o,o)},this.canvas=e},drawImage:function(e,t,a,r,n,o){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:4;e.shadowOffsetX=0,e.shadowOffsetY=2,e.shadowBlur=4,e.shadowColor="#00000040",e.lineWidth=8,e.beginPath(),e.moveTo(a+c,r),e.arcTo(a+n,r,a+n,r+o,c),e.arcTo(a+n,r+o,a,r+o,c),e.arcTo(a,r+o,a,r,c),e.arcTo(a,r,a+n,r,c),e.closePath(),e.strokeStyle="#fff",e.stroke(),e.clip(),e.fillStyle="#fff",e.fillRect(a,a,n,o),e.drawImage(t,a,a,n,o)},generate:function(){this.errors=[];var e,t=this.$refs.generate.checkValidity(),a=[],r=Object(k["a"])(this.formData);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.required&&!n.value.length?this.errors.push(n.name):a.push({query:n.query,value:n.value})}}catch(i){r.e(i)}finally{r.f()}if(t){var o=a[0],c=a[1],l=a[2],u="".concat(o.value,"?").concat(c.query,"=").concat(c.value,"&").concat(l.query,"=").concat(l.value);this.url=u}},download:function(){var e=this.canvas.toDataURL("image/png");this.imageURL=e},copy:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.url);case 3:alert("Copied"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("Cannot copy");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}};a("dd5d");C.render=w;var R=C,T={name:"Home",components:{QrCode:R}};T.render=l;var P=T,U=Object(n["b"])(),_=[{path:"/",name:"Home",component:P,meta:{layout:"default"}}],D=Object(n["a"])({linkActiveClass:"active",history:U,routes:_}),L=a("5502"),S=Object(L["a"])({state:function(){return{}},mutations:{},actions:{},modules:{}}),B={class:"default-page-wrapper"};function E(e,t,a,n,o,c){var l=Object(r["y"])("default-nav"),u=Object(r["y"])("default-footer");return Object(r["s"])(),Object(r["f"])("div",B,[Object(r["i"])(l),Object(r["x"])(e.$slots,"default"),Object(r["i"])(u)])}var N={class:"navbar navbar-expand-md navbar-dark fixed-top"},V={class:"container"},H=Object(r["h"])("Generate QR"),I=["aria-expanded"],M=Object(r["g"])("span",{class:"navbar-toggler-icon"},null,-1),G=[M],Q=Object(r["g"])("ul",{class:"navbar-nav mr-auto"},null,-1),A=[Q];function $(e,t,a,n,o,c){var l=Object(r["y"])("router-link");return Object(r["s"])(),Object(r["f"])("nav",N,[Object(r["g"])("div",V,[Object(r["i"])(l,{to:"/",class:"navbar-brand",onClick:c.collapseNavbar},{default:Object(r["G"])((function(){return[H]})),_:1},8,["onClick"]),Object(r["g"])("button",{class:Object(r["o"])(["navbar-toggler",!o.navbarExpanded&&"collapsed"]),type:"button","aria-controls":"navbarDefault","aria-expanded":o.navbarExpanded,"aria-label":"Toggle navigation",onClick:t[0]||(t[0]=function(){return c.toggleNavbar&&c.toggleNavbar.apply(c,arguments)})},G,10,I),Object(r["g"])("div",{id:"navbarDefault",class:Object(r["o"])(["collapse navbar-collapse",o.navbarExpanded&&"show"])},A,2)])])}var F={data:function(){return{navbarExpanded:!1}},methods:{toggleNavbar:function(){this.navbarExpanded=!this.navbarExpanded},collapseNavbar:function(){this.navbarExpanded=!1}}};a("1a46");F.render=$;var J=F,z={class:"footer"},K=Object(r["g"])("div",{class:"container"},[Object(r["g"])("span",null,"FRANK by OCBC")],-1),W=[K];function X(e,t){return Object(r["s"])(),Object(r["f"])("footer",z,W)}const Y={};Y.render=X;var Z=Y,ee={components:{DefaultNav:J,DefaultFooter:Z}};a("9068");ee.render=E;var te=ee,ae={id:"app"};function re(e,t,a,n,o,c){var l=Object(r["y"])("router-view");return Object(r["s"])(),Object(r["f"])("div",ae,[(Object(r["s"])(),Object(r["d"])(Object(r["z"])(c.layout),null,{default:Object(r["G"])((function(){return[Object(r["i"])(l)]})),_:1}))])}a("4f87");var ne={computed:{layout:function(){return"layout-".concat(this.$route.meta.layout||"default")}}};ne.render=re;var oe=ne,ce=Object(r["c"])(oe);ce.component("LayoutDefault",te),ce.use(S),ce.use(D),ce.mount("#app")},"8e09":function(e,t,a){},9068:function(e,t,a){"use strict";a("408d")},dd5d:function(e,t,a){"use strict";a("4b03")}});
//# sourceMappingURL=app.263b9ca3.js.map