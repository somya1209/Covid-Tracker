(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/news1.742f7701.jpg"},216:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(75),o=a.n(l),c=(a(103),a(48),a(104),a(105),a(94)),i=a(6),s=a(8),m=a.n(s),d=a(14),u=a(16),p=a(17),h=a(34),f=a(19),g=a(18),E=a(97),v=a(227),y=a(228),w=a(229),b=a(230),C=a(231),x=a(232),N=a(233),k=a(234),S=a(76),D=a(20),O=a.n(D),j=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("https://covid19.mathdro.id/api","/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.recovered,n=e.deaths,r=e.reportDate;return{confirmed:t.total,recovered:a.total,deaths:n.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=Object(n.useState)({}),a=Object(E.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=l[0]?r.a.createElement(S.a,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb(102, 255, 102)",fill:!0},{data:l.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgb(255, 255, 102)",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb(255, 102, 102)",backgroundColor:"rgba(255, 102, 102, 0.8)",fill:!0}]}}):null;return r.a.createElement(v.a,{className:"flex"},r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement(b.a,{className:"box",style:{borderBottomColor:"rgba(102, 255, 102, 0.8)",borderBottomWidth:20,borderRadius:"20px",margin:"1em",boxShadow:"0px 10px 20px #555"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{style:{color:"#063146"}},"Infected"),r.a.createElement(N.a,{style:{color:"#063146"}},r.a.createElement("h2",null,e.confirmed)),r.a.createElement(k.a,{style:{color:"#063146"}},r.a.createElement("p",null,(new Date).toDateString()),r.a.createElement("p",null,"Number of confirmed cases of COVID-19"))))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,{style:{borderBottomColor:"rgba(255, 255, 102, 0.8)",borderBottomWidth:20,borderRadius:"20px",margin:"1em",boxShadow:"0px 10px 20px #555"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{style:{color:"#063146"}},"Recovered"),r.a.createElement(N.a,{style:{color:"#063146"}},r.a.createElement("h2",null,e.recovered)),r.a.createElement(k.a,{style:{color:"#063146"}},r.a.createElement("p",null,(new Date).toDateString()),r.a.createElement("p",null,"Number of recoveries from COVID-19"))))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,{style:{borderBottomColor:"rgba(255, 102, 102, 0.8)",borderBottomWidth:20,borderRadius:"20px",margin:"1em",boxShadow:"0px 10px 20px #555"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{style:{color:"#063146"}},"Deaths"),r.a.createElement(N.a,{style:{color:"#063146"}},r.a.createElement("h2",null,e.deaths)),r.a.createElement(k.a,{style:{color:"#063146"}},r.a.createElement("p",null,(new Date).toDateString()),r.a.createElement("p",null,"Number of deaths caused by COVID-19")))))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h3",{style:{color:"#063146"}},"Global Data")),r.a.createElement("br",null),c))},H=(a(216),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{className:"countryList",onChange:this.props.CountryData,style:{marginTop:20,marginBottom:20,borderRadius:"20px",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"7px"}},r.a.createElement("option",null,"Global"),this.props.CountryOptions))}}]),a}(n.Component)),T=(n.Component,a(217),a(96)),z=(a(218),a(219),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={statedata:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.covid19india.org/data.json");case 2:for(t=e.sent,a=[],n=0;n<t.data.statewise.length;n++)a.push(t.data.statewise[n]);this.setState({statedata:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[{Header:"Last Updated",accessor:"lastupdatedtime",headerClassName:"hdrCls",footerClassName:"ftrCls",className:"cellCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#eeeeee",color:"black",fontSize:15}})}},{Header:"State",accessor:"state",headerClassName:"hdrCls",className:"cellCls",footerClassName:"ftrCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#DCDCDC",color:"black",fontSize:15}})}},{Header:"Confirmed",accessor:"confirmed",headerClassName:"hdrCls",className:"cellCls",footerClassName:"ftrCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#DCDCDC",color:"black",fontSize:15}})}},{Header:"Active",accessor:"active",headerClassName:"hdrCls",className:"cellCls",footerClassName:"ftrCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#DCDCDC",color:"black",fontSize:15}})}},{Header:"Recovered",accessor:"recovered",headerClassName:"hdrCls",className:"cellCls",footerClassName:"ftrCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#DCDCDC",color:"black",fontSize:15}})}},{Header:"Deceased",accessor:"deaths",headerClassName:"hdrCls",className:"cellCls",footerClassName:"ftrCls",filterMethod:function(e,t){return t[e.id].toString().toUpperCase().search(e.value.toUpperCase())>=0},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("input",{placeholder:"Search",onChange:function(e){return a(e.target.value)},value:t?t.value:"",style:{width:"100%",backgroundColor:"#DCDCDC",color:"black",fontSize:15}})}}];return r.a.createElement(v.a,{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{"ml-5":!0,"mr-5":!0},r.a.createElement("br",null),r.a.createElement("h1",{className:"container",style:{fontWeight:500,display:"flex",flexDirection:"column",flexFlow:"column",textAlign:"center",fontSize:"3vw",fontFamily:"Luckiest Guy",color:"crimson"}},"India Live"),r.a.createElement("br",null),r.a.createElement(T.a,{className:"MyReactTableClass",columns:e,data:this.state.statedata,filterable:!0,defaultPageSize:10}),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),a}(n.Component)),I=a(27),B=a(236),M=a(78),W=a.n(M),R=a(79),V=a.n(R),F=a(80),U=a.n(F),q=a(81),L=a.n(q),_=a(82),G=a.n(_),J=a(83),P=a.n(J),K=a(84),$=a.n(K),Q=a(85),X=a.n(Q),Y=a(86),Z=a.n(Y),ee=a(87),te=a.n(ee),ae=a(88),ne=a.n(ae),re=a(89),le=a.n(re),oe=a(90),ce=a.n(oe),ie=a(91),se=a.n(ie),me=a(92),de=a.n(me);a(220);var ue=function(){var e,t;return r.a.createElement(v.a,{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("h1",{className:"container",style:{textAlign:"center",fontSize:"3vw",fontFamily:"Luckiest Guy",color:"crimson"}},"COVID-19 Outbreak"),r.a.createElement("br",null),r.a.createElement("h3",{className:"container",style:{textAlign:"left",color:"#063146"}},"What is COVID-19?"),r.a.createElement("img",{className:"image-container container",src:W.a,alt:"COVID-19",style:{marginTop:20,marginBottom:20,width:"100%",height:"auto"}})),r.a.createElement("p",{className:"container",style:{textAlign:"left",float:"left",fontSize:20,lineHeight:2,color:"#063146"}},"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads.The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it\u2019s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow)."," "),r.a.createElement("p",{className:"container",style:{textAlign:"left",float:"left",marginTop:15,lineHeight:2,color:"#063146",fontSize:20}},"A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans. Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans. At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments."),r.a.createElement("br",null),r.a.createElement("h3",{className:"container",style:{textAlign:"left",paddingTop:15,color:"#063146"}},"How did it start?"),r.a.createElement("p",{className:"container",style:{textAlign:"left",float:"right",marginTop:10,lineHeight:2,fontSize:20,color:"#063146"}},"Coronavirus disease 2019 (COVID-19) was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China. It was initially reported to the WHO on December 31, 2019. On January 30, 2020, the WHO declared the COVID-19 outbreak a global health emergency. On March 11, 2020, the WHO declared COVID-19 a global pandemic, its first such designation since declaring H1N1 influenza a pandemic in 2009."," "),r.a.createElement(B.a,{href:"http://www.emro.who.int/health-topics/corona-virus/index.html",target:"blank",style:{backgroundColor:"#063146",marginTop:15,border:0}},"Read More")),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",{className:"ml-5 mr-5",style:{textAlign:"center",color:"#063146"}},"Symptoms"),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:V.a,alt:"fever",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Fever")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:L.a,alt:"cold",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Cold")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:Z.a,alt:"Headache",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Headaches"))),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20,width:"100%",height:"auto"}},r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:U.a,alt:"Cough",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Cough")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:G.a,alt:"Fatigue",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Fatigue")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:P.a,alt:"Naussea",style:{paddingTop:5,paddingBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Naussea"))),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:X.a,alt:"Diarrhea",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Diarrhea")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:$.a,alt:"Breathing",style:{paddingTop:5,marginBottom:10,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Difficulty Breathing")))),r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h3",{style:{textAlign:"center",color:"#063146"}},"Preventive Measures"),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:te.a,alt:"Stay Home",style:{paddingTop:5,marginBottom:20,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Stay Home, Stay Safe. Self isolate from others if you feel unwell.")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:ne.a,alt:"Wash Hands",style:{paddingTop:5,marginBottom:15,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Wash your hands reguraly for 20 seconds with soap and water")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:le.a,alt:"Wear Mask",style:{paddingTop:5,marginBottom:15,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Cover your mouth and nose with masks when outside."))),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:ce.a,alt:"Stay Informed",style:{paddingTop:5,marginBottom:20,width:"100%",height:"auto"}}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Stay informed and follow the recommended practices.")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:se.a,alt:"Contact doctor if chills",style:(e={height:200,width:250,paddingTop:5,marginBottom:20},Object(I.a)(e,"width","100%"),Object(I.a)(e,"height","auto"),e)}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"If you have fever, cough and difficulty breathing, seek medical care immediately.")),r.a.createElement(w.a,{md:3},r.a.createElement("img",{className:"image-container",src:de.a,alt:"Avoid contact",style:(t={height:200,width:250,paddingTop:5,marginBottom:20},Object(I.a)(t,"width","100%"),Object(I.a)(t,"height","auto"),t)}),r.a.createElement("p",{style:{textAlign:"center",fontSize:20,color:"#063146"}},"Avoid close contact with people who are unwell. Maintain 1 meter or 4 feet distance.")))),r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("i",null,r.a.createElement("p",{style:{textAlign:"center",fontSize:25,fontFamily:"Arial, sans-serif",marginBottom:50,color:"#063146"}},'"Ultimately, the greatest lesson that COVID-19 can teach humanity is that we are all in this together."'))))},pe=a(235),he=a(15),fe=a.n(he);var ge=function(){return r.a.createElement(v.a,{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{"ml-5":!0,"mr-5":!0},r.a.createElement("br",null),r.a.createElement("h1",{className:"container",style:{color:"#063146",fontWeight:600,display:"flex",flexDirection:"column",flexFlow:"column",textAlign:"center"}},"Covid-19 Headlines"),r.a.createElement(v.a,{className:"flex"},r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the News Headline and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More"))))),r.a.createElement(y.a,{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",marginTop:20}},r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the News Headl ineand make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))),r.a.createElement(w.a,{md:3},r.a.createElement(b.a,null,r.a.createElement(pe.a,{top:!0,width:"100%",src:fe.a,alt:"Covid-19 news"}),r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h5",null,"News Headline")),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(k.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(B.a,{href:"https://www.google.co.in/?gws_rd=ssl",target:"blank",style:{backgroundColor:"#063146",border:0}},"Read More")))))))))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"404 Error"),r.a.createElement("p",null,"Oops! page not found.")))},ve=a(93),ye=a.n(ve),we=(a(221),a(222),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{width:"100%",style:{padding:"0px",borderRadius:"5px"},src:e.article.urlToImage,alt:"Covid-19 news"}),r.a.createElement("div",{className:"content",style:{padding:"10px",height:"100%"}},r.a.createElement("p",{style:{fontFamily:"Arial, Helvetica, sans-serif",align:"center",fontSize:"15px"}},r.a.createElement("e",null,e.article.title)),r.a.createElement("hr",null),r.a.createElement("span",{style:{fontSize:"10px",color:"gray"}},e.article.publishedAt),r.a.createElement("p",{style:{fontSize:"10px",color:"gray"}},e.article.author),r.a.createElement("p",{style:{fontSize:"10px"}},e.article.content),r.a.createElement("div",{className:"btn"},r.a.createElement(B.a,{href:e.article.url,target:"blank",style:{backgroundColor:"#063146",marginLeft:"60px",flexGrow:"1"}},"Read More"))))}),be=function(e){return r.a.createElement("div",{className:"card-list"},e.articles.map((function(e){return r.a.createElement(we,{article:e})})))},Ce=(a(223),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={articles:[],error:null},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/everything?q=covid&apiKey=".concat("f80c12a5df93415397b30c170713d48e");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles}),console.log(e.state.news)}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"ml-5 mr-5"},r.a.createElement("br",null),r.a.createElement("p",{className:"container",style:{textAlign:"center",fontSize:"3vw",fontFamily:"Luckiest Guy",color:"crimson"}},"Covid-19 Headlines")))),r.a.createElement(be,{articles:this.state.articles}))}}]),a}(r.a.Component));var xe=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{htmlFor:"check",style:{display:"flex",justifyContent:"space-around",flexDirection:"column"}},r.a.createElement("i",{className:"fa fa-bars",id:"btn"}),r.a.createElement("i",{className:"fa fa-times",id:"cancel"})),r.a.createElement("div",{className:"sidebar"},r.a.createElement("header",null,r.a.createElement("img",{src:ye.a,alt:"COVID-19",style:{height:30,width:30,position:"relative"}})," Covid-19 Tracker"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/india"},r.a.createElement("i",{className:"fa fa-map-pin"}),"IndiaLive")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Covid-Tracker/"},r.a.createElement("i",{className:"fa fa-info"})," WHO")),r.a.createElement("li",null,r.a.createElement("a",{href:"/news2"},r.a.createElement("i",{className:"fa fa-newspaper-o"}),"News")))),r.a.createElement("section",null,r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:"true",path:"/india",component:z}),r.a.createElement(i.a,{exact:"true",path:"/Covid-Tracker/",component:ue}),r.a.createElement(i.a,{exact:"true",path:"/news",component:ge}),r.a.createElement(i.a,{path:"/news2",component:Ce}),r.a.createElement(i.a,{component:Ee})))))};var Ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/covid.bfe309fd.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/fever.9e2935ca.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/cough.e0f3f9fe.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/cold.1df30558.png"},82:function(e,t,a){e.exports=a.p+"static/media/fatigue.b881ae0b.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/naussea.bb8c6c55.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/breathing.49d3939c.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/diarrhea.1eb81a25.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/headaches.4511918e.png"},87:function(e,t,a){e.exports=a.p+"static/media/stayHome.0825b5b8.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/washHands.7c9fae1b.png"},89:function(e,t,a){e.exports=a.p+"static/media/mask.06e0c339.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/stayInformed.780acfd1.png"},91:function(e,t,a){e.exports=a.p+"static/media/chills.efd74a8d.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/avoidContact.30094233.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/logo.f1238ee9.png"},98:function(e,t,a){e.exports=a(226)}},[[98,1,2]]]);
//# sourceMappingURL=main.795ad532.chunk.js.map