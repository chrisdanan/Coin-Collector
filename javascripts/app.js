var main = function(){
	"use strict";

	console.log("Hello Vane");

	var coinsCollected = 0,						//Keep track of number of coins collected by player.
		gridCount = $(".coin").length;			//Keep track of number of coins left on the grid.

	$(".num-coins").text(coinsCollected);		//Initialize coin counter to 0.

	//Trigger mouse collision with coin.
	$(".coin").on("mouseenter", function(){
		var coin = $(this),											//Reference to the coin that is collected.
			coinContainer = coin.parent();							//Reference to the container that the coin was held in (i.e. the parent <div>).

		coin.detach();												//Remove the coin from the DOM tree, but keep a record of its information so that it
																	// can be reattached at a later time. This removes the bug of mouseenter() where the player
																	// was able to collect the same coin multiple times, even after it vanished.

		coin.removeClass("coin");									//Hide coin from grid counter.

		coinsCollected++;											//Increase coin counter by 1.
		$(".num-coins").text(coinsCollected);						//Update coin counter.

		//Hide coin right away once mouse touches it.
		window.setTimeout(function(){
			//Reference: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
			var coinSound = new Audio("assets/smw_coin.wav");

			coin.addClass("coin-collected");						//Show coin-collected animation.

			gridCount = $(".coin").length;							//Update number of coins left on grid (i.e. decrease count).

			if(gridCount === 0){									//If player collected all coins on the grid, then show Easter egg.
				console.log("you collected them all!");
			}

			coinSound.play();

			window.setTimeout(function(){
				coinContainer.append(coin);							//Add the coin back into its container.
				coin.removeClass("coin-collected");					//Remove coin-collected animation.

				window.setTimeout(function(){
					coin.addClass("coin");							//After 7 seconds, show the coin again.
																	//7 seconds gives the player enough time to collect all coins, but
																	// is short enough to make it challenging.

					gridCount = $(".coin").length;					//Update number of coins left on grid (i.e. increase count).
				}, 7000);
			},300);
		}, 0);
	});
};

$(document).ready(main);