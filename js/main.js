// "use strict";
(function ($) {

	$.fn.GGame = function (options={}) {

        var default_values = {
         url : './images/sprint1.png',
         subchild_id: 'sprite1',
         child_id: 'sprite_main',
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
            ggame.gameFramework.addSprite(default_values.child_id, default_values.subchild_id, default_values)
        }     

        function start(obj){
        	ggame.gameFramework.animationHandles(default_values.subchild_id,default_values,true)
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


$(document).ready(function () {
   var backgroundAnim = new ggame.gameImage.animation({
     url : "http://orig13.deviantart.net/cacc/f/2017/040/4/6/spritesheet_zector_sem_armadura_by_tiozacdasgalaxias-daygx0l.png",
     numberOfFrame:8
   });
   function initialize(){
    $('#button_click').hide();
    $('#mygame').show();
    $('#mygame').GGame(backgroundAnim);
   } 
   $("#startButton").click(function() {
      ggame.gameImage.startPreloading(initialize,ggame.gameImage.processCall);
   });
});




//url : "./images/sprint1.png",
//url : "https://commons.wikimedia.org/wiki/File:00_592a_Zweirichtungswagen_547.jpg",
//url : "https://upload.wikimedia.org/wikipedia/commons/a/a0/%27Greeley_Panorama%27_from_Opportunity%27s_Fifth_Martian_Winter%2C_PIA15689.jpg",
//url : 'https://upload.wikimedia.org/wikipedia/commons/f/fe/01R_Oct_12_2012_0905Z.jpg',
//url : "https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg",