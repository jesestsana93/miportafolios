$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*--------------------------------------------------------------------------
      2. Iniciando el script Typed.js para las letras de la sección de inicio
    ---------------------------------------------------------------------------*/
    var typed = new Typed('.typed', { //^2000:indica el tiempo del texto que lo antecede
        strings: ["Desarrollador web ^2000", "Web developer ^2000"],
        smartBackspace: false, //para que vuelva a escribir todo incluyendo el mas
        loop: true, //para que se vuelva a repetir el efecto
        showCursor: true, //muestra el cursor
        cursorChar: "|", //puede ir cualquier cosa como un icono de font en el cursor
        typeSpeed: 50, //velocidad en la que aparecen los caracteres
        backSpeed: 30, //velocidad con la que se borran los caracteres
        startDelay: 800 //tiempo en el que se inicia la animacion
        /*shuffle: true //los elementos se muestran de manera aleatoria*/
    });


    /*-----------------------------------------
      3. Iniciando owl-carousel
    -------------------------------------------*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>', '<i class="fa  fa-arrow-circle-right" title="Siguiente"></i>'],
        responsive: {
            0: { //en celulares se muestra uno
                items: 1
            },
            576: { //en contexto sm se muestran dos elementos
                items: 2
            },
            992: { //en contexto lg se muestran tres elementos
                items: 3
            },
            1200: { //en contexto xl se muestran cuatro elementos
                items: 4
            }
        }
    })

    /*-----------------------------------------------------------
    4. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 100,
        highlightClass: 'active'
    });

    /*------------------------------------------------------------
    5. INICIANDO WOW.js para las animaciones en la página
    --------------------------------------------------------------*/
    new WOW().init();

    /*---------------------------------
    6. CABECERA ANIMADA
    ----------------------------------*/
    $(window).scroll(function () {
        var nav = $('.transparente');
        var scroll = $(window).scrollTop();
        //var windowHeight = $(window).height(); //altura de la ventana
        if (scroll >= 80) {
            nav.addClass("bg-primary");
        } else {
            nav.removeClass("bg-primary");
        }
    });

    
});