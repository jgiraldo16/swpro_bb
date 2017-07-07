$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        autoWidth: false,
        navText: ['<i class="fa fa-angle-left" title="Anterior"></i>', '<i class="fa  fa-angle-right" title="Siguiente"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2,
                    margin: 20
                },
                800: {
                    items: 3,
                    margin: 20
                },
                1000: {
                    items: 4,
                    margin: 20
                }
            }
    });

    //Efecto hover en imagenes del workflow, cambia el tono
    var seleccion = $('#contenedorWorkflow img');
    console.log(seleccion);
    seleccion.mouseover(function(){
        $(this).css("filter" , "brightness(150%)");
    });
    seleccion.mouseout(function(){
        $(this).css("filter", "none");
    });

});