(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(t,e,n){"use strict";n(35),n(203);var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},r=n(14),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-link",{class:{"ursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),n("div",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),n("g-link",{class:{"cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=s.exports},214:function(t,e,n){},215:function(t,e){},230:function(t,e,n){"use strict";var a=n(214);n.n(a).a},231:function(t,e,n){"use strict";var a=n(215),r=n.n(a);e.default=r.a},235:function(t,e,n){"use strict";n.r(e);n(81),n(226),n(227);var a=n(228),r=n.n(a),s=n(204),o={props:{project:{type:Object,required:!0}},computed:{path:function(){return"/projects/".concat(this.project.slug,"/")}}},c=n(14),i=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[n("g-link",{attrs:{to:t.path}},[t._v(t._s(t.project.title))])],1),n("div",[n("span",[t._v(t._s(t.project.date))]),n("span",[t._v(" · ")]),n("span",[t._v(t._s(t.project.timeToRead)+" min read")])]),t._v("\n\n  "+t._s(t.project.summary)+"\n\n  "),n("div",[n("g-link",{attrs:{to:t.path}},[t._v("Read More")])],1)])}),[],!1,null,"58b8a11e",null).exports,u="https://nowickilab.science/projects/",l="Projects - NowickiLab",p="What’s cooking in the Nowicki Lab right now?",g={metaInfo:{title:l,titleTemplate:"%s",description:p,meta:[{name:"title",content:l},{name:"description",content:p},{name:"og:title",content:l},{name:"og:description",content:p},{name:"og:url",content:u},{name:"og:type",content:"website"},{name:"og:image",content:""},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:u},{name:"twitter:title",content:l},{name:"twitter:description",content:p},{name:"twitter:image",content:""}]},components:{PaginationPosts:s.a,ProjectPreview:i},computed:{years:function(){var t=this.$page.projects.edges.map((function(t){return t.node})),e=r()(t,(function(t){return t.year}));return Object.keys(e).map((function(t){return{year:t,projects:e[t]}})).sort((function(t,e){return e.year-t.year}))}}},_=(n(230),n(231)),m=Object(c.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",[t._v("Projects")]),n("ul",{staticClass:"years"},t._l(t.years,(function(e){return n("li",{key:e.year,staticClass:"year"},[n("span",{staticClass:"year__label"},[t._v(t._s(e.year))]),n("ul",{staticClass:"projects"},t._l(e.projects,(function(e){return n("li",{key:e.id,staticClass:"project"},[t._v("\n            "+t._s(e.startDate)+" - \n            "),n("g-link",{attrs:{to:"/projects/"+e.slug+"/"}},[t._v(t._s(e.title))])],1)})),0)])})),0)])}),[],!1,null,"0d37abe7",null);"function"==typeof _.default&&Object(_.default)(m);e.default=m.exports}}]);