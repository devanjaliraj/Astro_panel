(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[85],{1659:function(e,n){!function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(e,n){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var t=e.querySelector(".line-numbers-rows");if(t){var a=parseInt(e.getAttribute("data-start"),10)||1,l=a+(t.children.length-1);n<a&&(n=a),n>l&&(n=l);var r=n-a;return t.children[r]}}},resize:function(e){a([e])},assumeViewportIndependence:!0},t=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&t===window.innerWidth||(t=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))})),Prism.hooks.add("complete",(function(n){if(n.code){var t=n.element,l=t.parentNode;if(l&&/pre/i.test(l.nodeName)&&!t.querySelector(".line-numbers-rows")&&Prism.util.isActive(t,"line-numbers")){t.classList.remove("line-numbers"),l.classList.add("line-numbers");var r,i=n.code.match(e),c=i?i.length+1:1,o=new Array(c+1).join("<span></span>");(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=o,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),n.element.appendChild(r),a([l]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function a(n){if(0!=(n=n.filter((function(e){var n=function(e){if(!e)return null;return window.getComputedStyle?getComputedStyle(e):e.currentStyle||null}(e)["white-space"];return"pre-wrap"===n||"pre-line"===n}))).length){var t=n.map((function(n){var t=n.querySelector("code"),a=n.querySelector(".line-numbers-rows");if(t&&a){var l=n.querySelector(".line-numbers-sizer"),r=t.textContent.split(e);l||((l=document.createElement("span")).className="line-numbers-sizer",t.appendChild(l)),l.innerHTML="0",l.style.display="block";var i=l.getBoundingClientRect().height;return l.innerHTML="",{element:n,lines:r,lineHeights:[],oneLinerHeight:i,sizer:l}}})).filter(Boolean);t.forEach((function(e){var n=e.sizer,t=e.lines,a=e.lineHeights,l=e.oneLinerHeight;a[t.length-1]=void 0,t.forEach((function(e,t){if(e&&e.length>1){var r=n.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else a[t]=l}))})),t.forEach((function(e){for(var n=e.sizer,t=e.lineHeights,a=0,l=0;l<t.length;l++)void 0===t[l]&&(t[l]=n.children[a++].getBoundingClientRect().height)})),t.forEach((function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach((function(e,n){t.children[n].style.height=e+"px"}))}))}}}()},1660:function(e,n,t){},1661:function(e,n){!function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document&&document.querySelector){var e=/\n(?!$)/g,n=function(){var e;return function(){if("undefined"===typeof e){var n=document.createElement("div");n.style.fontSize="13px",n.style.lineHeight="1.5",n.style.padding="0",n.style.border="0",n.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(n),e=38===n.offsetHeight,document.body.removeChild(n)}return e}}(),t=!0;Prism.plugins.lineHighlight={highlightLines:function(a,c,o){var s=(c="string"===typeof c?c:a.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),u=+a.getAttribute("data-line-offset")||0,m=(n()?parseInt:parseFloat)(getComputedStyle(a).lineHeight),d=Prism.util.isActive(a,"line-numbers"),p=a.querySelector("code"),h=d?a:p||a,g=[],f=p.textContent.match(e),E=f?f.length+1:1,b=p&&h!=p?function(e,n){var t=getComputedStyle(e),a=getComputedStyle(n);function l(e){return+e.substr(0,e.length-2)}return n.offsetTop+l(a.borderTopWidth)+l(a.paddingTop)-l(t.paddingTop)}(a,p):0;s.forEach((function(e){var n=e.split("-"),t=+n[0],l=+n[1]||t;if(!((l=Math.min(E+u,l))<t)){var r=a.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(g.push((function(){r.setAttribute("aria-hidden","true"),r.setAttribute("data-range",e),r.className=(o||"")+" line-highlight"})),d&&Prism.plugins.lineNumbers){var i=Prism.plugins.lineNumbers.getLine(a,t),c=Prism.plugins.lineNumbers.getLine(a,l);if(i){var s=i.offsetTop+b+"px";g.push((function(){r.style.top=s}))}if(c){var p=c.offsetTop-i.offsetTop+c.offsetHeight+"px";g.push((function(){r.style.height=p}))}}else g.push((function(){r.setAttribute("data-start",String(t)),l>t&&r.setAttribute("data-end",String(l)),r.style.top=(t-u-1)*m+b+"px",r.textContent=new Array(l-t+2).join(" \n")}));g.push((function(){r.style.width=a.scrollWidth+"px"})),g.push((function(){h.appendChild(r)}))}}));var y=a.id;if(d&&Prism.util.isActive(a,"linkable-line-numbers")&&y){r(a,"linkable-line-numbers")||g.push((function(){a.classList.add("linkable-line-numbers")}));var v=parseInt(a.getAttribute("data-start")||"1");l(".line-numbers-rows > span",a).forEach((function(e,n){var a=n+v;e.onclick=function(){var e=y+"."+a;t=!1,location.hash=e,setTimeout((function(){t=!0}),1)}}))}return function(){g.forEach(i)}}};var a=0;Prism.hooks.add("before-sanity-check",(function(e){var n=e.element.parentElement;if(c(n)){var t=0;l(".line-highlight",n).forEach((function(e){t+=e.textContent.length,e.parentNode.removeChild(e)})),t&&/^(?: \n)+$/.test(e.code.slice(-t))&&(e.code=e.code.slice(0,-t))}})),Prism.hooks.add("complete",(function e(n){var t=n.element.parentElement;if(c(t)){clearTimeout(a);var l=Prism.plugins.lineNumbers,i=n.plugins&&n.plugins.lineNumbers;if(r(t,"line-numbers")&&l&&!i)Prism.hooks.add("line-numbers",e);else Prism.plugins.lineHighlight.highlightLines(t)(),a=setTimeout(o,1)}})),window.addEventListener("hashchange",o),window.addEventListener("resize",(function(){l("pre").filter(c).map((function(e){return Prism.plugins.lineHighlight.highlightLines(e)})).forEach(i)}))}function l(e,n){return Array.prototype.slice.call((n||document).querySelectorAll(e))}function r(e,n){return e.classList.contains(n)}function i(e){e()}function c(e){return!(!e||!/pre/i.test(e.nodeName))&&(!!e.hasAttribute("data-line")||!(!e.id||!Prism.util.isActive(e,"linkable-line-numbers")))}function o(){var e=location.hash.slice(1);l(".temporary.line-highlight").forEach((function(e){e.parentNode.removeChild(e)}));var n=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(n&&!document.getElementById(e)){var a=e.slice(0,e.lastIndexOf(".")),r=document.getElementById(a);if(r)r.hasAttribute("data-line")||r.setAttribute("data-line",""),Prism.plugins.lineHighlight.highlightLines(r,n,"temporary ")(),t&&document.querySelector(".temporary.line-highlight").scrollIntoView()}}}()},1662:function(e,n,t){},2109:function(e,n,t){"use strict";t.r(n);var a=t(13),l=t(14),r=t(16),i=t(15),c=t(0),o=t.n(c),s=t(1093),u=t(1094),m=t(796),d=t(1095),p=t(1096),h=t(1097),g=t(1098),f=t(800),E=t.n(f),b=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Basic Usage")),o.a.createElement(g.a,null,o.a.createElement("p",null,"First You will need to import prism."),o.a.createElement("p",null,"Prism does its best to encourage good authoring practices. Therefore, it only works with",o.a.createElement("code",null,"&ltcode&gt"),"elements, since marking up code without a"," ",o.a.createElement("code",null,"&ltcode&gt "),"element is semantically invalid.",o.a.createElement("a",{href:"http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element",target:"_blank",rel:"noopener noreferrer"},"According to the HTML5 spec"),", the recommended way to define a code language is a"," ",o.a.createElement("code",null,"language-xxxx"),"class, which is what Prism uses. To make things easier however, Prism assumes that this language definition is inherited. Therefore, if multiple ",o.a.createElement("code",null,"&ltcode&gt "),"elements have the same language, you can add the",o.a.createElement("code",null,"language-xxxx"),"class on one of their common ancestors. This way, you can also define a document-wide default language, by adding a ",o.a.createElement("code",null,"language-xxxx"),"class on the",o.a.createElement("code",null,"&ltbody&gt "),"or ",o.a.createElement("code",null,"&lthtml&gt"),"element."," "),o.a.createElement("p",null,"If you want to opt-out of highlighting for a"," ",o.a.createElement("code",null,"&ltcode&gt"),"element that is a descendant of an element with a declared code language, you can add the class ",o.a.createElement("code",null,"language-none"),"to it (or any non-existing language, really)."),o.a.createElement("p",null,"The"," ",o.a.createElement("a",{href:"https://www.w3.org/TR/html5/grouping-content.html#the-pre-element",target:"_blank",rel:"noopener noreferrer"},"recommended way to mark up a code block"),"(both for semantics and for Prism) is a ",o.a.createElement("code",null,"&ltpre&gt"),"element with a ",o.a.createElement("code",null,"&ltcode&gt"),"element inside, like so:"),o.a.createElement("p",null,"code:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    p {\n        color: red\n      }\n  </code>\n</pre>\n  ')),o.a.createElement("p",{className:"my-1"},"Output"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\np {\n  color: red\n}\n                ")),o.a.createElement("p",{className:"mt-1"},"If you use that pattern, the ",o.a.createElement("code",null,"&ltpre&gt"),"will automatically get the ",o.a.createElement("code",null,"language-xxxx"),"class (if it doesn't already have it) and will be styled as a code block.")))}}]),t}(o.a.Component),y=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Examples")),o.a.createElement(g.a,null,o.a.createElement("h5",{className:"font-weight-600"},"HTML Markup"),o.a.createElement("p",null,"Use the following code to use HTML syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-html">\n    HTML CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<Media>\n  <Media left href="#">\n    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />\n  </Media>\n  <Media body>\n    <Media heading>\n      Media heading\n    </Media>\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.\n  </Media>\n</Media>\n\n      ')),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"CSS Markup"),o.a.createElement("p",null,"Use the following code to use CSS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    CSS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\na:active {\n  outline: 0\n}\n\na:hover {\n  outline: 0\n}\n\nabbr[title] {\n  border-bottom: 1px dotted\n}\n\nb, strong {\n  font-weight: bold\n}\n\ndfn {\n  font-style: italic\n}\n\nh1 {\n  font-size: 2em\n  margin: 0.67em 0\n}\n          ")),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"JS Markup"),o.a.createElement("p",null,"Use the following code to use JS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-js">\n    JS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-javascript"},"\ncomponentDidMount() {\n  this.setState({\n    item : true\n  })\n}\n              "))))}}]),t}(o.a.Component),v=(t(1659),t(1660),function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Line Numbers")),o.a.createElement(g.a,null,o.a.createElement("p",null,"Line number at the beginning of code lines."),o.a.createElement("p",null,"Obviously, this is supposed to work only for code blocks (",o.a.createElement("code",null,"&ltpre&gt &ltcode&gt"),") and not for inline code. Add class line-numbers to your desired ",o.a.createElement("code",null,"&ltpre&gt")," and line-numbers plugin will take care."),o.a.createElement("p",null,"Optional: You can specify the data-start (Number) attribute on the"," ",o.a.createElement("code",null,"&ltpre&gt")," element. It will shift the line counter."),o.a.createElement("p",null,"usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre class="line-numbers">\n  <code class="language-javascript">\n   Code here...\n  </code>\n</pre>\n    ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{className:"line-numbers"},o.a.createElement("code",{className:"language-javascript"}," componentDidMount = () => {\n    if (typeof self==='undefined' || !self.Prism || !self.document) {\n      return\n    }\n  }"))))}}]),t}(o.a.Component)),w=(t(1661),t(1662),function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Line Highlight")),o.a.createElement(g.a,null,o.a.createElement("p",null,"Highlights specific lines and/or line ranges."),o.a.createElement("p",null,"You specify the lines to be highlighted through the"," ",o.a.createElement("em",null,"data-line")," attribute on the",o.a.createElement("code",null,"&ltpre&gt ")," element, in the following simple format:"),o.a.createElement("ul",null,o.a.createElement("li",null,"A single number refers to the line with that number"),o.a.createElement("li",null,"Ranges are denoted by two numbers, separated with a hyphen (-)"),o.a.createElement("li",null,"Multiple line numbers or ranges are separated by commas."),o.a.createElement("li",null,"Whitespace is allowed anywhere and will be stripped off.")),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre data-line="2, 4, 8-10">\n  <code class="language-css">\n    Your Code\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{"data-line":"2, 4, 8-10"},o.a.createElement("code",{className:"language-css"},"\npre.line-numbers {\n  position: relative\n  padding-left: 3.8em\n  counter-reset: linenumber\n}\n\npre.line-numbers > code {\n  position: relative\n}\n  "))))}}]),t}(o.a.Component)),k=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){E.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{breadCrumbTitle:"Syntax Highlighter",breadCrumbParent:"Content",breadCrumbActive:"Syntax Highlighter"}),o.a.createElement(s.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement(b,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(y,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(v,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(w,null))))}}]),t}(o.a.Component);n.default=k}}]);
//# sourceMappingURL=85.91b754d5.chunk.js.map