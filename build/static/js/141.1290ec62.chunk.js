(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[141],{1408:function(t,e,a){"use strict";a.r(e);var n=a(13),o=a(14),l=a(16),r=a(15),c=a(0),s=a.n(c),i=(a(975),a(41)),u=a.n(i),d=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var o;return Object(n.a)(this,a),(o=e.call(this,t)).state={astroChatList:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("astroId");console.log(e),u.a.get("http://13.233.228.168:8000/user/astrogetRoomid/".concat(e)).then((function(e){console.log("&&&&&",e.data.data),t.setState({astroChatList:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state.astroChatList;return s.a.createElement("ul",null,e.length?e.map((function(e,a){var n,o;return s.a.createElement("li",null,s.a.createElement("div",{className:"imglf",onClick:function(){return t.props.getChatRoomId(e)}},s.a.createElement("img",{src:null===(n=e.userid)||void 0===n?void 0:n.userimg,className:"app-img",alt:""})),s.a.createElement("div",{className:"lst-con"},s.a.createElement("h5",null,null===(o=e.userid)||void 0===o?void 0:o.fullname," "),s.a.createElement("p",null,e.msg)))})):null)}}]),a}(s.a.Component);e.default=d},975:function(t,e,a){}}]);
//# sourceMappingURL=141.1290ec62.chunk.js.map