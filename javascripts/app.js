var commentary = function(coinCount){
	switch(coinCount){
		case 3:
			$("#commentary").text("Oh, hello there.");
			break;
		case 10:
			$("#commentary").text("Hey, those are my coins!");
			break;
		case 50:
			$("#commentary").text("This is very rude of you.");
			break;
		case 100:
			$("#commentary").text("How would you like it if I stole all of your shiny coins, huh?!");
			break;
		case 111:
			$("#commentary").text("Are you even listening to me?");
			break;
		case 150:
			$("#commentary").text("You really like money that much?");
			break;
		case 200:
			$("#commentary").text("What will you even do with all of that money?");
			break;
		case 230:
			$("#commentary").text("Hmm... maybe this is some sort of obsessive compulsive disorder...");
			break;
		case 260:
			$("#commentary").text("Okay, I'm going to test you. Do NOT collect another coin. Not even one!!!");
			break;
		case 261:
			$("#commentary").text("Hmm, so you really can't control yourself. That's a shame.");
			break;
		case 290:
			$("#commentary").text("Or maybe... could it be you're doing this to annoy me?");
			break;
		case 333:
			$("#commentary").text("Okay then, if that's the way it's going to be, I'm just going to ignore you!!!");
			break;
		case 355:
			$("#commentary").text("...");
			break;
		case 400:
			$("#commentary").text("STOP THAT!!!!!!");
			break;
		case 420:
			$("#commentary").text("You're a sick person.");
			break;
		case 450:
			$("#commentary").text("I can't believe you're still here.");
			break;
		case 500:
			$("#commentary").text("Wow, 500 coins... You do realize you could have been doing something productive this whole time.");
			break;
		case 550:
			$("#commentary").text("You know, I think you should stop now.");
			break;
		case 600:
			$("#commentary").text("Yeah, you really should stop. It's for your own good.");
			break;
		case 650:
			$("#commentary").text("Itigil!");
			break;
		case 700:
			$("#commentary").text("You really really should stop playing now!");
			break;
		case 800:
			$("#commentary").text("You know what, fine. Have it your way. I'm out.");
			break;
		case 825:
			$("#commentary").text("Goodbye, so long, farewell, and...");
			break;
		case 850:
			$("#commentary").text("GOOD RIDDANCE!!!");
			break;
		case 875:
			$("#commentary").text("");
			break;
		case 1000:
			$("#commentary").text("YOU'RE STILL HERE?!?!?!");
			break;
		case 1025:
			$("#commentary").text("You're so desperate. Or is it curiousity?");
			break;
		case 1050:
			$("#commentary").text("There really is no end. Nothing. Nada. No pot at the end of the rainbow.");
			break;
		case 1100:
			$("#commentary").text("This is a never ending game. Like Cookie Clicker! Only not as in-depth!");
			break;
		case 1111:
			$("#commentary").text("Fine then, keep collecting coins. I'll just watch.");
			break;
		case 1150:
			$("#commentary").text("1150");
			break;
		case 1151:
			$("#commentary").text("1151");
			break;
		case 1152:
			$("#commentary").text("1152...");
			break;
		case 1153:
			$("#commentary").text("1153 (I can do this all day too, you know)");
			break;
		case 1154:
			$("#commentary").text("Actually, I'm bored already. How are you still doing this?");
			break;
		case 1175:
			$("#commentary").text("Let's play a new game. How about this? I think of a word, and you guess what I'm thinking?");
			break;
		case 1200:
			$("#commentary").text("Ready?");
			break;
		case 1225:
			$("#commentary").text("HIPPO");
			break;
		case 1235:
			$("#commentary").text("Did you get it?");
			break;
		case 1250:
			$("#commentary").text("Okay, how about anoth- oh wait, hold on...");
			break;
		case 1260:
			$("#commentary").text("Okay, yes");
			break;
		case 1270:
			$("#commentary").text("Yes sir.");
			break;
		case 1280:
			$("#commentary").text("Right away sir.");
			break;
		case 1290:
			$("#commentary").text("Will do sir, thank you sir.");
			break;
		case 1300:
			$("#commentary").text("AHEM. That was the President. I'm called away for urgent duty. By the time I get back, you better be gone.");
			break;
		case 1310:
			$("#commentary").text("Well then... it was a... pleasure? Nono, it was a...");
			break;
		case 1320:
			$("#commentary").text("It was a headache to get to know you.");
			break;
		case 1330:
			$("#commentary").text("I'm off now, goodbye again. And this time, it's for real.");
			break;
		case 1333:
			$("#commentary").text("*Door opens and shuts loudly. You hear a car start and rattle off into the distance.*");
			break;
		case 1350:
			$("#commentary").text("*You are alone.*");
			break;
		case 1400:
			$("#commentary").text("");
			break;
		case 5000:
			$("#commentary").text("Ahh, home at la- WHAT THE FLAB?!");
			break;
		case 5025:
			$("#commentary").text("GET OUT OF MY HOME!!!");
			break;
		default:
			break;
	}
};

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
		commentary(coinsCollected);

		//Hide coin right away once mouse touches it.
		window.setTimeout(function(){
			//Reference: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
			var coinSound = new Audio("assets/smw_coin.wav");

			var coinCollectedAnim = $("<div>").addClass("coin-collected");	//Create coin collected animation.
			coinContainer.append(coinCollectedAnim);						//Append the coin collected animation to the coin container of the coin that was just collected.

			gridCount = $(".coin").length;							//Update number of coins left on grid (i.e. decrease count).

			if(gridCount === 0){									//If player collected all coins on the grid, then show Easter egg.
				console.log("you collected them all!");
				$("#commentary").hide();
				$("#easter-egg").show();

				window.setTimeout(function(){
					$("#easter-egg").hide();
					$("#commentary").show();
				}, 3000);
	
			}

			coinSound.play();

			window.setTimeout(function(){
				coinCollectedAnim.remove();							//Remove the coin collected animation.
				coinContainer.append(coin);							//Add the coin back into its container.

				window.setTimeout(function(){
					coin.addClass("coin");							//After 8 seconds, show the coin again.
																	//7 seconds gives the player enough time to collect all coins, but
																	// is short enough to make it challenging.

					gridCount = $(".coin").length;					//Update number of coins left on grid (i.e. increase count).
				}, 80000);
			},300);
		}, 0);
	});
};

$(document).ready(main);