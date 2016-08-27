var video = $('<video class=center width="960" height="540" responsive autoplay loop></video>')
    .append('<source src="assets/Videos/Grand%20Canyon.mp4" type="video/mp4" />');
var question = '<h2 class = question>"Some rock formations within the Grand Canyon can be traced back more than 300 million years."</h2>';
var response =
    '<div class=choice>' + '<button type="button" class="btn-xlboolean btn-primary True" data-toggle="button" aria-pressed="false" autocomplete="off">True</button>' + '<button type="button" class="btn-xlboolean btn-primary False" data-toggle="button" aria-pressed="false" autocomplete="off">False</button>' + '</div>';
var guessTrue = "";
var guessFalse = "";

var reset =
    '<div class="jumbotron vertical-center content">' + '<div class="container-fluid">' + '<img src="assets/images/NPS.png" class="img-fluid nps" alt="Responsive image">' + '<hr class="m-y-2">' + '<h1 class="display-3">                  </h1>' + '<p class="lead">                        </p>' + '<a class="btn-primary btn-xlarge btn-responsive playAgain" href="#" role="button">Play Again</a>' + '</div>' + '</div>';

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

var answers = [
    "False", "True", "True", "True", "False", "True", "True", "True", "False", "True",
]

var names = [
    "Arches National Park - Utah", "Badlands National Park - North Dakota", "Bryce Canyon National Park - Utah",
    "Grand Teton National Park - Wyoming", "National Park of American Samoa", "Joshua Tree National Park - California",
    "Redwood National Park - California", "Yellowstone National Park - Wyoming/Montana/Idaho", "Zion National Park - Utah"
]
$(document).ready(function() {
    $("div").removeClass("content").addClass("contents")
    $('a').on("click", function() {
        $( "div" ).removeClass( "content" ).addClass( "contents" );
        $(".contents").html("");
        $(".contents").before("<h1 class=name></h1>");
               
        for (var i = 0; i < answers.length; i++) {

            $(".contents").html(videos[i]); //  cycles videos
            $("h2").html(questions[i]); // assigns question
            $(".name").html(names[i]); // assigns name






        }
    });
});
