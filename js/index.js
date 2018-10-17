(function(){
	$(window).on('resize',function(){
		var json = [
            {
                bac:"url(./images/slide_01_2000x410.jpg)",
                img:"./images/slide_01_640x340.jpg"
            },
            {
                bac:"url(./images/slide_02_2000x410.jpg)",
                img:"./images/slide_02_640x340.jpg"
            },
            {
                bac:"url(./images/slide_03_2000x410.jpg)",
                img:"./images/slide_03_640x340.jpg"
            },
            {
                bac:"url(./images/slide_04_2000x410.jpg)",
                img:"./images/slide_04_640x340.jpg"
            }
        ];
//		$('#wjs_solider').carousel();
		var width=$(window).width();
		var ismoble=true;
		if(width<768){
			ismoble=true;
		}
		else{
			ismoble=false;
		}
//		console.log(1);
		var html=template('wirpslider',{data:json,ismoble});
//		console.log(html);
		$('#imgbox').html(html);
		var htmlLight=template('light',{data:4});
//		console.log(htmlLight);
		$('#ol_light').html(htmlLight);
		
		var startX=0;
		var moveX=0;
		var ismove=false;
		var disX=0;
		
		$('#imgbox').on('touchstart',function(e){
			startX=e.originalEvent.touches[0].clientX;
		});
		$('#imgbox').on('touchmove',function(e){
			moveX=e.originalEvent.touches[0].clientX;
			ismove=true;
		});
		$('#imgbox').on('touchend',function(e){
			if(ismove){
				disX=moveX-startX;
				if(disX<0){
					//下一张
					$('#wjs_solider').carousel('next');
				}
				else if(disX>0){
					//
					$('#wjs_solider').carousel('prev');
				}
			}
			startX=0;
			moveX=0;
			ismove=false;
			disX=0;
		});
		
	}).trigger('resize');//触发事件
	
	swip();
	function swip(){
		//微金所滑动
		var swip=$('.wjs_touzi .swip');
		var oul=swip.find('ul');
		var liarr=oul.find('li');
		var width=0;
		liarr.each(function(index){
			width+=liarr.outerWidth();
		})
		oul.width(width);
		wjs.iScroll({
			swipeDom:swip[0],
			swipeType:'x',
			swipeDistance:100
		})
	}
	
})();

