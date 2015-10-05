var main = function(){
	"use strict";

	console.log("Hello Vane");

	//Trigger mouse collision with coin.
	$(".coin").mouseenter(function(){
		var coin = $(this);

		//Hide coin right away once mouse touches it.
		window.setTimeout(function(){
			//Reference: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
			var coinSound = new Audio("assets/smw_coin.wav");

			coinSound.play();
			coin.hide();

			//After about 3 seconds, show the coin again.
			window.setTimeout(function(){
				coin.show();
			}, 3333);
		}, 0);
	});
};

$(document).ready(main);