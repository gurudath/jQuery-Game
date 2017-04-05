ggame = ( typeof( ggame ) === 'undefined' ) ? {} : ggame;
ggame.gameFramework = ( typeof( ggame.gameFramework ) == 'undefined' ) ? {} : ggame.gameFramework;
ggame.gameFramework.animationHandlesItems = {};
ggame.gameFramework.animationsObjects={};
ggame.gameFramework.windowObjects={
	width: 800,
	height: 350
}

ggame.gameFramework.traverseX=function(object,position,options={}){
	    if(position!="left"){
   			object.css({ 'right': '0px', 'left': '' }).animate({'right' : ggame.gameFramework.windowObjects.width+'px'},10000); 
   		}else{
   			object.css({ 'right': '', 'left': '0px' }).animate({'left' :  ggame.gameFramework.windowObjects.width+'px'},10000);       
   		}
}


ggame.gameFramework.traverseY=function(object,position,options={}){	 
	    if(position=="top"){
   			object.css({'bottom': "" ,'top': '0px'}).animate({"top": ggame.gameFramework.windowObjects.height+'px'},10000);
   		}else{
   			object.css({'bottom': "0px" ,'top': ''}).animate({"bottom": ggame.gameFramework.windowObjects.height+'px'},10000);
   		}
}

ggame.gameFramework.setFrame = function(divId, animation) {
 	$("#" + divId).css("background-position", "" + animation.currentFrame * animation.width + "px 0px");
}

ggame.gameFramework.x = function(object,position) {
 if(position) {
 object.css("left", position);
 } else {
 return parseInt($("#"+divId).css("left"));
 }
}

ggame.gameFramework.y = function(object,position) {
 if(position) {
 object.css("top", position);
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
 	 $("#"+parentId).append("<div id='"+divId+"' style='position:absolute; left:"+options.x+"px; top: "+options.y+"px; width:"+options.width+"px ;height: "+options.height+"px;'></div>");
}

ggame.gameFramework.animationHandles = function(divId, animation, loop){
 if(ggame.gameFramework.animationHandlesItems[divId]){
 	clearInterval(ggame.gameFramework.animationHandlesItems[divId]);
 }
 if(animation.url){
	 $("#"+divId).css("backgroundImage","url('"+animation.url+"')");
     ggame.gameFramework.animationsObjects[divId] = $('#'+divId);
 }
 if(animation.numberOfFrame > 1){
	ggame.gameFramework.animationHandlesItems[divId] = setInterval(function(){
	animation.currentFrame++;
	 if(!loop && animation.currentFrame > animation.numberOfFrame){
		 clearInterval(ggame.gameFramework.animationHandlesItems[divId]);
 		 ggame.gameFramework.animationHandlesItems[divId] = false;
	 } else {
		 animation.currentFrame %= animation.numberOfFrame;
 		 ggame.gameFramework.setFrame(divId, animation);
 	 }
 	}, animation.rate);
  }
}


ggame.gameFramework.runItem = function(parentObj,direction,options){
	ggame.gameFramework.traverseX(ggame.gameFramework.animationsObjects['sprite1'],'left',ggame.gameFramework.traverseY(ggame.gameFramework.animationsObjects['sprite1'],'top',ggame.gameFramework.traverseX(ggame.gameFramework.animationsObjects['sprite1'],'right',ggame.gameFramework.traverseY(ggame.gameFramework.animationsObjects['sprite1'],'bottom'))));
}