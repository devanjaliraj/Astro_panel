/*! For license information please see 189.8daaf80f.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[189],{1969:function(t,e,r){"use strict";r.r(e);var n=r(75),a=r(13),i=r(14),o=r(16),c=r(15),l=r(0),u=r.n(l),s=r(1092),f=r(1090),h=r(1091),d=r(180),p=r(1095),g=r(791),m=r(794),v=r(792),y=r(790),w=r(798),E=r(57),b=r(817),S=r(178),x=r(446),N=r(274),L=r(126);r(818);function P(){P=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),c=new L(a||[]);return n(o,"_invoke",{value:b(t,r,c)}),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var f={};function h(){}function d(){}function p(){}var g={};l(g,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(z([])));v&&v!==e&&r.call(v,i)&&(g=v);var y=p.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,i){function o(){return new e((function(a,o){!function n(a,i,o,c){var l=s(t[a],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(f).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function b(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return k()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=S(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new E(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=z,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var z=function(t){Object(o.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(a.a)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Descripiton",field:"desc",filter:!0,width:600,cellRendererFramework:function(t){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,t.data.desc))}},{headerName:"Actions",field:"sortorder",width:200,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(e){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(x.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var r=t.gridApi.getSelectedRows();t.runthisfunction(e.data._id),t.gridApi.updateRowData({remove:r})}}))}}]},t.onGridReady=function(e){t.gridApi=e.api,t.gridColumnApi=e.columnApi,t.setState({currenPageSize:t.gridApi.paginationGetCurrentPage()+1,getPageSize:t.gridApi.paginationGetPageSize(),totalPages:t.gridApi.paginationGetTotalPages()})},t.updateSearchQuery=function(e){t.gridApi.setQuickFilter(e)},t.filterSize=function(e){t.gridApi&&(t.gridApi.paginationSetPageSize(Number(e)),t.setState({currenPageSize:e,getPageSize:e}))},t}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=this;L.a.get("/admin/allnotification").then((function(e){var r=e.data.data;JSON.stringify(r),t.setState({rowData:r})})).catch((function(t){console.log(t.response)}))}},{key:"runthisfunction",value:function(){var t=Object(n.a)(P().mark((function t(e){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,L.a.get("/admin/deletenotification/".concat(e)).then((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,r=e.rowData,n=e.columnDefs,a=e.defaultColDef;return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{className:"overflow-hidden agGrid-card"},u.a.createElement(f.a,{className:"m-2"},u.a.createElement(h.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Notification List")),u.a.createElement(h.a,null,u.a.createElement(E.b,{render:function(t){var e=t.history;return u.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return e.push("/app/notification/Addnotification")}},"Add Notification")}}))),u.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(g.a,{className:"p-1 ag-dropdown"},u.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(N.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(20)}},"20"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(50)}},"50"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(100)}},"100"),u.a.createElement(y.a,{tag:"div",onClick:function(){return t.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(e){return t.updateSearchQuery(e.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return t.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(S.a.Consumer,null,(function(e){return u.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:t.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:t.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})}))))))}}]),r}(u.a.Component);e.default=z}}]);
//# sourceMappingURL=189.8daaf80f.chunk.js.map