import "../css/reset.css";
import "../css/common.scss";
import Vue from "vue";
import $Ajax from "vue-resource";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import app from "../vue/app.vue";
import listV from "../vue/list-video.vue";
import listN from "../vue/list-news.vue";
Vue.use($Ajax);

//Vue.config.debug = true;
var App = Vue.extend({});

var router = new VueRouter();

router.map({
   "/listnews": {
   		component: listN
    },
    "/listvideo": {
        component: listV
    },
    "/index":{
    	component: app
    }
});
router.redirect({
  "*": '/index'
})
router.start(App, "#app");