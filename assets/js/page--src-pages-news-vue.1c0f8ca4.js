(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(t,e,r){},210:function(t,e,r){"use strict";var a=r(205);r.n(a).a},211:function(t,e,r){"use strict";r(81),r(221),r(222);var a=r(223),i=r.n(a),l={props:{articles:{type:Array,required:!0},type:{type:String,required:!0}},computed:{years:function(){var t=this.articles.map((function(t){return t.node})),e=i()(t,(function(t){return t.year}));return Object.keys(e).map((function(t){return{year:t,articles:e[t]}})).sort((function(t,e){return e.year-t.year}))}}},s=(r(210),r(15)),c=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"years"},t._l(t.years,(function(e){return r("li",{key:e.year,staticClass:"year"},[r("span",{staticClass:"year__label"},[t._v(t._s(e.year))]),r("ul",{staticClass:"articles"},t._l(e.articles,(function(e){return r("li",{key:e.id,staticClass:"article"},[r("b",[t._v("\n          "+t._s(e.startDate)+" - \n          "),r("g-link",{attrs:{to:"/"+t.type+"/"+e.slug+"/"}},[t._v(t._s(e.title))])],1),r("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article__summary",domProps:{innerHTML:t._s(e.summary)}})])})),0)])})),0)}),[],!1,null,"a30c48bc",null);e.a=c.exports},228:function(t,e,r){},229:function(t,e){},245:function(t,e,r){"use strict";var a=r(228);r.n(a).a},246:function(t,e,r){"use strict";var a=r(229),i=r.n(a);e.default=i.a},256:function(t,e,r){"use strict";r.r(e);var a="https://nowickilab.science/news/",i="News - NowickiLab",l="THIS recently happened in the Nowicki Lab!",s={metaInfo:{title:i,titleTemplate:"%s",description:l,meta:[{name:"title",content:i},{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:url",content:a},{property:"og:type",content:"website"},{property:"og:image",content:""},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:a},{name:"twitter:title",content:i},{name:"twitter:description",content:l},{name:"twitter:image",content:""}]},components:{ArticlesPreview:r(211).a}},c=(r(245),r(15)),n=r(246),f=Object(c.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("h1",[this._v("News")]),e("p",[this._v("THIS recently happened in the Nowicki Lab!")]),e("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",id:"a9d5c6ed-9ea4-42a3-ab78-5bac3f9dde90","data-name":"Layer 1",width:"1054.40228",height:"786.12721",viewBox:"0 0 1054.40228 786.12721"}},[e("title"),e("path",{attrs:{d:"M498.79886,510c-30.59473,113.5885-95.36335,213-213,213s-213-95.36335-213-213,123.98953-136.08759,213-213C466.55258,140.81384,593.81015,157.25343,498.79886,510Z",transform:"translate(-72.79886 -56.4364)",fill:"#f2f2f2"}}),e("circle",{attrs:{cx:"488.40228",cy:"105",r:"68",fill:"#ff6584"}}),e("rect",{attrs:{x:"575.40228",y:"10",width:"36",height:"36",fill:"#ff6584"}}),e("ellipse",{attrs:{cx:"215.59772",cy:"667",rx:"170",ry:"23.12721",fill:"#3f3d56"}}),e("rect",{attrs:{x:"263.40228",y:"129",width:"230",height:"117",fill:"#f9a826"}}),e("circle",{attrs:{cx:"206.40228",cy:"554",r:"79",fill:"#2f2e41"}}),e("rect",{attrs:{x:"170.40228",y:"616",width:"24",height:"43",fill:"#2f2e41"}}),e("rect",{attrs:{x:"218.40228",y:"616",width:"24",height:"43",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"190.40228",cy:"659.5",rx:"20",ry:"7.5",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"238.40228",cy:"658.5",rx:"20",ry:"7.5",fill:"#2f2e41"}}),e("circle",{attrs:{cx:"208.40228",cy:"534",r:"27",fill:"#fff"}}),e("circle",{attrs:{cx:"208.40228",cy:"534",r:"9",fill:"#3f3d56"}}),e("path",{attrs:{d:"M202.56847,536.96867c-6.37889-28.56758,14.01185-57.43391,45.544-64.47476s62.2651,10.41,68.644,38.97759-14.51861,39.1038-46.05075,46.14465S208.94736,565.53625,202.56847,536.96867Z",transform:"translate(-72.79886 -56.4364)",fill:"#f9a826"}}),e("circle",{attrs:{cx:"179.40228",cy:"327",r:"79",fill:"#2f2e41"}}),e("rect",{attrs:{x:"143.40228",y:"389",width:"24",height:"43",fill:"#2f2e41"}}),e("rect",{attrs:{x:"191.40228",y:"389",width:"24",height:"43",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"163.40228",cy:"432.5",rx:"20",ry:"7.5",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"211.40228",cy:"431.5",rx:"20",ry:"7.5",fill:"#2f2e41"}}),e("circle",{attrs:{cx:"181.40228",cy:"307",r:"27",fill:"#fff"}}),e("circle",{attrs:{cx:"181.40228",cy:"307",r:"9",fill:"#3f3d56"}}),e("path",{attrs:{d:"M175.56847,309.96867c-6.37889-28.56758,14.01185-57.43391,45.544-64.47476s62.2651,10.41,68.644,38.97759-14.51861,39.1038-46.05075,46.14465S181.94736,338.53625,175.56847,309.96867Z",transform:"translate(-72.79886 -56.4364)",fill:"#f9a826"}}),e("ellipse",{attrs:{cx:"325.2208",cy:"323.78004",rx:"39.5",ry:"12.40027",transform:"translate(-166.13203 455.53148) rotate(-69.08217)",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"163.2208",cy:"346.78004",rx:"12.40027",ry:"39.5",transform:"translate(-292.84839 289.2128) rotate(-64.62574)",fill:"#2f2e41"}}),e("path",{attrs:{d:"M213.39658,411.9364c0,7.732,19.90861,23,42,23s42.80456-21.768,42.80456-29.5-20.71317,1.5-42.80456,1.5S213.39658,404.20441,213.39658,411.9364Z",transform:"translate(-72.79886 -56.4364)",fill:"#fff"}}),e("rect",{attrs:{x:"285.40228",y:"112",width:"230",height:"117",fill:"none",stroke:"#3f3d56","stroke-miterlimit":"10","stroke-width":"2"}}),e("rect",{attrs:{x:"587.40228",y:"1",width:"36",height:"36",fill:"none",stroke:"#3f3d56","stroke-miterlimit":"10","stroke-width":"2"}}),e("path",{attrs:{d:"M1127.20114,596.73349c0,81.82751-48.64516,110.39862-108.652,110.39862s-108.652-28.57111-108.652-110.39862,108.652-185.925,108.652-185.925S1127.20114,514.906,1127.20114,596.73349Z",transform:"translate(-72.79886 -56.4364)",fill:"#f2f2f2"}}),e("polygon",{attrs:{points:"941.792 638.179 942.905 569.696 989.215 484.974 943.079 558.954 943.58 528.161 975.496 466.865 943.712 520.012 943.712 520.013 944.612 464.631 978.789 415.832 944.753 455.922 945.315 354.372 941.783 488.806 942.073 483.26 907.325 430.072 941.516 493.906 938.278 555.758 938.182 554.116 898.123 498.144 938.06 559.916 937.655 567.651 937.583 567.767 937.616 568.402 929.402 725.325 940.377 725.325 941.693 644.272 981.533 582.651 941.792 638.179",fill:"#3f3d56"}}),e("ellipse",{attrs:{cx:"934.06961",cy:"725.32182",rx:"37.77886",ry:"11.19374",fill:"#3f3d56"}}),e("ellipse",{attrs:{cx:"764.59772",cy:"763",rx:"170",ry:"23.12721",fill:"#3f3d56"}}),e("circle",{attrs:{cx:"766.59772",cy:"644.5",r:"79",fill:"#2f2e41"}}),e("rect",{attrs:{x:"851.39658",y:"762.9364",width:"24",height:"43",transform:"translate(1653.99431 1512.4364) rotate(-180)",fill:"#2f2e41"}}),e("rect",{attrs:{x:"803.39658",y:"762.9364",width:"24",height:"43",transform:"translate(1557.99431 1512.4364) rotate(-180)",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"810.39658",cy:"810.4364",rx:"20",ry:"7.5",transform:"translate(-369.4445 457.33979) rotate(-30)",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"857.39658",cy:"810.4364",rx:"20",ry:"7.5",transform:"translate(-363.1477 480.83979) rotate(-30)",fill:"#2f2e41"}}),e("circle",{attrs:{cx:"764.59772",cy:"624.5",r:"27",fill:"#fff"}}),e("circle",{attrs:{cx:"755.40228",cy:"613",r:"9",fill:"#3f3d56"}}),e("path",{attrs:{d:"M916.02925,627.46867c6.37889-28.56758-14.01185-57.43391-45.544-64.47476s-62.2651,10.41-68.644,38.97759,14.51862,39.1038,46.05076,46.14465S909.65036,656.03625,916.02925,627.46867Z",transform:"translate(-72.79886 -56.4364)",fill:"#f9a826"}}),e("ellipse",{attrs:{cx:"770.18147",cy:"673.78004",rx:"12.40027",ry:"39.5",transform:"translate(-225.09638 1060.27881) rotate(-66.82884)",fill:"#2f2e41"}}),e("ellipse",{attrs:{cx:"918.18147",cy:"726.78004",rx:"12.40027",ry:"39.5",transform:"translate(-184.05598 1228.48577) rotate(-66.82884)",fill:"#2f2e41"}}),e("rect",{attrs:{x:"633.40228",y:"570",width:"36",height:"36",fill:"#ff6584"}}),e("rect",{attrs:{x:"595.40228",y:"506",width:"36",height:"36",fill:"none",stroke:"#3f3d56","stroke-miterlimit":"10","stroke-width":"2"}}),e("path",{attrs:{d:"M855.20114,735.4364a18,18,0,0,1-36,0c0-9.94113,8.05887-12,18-12S855.20114,725.49527,855.20114,735.4364Z",transform:"translate(-72.79886 -56.4364)",fill:"#fff"}})]),e("ArticlesPreview",{attrs:{articles:this.$page.news.edges,type:"news"}})],1)])}),[],!1,null,"99d977ee",null);"function"==typeof n.default&&Object(n.default)(f);e.default=f.exports}}]);