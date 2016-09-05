<script type="text/javascript">
import modelObj from "../js/modelObj.js";
	export default {
		data(){
			return {
				searchVal:"",
				result:{}
			}
		},
		ready(){
			if(modelObj.search!=""){
				this.searchVal = modelObj.search;
			}
			//console.log(modelObj.search)
			
		},
		watch:{
			'searchVal':function(val,oldVal){
				this.fetch(val,oldVal)
				modelObj.search = val;
			}
		},
		methods:{
			fetch:function(now,old){
				console.log("search is old:"+old+" search is now:"+now);
				let that = this;
				let url = "http://3g.d.cn/api/game/search.json?id="+reId+"&keyword="+that.searchVal+"&isHot="+hot;
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
			change:function(){
				if(this.hot==true){
					this.hot = false;
					modelObj.hot = false;
				}else{
					this.hot = true;
					modelObj.hot = true;
				}
				
			}
		}
	}
</script>
<template>
	<section>
		<!--<a @click="change" href="javascript:void(0)"target="_self">Hot:{{hot}}</a>-->
		<section class="search-box clearfix">
			<input class="fl" type="text" v-model="searchVal" debounce="500"/>
			<a class="fr bg" href="javascript:void(0)"></a>
		</section>
		<section v-if="result.db&&result.db.count>0" class="line db">
			<div class="clearfix">
				<h4 class="fl">数据库</h4>
			</div>
			<ul class="db-list">
				<li v-for="odb in result.db.data">
					<a target="_blank" class="clearfix" :href="odb.url">
						<img class="fl" :src="odb.img"/>
						<p :class="[$index==result.db.data.length-1?'last':'']" class="fr">{{odb.title}}</p>
					</a>
					
				</li>
			</ul>
		</section>
		<section v-if="result.news&&result.news.count>0" class="line news">
			<div class="clearfix">
				<h4 class="fl">攻略</h4>
				<a class="bg fr" v-link="'/listnews'"></a>
			</div>
			<ul class="news-list">
				<li v-if="$index<5" v-for="onews in result.news.data">
					<a :class="[$index==result.news.data.length-1||$index==4?'last':'']" href="{{onews.url}}" target="_blank">
						<h5>{{onews.title}}</h5>
						<p>{{onews.date}}</p>
					</a>
				</li>
			</ul>
		</section>
		<section v-if="result.video&&result.video.count>0" class="line video">
			<div class="clearfix">
				<h4 class="fl">视频</h4>
				<a class="bg fr" v-link="'/listvideo'"></a>
			</div>
			<ul class="video-list">
				<li v-if="$index<5" v-for="ovideo in result.video.data">
					<a target="_blank" :class="[$index==result.video.data.length-1||$index==4?'last':'']" class="clearfix" href="{{ovideo.url}}" target="_blank">
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
		</section>
	</section>
	
</template>