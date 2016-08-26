$(document).ready(function() {

    $('a').on("click", function() {
        var video = $('<video class=center width="960" height="540" responsive autoplay loop></video>')
            .append('<source src="assets/Videos/American%20Samoa.mp4" type="video/mp4" />');
        var question = $('<h1>There are 10</h1>');
        var response = $('<div class=choice>')
            .append('<button type="button" class="btn-xlboolean btn-primary True" data-toggle="button" aria-pressed="false" autocomplete="off">True</button>')
            .append('<button type="button" class="btn-xlboolean btn-primary False" data-toggle="button" aria-pressed="false" autocomplete="off">False</button>')
            .append('</div>');
        $(".content").html(video);
        $('body').append(question);
        $('body').append(response);

        // .after(response);



        $(document).ready(function() {
            setTimeout(x, 5000);

            function x(x) {
                if ($('.True').val() === 'True') {
                    alert('True');
                } else if ($('.False').val() === 'False') {
                    alert('False')
                }
            }
            $('.True').click(function() {
                $('.True').val('True');

            });
            $('.False').click(function() {
                $('.False').val('False');

            });

            setTimeout(y, 9000);

            function y(y) {
                if ($('.True') || $('.False')) {
                    var video = $('<video class=center width="960" height="540" responsive autoplay loop></video>')
                        .append('<source src="assets/Videos/Arches.mp4" type="video/mp4" />');
                    $(".content").html(video);
                };
            };

        });
    });
});
