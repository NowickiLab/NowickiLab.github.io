(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(t,e,s){"use strict";var a=s(4),i=s(83).includes,o=s(146);a({target:"Array",proto:!0,forced:!s(36)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},210:function(t,e,s){"use strict";s(35),s(207);var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},i=s(15),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("g-link",{class:{"ursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage}},[t._v("← Prev")]),s("div",[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),s("g-link",{class:{"cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=o.exports},212:function(t,e,s){},213:function(t,e){},233:function(t,e,s){"use strict";var a=s(212);s.n(a).a},234:function(t,e,s){"use strict";var a=s(213),i=s.n(a);e.default=i.a},252:function(t,e,s){"use strict";s.r(e);var a=s(210),i={props:{person:{type:Object,required:!0}},computed:{path:function(){return"/people/".concat(this.person.slug,"/")}}},o=s(15),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[s("g-link",{attrs:{to:t.path}},[t._v(t._s(t.person.title))])],1),s("div",[s("span",[t._v(t._s(t.person.date))]),s("span",[t._v(" · ")]),s("span",[t._v(t._s(t.person.timeToRead)+" min read")])]),t._v("\n\n  "+t._s(t.person.summary)+"\n\n  "),s("div",[s("g-link",{attrs:{to:t.path}},[t._v("Read More")])],1)])}),[],!1,null,"84abce72",null).exports,r="https://nowickilab.science/people/",c="People - NowickiLab",l="That’s who makes the magic (or is it advanced science?) happen in the Nowicki Lab.",p={metaInfo:{title:c,titleTemplate:"%s",description:l,meta:[{name:"title",content:c},{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:url",content:r},{property:"og:type",content:"website"},{property:"og:image",content:""},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:r},{name:"twitter:title",content:c},{name:"twitter:description",content:l},{name:"twitter:image",content:""}]},components:{PaginationPosts:a.a,PersonPreview:n}},g=(s(233),s(234)),u=Object(o.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"page-title"},[e("svg",{staticClass:"svg",staticStyle:{"shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd"},attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",width:"254mm",height:"50.7998mm",version:"1.1",viewBox:"0 0 25400 5079.98","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:xodm":"http://www.corel.com/coreldraw/odm/2003"}},[e("defs",[e("linearGradient",{attrs:{id:"id0",gradientUnits:"userSpaceOnUse",x1:"25400",y1:"2540",x2:"-0",y2:"2540"}},[e("stop",{staticStyle:{"stop-opacity":"1","stop-color":"#FE8F00"},attrs:{offset:"0"}}),e("stop",{staticStyle:{"stop-opacity":"1","stop-color":"#FEC77F"},attrs:{offset:"0.25098"}}),e("stop",{staticStyle:{"stop-opacity":"1","stop-color":"white"},attrs:{offset:"1"}})],1)],1),e("g",{attrs:{id:"Layer_x0020_1"}},[e("metadata",{attrs:{id:"CorelCorpID_0Corel-Layer"}}),e("rect",{staticClass:"fil0",attrs:{x:"0",y:"-0.02",width:"25400",height:"5080"}}),e("path",{staticClass:"fil1",attrs:{d:"M22142.91 5079.99l-6.09 -16.43 203.26 -442.98 130.5 59.88 -178.46 388.91 3.93 10.62c-6.08,0 -97.49,0 -153.14,0z"}}),e("polygon",{staticClass:"fil1",attrs:{points:"22355.52,4420.14 23034.63,4730.53 23164.26,5080.01 23011.1,5079.99 22920.68,4836.21 22295.44,4548.15 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"21549.5,3094.81 22401.44,3491.59 22401.52,3491.41 22610.58,3587.34 22770.55,4018.6 22674.62,4227.66 22673.43,4229.29 22559.53,4460.35 22431.42,4397.21 22544.44,4167.93 22544.13,4167.78 22615.25,4012.8 22496.63,3693.02 22341.65,3621.9 22341.19,3621.47 21488.71,3224.44 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22052.09,3525.16 21868.07,3926.18 21986.69,4245.95 22141.67,4317.07 22142.49,4317.67 22355.61,4420.12 22295.41,4548.1 22081.87,4447.39 22081.79,4447.56 21872.74,4351.63 21712.77,3920.37 21921.6,3465.28 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22653.46,5079.99 22902.07,4987.84 22930.38,5064.16 22886.79,5079.99 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22444.28,4992.26 22767.37,4872.41 22795.68,4948.73 22472.59,5068.57 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"21992.81,4022.82 22477.43,3843.06 22505.74,3919.38 22021.12,4099.14 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22127.5,4138.25 22450.59,4018.4 22478.9,4094.72 22155.81,4214.57 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22019.65,3847.47 22342.73,3727.63 22371.04,3803.95 22047.95,3923.79 "}}),e("polygon",{staticClass:"fil1",attrs:{points:"22316.3,2923.07 22232.78,3105.09 22232.61,3105.01 22133.4,3329.3 22002.44,3271.4 22102.05,3046.2 22102.28,3045.21 22185.81,2863.19 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"18182.73,2230.84 19826.11,1109.94 21588.05,2815.19 21474.05,3076.97 20459.19,2613.36 20460.54,2613.2 20378.88,1868.74 20257.7,1882.15 20331.5,2555.02 20088.83,2444.16 19721.6,1801.65 19615.71,1861.78 19899.02,2357.44 19515.48,2182.23 18799.39,2197.07 18801.81,2318.77 19490.16,2304.51 19971.01,2524.18 19299.42,2774.03 19341.72,2888.07 20127.56,2595.69 20156.28,2608.81 19314.08,3190.17 19383.39,3290.61 20285.56,2667.87 20790.38,2898.49 20144.13,3377.01 20216.51,3474.8 20916.82,2956.25 21425.43,3188.61 21276.84,3529.8 18703.97,3621.12 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"24095.89,109.11 22925.24,353.43 22103.88,2676.02 22248.34,2747.09 23078.63,1070.9 23117.82,593.14 23239.04,603.11 23209.18,967.05 23951.47,470.01 24019.01,571.13 23185.73,1129.07 23145.95,1209.36 24144.8,966.94 24173.94,1085.32 23107.79,1344.1 24405.15,1386.07 24401.51,1507.98 23020.18,1463.28 22974.32,1555.89 23762.97,1888.4 23715.56,2000.61 22920.14,1665.25 22906.6,1692.62 23409.69,2418.07 23309.7,2487.21 22844.94,1817.08 22357.66,2800.86 22833.84,3035.13 24876.84,1506.33 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"20990.06,65.22 21225.95,0 22590.94,-0.01 22865.76,351.24 22061.95,2670.01 21928.29,2657.53 22158.54,1334.09 22256.33,95.31 22134.84,85.96 22087.21,689.3 21762.39,174.62 21659.22,239.34 22071.2,892.11 22047.59,1191.17 21560.64,745.79 21478.53,835.76 22033.32,1343.18 22017.1,1436.34 21558.37,1356.76 21537.79,1476.82 21996.22,1556.37 21806.64,2646.17 21727.99,2638.82 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"21394.27,3869.5 20023.93,4655.46 18732.3,3683.38 21278.3,3571.87 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"20075.74,4684.7 21407.38,3903.98 21636.55,4095.36 21478.03,4549.92 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"24162.82,3204.58 24906.65,1556.15 22860.64,3071.69 22928.95,3547.41 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"20937.39,88.76 19886.68,1059.2 21608.03,2771.94 21691.81,2648.09 "}}),e("polygon",{staticClass:"fil2",attrs:{points:"24141.87,3259.44 22932.64,3587.39 22826.48,3800.49 22887.54,3996.07 23575.55,4039.49 "}}),e("path",{staticClass:"fil1",attrs:{d:"M19717.94 882.82l988.25 -882.77c864.2,-0.06 1400.64,-0.06 2164.47,0.89l76.63 97.71 477.86 -98.66 875.25 0 786.77 1386.05 -99.78 56.13 -816.82 -1442.18 -177.69 0 -1091.7 225.4 -176.03 -224.45 -1847.1 -0.7 -1044.61 933.12 -50.4 19.73 -65.1 -70.27z"}}),e("path",{staticClass:"fil1",attrs:{d:"M24394.16 3401.97l-883.6 1247.93 151.5 429.87c-650.96,0.22 -1008.4,0.22 -2083.35,0.27l-90.28 -252.4 -1542.01 122.74 -1450.14 -1114.87 69.64 -90.92 1415.21 1088.01 1585.47 -126.18 133.6 373.5c790.79,0.07 1372.44,0.07 1840.83,0.68l-158.14 -448.72 917.76 -1296.2 93.51 66.29z"}}),e("path",{staticClass:"fil3",attrs:{d:"M1658.02 3714.41c0,40.17 -6.79,78 -20.38,113.51 -13.58,35.31 -34.34,66.36 -62.28,92.94 -27.94,26.58 -63.25,47.34 -105.94,62.87 -42.88,15.32 -93.33,22.89 -151.34,22.89l-123.79 0 -64.81 308.7 -97.79 0 172.11 -815.11 210.91 0c43.65,0 80.91,6.01 111.76,17.85 30.85,12.03 56.07,27.94 75.67,47.73 19.4,19.98 33.76,42.68 42.49,68.49 8.92,25.81 13.39,52.58 13.39,80.13zm-100.51 8.54c0,-20.37 -3.49,-39 -10.48,-55.88 -7.18,-16.88 -17.46,-31.24 -31.04,-43.27 -13.58,-11.83 -30.66,-21.15 -50.84,-27.55 -20.37,-6.4 -43.65,-9.7 -70.23,-9.7l-110.79 0 -71.21 334.31 114.28 0c40.16,0 74.7,-5.04 103.8,-15.13 28.91,-10.09 52.78,-23.87 71.6,-41.53 18.82,-17.65 32.6,-38.41 41.52,-62.47 8.93,-24.06 13.39,-50.26 13.39,-78.78zm628.65 146.69c0,30.65 -6.79,58.59 -20.57,83.82 -13.58,25.22 -36.09,46.76 -67.52,64.8 -31.63,18.05 -72.96,32.02 -124.57,41.91 -51.61,9.7 -115.25,14.94 -190.92,15.33 -0.78,4.08 -1.17,8.54 -1.17,13 0,4.27 0,7.96 0,11.45 0,20.37 2.72,39.77 8.54,57.82 5.63,18.24 14.36,34.15 26.39,47.92 11.84,13.59 27.36,24.45 45.98,32.41 18.82,7.95 41.14,11.83 66.75,11.83 26.19,0 54.91,-5.04 86.15,-15.13 31.24,-9.9 61.12,-24.26 89.64,-42.88l-17.66 92.16c-20.95,12.03 -45.59,22.7 -74.5,31.82 -28.72,9.12 -60.93,13.58 -96.63,13.58 -42.88,0 -78.97,-6.59 -108.27,-19.79 -29.3,-13.38 -52.97,-31.04 -71.01,-53.16 -18.05,-22.31 -31.05,-47.73 -39,-76.84 -7.96,-28.91 -11.84,-59.37 -11.84,-91.19 0,-34.15 3.69,-66.94 11.26,-98.57 7.56,-31.62 18.23,-61.11 32.2,-88.47 13.78,-27.17 30.27,-52.2 49.68,-74.7 19.4,-22.51 40.74,-41.72 64.22,-57.63 23.48,-15.91 48.7,-28.33 75.67,-37.06 26.78,-8.73 54.72,-13 83.43,-13 30.08,0 56.46,3.88 79.36,11.84 22.9,7.95 42.1,18.82 57.43,32.79 15.33,13.77 26.97,29.68 34.93,47.92 7.95,18.24 12.03,37.64 12.03,58.02zm-95.08 4.65c0,-24.06 -8.73,-42.49 -26.38,-55.88 -17.66,-13.19 -40.94,-19.79 -70.24,-19.79 -23.09,0 -45.41,5.05 -66.94,15.14 -21.73,9.89 -41.52,23.86 -59.76,41.32 -18.24,17.66 -33.96,38.81 -47.15,63.26 -13.2,24.45 -22.9,50.83 -29.11,79.16 54.33,0 100.32,-2.71 138.15,-8.15 38.03,-5.62 68.88,-13.58 92.75,-24.25 23.86,-10.48 41.33,-23.48 52.19,-38.81 11.06,-15.33 16.49,-32.79 16.49,-52zm695.79 74.32c0,51.61 -7.18,100.5 -21.73,146.68 -14.74,46.37 -35.7,86.73 -63.25,121.46 -27.36,34.54 -60.73,62.09 -99.93,82.27 -39.19,20.37 -83.43,30.46 -132.71,30.46 -33.37,0 -63.45,-5.23 -90.23,-15.91 -26.58,-10.67 -49.28,-25.8 -68.1,-45.79 -18.82,-19.79 -33.18,-43.85 -43.27,-72.18 -10.09,-28.13 -14.94,-60.14 -14.94,-95.65 0,-53.55 7.57,-103.42 22.9,-149.79 15.33,-46.57 37.06,-86.93 64.8,-121.07 27.94,-34.35 61.32,-61.32 100.12,-80.72 38.81,-19.6 81.69,-29.3 128.64,-29.3 32.99,0 62.87,5.24 89.64,15.91 26.78,10.48 49.48,25.81 68.5,45.79 18.82,19.79 33.56,43.85 44.04,72.18 10.48,28.13 15.52,60.15 15.52,95.66zm-95.46 4.65c0,-24.64 -2.91,-46.56 -9.12,-65.77 -6.01,-19.02 -14.55,-35.12 -25.42,-48.32 -11.06,-13 -24.25,-23.08 -39.97,-30.07 -15.52,-6.98 -32.79,-10.48 -52.19,-10.48 -33.37,0 -63.45,8.54 -90.42,25.61 -26.97,17.08 -49.67,39.39 -68.1,67.33 -18.63,27.75 -32.99,59.57 -43.08,94.88 -9.89,35.51 -14.94,71.79 -14.94,108.85 0,23.48 2.91,44.82 8.74,64.03 5.82,19.02 14.16,35.31 25.03,48.9 10.86,13.38 24.05,23.67 39.77,30.85 15.72,7.37 33.37,10.86 53.16,10.86 33.77,0 64.03,-8.34 91,-25.22 26.78,-16.88 49.68,-39.19 68.11,-67.14 18.62,-27.94 32.79,-59.56 42.68,-95.26 9.9,-35.51 14.75,-71.99 14.75,-109.05zm726.44 -16.49c0,27.94 -2.91,57.05 -8.93,87.31 -6.21,30.08 -15.52,59.76 -27.94,88.87 -12.42,29.1 -28.13,56.85 -46.95,83.04 -18.63,26.2 -40.75,49.09 -66.17,69.08 -25.41,19.79 -54.13,35.5 -86.34,47.15 -32.21,11.44 -67.91,17.26 -106.91,17.26 -22.31,0 -44.43,-2.13 -66.16,-6.2 -21.93,-4.08 -40.94,-9.12 -57.24,-14.75l-58.01 276.88 -94.3 0 142.03 -673.09c2.71,-12.22 5.23,-26.77 7.56,-43.85 2.14,-17.07 4.08,-34.15 5.82,-51.41 1.75,-17.27 3.11,-33.38 4.27,-48.51 1.17,-15.33 1.75,-26.97 1.75,-35.31l95.46 0c0,6.4 -0.39,15.13 -1.36,26.19 -0.97,10.86 -2.13,22.31 -3.68,34.34 -1.56,11.84 -3.11,23.48 -4.66,34.73 -1.36,11.06 -2.72,20.18 -3.88,26.97l2.33 0c26.77,-45.79 57.24,-80.13 90.8,-102.64 33.76,-22.51 70.63,-33.76 110.4,-33.76 26.39,0 50.45,4.46 71.6,13.58 21.15,9.12 39.39,22.7 54.33,40.94 14.94,18.24 26.39,40.94 34.34,68.3 7.96,27.16 11.84,58.79 11.84,94.88zm-95.46 3.88c0,-20.37 -1.75,-39.39 -5.44,-56.85 -3.49,-17.27 -9.5,-32.4 -17.85,-44.82 -8.34,-12.61 -19.01,-22.31 -32.01,-29.49 -13.2,-7.37 -29.11,-10.87 -48.12,-10.87 -19.6,0 -38.22,4.08 -55.49,12.23 -17.08,8.15 -33.18,19.01 -47.93,32.59 -14.74,13.78 -28.33,29.5 -40.36,47.54 -12.22,18.04 -22.89,36.67 -32.4,56.07 -9.51,19.21 -17.46,38.62 -24.25,58.21 -6.6,19.41 -11.64,37.84 -14.94,54.91l-35.9 168.81c6.79,2.91 14.94,5.62 24.45,8.15 9.51,2.52 19.4,4.65 29.49,6.59 10.29,1.94 20.76,3.3 31.43,4.47 10.48,1.16 20.38,1.74 29.5,1.74 26.19,0 50.25,-4.27 72.37,-13 22.31,-8.73 42.1,-20.56 59.76,-35.5 17.66,-15.14 33.18,-32.6 46.57,-52.97 13.58,-20.18 24.83,-41.91 33.95,-64.81 9.12,-22.9 15.91,-46.57 20.37,-71.01 4.66,-24.45 6.8,-48.51 6.8,-71.99zm376.41 372.34c-9.51,3.11 -20.18,5.63 -32.21,7.37 -11.83,1.95 -23.67,2.92 -35.51,2.92 -38.22,0 -66.94,-9.51 -85.76,-28.72 -19.01,-19.21 -28.52,-44.82 -28.52,-77.03 0,-9.51 0.97,-20.57 2.91,-33.57 1.94,-12.8 4.85,-28.71 9.12,-47.73l145.52 -683.17 94.3 0 -146.1 685.5c-3.3,15.91 -5.82,28.13 -6.99,36.87 -1.36,8.73 -2.13,16.1 -2.13,22.31 0,15.52 4.27,27.36 12.8,35.51 8.54,8.15 22.12,12.22 40.75,12.22 9.9,0 18.43,-0.58 25.81,-1.75 7.37,-1.16 14.35,-2.91 20.76,-5.24l-14.75 74.51zm609.45 -443.35c0,30.65 -6.79,58.59 -20.57,83.82 -13.58,25.22 -36.09,46.76 -67.52,64.8 -31.63,18.05 -72.96,32.02 -124.57,41.91 -51.61,9.7 -115.25,14.94 -190.92,15.33 -0.78,4.08 -1.17,8.54 -1.17,13 0,4.27 0,7.96 0,11.45 0,20.37 2.72,39.77 8.54,57.82 5.63,18.24 14.36,34.15 26.39,47.92 11.84,13.59 27.36,24.45 45.98,32.41 18.82,7.95 41.14,11.83 66.75,11.83 26.19,0 54.91,-5.04 86.15,-15.13 31.24,-9.9 61.12,-24.26 89.64,-42.88l-17.66 92.16c-20.95,12.03 -45.59,22.7 -74.5,31.82 -28.72,9.12 -60.93,13.58 -96.63,13.58 -42.88,0 -78.97,-6.59 -108.27,-19.79 -29.3,-13.38 -52.97,-31.04 -71.01,-53.16 -18.05,-22.31 -31.05,-47.73 -39,-76.84 -7.96,-28.91 -11.84,-59.37 -11.84,-91.19 0,-34.15 3.69,-66.94 11.26,-98.57 7.56,-31.62 18.23,-61.11 32.2,-88.47 13.78,-27.17 30.27,-52.2 49.68,-74.7 19.4,-22.51 40.74,-41.72 64.22,-57.63 23.48,-15.91 48.7,-28.33 75.67,-37.06 26.78,-8.73 54.72,-13 83.43,-13 30.08,0 56.46,3.88 79.36,11.84 22.9,7.95 42.1,18.82 57.43,32.79 15.33,13.77 26.97,29.68 34.93,47.92 7.95,18.24 12.03,37.64 12.03,58.02zm-95.08 4.65c0,-24.06 -8.73,-42.49 -26.38,-55.88 -17.66,-13.19 -40.94,-19.79 -70.24,-19.79 -23.09,0 -45.41,5.05 -66.94,15.14 -21.73,9.89 -41.52,23.86 -59.76,41.32 -18.24,17.66 -33.96,38.81 -47.15,63.26 -13.2,24.45 -22.9,50.83 -29.11,79.16 54.33,0 100.32,-2.71 138.15,-8.15 38.03,-5.62 68.88,-13.58 92.75,-24.25 23.86,-10.48 41.33,-23.48 52.19,-38.81 11.06,-15.33 16.49,-32.79 16.49,-52z"}})],1)])]),e("p",[this._v("That’s who makes the magic (or is it advanced science?) happen in the Nowicki Lab.")]),this._l(this.$page.people.edges,(function(t){return e("PersonPreview",{key:t.id,attrs:{person:t.node}})})),this.$page.people.pageInfo.totalPages>1?e("pagination-posts",{attrs:{base:"/people",totalPages:this.$page.people.pageInfo.totalPages,currentPage:this.$page.people.pageInfo.currentPage}}):this._e()],2)}),[],!1,null,"3d6157af",null);"function"==typeof g.default&&Object(g.default)(u);e.default=u.exports}}]);