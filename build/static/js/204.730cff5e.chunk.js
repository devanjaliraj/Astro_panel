(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[204],{2049:function(e,a,t){"use strict";t.r(a);var l=t(13),r=t(14),n=t(16),m=t(15),o=t(0),c=t.n(o),s=(t(1945),t(1946),t(1947)),i=t.n(s),p=t(961),u=t(1090),E=t(1091),d=t(1001),b=[{value:"Male",label:"Male"},{value:"Female",label:"Female"}],f=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],v=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={name:"React"},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.stepper=new i.a(document.querySelector("#stepper1"),{linear:!1,animation:!0})}},{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this,a=this.state.selectedOption;return c.a.createElement("section",{className:"",style:{width:"100%",backgroundColor:"#fff",padding:"50px 0px",height:"100%",backgroundSize:"cover"}},c.a.createElement(p.a,null,c.a.createElement("section",{className:"ptb-30"},c.a.createElement("div",{className:"stp-1"},c.a.createElement("h2",{className:"th-1"},"AstroVipra"),c.a.createElement("h4",{className:"th-2"},"Astrologer Register"),c.a.createElement("div",{id:"stepper1",class:"bs-stepper"},c.a.createElement("div",{class:"bs-stepper-header"},c.a.createElement("div",{class:"step","data-target":"#test-l-1"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"1"),c.a.createElement("span",{class:"bs-stepper-label"},"Personal Details"))),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"step","data-target":"#test-l-2"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"2"),c.a.createElement("span",{class:"bs-stepper-label"},"Skill Details"))),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"step","data-target":"#test-l-3"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"3"),c.a.createElement("span",{class:"bs-stepper-label"},"Other Details")))),c.a.createElement("div",{class:"bs-stepper-content"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("div",{id:"test-l-1",class:"content"},c.a.createElement(u.a,null,c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Name*"),c.a.createElement("input",{type:"email",class:"form-control",placeholder:"Name"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Email address*"),c.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1",placeholder:"Enter email"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Mobile Number*"),c.a.createElement("input",{type:"text",class:"form-control",id:"exampleInputEmail1",placeholder:"223232323232"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Upload Image*"),c.a.createElement("input",{type:"file",class:"form-control",id:""})))),c.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-l-2",class:"content"},c.a.createElement(u.a,null,c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Gender*"),c.a.createElement(d.a,{value:a,options:b}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"DOB*"),c.a.createElement("input",{type:"date",class:"form-control",id:"",placeholder:""}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Primary Skills*"),c.a.createElement(d.a,{defaultValue:[f[2],f[3]],isMulti:!0,name:"colors",options:f,className:"basic-multi-select",classNamePrefix:"select"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"All Skills*"),c.a.createElement(d.a,{defaultValue:[f[2],f[3]],isMulti:!0,name:"colors",options:f,className:"basic-multi-select",classNamePrefix:"select"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Language*"),c.a.createElement(d.a,{defaultValue:[f[2],f[3]],isMulti:!0,name:"colors",options:f,className:"basic-multi-select",classNamePrefix:"select"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Experience in years*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"1 yerars"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"How many hours you can contribute daily?*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"2 hour"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Where did you hear about Astrotalk?*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Eg: Youtube, Facebook"}))),c.a.createElement(E.a,{md:"12"},c.a.createElement("p",{className:"mb-0 mt-10"},"Are you working on any other online platform?*"),c.a.createElement(u.a,null,c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Name of platform"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Company Name"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Monthly Earning"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Eg: 20,000"})))))),c.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-l-3",class:"content"},c.a.createElement(u.a,null,c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Why do you think we should onboard you?*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Why we should onboard you"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"What is a suitable time for interview*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Suitable time for an interview"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Which city do you currently live in?"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"City"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Main source of business (other than astrology)*"),c.a.createElement(d.a,{value:a,options:b}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Select your highest qualification*"),c.a.createElement(d.a,{value:a,options:b}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Degree/Diploma*"),c.a.createElement(d.a,{value:a,options:b}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"College/School/University*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Enter your College/School/University name"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"From where did you learn Astrology?"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Where did you learn an Astrology"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Instagram profile link"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Please let us know your Instagram profile"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Facebook profile link"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Please let us know your Facebook profile"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"LinkedIn profile link"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Please let us know your LinkedIn profile"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Youtube channel link"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Please let us know your Youtube channel"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Name of the person who referred you?"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Enter name"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Minimum Earning Expectation from AstroVipra*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Minimum monthly earning expectation"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Website profile link"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Enter your website url"}))),c.a.createElement(E.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Maximum Earning Expectation from AstroVipra*"),c.a.createElement("input",{type:"text",class:"form-control",id:"",placeholder:"Maximum monthly earning expectation"}))),c.a.createElement(E.a,{md:"12"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",{for:"exampleInputEmail1"},"Long bio*"),c.a.createElement("textarea",{type:"text",class:"form-control",id:"",placeholder:"Please let us know more about you"})))),c.a.createElement("p",{className:"ptb-10"},"You can reach out to us for Astrologer onboarding support team at onboarding@astrovipra.com in case of any issues or queries."),c.a.createElement("button",{type:"submit",class:"btn btn-primary mt-5"},"Submit")))))))))}}]),t}(c.a.Component);a.default=v}}]);
//# sourceMappingURL=204.730cff5e.chunk.js.map