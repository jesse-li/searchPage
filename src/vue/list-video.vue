<template>
	<ul v-if="result.video&&result.video.count>0" class="video-list">
		<li v-for="ovideo in result.video.data">
			<a :class="[$index==result.video.data.length-1?'last':'']" class="clearfix" href="{{ovideo.url}}" target="_blank">
				<div class="video-img">
					<img :src="ovideo.img"/>
					<i class="bg"></i>
				</div>
				<div class="video-info">
					<h5>{{{ovideo.title | hightLight search}}}</h5>
					<p>{{ovideo.date}}</p>
					<p><span>comments:<em v-text="ovideo.comments"></em></span><span>likes:<em v-text="ovideo.likes"></em></span><span>views:<em v-text="ovideo.views"></em></span></p>
					<p><span>相关度:<em v-text="ovideo.esscore"></em></span><span>热度:<em v-text="ovideo.hot_coefficient | tofixed"></em></span></p>
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
				result:{},
				search:modelObj.search
			}
		},
		created(){
			let that = this;
			console.log(that)
			let url = "http://3g.d.cn/api/game/search.json?id="+modelObj.rId+"&keyword="+modelObj.search+"&type=video"+"&isHot="+modelObj.hot;
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
		filters:{
			tofixed:modelObj.tofixed,
			hightLight:modelObj.hightLight
		}
	}
</script>