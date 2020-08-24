var movimientoLinea = 0;

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

var trayectoriaPersonal = [

    {fechaInicio: '11/03/2019', fechaFin: '11/03/2019', grupo: 11, duracion: 1, nivel: 0, motivo: 'otros', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/12/2018', fechaFin: '10/03/2019', grupo: 10, duracion: 3, nivel: 0, motivo: 'transferencia', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: true, r:'', e:''},
    {fechaInicio: '16/12/2017', fechaFin: '15/12/2018', grupo: 10, duracion: 11, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/12/2017', fechaFin: '15/12/2017', grupo: 9, duracion: 1, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/09/2017', fechaFin: '30/11/2017', grupo: 9, duracion: 2, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2015', fechaFin: '15/09/2017', grupo: 8, duracion: 32, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '31/12/2014', grupo: 7, duracion: 11, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '01/01/2014', grupo: 7, duracion: 1, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2012', fechaFin: '31/12/2013', grupo: 6, duracion: 11, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2011', grupo: 5, duracion: 10, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2013', grupo: 5, duracion: 22, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/01/2011', grupo: 4, duracion: 8, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/12/2010', grupo: 4, duracion: 7, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '15/05/2010', grupo: 3, duracion: 12, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '31/12/2009', grupo: 3, duracion: 7, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '30/04/2009', grupo: 2, duracion: 5, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '31/12/2008', grupo: 2, duracion: 1, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: true, r:'', e:''},
    {fechaInicio: '01/07/2007', fechaFin: '31/12/2007', grupo: 1, duracion: 4, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '30/06/2007', grupo: 0, duracion: 4, nivel: 0, motivo: 'contratacion', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '31/10/2008', grupo: 0, duracion: 8, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
];

var anoActual = (new Date()).getFullYear();
var anoReales = [];

for (let year = +(trayectoriaPersonal.reverse()[0].fechaInicio.split('/'))[2]; year < anoActual; year++) {
    anoReales.push(''+year);
}

console.log(anoReales);

var contenedorItemsGrid = document.getElementById('itemsGrid');
var totalColumnas = anoReales.length * 12;
console.log(anoReales);
var columnasUsadas = 1;
var totalWidth = 0;

anoReales.forEach(element => {
    var labelAno = document.createElement('div');
    var divText = document.createElement('div');
    var t = document.createTextNode(element);
    divText.appendChild(t);

    divText.style = 'padding-top: 40px;margin-left: -15px; position: absolute; left: 0px;'
    labelAno.style = 'grid-area: 1 / ' + columnasUsadas + ' / 1 / span 12;'
    columnasUsadas = columnasUsadas + 12;
    labelAno.classList.add('labelAno');
    labelAno.appendChild(divText);
    

    if(anoReales.length === 1){
        anoSiguiente = +anoReales + 1;
        var divText2 = document.createElement('div');
        var t2 = document.createTextNode(''+ anoSiguiente);
        divText2.appendChild(t2);
        labelAno.appendChild(divText2);
        divText2.style = 'padding-top: 40px; margin-right: -16px;position: absolute;right: 0px;'

    } else {
        if(anoReales.indexOf(element) === anoReales.length - 1) {
            var divText2 = document.createElement('div');
            var t2 = document.createTextNode(anoActual);
            divText2.appendChild(t2);
            labelAno.appendChild(divText2);
            divText2.style = 'padding-top: 40px; margin-right: -16px;position: absolute;right: 0px;'
        }
    }

    var contenedorLineas = document.createElement('div');
    contenedorLineas.classList.add('contenedorLineas');

    for (let index = 0; index < 3; index++) {
        var line = document.createElement('div');
        line.classList.add('lineTime');
        contenedorLineas.appendChild(line)
    }

    labelAno.appendChild(contenedorLineas);
    contenedorItemsGrid.appendChild(labelAno);
    totalWidth = totalWidth + 20;
});

contenedorItemsGrid.style = 'grid-template-columns: repeat('+totalColumnas+' , 1fr); transform: translate3d('+ movimientoLinea +'%, 0px, 0px); width: ' + totalWidth + '%;';

trayectoriaPersonal.reverse().forEach(evento => {
    console.log(evento);
    var contenedorEventoPrincipal = document.createElement('div');

});


// var space = document.createElement('div');
// nivelRow = nivelRow + 5;
// space.style = 'grid-area: '+ nivelRow +' / 1 / '+ nivelRow +' / span '+totalColumnas+';'
// contenedorItemsGrid.appendChild(space);

// var ultimaBolita = document.createElement('div');
// ultimaBolita.classList.add('ultimaBolita');

// contenedorItemsGrid.appendChild(ultimaBolita);
// var auxmovimientoLinea = (500 / anoReales.length);

// function avanzaDerecha() {
//     maxWidth = (100 - auxmovimientoLinea)*-1;
//     if(movimientoLinea.toFixed(1) !== maxWidth.toFixed(1)){
//         movimientoLinea = movimientoLinea - auxmovimientoLinea;
//         contenedorItemsGrid.style = 'grid-template-columns: repeat('+totalColumnas+' , 1fr); transform: translate3d('+movimientoLinea+'%, 0px, 0px); width: ' + totalWidth + '%;';    
//     }
// }
// function avanzaIzquierda() {
//     if(Math.trunc(Math.abs(movimientoLinea)) <= 10) {
//         movimientoLinea = 0;
//     }
//     if(movimientoLinea !== 0) {
//         movimientoLinea = movimientoLinea + auxmovimientoLinea;
//         contenedorItemsGrid.style = 'grid-template-columns: repeat('+totalColumnas+' , 1fr); transform: translate3d('+movimientoLinea+'%, 0px, 0px); width: ' + totalWidth + '%;';
//     }
// }

// function zoomIn() {

//     totalWidth = totalWidth - 50;
//     contenedorItemsGrid.style = 'grid-template-columns: repeat('+totalColumnas+' , 1fr); transform: translate3d('+movimientoLinea+'%, 0px, 0px); width: ' + totalWidth + '%;';
// }

// function zoomOut() {
//     totalWidth = totalWidth + 50;
//     contenedorItemsGrid.style = 'grid-template-columns: repeat('+totalColumnas+' , 1fr); transform: translate3d('+movimientoLinea+'%, 0px, 0px); width: ' + totalWidth + '%;';
// }

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction(id) {
//     document.getElementById(id).classList.toggle("show");
//   }

//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.bolita')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


//   $('.new_status').click(function(){

//     var bolitas = document.getElementsByClassName('bolita');
//         for (let index = 0; index < bolitas.length; index++) {
//             const element = bolitas[index];
//             element.style = "";
//             element.classList.remove('disabled');
//         }

//     $('.new_status').removeClass("active");
//     $(this).addClass("active");

//     $('.bolita').addClass("disabled");
    
//     $('.lineaAbajo').addClass("diplayNone");
//     switch(this.children[1].innerText) {
//         case 'Modificación sueldo':
//             $('.bolitaVerde').removeClass("disabled");
//             $('.bolitaVerde').addClass("active");

//             $('.lineaAbajo').removeClass("diplayNone");
            
//             break;
//         case 'Contratación':
//             $('.naranja').removeClass("disabled");
//             $('.naranja').addClass("active");
//             break;
//         case 'Cambio de puesto':
//             $('.azul').removeClass("disabled");
//             $('.azul').addClass("active");
//             break;
//         case 'Transferencia':
//             $('.morado').removeClass("disabled");
//             $('.morado').addClass("active");
//             break;
//         case 'Reactivación':
//             $('.rosa').removeClass("disabled");
//             $('.rosa').addClass("active");
//             break;
//         case 'Baja':
//             $('.bolitaRojo').removeClass("disabled");
//             $('.bolitaRojo').addClass("active");
//             break;
//         case 'No registrado':
//             $('.bolitaOtros').removeClass("disabled");
//             $('.bolitaOtros').addClass("active");
//             break;
//     }

// });

// $('.new_status').click(function(){
//     $('.new_status').addClass("disabled");
//     $(this).removeClass("disabled");
// });