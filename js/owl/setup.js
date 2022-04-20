$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        /*Responsive significa a forma que ele vai se comportar dependendo do tamanho da tela*/
        0:{
            items:1
        },
        600:{
            items:3
        },
        /*Aqui, caso a tela possua 1000px, poderá apresentar até 5 itens na tela. Se for 600, apresentará 3*/
        1000:{
            items:5
        }
    }
})