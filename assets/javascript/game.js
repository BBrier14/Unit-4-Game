//Variables needed for the game
var counter = 0;
var targetNumber = soulsRequired;
var targetNumberOptions = [50,75,100,125]
var soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
var numberOptions = [5,10,15,20];
var increment = numberOptions[Math.round(Math.random())];
var wins = 0;
var losses = 0;


//Target number required shown on screen to user
$("#souls-required").text(soulsRequired);
$("#souls-acquired").text(counter);

for (var i = 0; i < numberOptions.length; i++) {
    var imageBoss = $("<img>");
    imageBoss.addClass("boss-image");
    imageBoss.attr("src", "assets/images/demon.jpg");
    imageBoss.attr("data-bossvalue", numberOptions[i]);
    $("#bosses").append(imageBoss);
}

$(".boss-image").on("click", function() {
    bossValue = ($(this).attr("data-bossvalue"));
    bossValue = parseInt(bossValue);
    counter += bossValue;
    $("#souls-acquired").text(counter);
    

    if (counter === soulsRequired) {
        // alert("You may enter Anor Lando!");
        counter = 0;
        wins++;
        $("#souls-acquired").text(counter);
        $("#keys-acquired").text(wins);
        soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
        $("#souls-required").text(soulsRequired);
        //test test test
       .attr("data-bossvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)])
        //test test test
        }
        
    else if (counter >= soulsRequired) {
        // alert("You have been consumed by the Abyss!")
        counter = 0;
        losses++;
        $("#souls-acquired").text(counter);
        $("#humanity-lost").text(losses);
        soulsRequired = targetNumberOptions[Math.floor(Math.random()*targetNumberOptions.length)];
        $("#souls-required").text(soulsRequired);
        //test test test
        .attr("data-bossvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)])
        //test test test
        }

    if (wins > 9) {
        alert("You may enter Anor Londo")
        wins = 0;
        losses = 0;
    }
    if (losses > 9) {
        alert("You have been consumed by the abyss")
        wins = 0;
        losses = 0;
    }
});


