(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{2078:function(e,t,a){"use strict";a.r(t);var n=a(13),s=a(14),l=a(16),i=a(15),o=a(0),r=a.n(o),c=a(1090),u=a(1091),g=a(796),m=a(1092),p=a(1093),f=a(1094),d=a(804),v=a(787),h=a(788),b=a(1095),E=a(805),C=a(806),S=a(318),y=a(290),T=a(4),j=a.n(T),N=a(32),k=a(188),x=a(35),O=a.n(x),A=a(27),w=a(77),I=a.n(w),D=a(233),R=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onSuggestionItemClick=function(e,t){s.props.onSuggestionClick&&s.props.onSuggestionClick(t),s.setState({activeSuggestion:0,showSuggestions:!1,userInput:t.currentTarget.innerText}),e&&A.a.push(e)},s.onSuggestionItemHover=function(e){s.setState({activeSuggestion:e})},s.onChange=function(e){var t=e.currentTarget.value;s.setState({activeSuggestion:0,showSuggestions:!0,userInput:t}),e.target.value<1&&s.setState({showSuggestions:!1})},s.onInputClick=function(e){e.stopPropagation()},s.onKeyDown=function(e){var t=s.state,a=t.activeSuggestion,n=t.showSuggestions,l=t.userInput,i=s.props.filterKey,o=O.a.findDOMNode(s.suggestionList);if(38===e.keyCode&&0!==a)s.setState({activeSuggestion:a-1}),e.target.value.length>-1&&null!==o&&a<=s.filteredData.length/2&&(o.scrollTop=0);else if(40===e.keyCode&&a<s.filteredData.length-1)s.setState({activeSuggestion:a+1}),e.target.value.length>-1&&null!==o&&a>=s.filteredData.length/2&&(o.scrollTop=o.scrollHeight);else if(27===e.keyCode)s.setState({showSuggestions:!1,userInput:""});else{if(13!==e.keyCode||!n)return;s.onSuggestionItemClick(s.filteredData[a].link,e),s.setState({userInput:s.filteredData[a][i],showSuggestions:!1})}void 0!==s.props.onKeyDown&&null!==s.props.onKeyDown&&s.props.onKeyDown&&s.props.onKeyDown(e,l)},s.renderGroupedSuggestion=function(e){var t=s.props,a=t.filterKey,n=t.customRender,l=Object(k.a)(s),i=l.onSuggestionItemClick,o=l.onSuggestionItemHover,c=l.state,u=c.activeSuggestion,g=c.userInput;return e.map((function(e,t){return function(e,t){return n?n?n(e,t,s.filteredData,u,i,o,g):null:r.a.createElement("li",{className:j()("suggestion-item",{active:s.filteredData.indexOf(e)===u}),key:e[a],onClick:function(t){return i(e.link,t)},onMouseEnter:function(){s.onSuggestionItemHover(s.filteredData.indexOf(e))}},e[a])}(e,t)}))},s.renderUngroupedSuggestions=function(){var e,t=s.props,a=t.filterKey,n=t.suggestions,l=t.customRender,i=t.suggestionLimit,o=Object(k.a)(s),c=o.onSuggestionItemClick,u=o.onSuggestionItemHover,g=o.state,m=g.activeSuggestion,p=g.userInput;s.filteredData=[];var f=n.filter((function(e){var t=e[a].toLowerCase().startsWith(p.toLowerCase()),n=e[a].toLowerCase().includes(p.toLowerCase());return t||(!t&&n?n:null)})).slice(0,i);return(e=s.filteredData).push.apply(e,Object(N.a)(f)),f.map((function(e,t){return l?l?l(e,t,s.filteredData,m,c,u,p):null:r.a.createElement("li",{className:j()("suggestion-item",{active:s.filteredData.indexOf(e)===m}),key:e[a],onClick:function(t){return c(e.link?e.link:null,t)},onMouseEnter:function(){return s.onSuggestionItemHover(s.filteredData.indexOf(e))}},e[a])}))},s.renderSuggestions=function(){var e=s.props,t=e.filterKey,a=e.grouped,n=e.filterHeaderKey,l=e.suggestions,i=Object(k.a)(s),o=i.renderUngroupedSuggestions,c=i.state.userInput;return void 0!==a&&null!==a&&a?(s.filteredData=[],l.map((function(e){var a,l=e.data.filter((function(e){var a=e[t].toLowerCase().startsWith(c.toLowerCase()),n=e[t].toLowerCase().includes(c.toLowerCase());return a||(!a&&n?n:null)})).slice(0,e.searchLimit);return(a=s.filteredData).push.apply(a,Object(N.a)(l)),r.a.createElement(r.a.Fragment,{key:e[n]},r.a.createElement("li",{className:"suggestion-item suggestion-title text-primary text-bold-600"},e[n]),l.length?s.renderGroupedSuggestion(l):r.a.createElement("li",{className:"suggestion-item no-result"},r.a.createElement(D.a,{size:15})," ",r.a.createElement("span",{className:"align-middle ml-50"},"No Result")))}))):o()},s.clearInput=function(e){s.props.clearInput&&!e&&s.setState({userInput:""})},s.handleExtenalClick=function(e){var t=s.refs.container,a=e.target;a===t||t.contains(a)||(s.setState({showSuggestions:!1}),s.props.externalClick&&s.props.externalClick(e))},s.state={activeSuggestion:0,showSuggestions:!1,userInput:"",focused:!1,openUp:!1},s.filteredData=[],document.body.addEventListener("click",s.handleExtenalClick),s}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=O.a.findDOMNode(this.input),n=this.props,s=n.autoFocus,l=n.onSuggestionsShown,i=n.clearInput;null!==a&&s&&a.focus(),this.props.defaultSuggestions&&!1===t.showSuggestions&&this.state.focused&&this.setState({showSuggestions:!0}),!1===i&&this.state.userInput.length&&this.setState({userInput:""}),l&&this.state.showSuggestions&&l(this.state.userInput),this.props.defaultSuggestions&&!1===t.focused&&!0===this.state.focused&&this.setState({showSuggestions:!0})}},{key:"componentDidMount",value:function(){this.props.defaultSuggestions&&this.state.focused&&this.setState({showSuggestions:!0})}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleExtenalClick)}},{key:"render",value:function(){var e,t=this,a=this.onChange,n=this.onKeyDown,s=this.state,l=s.showSuggestions,i=s.userInput,o=s.openUp;return l&&(e=r.a.createElement(I.a,{className:j()("suggestions-list",{"open-up":o}),ref:function(e){return t.suggestionList=e},component:"ul",options:{wheelPropagation:!1}},this.renderSuggestions())),r.a.createElement("div",{className:"vx-autocomplete-container",ref:"container"},r.a.createElement("input",{type:"text",onChange:function(e){a(e),t.props.onChange&&t.props.onChange(e)},onKeyDown:function(e){return n(e)},value:i,className:"vx-autocomplete-search ".concat(this.props.className?this.props.className:""),placeholder:this.props.placeholder,onClick:this.onInputClick,ref:function(e){return t.input=e},onFocus:function(e){t.setState({focused:!0})},autoFocus:this.props.autoFocus,onBlur:function(e){t.props.onBlur&&t.props.onBlur(e),t.setState({focused:!1})}}),e)}}]),a}(r.a.Component),L=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteBasic extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        className="form-control" \n        filterKey="title" \n        suggestionLimit={4} \n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteBasic\n')),B=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSections extends React.Component {\n  state = {\n    suggestions: [\n      {\n        groupTitle: "1970s",\n        data: [\n          {\n            title: "C",\n          }\n        ]\n      },\n      {\n        groupTitle: "1980s",\n        data: [\n          {\n            title: "C++",\n          },\n          {\n            title: "Perl",\n          }\n        ]\n      },\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        filterHeaderKey="groupTitle"\n        grouped={true}\n      />\n    )}}\n\nexport default AutoCompleteSections\n')),M=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteAjax extends React.Component {\n  state = {\n    suggestions: []\n  }\n\n  componentDidMount() {\n    axios\n      .get("/api/autocomplete/data")\n      .then(response =>\n        this.setState({ suggestions: response.data.autoComplete })\n      )\n  }\n\n  render() {\n    return(\n        <AutoComplete suggestions={this.state.suggestions} \n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n      />\n    )}}\n\nexport default AutoCompleteAjax\n')),K=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\nimport img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"\nimport img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"\nimport img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"      \nimport img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"      \nimport img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"      \nimport img6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"      \n\nclass AutoCompleteRender extends React.Component {\n  state = {\n    suggestions: [\n      {\n        name: "Jake Shelton",\n        img: img1\n      },\n      {\n        name: "Edith Baldwin",\n        img: img2\n      },\n      {\n        name: "Jennifer Wolfe",\n        img: img3\n      },\n      {\n        name: "Emily Washington",\n        img: img4\n      },\n      {\n        name: "Heather Green",\n        img: img6\n      },\n      {\n        name: "Brian Moore",\n        img: img5\n      }\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n          suggestions={this.state.suggestions}\n          className="form-control"\n          filterKey="name"\n          customRender={(\n            suggestion,\n            i,\n            filteredData,\n            activeSuggestion,\n            onSuggestionItemClick,\n            onSuggestionItemHover\n          ) => (\n            <li\n              className={classnames("suggestion-item", {\n                active:\n                  filteredData.indexOf(suggestion) === activeSuggestion\n              })}\n              key={i}\n              onMouseEnter={() =>\n                onSuggestionItemHover(filteredData.indexOf(suggestion))\n              }\n              onClick={e => {\n                onSuggestionItemClick(null, e)\n              }}\n            >\n              <img\n                src={suggestion.img}\n                alt={suggestion.name}\n                height="32"\n                width="32"\n                className="mr-1"\n              />\n              <span>{suggestion.name}</span>\n            </li>\n          )}\n        />\n    )}}\n\nexport default AutoCompleteRender\n')),P=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteDefaultSuggestions extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={4}\n        defaultSuggestions={true}\n      />\n    )}}\n\nexport default AutoCompleteDefaultSuggestions\n')),H=r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},'import React from "react"\nimport AutoComplete from "./AutoCompleteBasic"\n\nclass AutoCompleteSearchLimit extends React.Component {\n  state = {\n    suggestions: [\n      {\n        title: "React.js"\n      },\n      {\n        title: "Angular.js"\n      },\n      {\n        title: "Javascript"\n      }\n      ...\n    ]\n  }\n\n  render() {\n    return(\n        <AutoComplete\n        suggestions={this.state.suggestions}\n        className="form-control"\n        filterKey="title"\n        suggestionLimit={2}\n      />\n    )}}\n\nexport default AutoCompleteSearchLimit\n')),z=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Basic"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'"})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},L)))))}}]),a}(r.a.Component),J=a(42),F=a.n(J),W=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("/api/autocomplete/data").then((function(t){return e.setState({suggestions:t.data.autoComplete})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Ajax"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},M)))))}}]),a}(r.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Sections"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",filterHeaderKey:"groupTitle",grouped:!0,placeholder:"Type 'c'"})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},B)))))}}]),a}(r.a.Component),G=a(97),V=a.n(G),Z=a(67),$=a.n(Z),q=a(59),Q=a.n(q),X=a(80),Y=a.n(X),_=a(179),ee=a.n(_),te=a(48),ae=a.n(te),ne=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[{name:"Jake Shelton",img:V.a},{name:"Edith Baldwin",img:$.a},{name:"Jennifer Wolfe",img:Q.a},{name:"Emily Washington",img:Y.a},{name:"Heather Green",img:ae.a},{name:"Brian Moore",img:ee.a}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Custom Render"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"name",placeholder:"Type 'a'",customRender:function(e,t,a,n,s,l){return r.a.createElement("li",{className:j()("suggestion-item",{active:a.indexOf(e)===n}),key:t,onMouseEnter:function(){return l(a.indexOf(e))},onClick:function(e){s(null,e)}},r.a.createElement("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"mr-1"}),r.a.createElement("span",null,e.name))}})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},K)))))}}]),a}(r.a.Component),se=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Default Suggestions"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,null,r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:4,defaultSuggestions:!0,placeholder:"Type 'a'"})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},P)))))}}]),a}(r.a.Component),le=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={activeTab:"1",suggestions:[{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mb-sm-0 mb-5"},r.a.createElement(p.a,null,r.a.createElement(f.a,null,"Search Limit"),r.a.createElement("div",{className:"views"},r.a.createElement(d.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},r.a.createElement(S.a,{size:15}))),r.a.createElement(v.a,null,r.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},r.a.createElement(y.a,{size:15})))))),r.a.createElement(b.a,{className:"pb-sm-2 pb-5"},r.a.createElement(E.a,{activeTab:this.state.activeTab},r.a.createElement(C.a,{tabId:"1"},r.a.createElement(R,{suggestions:this.state.suggestions,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})),r.a.createElement(C.a,{className:"component-code",tabId:"2"},H)))))}}]),a}(r.a.Component),ie=a(800),oe=a.n(ie),re=(a(801),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){oe.a.highlightAll()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{breadCrumbTitle:"Auto Complete",breadCrumbParent:"Extra Components",breadCrumbActive:"Auto Complete"}),r.a.createElement(c.a,null,r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(z,null)),r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(U,null)),r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(W,null)),r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(ne,null)),r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(se,null)),r.a.createElement(u.a,{xl:"6",lg:"12"},r.a.createElement(le,null))))}}]),a}(r.a.Component));t.default=re},797:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),s=a.n(n).a.createContext({})},801:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript),a="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(e,t){return e=e.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return a})),RegExp(e,t)}a=n(a).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var s=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""},l=function t(a){for(var n=[],l=0;l<a.length;l++){var i=a[l],o=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===s(i.content[0].content[1])&&n.pop():"/>"===i.content[i.content.length-1].content||n.push({tagName:s(i.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===i.type&&"{"===i.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===i.type&&"}"===i.content?n[n.length-1].openedBraces--:o=!0),(o||"string"==typeof i)&&n.length>0&&0===n[n.length-1].openedBraces){var r=s(i);l<a.length-1&&("string"==typeof a[l+1]||"plain-text"===a[l+1].type)&&(r+=s(a[l+1]),a.splice(l+1,1)),l>0&&("string"==typeof a[l-1]||"plain-text"===a[l-1].type)&&(r=s(a[l-1])+r,a.splice(l-1,1),l--),a[l]=new e.Token("plain-text",r,null,r)}i.content&&"string"!=typeof i.content&&t(i.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||l(e.tokens)}))}(Prism)},804:function(e,t,a){"use strict";var n=a(5),s=a(9),l=a(0),i=a.n(l),o=a(1),r=a.n(o),c=a(4),u=a.n(c),g=a(3),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:r.a.bool,pills:r.a.bool,vertical:r.a.oneOfType([r.a.bool,r.a.string]),horizontal:r.a.string,justified:r.a.bool,fill:r.a.bool,navbar:r.a.bool,card:r.a.bool,tag:g.tagPropType,className:r.a.string,cssModule:r.a.object},f=function(e){var t=e.className,a=e.cssModule,l=e.tabs,o=e.pills,r=e.vertical,c=e.horizontal,p=e.justified,f=e.fill,d=e.navbar,v=e.card,h=e.tag,b=Object(s.a)(e,m),E=Object(g.mapToCssModules)(u()(t,d?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":l,"card-header-tabs":v&&l,"nav-pills":o,"card-header-pills":v&&o,"nav-justified":p,"nav-fill":f}),a);return i.a.createElement(h,Object(n.a)({},b,{className:E}))};f.propTypes=p,f.defaultProps={tag:"ul",vertical:!1},t.a=f},805:function(e,t,a){"use strict";var n=a(5),s=a(12),l=a(0),i=a.n(l),o=a(1),r=a.n(o),c=a(4),u=a.n(c),g=a(797),m=a(3),p={tag:m.tagPropType,activeTab:r.a.any,className:r.a.string,cssModule:r.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.tag,l=Object(m.omit)(this.props,Object.keys(p)),o=Object(m.mapToCssModules)(u()("tab-content",t),a);return i.a.createElement(g.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(s,Object(n.a)({},l,{className:o})))},t}(l.Component);t.a=f,f.propTypes=p,f.defaultProps={tag:"div"}},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(5),s=a(9),l=a(0),i=a.n(l),o=a(1),r=a.n(o),c=a(4),u=a.n(c),g=a(797),m=a(3),p=["className","cssModule","tabId","tag"],f={tag:m.tagPropType,className:r.a.string,cssModule:r.a.object,tabId:r.a.any};function d(e){var t=e.className,a=e.cssModule,l=e.tabId,o=e.tag,r=Object(s.a)(e,p),c=function(e){return Object(m.mapToCssModules)(u()("tab-pane",t,{active:l===e}),a)};return i.a.createElement(g.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(o,Object(n.a)({},r,{className:c(t)}))}))}d.propTypes=f,d.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=83.5ebb09f6.chunk.js.map