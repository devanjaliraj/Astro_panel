(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[74,190],{1065:function(t,e,a){"use strict";var s=a(1066),i=a.n(s),r=a(68),n=a.n(r),o=a(10),l=a.n(o),c=a(0),h=a.n(c),u=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},p={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},b={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},f={zIndex:1,position:"fixed",top:0,bottom:0},m=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(l()(l()(a))),a.onTouchStart=a.onTouchStart.bind(l()(l()(a))),a.onTouchMove=a.onTouchMove.bind(l()(l()(a))),a.onTouchEnd=a.onTouchEnd.bind(l()(l()(a))),a.onScroll=a.onScroll.bind(l()(l()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(l()(l()(a))),a}n()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},a.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},a.saveSidebarRef=function(t){this.sidebar=t},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var t,e=i()({},d,this.props.styles.sidebar),a=i()({},p,this.props.styles.content),s=i()({},b,this.props.styles.overlay),r=this.state.dragSupported&&this.props.touch,n=this.isTouching(),o={className:this.props.rootClassName,style:i()({},u,this.props.styles.root),role:"navigation",id:this.props.rootId},l=this.props.shadow&&(n||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",l&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",l&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),n){var c=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-c)+"%)",e.WebkitTransform="translateX("+100*(1-c)+"%)"):(e.transform="translateX(-"+100*(1-c)+"%)",e.WebkitTransform="translateX(-"+100*(1-c)+"%)"),s.opacity=c,s.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",s.opacity=1,s.visibility="visible");if(!n&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",a.transition="none",s.transition="none"),r)if(this.props.open)o.onTouchStart=this.onTouchStart,o.onTouchMove=this.onTouchMove,o.onTouchEnd=this.onTouchEnd,o.onTouchCancel=this.onTouchEnd,o.onScroll=this.onScroll;else{var m=i()({},f,this.props.styles.dragHandle);m.width=this.props.touchHandleWidth,this.props.pullRight?m.right=0:m.left=0,t=h.a.createElement("div",{style:m,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return h.a.createElement("div",o,h.a.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),h.a.createElement("div",{className:this.props.overlayClassName,style:s,onClick:this.overlayClicked,id:this.props.overlayId}),h.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},t,this.props.children))},e}(c.Component);m.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.a=m},1066:function(t,e,a){var s=a(20);t.exports=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach((function(e){s(t,e,a[e])}))}return t},t.exports.__esModule=!0,t.exports.default=t.exports},1247:function(t,e,a){},1363:function(t,e,a){"use strict";a.r(e);var s=a(13),i=a(14),r=a(16),n=a(15),o=a(0),l=a.n(o),c=a(193),h=a(77),u=a.n(h),d=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={activeUser:null},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this,e=this.state.activeUser;return l.a.createElement("div",{className:"user-profile-sidebar ".concat(this.props.receiverProfile?"show":null)},l.a.createElement("header",{className:"user-profile-header"},l.a.createElement("span",{className:"close-icon",onClick:function(){return t.props.handleReceiverSidebar("close")}},l.a.createElement(c.a,{size:24})),l.a.createElement("div",{className:"header-profile-sidebar"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:null!==e?e.photoURL:null,alt:null!==e?e.displayName:null,height:"66",width:"66"}),l.a.createElement("span",{className:"".concat(null!==e&&"do not disturb"===e.status?"avatar-status-busy":null!==e&&"away"===e.status?"avatar-status-away":null!==e&&"offline"===e.status?"avatar-status-offline":"avatar-status-online"," avatar-status-lg")})),l.a.createElement("h4",{className:"chat-user-name"},null!==e?e.displayName:null))),l.a.createElement(u.a,{className:"user-profile-sidebar-area p-2",options:{wheelPropagation:!1}},l.a.createElement("h6",null,"About"),l.a.createElement("p",null,null!==e?e.about:null)))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.activeUser!==e.activeUser?{activeUser:t.activeUser}:null}}]),a}(l.a.Component);e.default=d},1364:function(t,e,a){"use strict";a.r(e);var s=a(13),i=a(14),r=a(16),n=a(15),o=a(0),l=a.n(o),c=a(193),h=a(798),u=a(77),d=a.n(u),p=a(25),b=a(887),f=a(30),m=a(79),v=a.n(m),S=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={value:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",status:null},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this,e=this.state.status;return l.a.createElement("div",{className:"chat-profile-sidebar ".concat(this.props.userProfile?"show":null)},l.a.createElement("header",{className:"chat-profile-header"},l.a.createElement("div",{className:"close-icon",onClick:function(){return t.props.handleUserSidebar("close")}},l.a.createElement(c.a,{size:24})),l.a.createElement("div",{className:"header-profile-sidebar"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:v.a,alt:"User Profile",height:"66",width:"66"}),l.a.createElement("span",{className:"".concat("offline"===e?"avatar-status-offline":"dnd"===e?"avatar-status-busy":"away"===e?"avatar-status-away":"avatar-status-online"," avatar-status-lg")})),l.a.createElement("h4",{className:"chat-user-name"},"John Doe"))),l.a.createElement("div",{className:"profile-sidebar-area"},l.a.createElement(d.a,{className:"scroll-area",options:{wheelPropagation:!1}},l.a.createElement("h6",null,"About"),l.a.createElement("div",{className:"about-user"},l.a.createElement(h.a,{type:"textarea",name:"text",id:"userAbout",rows:"5",value:this.state.value,maxLength:"120",onChange:function(e){return t.setState({value:e.target.value})}}),l.a.createElement("small",{className:"counter-value float-right"},"".concat(this.state.value.length," / 120"))),l.a.createElement("h3",{className:"mt-3"},"Status"),l.a.createElement("ul",{className:"list-unstyled user-status mb-0"},l.a.createElement("li",{className:"pb-50"},l.a.createElement(f.a,{label:"Active",color:"success",defaultChecked:!0,name:"userStatus",onClick:function(){return t.props.changeStatus("active")}})),l.a.createElement("li",{className:"pb-50"},l.a.createElement(f.a,{label:"Do Not Disturb",color:"danger",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("dnd")}})),l.a.createElement("li",{className:"pb-50"},l.a.createElement(f.a,{label:"Away",color:"warning",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("away")}})),l.a.createElement("li",{className:"pb-50"},l.a.createElement(f.a,{label:"Offline",color:"secondary",defaultChecked:!1,name:"userStatus",onClick:function(){return t.props.changeStatus("offline")}}))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.chat.status!==e.status?{status:t.chat.status}:null}}]),a}(l.a.Component);e.default=Object(p.b)((function(t){return{chat:t.chatApp.chats}}),{changeStatus:b.a})(S)},1968:function(t,e,a){"use strict";a.r(e);var s=a(13),i=a(14),r=a(16),n=a(15),o=a(0),l=a.n(o),c=a(1065),h=a(178),u=a(1555),d=a(1248),p=a(1363),b=a(1364),f=(a(1247),window.matchMedia("(min-width: 992px)")),m=function(t){Object(r.a)(a,t);var e=Object(n.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={userProfile:!1,sidebarDocked:f.matches,sidebarOpen:!1,activeChatID:null,activeChat:null,activeUser:null,receiverProfile:!1,userSidebar:!1},t.handleUserSidebar=function(e){"open"===e?t.setState({userProfile:!0}):t.setState({userProfile:!1})},t.handleActiveChat=function(e,a,s){t.setState({activeChatID:e,activeUser:a,activeChat:s})},t.onSetSidebarOpen=function(e){t.setState({sidebarOpen:e})},t.mediaQueryChanged=function(){t.setState({sidebarDocked:f.matches,sidebarOpen:!1})},t.handleReceiverSidebar=function(e){"open"===e?t.setState({receiverProfile:!0}):t.setState({receiverProfile:!1})},t.handleUserSidebar=function(e){"open"===e?t.setState({userSidebar:!0}):t.setState({userSidebar:!1})},t}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){f.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){f.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"chat-application position-relative"},l.a.createElement("div",{className:"chat-overlay ".concat(this.state.receiverProfile||this.state.userSidebar||this.state.sidebarOpen?"show":"d-none"),onClick:function(){t.handleReceiverSidebar("close"),t.handleUserSidebar("close"),t.onSetSidebarOpen(!1)}}),l.a.createElement(h.a.Consumer,null,(function(e){return l.a.createElement(c.a,{sidebar:l.a.createElement(u.default,{activeChatID:t.state.activeChatID,handleActiveChat:t.handleActiveChat,handleUserSidebar:t.handleUserSidebar,mainSidebar:t.onSetSidebarOpen}),docked:t.state.sidebarDocked,open:t.state.sidebarOpen,touch:!1,sidebarClassName:"chat-sidebar",contentClassName:"sidebar-children d-none",pullRight:"rtl"===e.state.direction},'""')})),l.a.createElement(b.default,{userProfile:this.state.userSidebar,handleUserSidebar:this.handleUserSidebar}),l.a.createElement(d.default,{activeChat:this.state.activeChat,activeUser:this.state.activeUser,handleReceiverSidebar:this.handleReceiverSidebar,mainSidebar:this.onSetSidebarOpen,mql:f,handleActiveChat:this.handleActiveChat}),l.a.createElement(p.default,{activeUser:this.state.activeUser,receiverProfile:this.state.receiverProfile,handleReceiverSidebar:this.handleReceiverSidebar}))}}]),a}(l.a.Component);e.default=m}}]);
//# sourceMappingURL=74.942c77fe.chunk.js.map