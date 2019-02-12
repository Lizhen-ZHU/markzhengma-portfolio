(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(39)},26:function(e,a,t){},28:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(9),i=t.n(s),r=(t(26),t(1)),c=t(2),o=t(5),m=t(3),h=t(4),d=t(6),p=(t(28),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("header",null,n.a.createElement("div",{className:"navigation"},n.a.createElement("li",{className:"navs",id:"homeBtn",onClick:function(){return e.props.scrollToElement("home-spacer")}},n.a.createElement("i",{className:"fas fa-home"}),"Home"),n.a.createElement("li",{className:"navs",id:"aboutBtn",onClick:function(){return e.props.scrollToElement("about-spacer")}},n.a.createElement("i",{className:"fas fa-id-card"}),"About"),n.a.createElement("li",{className:"navs",id:"workBtn",onClick:function(){return e.props.scrollToElement("work-spacer")}},n.a.createElement("i",{className:"fas fa-pencil-alt"}),"Work"),n.a.createElement("li",{className:"navs",id:"contactBtn",onClick:function(){return e.props.scrollToElement("contact-spacer")}},n.a.createElement("i",{className:"fas fa-phone"}),"Contact")))}}]),a}(l.Component)),u=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"resume ".concat(this.props.showResume?"resume-show":"")},n.a.createElement("div",{className:"resume-btn-group"},n.a.createElement("div",{className:"download-btn ".concat(this.props.showResume?"btn-show":"")},n.a.createElement("a",{href:"/markzhengma_resume.pdf",download:!0},n.a.createElement("i",{className:"fas fa-download"}))),n.a.createElement("div",{className:"close-btn ".concat(this.props.showResume?"btn-show":""),onClick:this.props.toggleShowResume},n.a.createElement("i",{className:"fas fa-window-close"}))),n.a.createElement("img",{className:"resume-content",src:"/markzhengma_resume.png",alt:"Loading Resume..."}))}}]),a}(l.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"info-title"},n.a.createElement("h2",null,"Mark Zheng Ma"),n.a.createElement("div",{className:"resume-btn",onClick:this.props.toggleShowResume},"Resume")),n.a.createElement("div",{className:"info-list"},n.a.createElement("div",{className:"info-single"},n.a.createElement("a",{className:"envelope",href:"mailto:markzhengma@gmail.com"},n.a.createElement("i",{className:"fas fa-envelope"}))),n.a.createElement("div",{className:"info-single"},n.a.createElement("a",{href:"https://www.github.com/markzhengma",target:"_blank"},n.a.createElement("i",{className:"fab fa-github-square"}))),n.a.createElement("div",{className:"info-single"},n.a.createElement("a",{href:"https://www.linkedin.com/in/markzhengma",target:"_blank"},n.a.createElement("i",{className:"fab fa-linkedin"}))),n.a.createElement("div",{className:"info-single"},n.a.createElement("a",{href:"https://www.instagram.com/markzhengma",target:"_blank"},n.a.createElement("i",{className:"fab fa-instagram"})))))}}]),a}(l.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui ".concat(this.props.showResume?"ui-show":"")},n.a.createElement(p,{scrollToElement:this.props.scrollToElement}),n.a.createElement(u,{showResume:this.props.showResume,toggleShowResume:this.props.toggleShowResume}),n.a.createElement(g,{toggleShowResume:this.props.toggleShowResume}))}}]),a}(l.Component),v=t(7),w=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"home"},n.a.createElement(v.Element,{className:"home-box-spacer",name:"home-spacer"}),n.a.createElement("div",{className:"home-box"},n.a.createElement("div",{className:"word-box"},n.a.createElement("h2",null,"Mark Zheng Ma"),n.a.createElement("b",null,"Web Developer"),n.a.createElement("b",null,"Unity Developer"),n.a.createElement("b",null,"Teacher")),n.a.createElement("div",{className:"project",id:"latest-project",onClick:function(){return e.props.scrollToElement("work-spacer")}},n.a.createElement("div",{className:"project-name",id:"latest-name"},n.a.createElement("h3",null,"Recent Project")),n.a.createElement("div",{className:"project-pic project-pic-".concat(this.props.recentWork.id),id:"latest-pic"}),n.a.createElement("div",{className:"project-name",id:"latest-name"},n.a.createElement("h5",null,this.props.recentWork.title)))))}}]),a}(l.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"about"},n.a.createElement(v.Element,{className:"spacer about-spacer",name:"about-spacer"}),n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-id-card fa-fw","aria-hidden":"true"}),"About Me"),n.a.createElement("div",{className:"paragraph-list"},n.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p1")?"selection":""),id:"p1",onClick:function(){return e.props.showOrHideParagraph("p1")}},n.a.createElement("div",{className:"paragraph-title title-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth>=1200?"title-hide":"")},n.a.createElement("h2",null,"Education")),n.a.createElement("div",{className:"image img-1"}),n.a.createElement("div",{className:"paragraph-single single-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth>=1200?"paragraph-show":"")},n.a.createElement("p",null,"I have a BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014), and an MS in Teaching and Curriculum from Syracuse University (2014-2016). Currently I am pursuing my second masters in Design and Development of Digital Games at Columbia Unviersity (2017-now)."))),n.a.createElement("div",{className:"scroll scroll-p1 ".concat(this.props.showParaId.includes("p1")&&window.innerWidth<1200?"scroll-show":"")},n.a.createElement("p",null,"I have a BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014), and an MS from Teaching and Curriculum in Syracuse University (2014-2016). Currently I am pursuing my second masters in Design and Development of Digital Games at Columbia Unviersity (2017-now).")),n.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p2")?"selection":""),id:"p2",onClick:function(){return e.props.showOrHideParagraph("p2")}},n.a.createElement("div",{className:"paragraph-title title-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth>=1200?"title-hide":"")},n.a.createElement("h2",null,"Web Development")),n.a.createElement("div",{className:"image img-2"}),n.a.createElement("div",{className:"paragraph-single single-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth>=1200?"paragraph-show":"")},n.a.createElement("p",null,"I gained most of my web development skills through Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I am able to work as a full-stack web developer and I keep updating my projects, implementing new skills that I would learn in the future."))),n.a.createElement("div",{className:"scroll scroll-p2 ".concat(this.props.showParaId.includes("p2")&&window.innerWidth<1200?"scroll-show":"")},n.a.createElement("p",null,"I gained most of my web development skills through Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I am able to work as a full-stack web developer and I keep updating my projects, implementing new skills that I would learn in the future.")),n.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p3")?"selection":""),id:"p3",onClick:function(){return e.props.showOrHideParagraph("p3")}},n.a.createElement("div",{className:"paragraph-title title-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth>=1200?"title-hide":"")},n.a.createElement("h2",null,"Unity Development")),n.a.createElement("div",{className:"image img-3"}),n.a.createElement("div",{className:"paragraph-single single-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth>=1200?"paragraph-show":"")},n.a.createElement("p",null,"I taught myself C# and Unity development during the masters program of Design and Dev of Digital Games at Columbia University. I am excited to program various interactions/logics of the games, especially AR/VR development."))),n.a.createElement("div",{className:"scroll scroll-p3 ".concat(this.props.showParaId.includes("p3")&&window.innerWidth<1200?"scroll-show":"")},n.a.createElement("p",null,"I taught myself C# and Unity development during the masters program of Design and Dev of Digital Games at Columbia University. I am excited to program various interactions/logics of the games, especially AR/VR development.")),n.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p4")?"selection":""),id:"p4",onClick:function(){return e.props.showOrHideParagraph("p4")}},n.a.createElement("div",{className:"paragraph-title title-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth>=1200?"title-hide":"")},n.a.createElement("h2",null,"Teaching Experience")),n.a.createElement("div",{className:"image img-4"}),n.a.createElement("div",{className:"paragraph-single single-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth>=1200?"paragraph-show":"")},n.a.createElement("p",null,"In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC."))),n.a.createElement("div",{className:"scroll scroll-p4 ".concat(this.props.showParaId.includes("p4")&&window.innerWidth<1200?"scroll-show":"")},n.a.createElement("p",null,"In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC.")),n.a.createElement("div",{className:"paragraphs ".concat(this.props.showParaId.includes("p5")?"selection":""),id:"p5",onClick:function(){return e.props.showOrHideParagraph("p5")}},n.a.createElement("div",{className:"paragraph-title title-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth>=1200?"title-hide":"")},n.a.createElement("h2",null,"Skills")),n.a.createElement("div",{className:"image img-5"}),n.a.createElement("div",{className:"paragraph-single single-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth>=1200?"paragraph-show":"")},n.a.createElement("div",{className:"skill-single skill-html"},n.a.createElement("div",{className:"skill-name"},"HTML")),n.a.createElement("div",{className:"skill-single skill-css"},n.a.createElement("div",{className:"skill-name"},"CSS")),n.a.createElement("div",{className:"skill-single skill-js"},n.a.createElement("div",{className:"skill-name"},"Javascript")),n.a.createElement("div",{className:"skill-single skill-react"},n.a.createElement("div",{className:"skill-name"},"React")),n.a.createElement("div",{className:"skill-single skill-node"},n.a.createElement("div",{className:"skill-name"},"Node")),n.a.createElement("div",{className:"skill-single skill-express"},n.a.createElement("div",{className:"skill-name"},"Express")),n.a.createElement("div",{className:"skill-single skill-sql"},n.a.createElement("div",{className:"skill-name"},"SQL")),n.a.createElement("div",{className:"skill-single skill-ruby"},n.a.createElement("div",{className:"skill-name"},"Ruby")),n.a.createElement("div",{className:"skill-single skill-socket"},n.a.createElement("div",{className:"skill-name"},"Socket")),n.a.createElement("div",{className:"skill-single skill-java"},n.a.createElement("div",{className:"skill-name"},"Java")),n.a.createElement("div",{className:"skill-single skill-csharp"},n.a.createElement("div",{className:"skill-name"},"C#")),n.a.createElement("div",{className:"skill-single skill-unity"},n.a.createElement("div",{className:"skill-name"},"Unity")),n.a.createElement("div",{className:"skill-single skill-android"},n.a.createElement("div",{className:"skill-name"},"Android",n.a.createElement("br",null),"Studio")),n.a.createElement("div",{className:"skill-single skill-vive"},n.a.createElement("div",{className:"skill-name"},"Vive")),n.a.createElement("div",{className:"skill-single skill-vuforia"},n.a.createElement("div",{className:"skill-name"},"Vuforia")))),n.a.createElement("div",{className:"scroll scroll-p5 ".concat(this.props.showParaId.includes("p5")&&window.innerWidth<1200?"scroll-show":"")},n.a.createElement("div",{className:"skill-single skill-html"},n.a.createElement("div",{className:"skill-name"},"HTML")),n.a.createElement("div",{className:"skill-single skill-css"},n.a.createElement("div",{className:"skill-name"},"CSS")),n.a.createElement("div",{className:"skill-single skill-js"},n.a.createElement("div",{className:"skill-name"},"Javascript")),n.a.createElement("div",{className:"skill-single skill-react"},n.a.createElement("div",{className:"skill-name"},"ReactJS")),n.a.createElement("div",{className:"skill-single skill-node"},n.a.createElement("div",{className:"skill-name"},"NodeJS")),n.a.createElement("div",{className:"skill-single skill-express"},n.a.createElement("div",{className:"skill-name"},"ExpressJS")),n.a.createElement("div",{className:"skill-single skill-sql"},n.a.createElement("div",{className:"skill-name"},"SQL")),n.a.createElement("div",{className:"skill-single skill-ruby"},n.a.createElement("div",{className:"skill-name"},"Ruby")),n.a.createElement("div",{className:"skill-single skill-socket"},n.a.createElement("div",{className:"skill-name"},"SocketIO")),n.a.createElement("div",{className:"skill-single skill-java"},n.a.createElement("div",{className:"skill-name"},"Java")),n.a.createElement("div",{className:"skill-single skill-csharp"},n.a.createElement("div",{className:"skill-name"},"C#")),n.a.createElement("div",{className:"skill-single skill-unity"},n.a.createElement("div",{className:"skill-name"},"Unity")),n.a.createElement("div",{className:"skill-single skill-android"},n.a.createElement("div",{className:"skill-name"},"Android",n.a.createElement("br",null),"Studio")),n.a.createElement("div",{className:"skill-single skill-vive"},n.a.createElement("div",{className:"skill-name"},"Vive")),n.a.createElement("div",{className:"skill-single skill-vuforia"},n.a.createElement("div",{className:"skill-name"},"Vuforia")))))}}]),a}(l.Component),k=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"work"},n.a.createElement(v.Element,{className:"spacer work-spacer",name:"work-spacer"}),n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-pencil-alt"}),"My Work"),n.a.createElement("div",{className:"project-list"},this.props.workData?this.props.workData.map(function(a){return n.a.createElement("div",{className:"project",key:a.id},n.a.createElement("div",{className:"project-name project-name-".concat(a.id)},n.a.createElement("h3",null,a.title)),n.a.createElement("div",{className:"project-pic project-pic-".concat(a.id),onMouseEnter:function(){return e.props.showTech(a.id)},onMouseLeave:function(){return e.props.hideTech(a.id)}},n.a.createElement("div",{className:"tech-used tech-".concat(a.id," ").concat(e.props.showTechId&&e.props.showTechId===a.id?"show-tech":"")},n.a.createElement("h5",null,"Technology:"),n.a.createElement("p",null,a.tech.map(function(e){return n.a.createElement("span",{key:a.tech.indexOf(e)},e,n.a.createElement("br",null))})))),a.btnTwo?n.a.createElement("div",{className:"project-button-list"},n.a.createElement("div",{className:"project-button"},n.a.createElement("a",{href:a.btnOne.url,target:"_blank"},n.a.createElement("b",null,a.btnOne.text))),n.a.createElement("div",{className:"project-button"},n.a.createElement("a",{href:a.btnTwo.url,target:"_blank"},n.a.createElement("b",null,a.btnTwo.text)))):n.a.createElement("div",{className:"project-button-list"},n.a.createElement("div",{className:"project-button",style:{width:"360px"}},n.a.createElement("a",{href:a.btnOne.url,target:"_blank"},n.a.createElement("b",null,a.btnOne.text)))))}):""))}}]),a}(l.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"contact"},n.a.createElement(v.Element,{className:"spacer contact-spacer",name:"contact-spacer"}),n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-phone fa-fw","aria-hidden":"true"}),"Contact Me"),n.a.createElement("form",{className:"contact-form",method:"POST",action:"http://formspree.io/mazheng1022@hotmail.com"},n.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email"}),n.a.createElement("textarea",{name:"message",placeholder:"Please leave your message."}),n.a.createElement("button",{type:"submit"},"Send"))))}}]),a}(l.Component),f=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggleShowResume=function(){e.setState({showResume:!e.state.showResume})},e.scrollToElement=function(e){v.scroller.scrollTo(e,{duration:800,smooth:!0})},e.showOrHideParagraph=function(a){var t=e.state.showParaId;e.state.showParaId.includes(a)?(t.splice(t.indexOf(a),1),e.setState({showParaId:t})):(t.push(a),e.setState({showParaId:t}))},e.showTech=function(a){e.setState({showTechId:a})},e.hideTech=function(a){e.setState({showTechId:null})},e.state={showResume:!1,selectedWork:null,showParaId:[],showTechId:null,workData:[{id:15,title:"Witch's Grotto",tech:["Unity","C#","HTC Plugin"],btnOne:{text:"DevPost",url:"https://devpost.com/software/virtual-escape-room-bj9lwv"},btnTwo:{text:"GitHub",url:"https://github.com/RealityVirtually2019/vrEscapeRoom"}},{id:14,title:"Stay With Me",tech:["Unity","C#","Event System","Navigation"],btnOne:{text:"Video",url:"https://youtu.be/au07OoysCdU"},btnTwo:{text:"Download",url:"https://drive.google.com/drive/folders/1Bw96mo5-c5yn7ukuMzI-R8j6iuSF2I-O?usp=sharing"}},{id:13,title:"InstaBot",tech:["Ruby","Selenium"],btnOne:{text:"Video",url:"https://youtu.be/EGdbMELkgjM"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/InstaBot"}},{id:12,title:"AR Tutorial",tech:["Unity","C#","Vuforia"],btnOne:{text:"Session Notes",url:"https://docs.google.com/presentation/d/1-L2tShT2nQu6cgwnBk5DxPdNl4QUCpckiGUwFkqgJlM/edit?usp=sharing"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/ar-game-tutorial"}},{id:11,title:"Wechat Official Shell",tech:["ReactJS","NodeJS","PostgreSQL","BMap API"],btnOne:{text:"Website",url:"https://wechat-official-shell.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/wechat-official-shell"}},{id:10,title:"Return To Olympia",tech:["Unity2D","C#"],btnOne:{text:"Intro Slides",url:"https://docs.google.com/presentation/d/1biFXhc95RMlaC_j7hZI-CvjXWMMdvuKi3gizSNYLVRo/edit?usp=sharing"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/return-to-olympia"}},{id:9,title:"LifoMMunity",tech:["Java","Android Studio","Firebase"],btnOne:{text:"Video",url:"https://youtu.be/AbmFxUTz1tc"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/LifoMMunity"}},{id:8,title:"CU Event",tech:["ReactJS","NodeJS","PostgreSQL"],btnOne:{text:"Website",url:"https://cu-event-app.herokuapp.com/"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/cu-event-app"}},{id:7,title:"Geek Olympics",tech:["Non-digital Card Game","Learn to code through playing"],btnOne:{text:"Video",url:"https://youtu.be/vAiOSLtFoGw"}},{id:6,title:"Zombie Run",tech:["Unity","C#"],btnOne:{text:"Website",url:"https://markzhengma.itch.io/zombierun"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/ZombieRun"}},{id:5,title:"To Be With You",tech:["Unity","C#","WikiTude","Firebase"],btnOne:{text:"GitHub",url:"https://github.com/markzhengma/ar-pet"}},{id:4,title:"Grandmaster",tech:["ExpressJS","ReactJS","SocketIO","Firebase"],btnOne:{text:"Website",url:"https://grandmaster-io.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/hewhowearspants/Project-03-Card-Battle"}},{id:2,title:"Language Studio",tech:["Ruby on Rails","PostgreSQL","Pearson API"],btnOne:{text:"Website",url:"https://language-studio.herokuapp.com/"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/DictionaryApp"}},{id:1,title:"Word Hero",tech:["ExpressJS","ReactJS","PostgreSQL"],btnOne:{text:"Website",url:"https://word-hero.herokuapp.com"},btnTwo:{text:"GitHub",url:"https://github.com/markzhengma/Word-Game"}}]},e.showOrHideParagraph=e.showOrHideParagraph.bind(Object(d.a)(Object(d.a)(e))),e.showTech=e.showTech.bind(Object(d.a)(Object(d.a)(e))),e.hideTech=e.hideTech.bind(Object(d.a)(Object(d.a)(e))),e.scrollToElement=e.scrollToElement.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"background-img"}),n.a.createElement(E,{showResume:this.state.showResume,toggleShowResume:this.toggleShowResume,scrollToElement:this.scrollToElement}),n.a.createElement(w,{recentWork:this.state.workData[0],scrollToElement:this.scrollToElement}),n.a.createElement(b,{showParaId:this.state.showParaId,showOrHideParagraph:this.showOrHideParagraph}),n.a.createElement(k,{workData:this.state.workData,showTechId:this.state.showTechId,showTech:this.showTech,hideTech:this.hideTech}),n.a.createElement(N,null))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.58446026.chunk.js.map