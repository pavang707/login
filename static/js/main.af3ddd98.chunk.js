(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{21:function(e,t,a){e.exports=a(62)},26:function(e,t,a){},27:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(17),i=a.n(l),c=(a(26),a(7)),r=a(8),s=a(10),m=a(9),g=(a(27),a(18)),u=a(19),d=a(20),b=a.n(d),h=a(13),f=a.n(h),E=(a(57),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={isLoggedIN:!1,isLoggedINtwitter:!1,isLoggedINgoogle:!1,isLoggedINfacebook:!1,email:"",name:"",image:"",nameF:"",nametwitter:"",imageurl:"",emailfb:""},e}return Object(r.a)(a,[{key:"render",value:function(){var e,t,a,n,l,i,c=this,r=function(e){console.log(e),c.setState({isLoggedINgoogle:!0,isLoggedIN:!0,name:e.profileObj.name,email:e.profileObj.email,image:e.profileObj.imageUrl})};return n=function(){c.setState({isLoggedIN:!1,isLoggedINgoogle:!1,isLoggedINtwitter:!1,isLoggedINfacebook:!1})},this.state.isLoggedINtwitter&&(t=o.a.createElement("div",null,o.a.createElement("h4",null,"Welcome ",this.state.nametwitter),o.a.createElement("button",{className:"btn btn-danger",onClick:n},"Logout"))),this.state.isLoggedINgoogle&&(a=o.a.createElement("div",{className:"aftergooglelogin"},o.a.createElement("h4",{style:{justifyContent:"center",margin:"0"}},"Welcome ",this.state.name),o.a.createElement("img",Object(g.a)({style:{alignItems:"center"},className:"googleimg",alt:this.state.name,src:this.state.image},"style",{width:"150px",height:"150px"})),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-danger",onClick:n,style:{marginTop:"10px",marginBottom:"10px"}},"Logout")))),this.state.isLoggedINfacebook&&(l=o.a.createElement("div",null,o.a.createElement("h4",null,"Welcome ",this.state.nameF),o.a.createElement("div",null,o.a.createElement("p",null,this.state.email)),o.a.createElement("button",{className:"btn btn-danger",onClick:n},"Logout"))),this.state.isLoggedIN||(i=o.a.createElement("div",{className:"content "},"Choose any one login method to get your Credentials"),l=o.a.createElement("div",null,o.a.createElement(f.a,{appId:"2829196113969850",autoLoad:!1,fields:"name,email,picture",callback:function(e){console.log(e),c.setState({isLoggedIN:!0,isLoggedINfacebook:!0,nameF:e.name,imageurl:e.picture,email:e.emailfb})},cssClass:"btnFacebook",icon:o.a.createElement("i",{className:"fa fa-facebook",style:{marginLeft:"5px"}}),textButton:"\xa0\xa0Sign In with Facebook"})),a=o.a.createElement(u.GoogleLogin,{clientId:"994413254701-1f6ok1focicpgreh4m2d7v2166p9urcb.apps.googleusercontent.com",render:function(e){return o.a.createElement("button",{className:"btnGoogle",onClick:e.onClick,disabled:e.disabled},o.a.createElement("i",{className:"fa fa-google-plus",style:{marginLeft:"5px"}}),o.a.createElement("span",null,"\xa0\xa0Sign In with Google"))},onSuccess:r,buttonText:"Login with Google",onFailure:r}),t=o.a.createElement(b.a,{authCallback:function(e,t){console.log(e,t),c.setState({isLoggedINtwitter:!0,isLoggedIN:!0,nametwitter:t.screen_name})},consumerKey:"W4c3Zfyt1Q1MCuzKk5ps5SuSm",consumerSecret:"JjzOVXAn56a6vuGFJzPHrc9a0alKQq1HRvG0iD1bFzcHJOy974",callbackUrl:"https://pavang707.github.io/login",children:o.a.createElement("button",{className:"btntwitter"},o.a.createElement("i",{className:"fa fa-twitter",style:{marginLeft:"5px"}}),o.a.createElement("span",null,"\xa0\xa0Sign In with Twitter"))}),e=o.a.createElement("div",{id:"lastcontent"},"By Continuing your agree to our ",o.a.createElement("b",null,"Terms and Condition"))),o.a.createElement("div",{className:"jumbotron ",id:"whole"},i,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 ",id:"cr7"},a),o.a.createElement("div",{className:"col-12 google",id:"cr7"},l),o.a.createElement("div",{className:"col-12",id:"cr7"},t),o.a.createElement("div",{id:"lastcontent"},e)))}}]),a}(n.Component)),p=(a(61),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bbt"},o.a.createElement(E,null)))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.af3ddd98.chunk.js.map