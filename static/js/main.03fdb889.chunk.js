(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),o=a(1);a(9);function s(e){var t=e.project,a=e.isModalOpen,n=e.dispatch,i=t.modalImage?t.modalImage:t.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay ".concat(a?"":"hidden-fade"),onClick:function(){n({action:"close-modal"})}}),r.a.createElement("div",{className:"modal  ".concat(a?"":"hidden-slide-down")},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-image"},r.a.createElement("a",{href:i,target:"__blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:t.title,src:i}))),r.a.createElement("div",{className:"modal-text"},r.a.createElement("h3",{className:"modal-title"},t.title),r.a.createElement("p",{className:"modal-description",dangerouslySetInnerHTML:{__html:t.description}}),r.a.createElement("div",{className:"modal-buttons-container"},null!=t.link&&r.a.createElement("a",{className:"btn modal-btn",href:t.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"las la-eye"}),"\xa0Preview"),null!=t.github&&r.a.createElement("a",{className:"btn modal-btn",href:t.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"lab la-github"}),"\xa0Github"),null!=t.codepen&&r.a.createElement("a",{className:"btn modal-btn",href:t.codepen,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"lab la-codepen"}),"\xa0Codepen"))),r.a.createElement("span",{className:"modal-close-btn",onClick:function(){n({action:"close-modal"})}}))))}function c(e){var t=e.title,a=e.subtitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-clip"},r.a.createElement("div",{className:"hero-bubbles hero-bubbles-left"}),r.a.createElement("div",{className:"hero-bubbles hero-bubbles-right"}),r.a.createElement("h1",{className:"hero-title slide-in-from-top"},t,","),r.a.createElement("div",{className:"hero-description slide-in-from-left",dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",{className:"hero-buttons-container"},r.a.createElement("a",{href:"#my-projects",className:"hero-btn hero-btn-primary scroll-to slide-in-from-bottom"},"My Projects"),r.a.createElement("a",{href:"#contact-me",className:"hero-btn hero-btn-secondary scroll-to slide-in-from-top"},"Contact Me"))),r.a.createElement("div",{className:"hero-floating-image slide-in-from-right"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"img/hero.webp",type:"image/webp"}),r.a.createElement("img",{src:"img/hero.png",alt:"hero"})))))}function m(e){var t=e.leftProject,a=e.rightProject,n=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mockup-devices"},r.a.createElement("span",{className:"click-animation"},r.a.createElement("span",{className:"click-animation-cursor"}),r.a.createElement("span",{className:"click-animation-drop"})),r.a.createElement("div",{className:"mockup-left",onClick:function(){n({action:"view-project",payload:{project:t}})}},r.a.createElement("img",{alt:t.title,src:t.mockup}),r.a.createElement("span",{className:"mockup-description"},r.a.createElement("i",{className:"las la-search-plus"}),"\xa0",t.title)),r.a.createElement("div",{className:"mockup-right",onClick:function(){n({action:"view-project",payload:{project:a}})}},r.a.createElement("img",{alt:a.title,src:a.mockup}),r.a.createElement("span",{className:"mockup-description"},r.a.createElement("i",{className:"las la-search-plus"}),"\xa0",a.title))))}function b(e){var t=e.projects,a=e.dispatch,n=e.limit,i=t.filter((function(e){return!e.isMockup})),l=n<i.length;return i=i.slice(0,n),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"thumbnails-clip-path"}),r.a.createElement("div",{className:"thumbnails-container"},i.map((function(e,t){return r.a.createElement("div",{className:"thumbnail",key:"thumb-".concat(t),onClick:function(){a({action:"view-project",payload:{project:e}})}},r.a.createElement("h4",{className:"thumbnail-title"},e.title),r.a.createElement("div",{className:"thumbnail-img"},r.a.createElement("img",{alt:e.title,src:e.image})))})),l&&r.a.createElement("div",{className:"show-more-btn-container",key:(new Date).getTime()},r.a.createElement("button",{className:"btn show-more-btn",onClick:function(){a({action:"show-more"})}},"Show More"))))}function h(e){var t=e.projects,a=e.dispatch,n=e.limit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projects-container",id:"my-projects"},r.a.createElement("h2",{className:"projects-title"},"My ",r.a.createElement("span",null,"Projects")),r.a.createElement("p",{className:"projects-subtitle"},"Here are some of my recent projects"),r.a.createElement(m,{dispatch:a,leftProject:t[1],rightProject:t[0]}),r.a.createElement(b,{dispatch:a,projects:t,limit:n})))}function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer",id:"contact-me"},r.a.createElement("img",{className:"footer-avatar",alt:"avatar",src:"img/avatar.svg"}),r.a.createElement("h2",{className:"footer-title"},"Contact Me"),r.a.createElement("div",{className:"about-me"},r.a.createElement("h4",null,"Hi, I'm Evyatar, nice to meet you!"),r.a.createElement("p",null,"I LIVE Programming. I BREATHE Programming. ",r.a.createElement("i",{className:"em em-heartbeat","aria-label":"BEATING HEART"}),r.a.createElement("br",null),"A Web-Developer by Day & A Curious Programmer by Night ",r.a.createElement("i",{className:"em em-last_quarter_moon","aria-label":"LAST QUARTER MOON SYMBOL"}),r.a.createElement("br",null),"Oh, and I Have Some Unexplained Attraction to CSS ",r.a.createElement("i",{className:"em em-sweat_smile","aria-label":"SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"}),r.a.createElement("br",null),"Feel Free to Contact Me Via the Following Methods:")),r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://codepen.io/EvyatarDa/"},r.a.createElement("i",{className:"lab la-codepen"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/StyleShit"},r.a.createElement("i",{className:"lab la-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/evyatar-daud-404738152/"},r.a.createElement("i",{className:"lab la-linkedin-in"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:evyatar.daud@gmail.com"},r.a.createElement("i",{className:"las la-envelope"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"download/CV.pdf"},r.a.createElement("i",{className:"las la-file"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:0584958905"},r.a.createElement("i",{className:"las la-mobile"})))),r.a.createElement("div",{className:"copyrights"},"Evyatar Daud \xa9 ",(new Date).getFullYear()))}var d=[{isMockup:!0,title:"Coinalyzer",image:"img/thumbnails/coinalyzer.png",mockup:"img/mockup-right-2.png",description:'An awesome and special Crypto Coins analyzing tool for the internal use. <br />\n        It grabs a lot of data about each coin which exists in <a target="_blank" href="https://coinmarketcap.com/">Coin Market Cap</a>,\n        from various APIs, including price history & other details, that combined toghether can tell you whether to invest in that coin or not. <br />\n        The success rates are pretty good, and we\'ve already gain a high profit. <br />\n        As can be seen in the screenshot, there is a really nice and friendly graph for each coin, which helps you deciding which coin is the best investment for you. <br />\n        In addition, this tool integrates with Bitfinex & Cryptopia APIs, and runs Node.js exchange-bots which can sell or buy coins for you in the highest available profit.'},{isMockup:!0,title:"AI Web Design",image:"img/thumbnails/futuristic-page.jpg",mockup:"img/mockup-left.webp",link:"projects/ai-web-design",description:'A concept web design of some futuristic AI company.<br />\n        Inspired from this Dribbble shot by Howard Chen: <br /><br />\n        <a target="_blank" href="https://dribbble.com/shots/7528753-AI-Web-Design">https://dribbble.com/shots/7528753-AI-Web-Design</a>\n        <br /><br />'},{title:"Weather App Concept",image:"img/thumbnails/weather-app.jpg",link:"projects/weather-app",description:'A concept design for Weather App.<br />\n            Inspired from this Dribbble shot by Tiberiu Neamu: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/1081917-WhereTO-App/">https://dribbble.com/shots/1081917-WhereTO-App/</a>\n            <br /><br />'},{title:"The Joker Concept Design",image:"img/thumbnails/joker.jpg",link:"projects/the-joker",description:'A concept design for The Joker Movie.<br />\n            Inspired from this Dribbble shot by Kalenskiy Dmitriy: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/7302010-Joker-desktop-concept">https://dribbble.com/shots/7302010-Joker-desktop-concept</a>\n            <br /><br />'},{title:"Material Design Login",image:"img/thumbnails/material-login.webp",link:"projects/material-login",description:'A concept design for a login page, based on the material design concepts.<br />\n            Inspired from this Dribbble shot by Anton Aheichanka: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/1945593-Login-Home-Screen/">https://dribbble.com/shots/1945593-Login-Home-Screen/</a>\n            <br /><br />'},{title:"Codepen Clone",image:"img/thumbnails/codepen-clone.png",link:"projects/codepen-clone",github:"https://github.com/StyleShit/Codepen-Clone",description:'A small clone of Codepen\'s basic functionality, using React and <a target="_blank" href="https://codemirror.net/">CodeMirror</a>.\n            <br /><br />'},{title:"DailyUI Signup",image:"img/thumbnails/flat-signup.jpg",link:"projects/flat-signup",description:'A signup form designed for the DailyUI 100 Days Challenge.<br />\n            Inspired from this Dribbble shot by Paul Aim\xe9 : <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/">https://dribbble.com/shots/2468662-Daily-UI-001-Sign-Up-Form/</a>\n            <br /><br />'},{title:"React Weather",image:"img/thumbnails/react-weather-app.webp",link:"projects/react-weather",github:"https://github.com/StyleShit/Weather-Around-The-World",description:'A small React project that uses <a target="__blank" href="https://openweathermap.org/api">OpenWeather\'s API</a> to show live weather in places around the world.<br />\n            Inspired from this Dribbble shot by kenzch: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/7112686-Weather-kit">https://dribbble.com/shots/7112686-Weather-kit</a>\n            <br /><br />'},{title:"Navigation Animations",image:"img/thumbnails/navigation-animation.jpg",codepen:"https://codepen.io/EvyatarDa/full/waKXMd/",description:'A bunch of inspiring navigation menu hover animations.<br />\n            It held the 74th place at Codepen\'s \n            "<a target="_blank" href="https://codepen.io/2015/popular/pens/3/">Most Hearted of 2015</a>" \n            and still gains a lot of views & likes until this day.\n            <br /><br />'},{title:"ShutterStock Downloader",image:"img/thumbnails/shutterstock-downloader.png",description:'A custom Wordpress plugin for <a target="_blank" href="http://nationwideautotransportation.com/">Nationwide Auto Transportation</a>.<br>\n        It downloads images from <a target="_blank" href="http://shutterstock.com/">ShutterStock</a>, based on keywords, using their provided API.\n        You can set count, keywords and some other parameters, as well as API credentials, and the plugin will download the images for you.<br>\n        Simple as clicking a button.'},{title:"Client for Reddit",image:"img/thumbnails/reddit-client.png",link:"projects/reddit-client",github:"https://github.com/StyleShit/Basic-Client-For-Reddit",description:'A small basic client for Reddit with a new design, created using React.<br />\n            Inspired from this Dribbble shot by Dmitriy Kharaberyush: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/3257279-Reddit-Trainy">https://dribbble.com/shots/3257279-Reddit-Trainy</a>\n            <br /><br />'},{title:"DailyUI Login",image:"img/thumbnails/flat-login.webp",link:"projects/flat-login",description:'A login form designed for the DailyUI 100 Days Challenge.<br />\n            Inspired from this Dribbble shot by Paul Flavius Nechita: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/2125879-Day-001-Login-Form/">https://dribbble.com/shots/2125879-Day-001-Login-Form/</a>\n            <br /><br />'},{title:"Single Div Robot",image:"img/thumbnails/robot.webp",link:"projects/robot",description:'A robot created using a single div and gradient tricks.<br />\n            Inspired from this Codepen by Jon Kantner: <br /><br />\n            <a target="_blank" href="https://codepen.io/jkantner/full/XMLVXa/">https://codepen.io/jkantner/full/XMLVXa/</a>\n            <br /><br />'},{title:"Animated Background Login",image:"img/thumbnails/animated-login.webp",link:"projects/animated-login",description:'A concept design for a login page with an animated background.<br />\n            Inspired from this Dribbble shot by Nest: <br /><br />\n            <a target="_blank" href="https://dribbble.com/shots/1187493-Log-in-GIF-animation">https://dribbble.com/shots/1187493-Log-in-GIF-animation</a>\n            <br /><br />'}];var g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(6),m=Object(o.a)(l,2),b=m[0],g=m[1],u=Object(n.useState)({}),f=Object(o.a)(u,2),E=f[0],k=f[1];function y(e){var t,a=e.action,n=e.payload;switch(a){case"open-modal":v();break;case"close-modal":i(!1),document.documentElement.classList.remove("modal-open");break;case"view-project":t=n.project,k(t),v();break;case"show-more":!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;g((function(t){return t+e}))}()}}function v(){i(!0),document.documentElement.classList.add("modal-open")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{isModalOpen:a,dispatch:y,project:E}),r.a.createElement(c,{title:"Hello",subtitle:"My Name is Evyatar Daud<br/>And I'm a Web-Developer"}),r.a.createElement(h,{dispatch:y,projects:d,limit:b}),r.a.createElement(p,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.03fdb889.chunk.js.map