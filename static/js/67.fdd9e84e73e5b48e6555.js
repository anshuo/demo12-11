webpackJsonp([67],{XlUQ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{day:{studyTtime:null,studyDay:null}}},methods:{back:function(){this.$router.push({path:"/mine"})}},components:{},mounted:function(){var t=this;this.axios.post("/api/studyTtime").then(function(a){t.day=a.data.result}).catch(function(t){})}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"work_header"}},[e("section",{staticClass:"header"},[e("img",{staticClass:"back last_time",attrs:{src:s("Jl9t"),alt:"返回"},on:{click:t.back}}),t._v(" "),e("div",[e("div",{staticClass:"course_content"},[e("p",{staticClass:"last_time"},[t._v("上次学习时间")]),t._v(" "),e("p",[e("span",{staticClass:"day_time"},[t._v(t._s(t.day.studyTtime))]),t._v(" 天前")])])]),t._v(" "),e("div",[e("div",{staticClass:"course_content"},[e("p",{staticClass:"last_time"},[t._v("你已经在大鹏学习了")]),t._v(" "),e("p",[e("span",{staticClass:"day_time"},[t._v(t._s(t.day.studyDay))]),t._v(" 天")])])])]),t._v(" "),e("section",{staticClass:"change_tab"},[e("router-link",{attrs:{tag:"div",to:"/opended"}},[t._v("已开通课程")]),t._v(" "),e("router-link",{attrs:{tag:"div",to:"/collected"}},[t._v("已收藏课程")])],1)]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=s("VU/8")(e,i,!1,function(t){s("l+xf")},"data-v-51d92e72",null);a.default=n.exports},"l+xf":function(t,a){}});
//# sourceMappingURL=67.fdd9e84e73e5b48e6555.js.map