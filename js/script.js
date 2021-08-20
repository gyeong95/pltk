$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 250) {
            $('.headerbar').addClass("sticky");
        } else {
            $('.headerbar').removeClass("sticky");
        }
        //navbar에 sticky 라는 class를 추가!해서 나왔다 안나왔다 하는거임.

    });
});
