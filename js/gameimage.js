ggame = ( typeof( ggame ) === 'undefined' ) ? {} : ggame;
ggame.gameImage = ( typeof( ggame.gameImage ) == 'undefined' ) ? {} : ggame.gameImage;
ggame.gameImage.imagesToPreload = [];

 ggame.gameImage.processCall = function (options={}){
      console.log("data")
      $('#startButton').hide();
      $('#loadinggif').show();
   }

ggame.gameImage.animation = function(options) {
	 var defaultValues = {
	 url : false,
	 height : 86,
	 width : 58,
	 numberOfFrames : 8,
	 currentFrame : 0,
	 rate : 60
	 };
	 $.extend(this, defaultValues, options);
	 console.log(this.url)
	 if(this.url){
	 ggame.gameImage.addImage(this.url);
	 }
}

ggame.gameImage.addImage = function(url) {
 if ($.inArray(url, ggame.gameImage.imagesToPreload) < 0) {
 ggame.gameImage.imagesToPreload.push();
 }
 ggame.gameImage.imagesToPreload.push(url);
};

ggame.gameImage.startPreloading = function(endCallback, progressCallback) {
 var images = [];
 var count = 0;
 var total = ggame.gameImage.imagesToPreload.length;
 console.log(total);
 for (var i = 0; i < total; i++) {
  var image = new Image();
  images.push(image);
  image.src = ggame.gameImage.imagesToPreload[i];
 }
 var preloadingPoller = setInterval(function() {
 var counter = 0;
 var total = ggame.gameImage.imagesToPreload.length;
 for (var i = 0; i < total; i++) {
  if (images[i].complete) {
   counter++;
  }
 }
 console.log(counter);
 console.log(total);
 if (counter == total) {
  clearInterval(preloadingPoller);
  endCallback();
 } else {
  if (progressCallback) {
   count++;
   console.log("progress");
   console.log((count / total) * 100);
   progressCallback((count / total) * 100);
  }
 }
 }, 100);
}; 