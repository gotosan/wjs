window.onload=function(){
	initMoblieTabs();
	 $('[data-toggle="tooltip"]').tooltip()
}

/*初始化移动端tabs组件的功能*/
function initMoblieTabs(){
	/*
	*
	*1：获取所有页签的和
	*2：把ul设置的足够宽
	*3：把这个容器设置成可以滑动的容器
	*
	*
	*
	*/
	var $parent=$(".wjs_product_tabs_box");
	var $ul=$parent.find("ul");
	var $lis=$ul.find("li");
	var widthTotal=0;
	/*$.each($lis,function(i,item){

	})*/
	$lis.each(function(i,item){
		
		/*
		*
		*width() 获取内容的宽度
		*innerwidth() 获取内容和内边距的宽度
		*outerwidth() 获取内容和内边距的宽度和边框的宽度
		*outerwidth(true)outerwidth()获取内容和内边距的宽度和边框的宽度+外边距
		*
		*
		*/

		widthTotal+=$(item).innerWidth();

	})


	/* 获取到所有页签的宽度的和*/
	console.log(widthTotal)
	 /* 把ul盒子设置的足够宽*/
	$ul.width(widthTotal);
	/*别人写好的插件  直接拿来使用  传递的参数  swipeDom ：放图片的盒子  swipeType：滑动方向 swipeDistance ：滑动的速度*/
	 /*把这个容器设置成一个可以滑动的容器*/
	itestcode.iScroll({
		swipeDom:$parent.get(0),
		swipeType:'x',
		swipeDistance:20
	})
	
}