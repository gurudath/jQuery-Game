// "use strict";
(function ($) {

	$.fn.GGame = function (options={}) {

      var default_values = {
       url : './images/sprint1.png',
       subchild_id: 'sprite1',
			 height : 86,
			 width : 58,
			 x: 0,
 			 y: 0,
			 numberOfFrame : 1,
			 frameNumber : 0 ,
			 currentFrame : 0,
			 rate : 60,
			 id: $(this).attr('id')
      };

        $.extend(default_values,options);

        function private() {
            console.log("Private");
        };

        function init(obj) {
          	var options = $.extend({ x: default_values.x, y: default_values.y , width: default_values.width, height: default_values.height }, options);
          	ggame.gameFramework.addSprite(default_values.id,'sprite1',options)
          	$(obj).css("position", "relative").append("<div id='sprite1' style='position: absolute'>");
		      	$("#"+default_values.subchild_id).css({"backgroundImage":"url("+default_values.url+")","min-height":default_values.height,"max-height":default_values.height,"min-width":default_values.width,"max-width":default_values.width});
        }     

        function start(obj){
        	ggame.gameFramework.animationHandles(default_values.subchild_id,default_values,true)
   //      	setInterval(function(){
			// 	 ggame.gameFramework.setFrame("sprite1",default_values.frameNumber, default_values.width);
 		// 		 default_values.frameNumber = (default_values.frameNumber + 1) % default_values.numberOfFrame;
			// }, default_values.rate);
        }
       
        function bindEvents(element) {
            init(element);
            start(element);
        };

        return this.each(function () {
            bindEvents(this);
        });

    };
})(jQuery);

/* 
   Sample Usage Of the Plugin*/
$(document).ready(function () {
	$('#mygame').GGame({numberOfFrame:8});
});

