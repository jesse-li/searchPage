<template>
	<section>
		<ul v-if="result.news&&result.news.count>0" class="news-list">
			<li v-for="onews in result.news.data">
				<a :class="[$index==result.news.data.length-1?'last':'']" href="{{onews.url}}" target="_blank">
					<h5>{{onews.title}}</h5>
					<p>{{onews.date}}</p>
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
				result:{}
			}
		},
		created(){
			let that = this;
			let url = "http://3g.d.cn/api/game/search.json?id="+reId+"&keyword="+modelObj.search+"&type=news"+"&isHot="+hot;
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
		props:["searchVal"]
	}
</script>