(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(t,e,n){"use strict";n(35);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{metaInfo:function(){var e=this.$page.article,n=e.title,i=e.summary,a=e.img,o=[{name:"title",content:n},{name:"description",content:i},{property:"og:title",content:n},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:n},{name:"twitter:description",content:i}];return a&&o.push({property:"og:image",content:a},{name:"twitter:image",content:a}),{title:"".concat(n).concat(t),titleTemplate:"%s",description:i,meta:o}}}}},218:function(t,e){},237:function(t,e,n){"use strict";var i=n(218),a=n.n(i);e.default=a.a},252:function(t,e,n){"use strict";n.r(e);var i=n(207),a={mixins:[Object(i.a)(" - NowickiLab")]},o=n(15),r=n(237),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$page.article.title))]),n("div",{},t._l(t.$page.article.tags,(function(e){return n("g-link",{key:e.id,attrs:{to:e.path},domProps:{textContent:t._s(e.title)}})})),1),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.article.content)}})])}),[],!1,null,"c2eb4fe8",null);"function"==typeof r.default&&Object(r.default)(c);e.default=c.exports}}]);