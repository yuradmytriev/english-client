(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{783:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(163),o=r.n(n),a=r(47);function l(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return"".concat(a.a,"/words/").concat(e)}var s="Can't upload image",c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,c,a;return t=e,r=null,n=[{key:"update",value:function(e){var t=e.wordId,r=e.body;fetch(u(t),{body:r,method:"PUT"}).then(function(e){return e.json()}).then(function(e){return e.id&&o.a.success("Image updated successfully"),e}).catch(function(){o.a.error(s)})}},{key:"updateJSON",value:function(e){var t=e.wordId,r=e.wordProps,n=JSON.stringify(r);return fetch(u(t),{body:n,method:"PUT",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(){o.a.error(s)})}},{key:"delete",value:(c=regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u(t),{method:"DELETE"});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}},e)}),a=function(){var e=this,i=arguments;return new Promise(function(t,r){var n=c.apply(e,i);function a(e){l(n,t,r,a,o,"next",e)}function o(e){l(n,t,r,a,o,"throw",e)}a(void 0)})},function(e){return a.apply(this,arguments)})}],r&&i(t.prototype,r),n&&i(t,n),e}()},784:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a});var n="0 3px 6px 0 rgba(0,0,0,0.12), 0 0 1px 0 rgba(0,0,0,0.12)",a="4px"},789:function(e,t,r){var n=r(226),a=r(796);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},796:function(e,t,r){(t=r(227)(!1)).push([e.i,".item-enter {\n    opacity: 0;\n}\n.item-enter-active {\n    opacity: 1;\n    transition: opacity 400ms ease-in;\n}\n.item-exit {\n    opacity: 1;\n}\n.item-exit-active {\n    opacity: 0;\n    transition: opacity 400ms ease-in;\n}\n",""]),e.exports=t},869:function(e,t){},875:function(e,t,r){"use strict";r.r(t),r.d(t,"Words",function(){return Ve});function s(e){var t=e.id,r=e.children,n=e.categoryId;return v.a.createElement("div",{draggable:!0,onDragStart:function(e){return e.dataTransfer&&(e.dataTransfer.setData("id",t),n&&e.dataTransfer.setData("categoryId",String(n))),null}},r)}function y(){var t=Object(m.b)();return{fetchWordsOffset:function(e){t(Object(j.b)(e))},wordsOffset:Object(m.c)(function(e){return e.wordsOffset})}}var n=r(795),h=r.n(n),i=r(0),v=r.n(i),g=r(872),w=r(839),b=r(877),E=r(878),a=r(791),x=r.n(a),o=r(840),I=r.n(o),c=r(861),d=r.n(c),f=r(123),l=r(24),u=r.n(l),p=r(783),m=r(38),j=r(275),W=r(849),O=r.n(W),S=r(17),C=r(784),A=O.a.Meta,_=S.a.div.withConfig({displayName:"styles__CardBody",componentId:"sc-1paq1cz-0"})(["display:flex;justify-content:space-between;"]),k=S.a.div.withConfig({displayName:"styles__CardImage",componentId:"sc-1paq1cz-1"})(["border-radius:5px;width:150px;height:100px;display:block;background:url(",") center no-repeat;background-size:contain;"],function(e){return e.img}),N=Object(S.a)(A).withConfig({displayName:"styles__Meta",componentId:"sc-1paq1cz-2"})(["border-radius:5px;width:200px;& .ant-card-meta-title{font-size:20px;margin-bottom:0 !important;}& .ant-card-meta-description{font-size:18px;}"]),z=Object(S.a)(O.a).withConfig({displayName:"styles__WordCard",componentId:"sc-1paq1cz-3"})(["box-shadow:",";border:none !important;& .ant-card-body{height:170px;}"],C.b),D=S.a.div.withConfig({displayName:"styles__IconWrapper",componentId:"sc-1paq1cz-4"})(["color:red;font-size:18px;display:inline-block;cursor:pointer;"]),P=S.a.div.withConfig({displayName:"styles__DeleteWrapper",componentId:"sc-1paq1cz-5"})(["color:#ff3c3c;cursor:pointer;transition:0.5s;&:hover{color:#cc0000;transform:scale(1.1);}& span{margin-left:5px;}"]),L=Object(S.a)(P).withConfig({displayName:"styles__MemorizedWrapper",componentId:"sc-1paq1cz-6"})(["color:#5f5fff;margin-top:10px;&:hover{color:#00009e;}"]),M=Object(S.a)(P).withConfig({displayName:"styles__ForgotWrapper",componentId:"sc-1paq1cz-7"})(["color:#e8a000;margin-top:10px;&:hover{color:#b57d00;}"]);function T(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function R(c){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=c.apply(e,i);function a(e){T(n,t,r,a,o,"next",e)}function o(e){T(n,t,r,a,o,"throw",e)}a(void 0)})}}function U(e){var r=e.id,n=y().fetchWordsOffset,t=function(){var t=R(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.next=3,p.a.delete(r);case 3:e.sent&&n(0);case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();return v.a.createElement(P,{onClick:t},v.a.createElement(u.a,{type:"delete"}),v.a.createElement("span",null,"Delete"))}function F(e){var n=e.id,a=y().fetchWordsOffset,t=function(){var t=R(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),r={learned:!0},e.next=4,p.a.updateJSON({wordId:n,wordProps:r});case 4:e.sent.id&&a(0);case 6:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();return v.a.createElement(L,{onClick:t},v.a.createElement(u.a,{type:"bulb"}),v.a.createElement("span",null,"Memorized"))}function q(e){var n=e.id,a=y().fetchWordsOffset,t=function(){var t=R(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),r={learned:!1},e.next=4,p.a.updateJSON({wordId:n,wordProps:r});case 4:e.sent.id&&a(0);case 6:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();return v.a.createElement(M,{onClick:t},v.a.createElement(u.a,{type:"reload"}),v.a.createElement("span",null,"Forgot"))}function J(e){var t=e.firstWord.id;return v.a.createElement(v.a.Fragment,null,v.a.createElement(U,{id:t}),v.a.createElement(F,{id:t}),v.a.createElement(q,{id:t}))}function $(e){var t=e.word,r=e.learned;return v.a.createElement("div",null,t," ",r&&v.a.createElement(u.a,{style:{color:"#18d218"},type:"check"}))}function B(e){var t=e.firstWord,r=e.showInfo,n=t.id,a=t.word,o=t.translate,i=t.imageSrc,c=t.learned,l=t.category,u="word/".concat(a);return v.a.createElement(s,{key:n,id:String(n),categoryId:null==l?void 0:l.id},v.a.createElement(f.b,{to:u},v.a.createElement(z,null,v.a.createElement(_,null,v.a.createElement("div",null,v.a.createElement(N,{title:v.a.createElement($,{word:a,learned:c}),description:r?o:null}),v.a.createElement(D,null,v.a.createElement(d.a,{trigger:"click",placement:"bottom",content:v.a.createElement(J,{firstWord:t})},v.a.createElement("div",null,". . .")))),r&&v.a.createElement(k,{img:i,alt:a})))))}function G(e){var t=e.children,n=e.onDropEnd;return v.a.createElement(X,{onDrop:function(e){var t=e.dataTransfer.getData("id"),r=e.dataTransfer.getData("categoryId");n(t,r)},onDragOver:function(e){e.preventDefault()}},t)}function V(e){var t=e.children,r=e.areSeveralWords;return v.a.createElement(Y,{areSeveralWords:r},t)}function H(e){var t=e.words,r=Object(te.a)().showWordsInfo;return t.map(function(e){return v.a.createElement(h.a,{key:e.id,xs:24,sm:24,md:24,lg:24,xl:24},v.a.createElement(V,{areSeveralWords:!1},v.a.createElement(B,{firstWord:e,showInfo:r})))})}function K(e){var t=e.id,r=Object(re.a)().deleteCategory;return v.a.createElement(u.a,{type:"close",onClick:function(e){e.stopPropagation(),r(t)}})}function Q(){var e=Object(re.a)(),t=e.categories,r=e.fetchCategories,o=e.linkCategories;return Object(i.useEffect)(function(){r()},[]),t.length?v.a.createElement(ie,null,v.a.createElement(E.a,null,t.map(function(e){var a=e.id,t=e.name,r=e.words;return v.a.createElement(b.a,{key:a,timeout:250,classNames:"item"},v.a.createElement(ce,{key:a},v.a.createElement(ee.a,{bordered:!1,expandIconPosition:"left"},v.a.createElement(le,{key:a,header:t,extra:v.a.createElement(K,{id:a})},v.a.createElement(G,{onDropEnd:function(e){return t={wordId:String(e),categoryId:String(a)},r=t.wordId,n=t.categoryId,void o(r,n);var t,r,n}},v.a.createElement(oe,{gutter:12},!!r.length&&v.a.createElement(H,{words:r})))))))}))):null}var X=S.a.div.withConfig({displayName:"styles__DropContainer",componentId:"mcgme-0"})(["padding:10px;"]),Y=S.a.div.withConfig({displayName:"styles__WordContainer",componentId:"h1pwr5-0"})(["margin-bottom:1rem;box-shadow:",";"],function(e){return e.areSeveralWords?"0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0px -5px #fff,0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #fff,0 20px 1px -9px rgba(0, 0, 0, 0.15);":"none"}),Z=r(862),ee=r.n(Z),te=r(237),re=r(236),ne=r(794),ae=r.n(ne),oe=Object(S.a)(ae.a).withConfig({displayName:"styles__WordsWrapper",componentId:"nliyug-0"})(["display:flex;flex-wrap:wrap;"]),ie=S.a.div.withConfig({displayName:"styles__CategoriesLayout",componentId:"nliyug-1"})(["display:flex;flex-wrap:wrap;margin:5px;"]),ce=S.a.div.withConfig({displayName:"styles__CategoryWrapper",componentId:"nliyug-2"})(["width:367px;margin:8px;& > .ant-collapse{box-shadow:",";}"],C.b),le=(r(789),ee.a.Panel),ue=r(148);function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e){var t=se(Object(i.useState)(0),2),r=t[0],n=t[1];return Object(i.useEffect)(function(){Object(ue.a)(e).then(n)}),[r]}var pe=r(47),me=r(866),ye=r.n(me),he="ALL",ve="LEARNED",ge="UNLEARNED";function we(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function be(e){var n=e.showMemoizedWords,a=e.showUnlearnedWords,o=e.showAllWords,t=Ee.getFilter();return v.a.createElement(xe,null,v.a.createElement(ye.a.Group,{buttonStyle:"solid",onChange:function(e){var t,r=null==e||null===(t=e.target)||void 0===t?void 0:t.value;({ALL:o,LEARNED:n,UNLEARNED:a})[r]()},defaultValue:t},v.a.createElement(ye.a.Button,{value:Ie},"All"),v.a.createElement(ye.a.Button,{value:je},"Memoized"),v.a.createElement(ye.a.Button,{value:We},"Unlearned")))}var Ee=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,n=[{key:"getFilter",value:function(){return window.localStorage.getItem("filter")}},{key:"setFilter",value:function(e){window.localStorage.setItem("filter",e)}}],(r=null)&&we(t.prototype,r),n&&we(t,n),e}(),xe=S.a.div.withConfig({displayName:"styles__FilterWordsWrapper",componentId:"sc-1jtwhtj-0"})(["margin-bottom:10px;margin-top:10px;margin-left:10px;"]),Ie=he,je=ve,We=ge;function Oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ce(e,t){switch(t.type){case _e:return t.data;case ke:return t.data.filter(function(e){return e[1][0].learned});case Ne:return t.data.filter(function(e){return!e[1][0].learned});default:throw e}}function Ae(e){var t,r,n=Oe(Object(i.useReducer)(Ce,e),2),a=n[0],o=n[1];return t=o,r=e,Object(i.useEffect)(function(){var e=Ee.getFilter();e&&t({type:e,data:r})},[r.length]),{filteredWords:a,showMemoizedWords:function(e){Ee.setFilter(ke),o({type:ke,data:e})},showUnlearnedWords:function(e){Ee.setFilter(Ne),o({type:Ne,data:e})},showAllWords:function(e){Ee.setFilter(_e),o({type:_e,data:e})},setWords:function(e){var t=Ee.getFilter();t&&o({type:t,data:e})}}}var _e=he,ke=ve,Ne=ge,ze=(r(869),S.a.div.withConfig({displayName:"styles__LearnedWords",componentId:"sc-91z9mo-0"})(["color:#001529;font-size:16px;"]));function De(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Le(){var e=De(fe("".concat(pe.a,"/words/count")),1)[0];return v.a.createElement(ze,null,"Words: ".concat(e))}var Me=S.a.span.withConfig({displayName:"styles__LearnedWords",componentId:"sc-1m2f0jl-0"})(["color:#001529;font-size:16px;"]);function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ue(){var e=Te(fe("".concat(pe.a,"/words/count/learned")),1)[0];return v.a.createElement(Me,null,"Learned Words: ".concat(e))}var Fe=Object(S.a)(ae.a).withConfig({displayName:"styles__WordWrapper",componentId:"sc-1wa8yzp-0"})(["display:flex;flex-wrap:wrap;"]),qe=S.a.div.withConfig({displayName:"styles__LearnedWordsLayout",componentId:"sc-1wa8yzp-1"})(["display:flex;justify-content:space-between;"]),Je=S.a.div.withConfig({displayName:"styles__WordsCountContainer",componentId:"sc-1wa8yzp-2"})(["margin-top:5px;margin-right:10px;@media (max-width:480px){display:none;}"]);function $e(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function Be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ge(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ve=function(){var e,t=Be(fe("".concat(pe.a,"/words/count")),1)[0],l=Object(te.a)().showWordsInfo,n=Object(re.a)().unlinkCategories,r=y(),a=r.wordsOffset,o=r.fetchWordsOffset,i=(e=a.filter(function(e){return!e.category}),Object.entries(I()(e,"word"))),c=Ae(i),u=c.setWords,s=c.filteredWords,d=c.showAllWords,f=c.showMemoizedWords,p=c.showUnlearnedWords;Object(g.a)(function(){o(0),u(i)},[a]);var m=function(){var c,r=(c=regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r)return e.next=3,n(t,r);e.next=3;break;case 3:case"end":return e.stop()}},e)}),function(){var e=this,i=arguments;return new Promise(function(t,r){var n=c.apply(e,i);function a(e){$e(n,t,r,a,o,"next",e)}function o(e){$e(n,t,r,a,o,"throw",e)}a(void 0)})});return function(e,t){return r.apply(this,arguments)}}();return v.a.createElement(v.a.Fragment,null,v.a.createElement(qe,null,v.a.createElement(be,{showAllWords:function(){return d(i)},showMemoizedWords:function(){return f(i)},showUnlearnedWords:function(){return p(i)}}),v.a.createElement(Je,null,!x()(a)&&v.a.createElement(Le,null),!x()(a)&&v.a.createElement(Ue,null))),v.a.createElement(Q,null),v.a.createElement(G,{onDropEnd:function(e,t){return m(e,t)}},v.a.createElement(Fe,{gutter:12},v.a.createElement(E.a,{style:{width:"100%"}},v.a.createElement(w.a,{dataLength:a.length,next:function(){o(Math.ceil(a.length/20))},hasMore:a.length!==t,loader:v.a.createElement("h4",null,"Loading...")},!x()(a)&&s.map(function(e){var t=Be(e,2),r=(t[0],t[1]),n=Be(r,1)[0],a=n.id,o=n.word,i=1<r.length,c=Be(r,1)[0];return o&&v.a.createElement(b.a,{key:a,timeout:500,classNames:"item"},v.a.createElement(h.a,{key:a,xs:24,sm:24,md:8,lg:8,xl:6},v.a.createElement(V,{areSeveralWords:i},v.a.createElement(B,{firstWord:c,showInfo:l}))))}))))))};t.default=Ve}}]);