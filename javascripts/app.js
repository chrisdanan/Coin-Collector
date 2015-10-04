var main = function(){
	"use strict";

	console.log("Hello Vane");

	var coin = $("#coin");
	var i = 1;

	window.setInterval(function(){
		coin.removeClass();
		coin.addClass("coin_" + i);

		i++;
		if(i > 6){
			i = 1;
		}

	}, 100);
};

$(document).ready(main);