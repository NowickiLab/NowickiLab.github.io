(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2qYH":function(t,e,n){"use strict";n.r(e);var s={components:{SimpleArticlesPreview:n("s3Yi").a},metaInfo:function(){return{title:"Tag: "+this.$page.tag.title}}},i=n("KHd+"),a=null,r=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Tag: "+this._s(this.$page.tag.title))]),e("SimpleArticlesPreview",{attrs:{articles:this.$page.tag.belongsTo.edges}})],1)}),[],!1,null,null,null);"function"==typeof a&&a(r);e.default=r.exports},VGyz:function(t,e,n){},"YR/j":function(t,e,n){"use strict";var s=n("VGyz");n.n(s).a},s3Yi:function(t,e,n){"use strict";var s={props:{articles:{type:Array,required:!0},linkTo:{type:String,default:""}},computed:{type:function(){return function(t){var e=t.node.__typename.toLowerCase();return"s"!==e[e.length-1]&&(e+="s"),e}}}},i=(n("YR/j"),n("KHd+")),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"articles"},t._l(t.articles,(function(e){return n("li",{key:e.node.id,staticClass:"article"},[t.linkTo?n("span",[n("b",[t._v(t._s(e.node.startDate))]),t._v(" - \n      ")]):n("span",[t._v("\n        ["+t._s(t.type(e))+"] "),n("b",[t._v(t._s(e.node.startDate))]),n("br")]),n("b",[n("g-link",{attrs:{to:"/"+t.type(e)+"/"+e.node.slug+"/"}},[t._v(t._s(e.node.title))])],1),n("br"),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article__summary",domProps:{innerHTML:t._s(e.node.summary)}})])})),0),t.linkTo?n("div",{staticClass:"link-wrap"},[n("g-link",{staticClass:"link",attrs:{to:"/"+t.linkTo+"/"}},[t._v("\n      See "+t._s(t.linkTo)+" archives...\n    ")])],1):t._e()])}),[],!1,null,"4cf08ec8",null);e.a=a.exports}}]);