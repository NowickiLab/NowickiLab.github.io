(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{206:function(t,e,a){"use strict";a(35),a(26),a(80),a(81);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{metaInfo:function(){var e=this.$page.article,a=e.title,i=e.summary,n=e.img,r=i?i.replace(/(<([^>]+)>)/gi,""):"",c=[{name:"title",content:a},{name:"description",content:r},{property:"og:title",content:a},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a},{name:"twitter:description",content:r}];if(n){var s="https://nowickilab.science"+n.srcset[1].split(" ")[0];c.push({property:"og:image",content:s},{name:"twitter:image",content:s})}return{title:"".concat(a).concat(t),titleTemplate:"%s",description:r,meta:c}}}}},208:function(t,e,a){"use strict";e.a={mounted:function(){if(window.DISQUS){var t=window.location.origin+window.location.pathname;DISQUS.reset({reload:!0,config:function(){this.page.identifier=t,this.page.url=t}})}}}},214:function(t,e,a){},215:function(t,e){},235:function(t,e,a){"use strict";var i=a(214);a.n(i).a},236:function(t,e,a){"use strict";var i=a(215),n=a.n(i);e.default=n.a},254:function(t,e,a){"use strict";a.r(e);var i=a(208),n=a(206),r={mixins:[i.a,Object(n.a)(" - Projects - Nowicki Lab")]},c=(a(235),a(15)),s=a(236),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("article",[a("header",{staticClass:"header"},[a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.article.title)}}),a("time",{staticClass:"date",attrs:{datetime:t.$page.article.startDateRaw}},[t._v("\n        "+t._s(t.$page.article.startDate)+"\n      ")]),t.$page.article.endDateRaw?a("span",[t._v("\n        -\n        "),a("time",{staticClass:"date",attrs:{datetime:t.$page.article.endDateRaw}},[t._v("\n          "+t._s(t.$page.article.endDate)+"\n        ")])]):t._e(),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.article.summary)}}),a("div",{},t._l(t.$page.article.tags,(function(e){return a("g-link",{key:e.id,attrs:{to:e.path}},[t._v("\n          #"+t._s(e.title)+"\n        ")])})),1)]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.article.content)}})]),a("div",{staticClass:"disqus",attrs:{id:"disqus_thread"}})])}),[],!1,null,"58c1cd69",null);"function"==typeof s.default&&Object(s.default)(o);e.default=o.exports}}]);