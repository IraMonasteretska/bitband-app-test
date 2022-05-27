document.addEventListener("DOMContentLoaded", function (event) {

    $('.burger').click(function () {
        $('.mobmenuwrapp').addClass('open');
    });
    $('.closemenu').click(function () {
        $('.mobmenuwrapp').removeClass('open');
    });


});