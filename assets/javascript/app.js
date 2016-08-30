var video = $('<video class=center width="960" height="540" responsive autoplay loop></video>')
    .append('<source src="assets/Videos/Grand%20Canyon.mp4" type="video/mp4" />');
var question = '<h2 class = question>"Some rock formations within the Grand Canyon can be traced back more than 300 million years."</h2>';

var True = '<button type="button" class="btn-xlboolean btn-primary True" value = "" data-toggle="button" aria-pressed="false" autocomplete="off">True</button>'

var False = '<button type="button"  class="btn-xlboolean btn-primary False" value = "" data-toggle="button" aria-pressed="false" autocomplete="off">False</button>';
// var guessTrue = "";
var guessFalse = "";

var reset =
            '<div class="jumbotron vertical-center content">' 
            + '<div class="container-fluid">'
                + '<img src="assets/images/NPS.png" class="img-fluid nps" alt="Responsive image">' 
                + '<hr class="m-y-2">' + '<h2 class = "Correct"> Correct: </h2>'
                + '<h2 class = "Incorrect"> Incorrect: <h2>' + '<hr class="m-y-2">' 
                + '<a class="btn-primary btn-xlarge btn-responsive playAgain" href="index.html" role="button">Play Again</a>'
            + '</div>'
            + '</div>';

var videos = [
    "'<video class=center width='960' height='540' responsive autoplay loop source src='assets/Videos/Arches.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Badlands.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Bryce%20Canyon.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Grand%20Teton.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/American%20Samoa.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Joshua%20Tree.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Redwood.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Yellowstone.mp4' type='video/mp4'/>'",
    "'<video class=center width='960' height='540' muted responsive autoplay loop source src='assets/Videos/Zion.mp4' type='video/mp4'/>'",
]

var questionGC = "Some rock formations within the Grand Canyon can be traced back more than 300 million years.";
var questions = [
    "The park has over 2,000 natural stone arches.",
    "Biologists have identified more than 400 different plant species growing in Badlands National Park.",
    "Bryce Canyon Park exists in three distinct climatic zones.",
    "The park is located on an active fault and the last major earthquake occurred over 5,000 years ago.",
    "Subsistence farming is not allowed within the park.",
    "Conservation groups are seeking federal protection for the Joshua Trees as they are being threatened by climate change. ",
    "Redwood national park is home to the tallest trees on Earth.",
    "Yellowstone national park is the most visited national park.",
    "The 2.2 mile hike to Angels Landing is consistently listed as one of the most dangerous hikes in the world.",
]
var answerGC = "False";
var answers = [
    "", "True", "True", "True", "False", "True", "True", "True", "False", "True",
];

var names = [
    "Arches National Park - Utah", "Badlands National Park - North Dakota", "Bryce Canyon National Park - Utah",
    "Grand Teton National Park - Wyoming", "National Park of American Samoa", "Joshua Tree National Park - California",
    "Redwood National Park - California", "Yellowstone National Park - Wyoming/Montana/Idaho", "Zion National Park - Utah"
];

var correct = 0;
var incorrect = 0;


// for (var i = 0; i < answers.length; i++) {
//     console.log(answers[i]);
// }


$(document).ready(function() {

    $('a').on("click", function() {
        // $("div").removeClass("content").addClass("contents");
        //if these elements aren't added immediately, the loop function's setTimout will prevent the game starting until the first countdown has completed. This makes it appear --
        //-- as if the button isn't working.
        $(".name").html("<h1 class=name>Grand Canyon National Park - Arizona</h1>");
        $(".content").html(video);
        $('.imgClear').html("")
        $(".questions").html(questionGC);
        $('.boolean').html(True + False);

        $('.True').off('click').one("click", function() {
            this.value = "True";
            if (answerGC == $('.True').val()) {
                correct++;
            } else {
                incorrect++;
            }
            $('.True').value = "";


        });
        $('.False').off('click').one("click", function() {
            this.value = "False";
            if (answerGC == $('.False').val()) {
                correct++;
            } else {
                incorrect++;
            }
            $('.False').value = "";
        });


        (function myLoop(i) {
            setTimeout(function() {
                console.log(i);

                $(".name").html(names[i]); // assigns name
                $(".content").html(videos[i]); //  i+1 so that the video 
                $(".questions").html(questions[i]);
                $('.imgClear').html("");
                $('.boolean').html(True + False);



                $('.True').on("click", function() {
                    this.value = "True";
                    // console.log(answers[i] + " This is the value of the answer array when the button is clicked");
                    $('.True').off('click');
                    if (answers[i] == $('.True').val()) {
                        correct++;
                    } else {
                        incorrect++;
                    }
                    $('.True').value = "";

                });
                $('.False').on("click", function() {
                    $('.False').off('click')
                    this.value = "False";
                    // console.log(answers[i] + " This is the value of i in the answer array when the button is clicked");
                    if (answers[i] == $('.False').val()) {
                        correct++;
                        // console.log("F : This only shows if answer array = value of button clicked");

                    } else {
                        incorrect++;
                    }

                    $('.False').value = "";

                });


                if (i >= 9) {
                    $('body').html(reset);
                    $('.Correct').html("Correct: " + correct);
                    $('.Incorrect').html("Incorrect: " + incorrect);
                    return false;
                }


                $('.True').value = "";
                $('.False').value = "";
                // console.log($('.True').val());               
                if (++i) myLoop(i); //  increment i and call myLoop again 
            }, 10000)
        })(0); //  pass the number of iterations as an argument

    });

});
