export default{
	search:"",
	hot:true,
	tofixed:function(value){
		return Number(value).toFixed(4)
	},
	rId:"",
	hightLight:function(value,se){
		//console.log(value+"  "+se)
		var reg = new RegExp(se,"g")
		return value.replace(reg,"<i class='red'>"+se+"</i>")
	}
}
