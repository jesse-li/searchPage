<template>
	<ul v-if="result.video&&result.video.count>0" class="video-list">
		<li v-for="ovideo in result.video.data">
			<a :class="[$index==result.video.data.length-1?'last':'']" class="clearfix" href="{{ovideo.url}}" target="_blank">
				<div class="video-img">
					<img :src="ovideo.img"/>
					<i class="bg"></i>
				</div>
				<div class="video-info">
					<h5>{{ovideo.title}}</h5>
					<p>{{ovideo.date}}</p>
				</div>
			</a>
		</li>
	</ul>
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
			console.log(that)
			let url = "http://3g.d.cn/api/game/search.json?id="+reId+"&keyword="+modelObj.search+"&type=video"+"&isHot="+hot;
			that.$http.jsonp(url).then((response)=>{
				// success
				//alert("ok")
				//console.log(response.data)
				that.result = response.data;
			},(response)=>{
				//error
				console.log(response)
			})
		}
	}
</script>