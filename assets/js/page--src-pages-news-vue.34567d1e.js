(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(t,e,n){"use strict";var s=n(1),a=n(101)(!0);s(s.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(163)("includes")},258:function(t,e,n){"use strict";var s=n(1),a=n(99);s(s.P+s.F*n(100)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},259:function(t,e,n){"use strict";n(257),n(258);var s={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},a=n(10),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-link",{class:{"ursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),n("div",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),n("g-link",{class:{"cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=r.exports},264:function(t,e){},273:function(t,e,n){"use strict";var s=n(264),a=n.n(s);e.default=a.a},281:function(t,e,n){"use strict";n.r(e);var s=n(259),a={props:{news:{type:Object,required:!0}},computed:{path:function(){return"/news/".concat(this.news.slug,"/")}}},r=n(10),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[n("g-link",{attrs:{to:t.path}},[t._v(t._s(t.news.title))])],1),n("div",[n("span",[t._v(t._s(t.news.date))]),n("span",[t._v(" · ")]),n("span",[t._v(t._s(t.news.timeToRead)+" min read")])]),t._v("\n\n  "+t._s(t.news.summary)+"\n\n  "),n("div",[n("g-link",{attrs:{to:t.path}},[t._v("Read More")])],1)])}),[],!1,null,"51775c45",null).exports,o={metaInfo:{title:"News"},components:{PaginationPosts:s.a,NewsPreview:i}},u=n(273),c=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",[e("h1",[this._v("News")]),this._l(this.$page.news.edges,(function(t){return e("NewsPreview",{key:t.id,attrs:{news:t.node}})})),this.$page.news.pageInfo.totalPages>1?e("pagination-posts",{attrs:{base:"/news",totalPages:this.$page.news.pageInfo.totalPages,currentPage:this.$page.news.pageInfo.currentPage}}):this._e()],2)])}),[],!1,null,null,null);"function"==typeof u.default&&Object(u.default)(c);e.default=c.exports}}]);