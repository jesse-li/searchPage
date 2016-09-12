<template>
	<section>
		<ul v-if="result.news&&result.news.count>0" class="news-list">
			<li v-for="onews in result.news.data">
				<a :class="[$index==result.news.data.length-1?'last':'']" href="{{onews.url}}" target="_blank">
					<h5>{{{onews.title | hightLight search}}}</h5>
					<p>{{onews.date}}</p>
					<p><span>comments:<em v-text="onews.comments"></em></span><span>likes:<em v-text="onews.likes"></em></span><span>views:<em v-text="onews.views"></em></span></p>
					<p><span>相关度:<em v-text="onews.esscore"></em></span><span>热度:<em v-text="onews.hot_coefficient | tofixed"></em></span></p>
				</a>
			</li>
		</ul>
	</section>
</template>
<script type="text/javascript">
import modelObj from "../js/modelObj.js";
	export default{
		data(){
			return {
				result:{},
				search:modelObj.search
			}
		},
		created(){
			let that = this;
			let url = "http://3g.d.cn/api/game/search.json?id="+modelObj.rId+"&keyword="+modelObj.search+"&type=news"+"&isHot="+modelObj.hot;
			that.$http.jsonp(url).then((response)=>{
				// success
				//alert("ok")
				//console.log(response.data)
				that.result = response.data;
			},(response)=>{
				//error
				console.log(response)
			})
		},
		props:["searchVal"],
		filters:{
			tofixed:modelObj.tofixed,
			hightLight:modelObj.hightLight
		}
		
	}
</script>