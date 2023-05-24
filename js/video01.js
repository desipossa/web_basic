$(function () {

    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    })

    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    });
    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    });

});