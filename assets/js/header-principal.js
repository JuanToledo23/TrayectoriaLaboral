$(document).ready(function(){
    cargarHeader();
});

function cargarHeader(){
    let usr_nombre = 'Juan Alberto';
    let usr_apellido = 'Toledo Tello';

    $("header").html(
    '<div class="header">'+
        '<div class="contenedor_header">'+

            '<div class="headerMenu">'+
                '<a href="#" id="hamburger">'+
                    '<img src="assets/img/btn_hamburguer.svg" alt="Menú principal" class="imgHamburgesa">'+
                '</a>'+
                '<a href="index.html">'+
                    '<img src="assets/img/logo1.svg" id="imgLogo">'+
                '</a>'+
            '</div>'+

            '<div class="headerLogo">'+
                '<a href="index.html">Socio Único</a>'+
            '</div>'+

            '<div class="headerUser">'+
                '<div class="name">'+
                    '¡Hola ' + usr_nombre + usr_apellido +'!'+
                '</div>'+

                '<div>'+
                    '<a href="#">'+
                        '<img src="assets/img/icoSalir.svg" class="imgShowMenuUser">'+
                    '</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>');
}


