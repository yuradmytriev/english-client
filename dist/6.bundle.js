(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{783:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(163),o=e.n(r),i=e(52);function a(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u="Can't upload image",l=function(n){return"".concat(i.a,"/words/").concat(n)},s=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r,i,s;return t=n,e=null,r=[{key:"update",value:function(n){var t=n.wordId,e=n.body;fetch(l(t),{body:e,method:"PUT"}).then((function(n){return n.json()})).then((function(n){return n.id&&o.a.success("Image updated successfully"),n})).catch((function(){o.a.error(u)}))}},{key:"updateJSON",value:function(n){var t=n.wordId,e=n.wordProps,r=JSON.stringify(e);return fetch(l(t),{body:r,method:"PUT",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(){o.a.error(u)}))}},{key:"delete",value:(i=regeneratorRuntime.mark((function n(t){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(l(t),{method:"DELETE"});case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})),s=function(){var n=this,t=arguments;return new Promise((function(e,r){var o=i.apply(n,t);function c(n){a(o,e,r,c,u,"next",n)}function u(n){a(o,e,r,c,u,"throw",n)}c(void 0)}))},function(n){return s.apply(this,arguments)})}],e&&c(t.prototype,e),r&&c(t,r),n}()},784:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o}));var r="0 3px 6px 0 rgba(0,0,0,0.12), 0 0 1px 0 rgba(0,0,0,0.12)",o="4px"},789:function(n,t,e){var r=e(226),o=e(796);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},790:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e(0),o=e.n(r),i=e(24),a=e.n(i),c=e(17),u=Object(c.a)(a.a).withConfig({displayName:"styles__Icon",componentId:"sc-1ins3vw-0"})(["margin:0 10px;"]),l=function(n){var t=n.word;return o.a.createElement(u,{theme:"twoTone",type:"sound",onClick:function(){window.responsiveVoice.speak(t)}})}},796:function(n,t,e){(t=e(227)(!1)).push([n.i,".item-enter {\n    opacity: 0;\n}\n.item-enter-active {\n    opacity: 1;\n    transition: opacity 400ms ease-in;\n}\n.item-exit {\n    opacity: 1;\n}\n.item-exit-active {\n    opacity: 0;\n    transition: opacity 400ms ease-in;\n}\n",""]),n.exports=t},867:function(n,t,e){"use strict";e.r(t),e.d(t,"Training",(function(){return _}));var r=e(0),o=e.n(r),i=e(869),a=e(868),c=e(289);function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var s=e(68),f=e.n(s),d=e(24),p=e.n(d),y=e(783),m=e(790),v=e(17),h=e(784),w=v.a.div.withConfig({displayName:"styles__Wrapper",componentId:"bw4qdk-0"})(["text-align:center;background:#fff;padding:33px 15px;border-radius:",";box-shadow:0 0 0 1px rgba(63,63,68,0.05),0 1px 3px 0 rgba(63,63,68,0.15);display:inline-block;margin:0 auto;font-size:21px;width:500px;@media (max-width:480px){max-width:500px;margin:15px;}"],h.a),b=v.a.div.withConfig({displayName:"styles__Container",componentId:"bw4qdk-1"})(["display:flex !important;align-items:center;height:94vh;"]),g=v.a.div.withConfig({displayName:"styles__ButtonsWrapper",componentId:"bw4qdk-2"})(["display:flex;justify-content:space-between;width:175px;margin:0 auto;margin-top:20px;"]),x=v.a.div.withConfig({displayName:"styles__Word",componentId:"bw4qdk-3"})(["color:#000;margin-right:10px;"]),E=v.a.div.withConfig({displayName:"styles__Description",componentId:"bw4qdk-4"})(["color:#909090;"]),j=v.a.div.withConfig({displayName:"styles__IconWordLayout",componentId:"bw4qdk-5"})(["display:flex;justify-content:center;align-items:center;"]);function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return O(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return O(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var I=function(n){var t=n.id,e=n.word,i=n.translate,a=n.context,c=n.deleteTrainingWord,u=k(Object(r.useState)(!1),2),l=u[0],s=u[1];Object(r.useEffect)((function(){window.responsiveVoice.speak(e)}),[]);var d=function(){y.a.updateJSON({wordId:t,wordProps:{learned:!0}}),c(t)};!function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=Object(r.useRef)();Object(r.useEffect)((function(){o.current=t}),[t]),Object(r.useEffect)((function(){if(e&&e.addEventListener){var t=function(n){return o.current(n)};return e.addEventListener(n,t),function(){e.removeEventListener(n,t)}}}),[n,e])}("keydown",(function(n){var e=n.key;"ArrowRight"===e&&c(t),"ArrowLeft"===e&&d()}));return o.a.createElement(b,null,o.a.createElement(w,null,o.a.createElement(j,null,o.a.createElement(x,null,e),o.a.createElement(m.a,{word:e}),o.a.createElement(p.a,{theme:"twoTone",type:"question-circle",onClick:function(){s((function(n){return!n}))}})),l&&o.a.createElement(E,null,i),o.a.createElement(E,null,a),o.a.createElement(g,null,o.a.createElement(f.a,{onClick:d,size:"large",type:"primary"},"Know"),o.a.createElement(f.a,{onClick:function(){return c(t)},size:"large",type:"danger"},"Missed"))))};e(789);function C(){return(C=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var S=function(n,t){return 0===t},_=function(){var n=function(){var n=Object(c.a)(),t=n.words,e=n.fetchWords,o=u(Object(r.useState)([]),2),i=o[0],a=o[1];return Object(r.useEffect)((function(){e();var n=t.filter((function(n){return!n.learned}));a(n)}),[t.length]),{trainingWords:i,setTrainingWords:a}}(),t=n.trainingWords,e=n.setTrainingWords,l=function(n){e(t.filter((function(t){return t.id!==n})))};return t?o.a.createElement(i.a,null,t.filter(S).map((function(n){return o.a.createElement(a.a,{key:n.id,timeout:500,classNames:"item"},o.a.createElement(I,C({},n,{deleteTrainingWord:l})))}))):null};t.default=_}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3Nkay9Xb3Jkc1NESy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnN0YW50cy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdHlsZXMvYW5pbWF0aW9uLmNzcz9iYjRlIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3dvcmQvY29tcG9uZW50cy9Xb3JkUHJvbnVuY2lhdGlvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvd29yZC9jb21wb25lbnRzL1dvcmRQcm9udW5jaWF0aW9uL1dvcmRQcm9udW5jaWF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy9hbmltYXRpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3RyYWluaW5nL2hvb2tzL3VzZVRyYWluaW5nV29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHJhaW5pbmcvY29tcG9uZW50cy9Xb3JkQ2FyZC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHJhaW5pbmcvY29tcG9uZW50cy9Xb3JkQ2FyZC9Xb3JkQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdHJhaW5pbmcvaG9va3MvdXNlRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90cmFpbmluZy9wYWdlL1RyYWluaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy90cmFpbmluZy9wYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbIkVSUk9SIiwiY3JlYXRlV29yZHNVUkwiLCJpZCIsIlNFUlZFUl9VUkwiLCJXb3Jkc1NESyIsIndvcmRJZCIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwianNvbiIsInJlcyIsInN1Y2Nlc3MiLCJlcnJvciIsIndvcmRQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjYXJkU2hhZG93IiwiY2FyZEJvcmRlclJhZGl1cyIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiZXhwb3J0cyIsImxvY2FscyIsIkljb24iLCJzdHlsZWQiLCJXb3JkUHJvbnVuY2lhdGlvbiIsIndvcmQiLCJ0aGVtZSIsInR5cGUiLCJvbkNsaWNrIiwid2luZG93IiwicmVzcG9uc2l2ZVZvaWNlIiwic3BlYWsiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIiwiV3JhcHBlciIsImRpdiIsIkNvbnRhaW5lciIsIkJ1dHRvbnNXcmFwcGVyIiwiV29yZCIsIkRlc2NyaXB0aW9uIiwiSWNvbldvcmRMYXlvdXQiLCJXb3JkQ2FyZCIsInRyYW5zbGF0ZSIsImNvbnRleHQiLCJkZWxldGVUcmFpbmluZ1dvcmQiLCJ1c2VTdGF0ZSIsInNob3dUcmFuc2xhdGUiLCJzZXRTaG93VHJhbnNsYXRlIiwidXNlRWZmZWN0IiwibWVtb2l6ZVdvcmQiLCJ1cGRhdGVKU09OIiwibGVhcm5lZCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJlbGVtZW50Iiwic2F2ZWRIYW5kbGVyIiwidXNlUmVmIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlRXZlbnRMaXN0ZW5lciIsImtleSIsInByZXYiLCJzaXplIiwic2hvd0ZpcnN0IiwiXyIsImluZGV4IiwiVHJhaW5pbmciLCJ1c2VGZXRjaFdvcmRzIiwid29yZHMiLCJmZXRjaFdvcmRzIiwidHJhaW5pbmdXb3JkcyIsInNldFRyYWluaW5nV29yZHMiLCJ1bmxlYXJuZWRXb3JkcyIsImZpbHRlciIsImxlbmd0aCIsInVzZVRyYWluaW5nV29yZHMiLCJUcmFuc2l0aW9uR3JvdXAiLCJtYXAiLCJDU1NUcmFuc2l0aW9uIiwidGltZW91dCIsImNsYXNzTmFtZXMi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SixFQUFNSyxRQUFPLFNBQUFuRCxHQUFJLE9BQUtBLEVBQUswQixXQUUzRHVCLEVBQWlCQyxLQUNoQixDQUFDSixFQUFNTSxTQUVILENBQUVKLGdCQUFlQyxvQklMb0JJLEdBQXBDTCxFQUR3QixFQUN4QkEsY0FBZUMsRUFEUyxFQUNUQSxpQkFFakI5QixFQUFxQixTQUFDbkQsR0FDMUJpRixFQUNHRCxFQUEwQkcsUUFBTyxTQUFDbkQsR0FBRCxPQUFpQkEsRUFBS2hDLEtBQU9BLE9BSW5FLE9BQUtnRixFQUtILGtCQUFDTSxFQUFBLEVBQUQsS0FDSU4sRUFBMEJHLE9BQU9WLEdBQVdjLEtBQUksU0FBQXZELEdBQUksT0FDcEQsa0JBQUN3RCxFQUFBLEVBQUQsQ0FBZWxCLElBQUt0QyxFQUFLaEMsR0FBSXlGLFFBQVMsSUFBS0MsV0FBVyxRQUNwRCxrQkFBQyxFQUFELEtBQWMxRCxFQUFkLENBQW9CbUIsbUJBQW9CQSxVQVB2QyxNQ2hCSXlCIiwiZmlsZSI6IjYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICdzaGFyZWQvaW50ZXJmYWNlcy9JV29yZCc7XG5pbXBvcnQgeyBTRVJWRVJfVVJMIH0gZnJvbSAnc2hhcmVkL2NvbnN0YW50cy91cmwnO1xuXG5jb25zdCBFUlJPUjogeyBVUExPQURfSU1BR0U6IHN0cmluZyB9ID0ge1xuICBVUExPQURfSU1BR0U6IGBDYW4ndCB1cGxvYWQgaW1hZ2VgLFxufTtcblxuY29uc3QgY3JlYXRlV29yZHNVUkwgPSAoaWQ6IG51bWJlcikgPT4gYCR7U0VSVkVSX1VSTH0vd29yZHMvJHtpZH1gO1xuXG5leHBvcnQgY2xhc3MgV29yZHNTREsge1xuICBzdGF0aWMgdXBkYXRlKHsgd29yZElkLCBib2R5IH06IHsgd29yZElkOiBudW1iZXI7IGJvZHk6IEZvcm1EYXRhIH0pOiB2b2lkIHtcbiAgICBmZXRjaChjcmVhdGVXb3Jkc1VSTCh3b3JkSWQpLCB7XG4gICAgICBib2R5LFxuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuaWQpIHtcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ0ltYWdlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoRVJST1IuVVBMT0FEX0lNQUdFKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUpTT04oe1xuICAgIHdvcmRJZCxcbiAgICB3b3JkUHJvcHMsXG4gIH06IHtcbiAgICB3b3JkSWQ6IG51bWJlcjtcbiAgICB3b3JkUHJvcHM6IFBhcnRpYWw8SVdvcmQ+O1xuICB9KTogUHJvbWlzZTxJV29yZD4ge1xuICAgIGNvbnN0IGJvZHk6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHdvcmRQcm9wcyk7XG5cbiAgICByZXR1cm4gZmV0Y2goY3JlYXRlV29yZHNVUkwod29yZElkKSwge1xuICAgICAgYm9keSxcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcylcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoRVJST1IuVVBMT0FEX0lNQUdFKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjcmVhdGVXb3Jkc1VSTChpZCksIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2FyZFNoYWRvdzogc3RyaW5nID1cbiAgJzAgM3B4IDZweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgMCAxcHggMCByZ2JhKDAsMCwwLDAuMTIpJztcblxuZXhwb3J0IGNvbnN0IGNhcmRCb3JkZXJSYWRpdXM6IHN0cmluZyA9ICc0cHgnO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSWNvbiBhcyBBbnRkSWNvbiB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZChBbnRkSWNvbilgXG4gIG1hcmdpbjogMCAxMHB4O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnc2hhcmVkL2ludGVyZmFjZXMvSVdvcmQnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JkUHJvbnVuY2lhdGlvbjogRkM8UGljazxJV29yZCwgJ3dvcmQnPj4gPSAoe1xuICB3b3JkLFxufSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgd2luZG93LnJlc3BvbnNpdmVWb2ljZS5zcGVhayh3b3JkKTtcbiAgfTtcblxuICByZXR1cm4gPFMuSWNvbiB0aGVtZT1cInR3b1RvbmVcIiB0eXBlPVwic291bmRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz47XG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtLWVudGVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLml0ZW0tZW50ZXItYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcbn1cXG4uaXRlbS1leGl0IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLml0ZW0tZXhpdC1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICdzaGFyZWQvaW50ZXJmYWNlcy9JV29yZCc7XG5pbXBvcnQgeyB1c2VGZXRjaFdvcmRzIH0gZnJvbSAnc2hhcmVkL3N0YXRlL2ZldGNoV29yZHMvdXNlRmV0Y2hXb3Jkcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VUcmFpbmluZ1dvcmRzID0gKCkgPT4ge1xuICBjb25zdCB7IHdvcmRzLCBmZXRjaFdvcmRzIH0gPSB1c2VGZXRjaFdvcmRzKCk7XG4gIGNvbnN0IFt0cmFpbmluZ1dvcmRzLCBzZXRUcmFpbmluZ1dvcmRzXSA9IHVzZVN0YXRlPElXb3JkW10gfCBhbnlbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hXb3JkcygpO1xuICAgIGNvbnN0IHVubGVhcm5lZFdvcmRzOiBJV29yZFtdID0gd29yZHMuZmlsdGVyKHdvcmQgPT4gIXdvcmQubGVhcm5lZCk7XG5cbiAgICBzZXRUcmFpbmluZ1dvcmRzKHVubGVhcm5lZFdvcmRzKTtcbiAgfSwgW3dvcmRzLmxlbmd0aF0pO1xuXG4gIHJldHVybiB7IHRyYWluaW5nV29yZHMsIHNldFRyYWluaW5nV29yZHMgfTtcbn07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNhcmRCb3JkZXJSYWRpdXMgfSBmcm9tICdzaGFyZWQvY29uc3RhbnRzL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzM3B4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7Y2FyZEJvcmRlclJhZGl1c307XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDYzLCA2MywgNjgsIDAuMDUpLFxuICAgIDAgMXB4IDNweCAwIHJnYmEoNjMsIDYzLCA2OCwgMC4xNSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgd2lkdGg6IDUwMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk0dmg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxNzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgV29yZCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogIzkwOTA5MDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJY29uV29yZExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICdzaGFyZWQvaW50ZXJmYWNlcy9JV29yZCc7XG5pbXBvcnQgeyBXb3Jkc1NESyB9IGZyb20gJ3NoYXJlZC9zZGsvV29yZHNTREsnO1xuaW1wb3J0IHsgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgV29yZFByb251bmNpYXRpb24gfSBmcm9tICdtb2R1bGVzL3dvcmQvY29tcG9uZW50cy9Xb3JkUHJvbnVuY2lhdGlvbic7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIElXb3JkQ2FyZFxuICBleHRlbmRzIFBpY2s8SVdvcmQsICdpZCcgfCAnd29yZCcgfCAndHJhbnNsYXRlJyB8ICdjb250ZXh0Jz4ge1xuICBkZWxldGVUcmFpbmluZ1dvcmQ6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgV29yZENhcmQ6IEZDPElXb3JkQ2FyZD4gPSAoe1xuICBpZCxcbiAgd29yZCxcbiAgdHJhbnNsYXRlLFxuICBjb250ZXh0LFxuICBkZWxldGVUcmFpbmluZ1dvcmQsXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93VHJhbnNsYXRlLCBzZXRTaG93VHJhbnNsYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5yZXNwb25zaXZlVm9pY2Uuc3BlYWsod29yZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBtZW1vaXplV29yZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB3b3JkUHJvcHM6IFBpY2s8SVdvcmQsICdsZWFybmVkJz4gPSB7IGxlYXJuZWQ6IHRydWUgfTtcblxuICAgIFdvcmRzU0RLLnVwZGF0ZUpTT04oe1xuICAgICAgd29yZElkOiBpZCxcbiAgICAgIHdvcmRQcm9wcyxcbiAgICB9KTtcblxuICAgIGRlbGV0ZVRyYWluaW5nV29yZChpZCk7XG4gIH07XG5cbiAgY29uc3QgdHJhaW5pbmdOYXZpZ2F0aW9uQnlLZXlib2FyZCA9ICh7IGtleSB9KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBkZWxldGVUcmFpbmluZ1dvcmQoaWQpO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBtZW1vaXplV29yZCgpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdHJhaW5pbmdOYXZpZ2F0aW9uQnlLZXlib2FyZCk7XG5cbiAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHNldFNob3dUcmFuc2xhdGUocHJldiA9PiAhcHJldik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8Uy5XcmFwcGVyPlxuICAgICAgICA8Uy5JY29uV29yZExheW91dD5cbiAgICAgICAgICA8Uy5Xb3JkPnt3b3JkfTwvUy5Xb3JkPlxuICAgICAgICAgIDxXb3JkUHJvbnVuY2lhdGlvbiB3b3JkPXt3b3JkfSAvPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICB0aGVtZT1cInR3b1RvbmVcIlxuICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUcmFuc2xhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TLkljb25Xb3JkTGF5b3V0PlxuICAgICAgICB7c2hvd1RyYW5zbGF0ZSAmJiA8Uy5EZXNjcmlwdGlvbj57dHJhbnNsYXRlfTwvUy5EZXNjcmlwdGlvbj59XG4gICAgICAgIDxTLkRlc2NyaXB0aW9uPntjb250ZXh0fTwvUy5EZXNjcmlwdGlvbj5cblxuICAgICAgICA8Uy5CdXR0b25zV3JhcHBlcj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e21lbW9pemVXb3JkfSBzaXplPVwibGFyZ2VcIiB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgS25vd1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRyYWluaW5nV29yZChpZCl9XG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWlzc2VkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUy5CdXR0b25zV3JhcHBlcj5cbiAgICAgIDwvUy5XcmFwcGVyPlxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VFdmVudExpc3RlbmVyID0gKGV2ZW50TmFtZSwgaGFuZGxlciwgZWxlbWVudCA9IHdpbmRvdykgPT4ge1xuICBjb25zdCBzYXZlZEhhbmRsZXIgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVkSGFuZGxlci5jdXJyZW50ID0gaGFuZGxlcjtcbiAgfSwgW2hhbmRsZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgaWYgKCFpc1N1cHBvcnRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGV2ZW50ID0+IHNhdmVkSGFuZGxlci5jdXJyZW50KGV2ZW50KTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtldmVudE5hbWUsIGVsZW1lbnRdKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnc2hhcmVkL2ludGVyZmFjZXMvSVdvcmQnO1xuaW1wb3J0IHsgdXNlVHJhaW5pbmdXb3JkcyB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYWluaW5nV29yZHMnO1xuaW1wb3J0IHsgV29yZENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDYXJkJztcbmltcG9ydCAnc2hhcmVkL3N0eWxlcy9hbmltYXRpb24uY3NzJztcblxuY29uc3Qgc2hvd0ZpcnN0ID0gKF86IHVua25vd24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuID0+IGluZGV4ID09PSAwO1xuXG5leHBvcnQgY29uc3QgVHJhaW5pbmc6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IHRyYWluaW5nV29yZHMsIHNldFRyYWluaW5nV29yZHMgfSA9IHVzZVRyYWluaW5nV29yZHMoKTtcblxuICBjb25zdCBkZWxldGVUcmFpbmluZ1dvcmQgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFRyYWluaW5nV29yZHMoXG4gICAgICAodHJhaW5pbmdXb3JkcyBhcyBJV29yZFtdKS5maWx0ZXIoKHdvcmQ6IElXb3JkKSA9PiB3b3JkLmlkICE9PSBpZCksXG4gICAgKTtcbiAgfTtcblxuICBpZiAoIXRyYWluaW5nV29yZHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgIHsodHJhaW5pbmdXb3JkcyBhcyBJV29yZFtdKS5maWx0ZXIoc2hvd0ZpcnN0KS5tYXAod29yZCA9PiAoXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17d29yZC5pZH0gdGltZW91dD17NTAwfSBjbGFzc05hbWVzPVwiaXRlbVwiPlxuICAgICAgICAgIDxXb3JkQ2FyZCB7Li4ud29yZH0gZGVsZXRlVHJhaW5pbmdXb3JkPXtkZWxldGVUcmFpbmluZ1dvcmR9IC8+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICkpfVxuICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICApO1xufTtcbiIsImltcG9ydCB7IFRyYWluaW5nIH0gZnJvbSAnLi9UcmFpbmluZyc7XG5cbmV4cG9ydCB7IFRyYWluaW5nIH07XG5leHBvcnQgZGVmYXVsdCBUcmFpbmluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=