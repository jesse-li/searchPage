import "../css/reset.css";
import "../css/common.scss";
import Vue from "vue";
import $Ajax from "vue-resource";
import VueRouter from "vue-router";
import modelObj from "./modelObj.js"
Vue.use(VueRouter);

/*import app from "../vue/app.vue";
import listV from "../vue/list-video.vue";
import listN from "../vue/list-news.vue";*/
Vue.use($Ajax);

//Vue.config.debug = true;
var App = Vue.extend({});

var router = new VueRouter();

router.map({
   "/listnews": {
   		component: function(resolve){
   			/*require(['../vue/list-news.vue'], resolve)*/
   			require.ensure(['../vue/list-news.vue'],function(require){
   				require(['../vue/list-news.vue'], resolve);
   			},"test/listnews")
   		}
    },
    "/listvideo": {
       component: function(resolve){
   			/*require(['../vue/list-video.vue'], resolve)*/
   			require.ensure(['../vue/list-video.vue'],function(require){
   				require(['../vue/list-video.vue'], resolve);
   			},"test/listvideo")
   		}
    },
    "/index/:rId/:hot":{
    	name:"index",
    	component: function(resolve){
   			/*require(['../vue/app.vue'], resolve)*/
   			require.ensure(['../vue/app.vue'],function(require){
   				require(['../vue/app.vue'], resolve);
   			},"test/index")
   		}
    }
});
router.redirect({
  "*": '/index/4462/1'
});
router.beforeEach(function (transition) {
	if(transition.from.params&&transition.from.params.rId){
		console.log("from"+" "+transition.from.params)
		modelObj.rId = transition.from.params.rId;
		modelObj.hot = transition.from.params.hot == "0"?false:true;
	}else{
		console.log("to"+" "+transition.to.params)
		modelObj.rId = transition.to.params.rId;
		modelObj.hot = transition.to.params.hot == "0"?false:true;
	}
	transition.next();
})
router.start(App, "#app");