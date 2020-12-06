$('#to-inicio').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#inicio').offset().top + 5
    }, 600);
});

$('#to-yo').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#acerca').offset().top + 5
    }, 600);
});

$('#to-proyecto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#proyecto').offset().top + 5
    }, 600);
});

$('#to-logros').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#logros').offset().top + 5
    }, 600);
});

$('#to-contacto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#contacto').offset().top + 5
    }, 600);
});

$('#to-inicio1').on('click', function(e) {
    $('li').removeClass('active');
    $('#to-inicio1').addClass('active');
});

$('#to-yo').on('click', function(e) {
    $('li').removeClass('active');
    $('#to-yo').addClass('active');
});

$('#to-proyecto').on('click', function(e) {
    $('li').removeClass('active');
    $('#to-proyecto').addClass('active');
});

$('#to-logros').on('click', function(e) {
    $('li').removeClass('active');
    $('#to-logros').addClass('active');
});

$('#to-contacto').on('click', function(e) {
    $('li').removeClass('active');
    $('#to-contacto').addClass('active');
});