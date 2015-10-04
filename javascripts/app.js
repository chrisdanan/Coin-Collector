var main = function(){
	"use strict";

	console.log("Hello Vane");

	//Trigger mouse collision with coin.
	$(".coin").mouseenter(function(){
		var coin = $(this);

		//Hide coin right away once mouse touches it.
		window.setTimeout(function(){
			coin.hide();

			//After about 3 seconds, show the coin again.
			window.setTimeout(function(){
				coin.show();
			}, 3333);
		}, 0);
	});
};

$(document).ready(main);