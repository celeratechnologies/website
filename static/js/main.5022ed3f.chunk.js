(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t){},101:function(e,t){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(44),c=a.n(o),r=(a(92),a(6)),s=a(7),l=a(10),p=a(8),u=a(9),m=a(11),h=a(154),d=a(155),f=a(156),v=a(159),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.data.map((function(e){return i.a.createElement("li",{align:"left"},e)})))}}]),t}(n.Component),g=a(42);g.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(g.pdfjs.version,"/pdf.worker.js");var E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={numPages:null,pageNumber:1,file:"./".concat(a.props.chip,"/").concat(a.props.file,".pdf"),size:"thumbnail"},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({size:this.props.size})}},{key:"render",value:function(){var e=this.state,t=e.pageNumber;e.numPages;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(g.Document,{file:this.state.file,onLoadSuccess:this.onDocumentLoadSuccess},i.a.createElement(g.Page,{width:this.state.size,pageNumber:t,renderMode:"svg"})))}}]),t}(n.Component),w=a(45),O=a.n(w),y=a(76),j=a.n(y),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("a",{href:j.a,download:this.props.name},"Download pdf")}}]),t}(n.Component),C=a(77),_=a.n(C),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a.setState({isDataFetched:!1,count:0}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.match.params.name,"/").concat(this.props.match.params.name,".json")).then((function(e){return e.json()})).then((function(t){console.log("data:",t),e.setState({chip_image:t.chip_image,short_description:t.short_description,long_description:t.long_description,features:t.features,applications:t.applications,components:t.components,chip_name:e.props.match.params.name,path:null,isDataFetched:!0,sections:t.sections}),void 0!==e.props.match.params.view?e.setState({current_view:e.props.match.params.view}):e.setState({current_view:"MODULEtop"})}))}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}),console.log("update"))}},{key:"render",value:function(){var e=this;return this.state.isDataFetched?i.a.createElement(h.a,null,i.a.createElement("h1",null," ",this.state.chip_name," "),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("h2",null," ",this.state.short_description," "),i.a.createElement("p",{align:"left"}," ",this.state.long_description," ")),i.a.createElement(f.a,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(v.a,{title:"Show Larger"},i.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/MODULEtop"),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Explore Schematic"))),i.a.createElement(E,{size:"400",chip:this.state.chip_name,file:"application"}),this.state.sections.map((function(t){return i.a.createElement("button",{onClick:function(){return _()(e[t],{offset:-100,align:"top",duration:500})}},"Go To ",t)})))),this.state.sections.map((function(t){return i.a.createElement("section",{className:t,ref:function(a){e[t]=a}},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("h2",{align:"left"}," ",t," "),i.a.createElement(b,{data:e.state[t.toLowerCase()]}))))})),i.a.createElement(k,{chip:this.state.chip_name})):null}}]),t}(n.Component),S=a(158),M=a(157),T=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={};return a.state.products=["Tokyo","JUNO","Yokahama","Yokosuka"],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(S.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},i.a.createElement(S.a.Brand,{href:"/"},i.a.createElement("img",{src:O.a,width:"80",height:"30",className:"d-inline-block align-top"})),i.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(v.a,{className:"mr-auto"},i.a.createElement(m.b,{to:"/about",className:"nav-link"},"About Us"),i.a.createElement(m.b,{to:"/solution",className:"nav-link"},"Solution"),i.a.createElement(M.a,{title:"Products",id:"collasible-nav-dropdown"},this.state.products.map((function(e){return i.a.createElement(m.b,{to:"/product/".concat(e,"/"),className:"nav-link"},e)}))),i.a.createElement(m.b,{to:"/news",className:"nav-link"},"News")),i.a.createElement(v.a,null,i.a.createElement(m.b,{to:"/contact",className:"nav-link"},"Contact Us"))))}}]),t}(n.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("h2",null,' "Move Fast and Build Things" '),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("h3",null,"Who"),i.a.createElement("p",null,"We are a team of accomplished technology professionals with deep experience in semiconductors, software, systems, development tools.  A common desire to re-think and re-build methods of semiconductor R&D brought us together.  We are driven by a passion to transform our own industry.")),i.a.createElement(f.a,null,i.a.createElement("h3",null,"What"),i.a.createElement("p",null,"Simply put we are developing and deploying an automated AI software-based platform that delivers custom integrated circuit designs 100X faster than legacy teams and flows.  Our focus is on analog/mixed-signal applications which have been historically resistant to automation.  We have achieved the 'impossible'.")),i.a.createElement(f.a,null,i.a.createElement("h3",null,"Why"),i.a.createElement("p",null,"The chip industry has transformed the world on its way to $500B.  But recently R&D innovation has become slow and expensive, limiting growth.  At Celera we believe breaking down the 'R&D barrier' will unlock many billions of dollars in new opportunities for the entire ecosystem.  At Celera we want to help the chip industry continue changing the world - only faster."))))}}]),t}(n.Component),A=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("h2",null,"We Know What NOT to Do... "),i.a.createElement(d.a,null,i.a.createElement("h2",null,"Full Custom IC Development"),i.a.createElement("p",null,"Celera provides full-custom IC development initially focusing on analog/power-management applications using industry-standard silicon foundry technologies.  Realize your custom design - turnkey from spec to silicon - with our automated AI-based platform and improve your R&D productivity by 100X.  Delivering custom chips today!")),i.a.createElement(d.a,null,i.a.createElement("h3",null,"Design Service"),i.a.createElement("p",null,"...")),i.a.createElement(d.a,null,i.a.createElement("h3",null,"IP Development"),i.a.createElement("p",null,"...")))}}]),t}(n.Component),F=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("h3",null,"This is the news page"))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).state={},e.setState({isDataFetched:!1}),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({isDataFetched:!0})}},{key:"render",value:function(){return this.state.isDataFetched?i.a.createElement("img",{src:O.a,alt:"Logo"}):null}}]),t}(n.Component),N=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("desc:",this.props.data)}},{key:"render",value:function(){return"MODULEtop"==this.props.current_view?null:i.a.createElement("div",null,i.a.createElement("p",{align:"center"}," ",this.props.data[this.props.current_view].description," "))}}]),t}(n.Component),U=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return"MODULEtop"==this.props.current_view?null:i.a.createElement(M.a,{title:"Go to simulation",id:"basic-nav-dropdown"},this.props.data[this.props.current_view].simulations.map((function(t){return i.a.createElement(m.b,{to:"/product/".concat(e.props.chip_name,"/").concat(e.props.current_view,"/").concat(t),className:"nav-link",onClick:function(){return e.setState({path:t})}},t)})))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a.setState({isDataFetched:!1,count:0}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.match.params.name,"/").concat(this.props.match.params.name,".json")).then((function(e){return e.json()})).then((function(t){console.log("data:",t),console.log("components:",t.components),e.setState({current_view:e.props.match.params.view}),e.setState({chip_image:t.chip_image,short_description:t.short_description,long_description:t.long_description,features:t.features,applications:t.applications,components:t.components,chip_name:e.props.match.params.name,path:null,isDataFetched:!0})}))}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}))}},{key:"render",value:function(){var e=this;return console.log("in render"),console.log(this.state),console.log(this.state.components),console.log(this.state.current_view),this.state.isDataFetched?i.a.createElement(h.a,null,i.a.createElement("h1",null," ",this.state.chip_name," Viewer "),i.a.createElement("p",null,"Currently at ",this.state.current_view),i.a.createElement(N,{data:this.state.components,current_view:this.state.current_view}),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(d.a,null,i.a.createElement(M.a,{title:"Go to different view",id:"basic-nav-dropdown"},i.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/MODULEtop"),className:"nav-link",onClick:function(){return e.setState({path:null})}},"top"),Object.keys(this.state.components).map((function(t){return i.a.createElement(m.b,{to:"/product/".concat(e.state.chip_name,"/").concat(t),className:"nav-link",onClick:function(){return e.setState({path:t})}},t)}))),i.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Go back to datasheet"),i.a.createElement(U,{chip_name:this.state.chip_name,data:this.state.components,current_view:this.state.current_view}))),i.a.createElement(E,{size:this.props.windowWidth,chip:this.state.chip_name,file:this.state.current_view}),i.a.createElement(k,{chip:this.state.chip_name})):null}}]),t}(n.Component),W=(a(148),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a.setState({isDataFetched:!1,count:0}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e={chip_name:"Tokyo",chip_image:"top.pdf",short_description:"Highly integrated, compact PMIC",long_description:"The XC9281/XC9282 series are 600mA synchronoous rectification DC/DC converters adopting HiSAT-COT (*) control.  Due to increasing the oscillation frequency to high frequency, 0.47uH coil with a size of 1.0 x 0.5 mm can be used. A 0.6 x 0.3 mm ceramic capacitor can be used for the input capacitance (Cin) and the output capacitance(Cl), realizing that the mounting area inluding peripheral components can be reduced to 3.52 mm2. Due to increasing the oscillation frequency to a high frequency, the mounting area is reduced. Additionally, an efficiency equal to or higher than that of conventional products can realize by improving on-resistance and current consumption.  Becasue of these featrues, XC9281/XC9282 series are ideal for equipment requiring miniaturization and low profile mounting area, and battery-powered equipment such as mobile equipment.  Moreover, the high-speed transient response technology of the HiSAT-COT control makes it possible to minimize the fluctuation of the output voltage for a load transient condition. This feature is optimal for applilcations requiring a fast response and output voltage stability for an instantaneous load fluctuation like FPGA.  (*)HiSAT-COT is a proprietary high -speed transient response technology for DC?DC converter which was developed by Torex.  It is Ideal for the LSI's that require high precision and high stability power supply voltage.",features:["Input Voltage Range:2.5V ~ 5.5V","Output Voltage Range:0.7V ~ 1.15V(\xb12.0%)","1.2V ~ 3.6V(\xb11.5%)","Output Current:600mA","Quiescent Current:11uA(XC9282 PWM/PFM Auto)","Oscillation Frequency:6MHz","Efficiency:89%(Vin-3.7V,Vout=1.8V,Iout=300mA)","Control Methods:HiSAT-COT Control","PWM Control (SC9281)","PWM/PFM Auto(XC9282)","Protection Functions:Current Limit","Functions:Soft-Start, UVLO","Cl Discharge (TypeB)","Input/Output Capacitor Ceramic Capacitor","Operating Ambient Temperature:-40C ~ +105C","Package:LGA-6B01 (1.2 x 1.2 x 0.3mm)","WLP-5-06(0.88 x 0.96 x 0.33mm)","Environmentally:EU RoHs Complieant, Pb Free"],applications:["Smart phone / Mobile phones","Wireless earphone / Headset","Wearable devices","DSC / Camcorder","Portable game consoles","Smartcard","Power supply for module","Various small power sources"],components:{MODULEvout:{description:"This is the vout view",simulations:[]},MODULEservice:{description:"This is the service view",simulations:["sim1","sim2"]},MODULEregulation:{description:"This is the regulation view",simulations:[],feedback:{},cot:{}},MODULElogic:{description:"This is the logic view",simulations:[]},MODULEpower:{description:"This is the power view",simulations:[]}},sections:["Features","Applications"]};this.setState({chip_image:e.chip_image,short_description:e.short_description,long_description:e.long_description,features:e.features,applications:e.applications,components:e.components,chip_name:this.props.match.params.name,path:null,isDataFetched:!0}),void 0!==this.props.match.params.view?this.setState({current_view:this.props.match.params.view}):this.setState({current_view:"top"})}},{key:"componentDidUpdate",value:function(e,t){e.match.params.name===this.props.match.params.name&&e.match.params.view===this.props.match.params.view||(this.forceUpdate(),this.setState({name:this.props.match.params.name,view:this.props.match.params.view}),console.log("update"))}},{key:"render",value:function(){var e=this;return this.state.isDataFetched?i.a.createElement(h.a,null,i.a.createElement("h1",null," ",this.state.chip_name," Simulation "),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(v.a,{title:"Return to viewer"},i.a.createElement(m.b,{to:"/product/".concat(this.state.chip_name,"/").concat(this.state.current_view),className:"nav-link",onClick:function(){return e.setState({path:null})}},"Go back to viewer")))),i.a.createElement(E,{size:this.props.windowWidth,chip:this.state.chip_name,file:this.props.match.params.sim}),i.a.createElement(k,{chip:this.state.chip_name})):null}}]),t}(n.Component)),I=a(34),V=(a(150),a(151),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(T,null),i.a.createElement(I.a,{exact:!0,path:"/",component:L}),i.a.createElement(I.a,{path:"/home",component:L}),i.a.createElement(I.a,{exact:!0,path:"/product/:name/",render:function(e){return i.a.createElement(D,Object.assign({key:e.match.params.name},e))}}),i.a.createElement(I.a,{exact:!0,path:"/product/:name/:view/",render:function(e){return i.a.createElement(P,Object.assign({key:e.match.params.view},e))}}),i.a.createElement(I.a,{exact:!0,path:"/product/:name/:view/:sim",render:function(e){return i.a.createElement(W,Object.assign({key:e.match.params.view},e))}}),i.a.createElement(I.a,{path:"/about",component:x}),i.a.createElement(I.a,{path:"/news",component:F}),i.a.createElement(I.a,{path:"/solution",component:A})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports=a.p+"static/media/celeraLogo.791d60ce.jpg"},51:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=51},76:function(e,t,a){e.exports=a.p+"static/media/XC9281-XC9282.5c83d0f3.pdf"},87:function(e,t,a){e.exports=a(152)},92:function(e,t,a){},96:function(e,t){},98:function(e,t){},99:function(e,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.5022ed3f.chunk.js.map