$('#to-inicio').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#inicio').offset().top + 5
    }, 600);
});

$('#to-inicio1').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#inicio').offset().top
    }, 600);
});

$('#to-yo').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#acerca').offset().top - 35
    }, 600);
});

$('#to-proyecto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#proyecto').offset().top - 60
    }, 600);
});

$('#to-logros').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#logros').offset().top - 60
    }, 600);
});

$('#to-contacto').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#contacto').offset().top
    }, 600);
});

/* $('#to-inicio1').on('click', function(e) {
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
}); */

$(window).bind('scroll', function() {
    if ($('#sm-navv').offset().top < 100) {
        $('#sm-navv').addClass("sm-ante-nav-saved");
    } else {
        $('#sm-navv').removeClass("sm-ante-nav-saved");
        $('#sm-navv').addClass('sm-ante-nav');
    }

    if ($('#sm-navv').offset().top > $('#inicio').offset().top) {
        $('li').removeClass('active');
        $('#to-inicio1').addClass('active');
    }

    if ($('#sm-navv').offset().top > $('#acerca').offset().top - 100) {
        $('li').removeClass('active');
        $('#to-yo').addClass('active');
    }

    if ($('#sm-navv').offset().top > $('#proyecto').offset().top - 100) {
        $('li').removeClass('active');
        $('#to-proyecto').addClass('active');
    }

    if ($('#sm-navv').offset().top > $('#logros').offset().top - 100) {
        $('li').removeClass('active');
        $('#to-logros').addClass('active');
    }

    if ($('#sm-navv').offset().top > $('#contacto').offset().top - 200) {
        $('li').removeClass('active');
        $('#to-contacto').addClass('active');
    }
});