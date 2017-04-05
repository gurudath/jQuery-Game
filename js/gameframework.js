ggame = ( typeof( ggame ) === 'undefined' ) ? {} : ggame;
ggame.gameFramework = ( typeof( ggame.gameFramework ) == 'undefined' ) ? {} : ggame.gameFramework;
ggame.gameFramework.animationHandles = {};

ggame.gameFramework.setFrame = function(divId,frameNumber, frameDimension) {
		 $("#"+divId).css("background-position", "" + frameNumber * frameDimension +"px 0px");
}

ggame.gameFramework.x = function(divId,position) {
 if(position) {
 $("#"+divId).css("left", position);
 } else {
 return parseInt($("#"+divId).css("left"));
 }
}

ggame.gameFramework.y = function(divId,position) {
 if(position) {
 $("#"+divId).css("top", position);
 } else {
 return parseInt($("#"+divId).css("top"));
 }
}

ggame.gameFramework.addSprite = function(parentId, divId, options){
	 var options = $.extend({
	 x: 0,
	 y: 0,
	 width: 64,
	 height: 64
	 }, options);
 	 $("#"+parentId).append("<div id='"+divId+"' style='position:absolute; left:"+options.x+"px; top: "+options.y+"px; width:"+options.width+"px ;height: "+options.height+"px'></div>");
}

ggame.gameFramework.animationHandles = function(divId, animation, loop){
 if(ggame.gameFramework.animationHandles[divId]){
 	clearInterval(ggame.gameFramework.animationHandles[divId]);
 }
 if(animation.url){
	 $("#"+divId).css("backgroundImage","url('"+animation.url+"')");
 }
 if(animation.numberOfFrame > 1){
	// ggame.animationHandles[divId] = setInterval(function(){
	// animation.currentFrame++;
	//  if(!loop && animation.currentFrame > animation.numberOfFrame){
	// 	 clearInterval(ggame.animationHandles[divId]);
 // 		 ggame.animationHandles[divId] = false;
	//  } else {
	// 	 animation.currentFrame %= animation.numberOfFrame;
 // 		 ggame.gameFramework.setFrame(divId, animation);
 // 	 }
 // 	}, animation.rate);
 	ggame.gameFramework.animationHandles[divId] = setInterval(function(){
		 ggame.gameFramework.setFrame("sprite1",animation.frameNumber, animation.width);
			 animation.frameNumber = (animation.frameNumber + 1) % animation.numberOfFrame;
	}, animation.rate);
  }
}