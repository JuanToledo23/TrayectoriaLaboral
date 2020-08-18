var posicion = 0;

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

var todosEventos = [
        
    {fechaInicio: '11/03/2019', fechaFin: '11/03/2019', grupo: 0, duracion: 0, nivel: 0, motivo: 'otros', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/12/2018', fechaFin: '10/03/2019', grupo: 0, duracion: 0, nivel: 0, motivo: 'transferencia', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: true, r:'', e:''},
    {fechaInicio: '16/12/2017', fechaFin: '15/12/2018', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/12/2017', fechaFin: '15/12/2017', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/09/2017', fechaFin: '30/11/2017', grupo: 0, duracion: 0, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/08/2017', fechaFin: '15/09/2017', grupo: 0, duracion: 0, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '31/12/2014', grupo: 0, duracion: 0, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '01/01/2014', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/12/2013', fechaFin: '31/12/2013', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2011', grupo: 0, duracion: 0, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2013', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/01/2011', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/12/2010', grupo: 0, duracion: 0, nivel: 0, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '15/05/2010', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '31/12/2009', grupo: 0, duracion: 0, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '30/04/2009', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '31/12/2008', grupo: 0, duracion: 0, nivel: 0, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: true, r:'', e:''},
    {fechaInicio: '01/07/2007', fechaFin: '31/12/2007', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '30/06/2007', grupo: 0, duracion: 0, nivel: 0, motivo: 'contratacion', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '31/10/2008', grupo: 0, duracion: 0, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
];

var anoActual = (new Date()).getFullYear();
var anoReales = [];
for (let index = +(todosEventos.reverse()[0].fechaFin.split('/'))[2]; index < anoActual; index++) {
    anoReales.push(''+index);
}

var contenedorItemsGrid = document.getElementById('itemsGrid');
var columnas = anoReales.length * 12;

var sumatoriaMeses = 0;
var totalModificacionSueldo = 0;
var totalCeldasUsadas = 0;
todosEventos.forEach(element => {
    var cadenas = element.fechaInicio.split('/');
    var cadenasFin = element.fechaFin.split('/');
    var resultado = +cadenasFin[1] - +cadenas[1];
    if (resultado === 0) {
        sumatoriaMeses++;
    } else {
        sumatoriaMeses = sumatoriaMeses + resultado;
    }

    if(element.motivo === 'modificacionSueldo') {
        totalModificacionSueldo++;
    }
    var duracion = sacarDuracion(element.fechaInicio, element.fechaFin);
    totalCeldasUsadas = totalCeldasUsadas + duracion;
});

var espaciosVacios = (columnas - totalCeldasUsadas) /totalModificacionSueldo;

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}


function sacarAño(stringFecha) {
    var cadenas = stringFecha.split('/');
    return cadenas[2];
}

var sumatoriaTotalCeldas = 0;
function sacarDuracion(stringFechaInicio, stringFechaFin) {
    var cadenas = stringFechaInicio.split('/');
    var cadenasFin = stringFechaFin.split('/');
    var resultado = +cadenasFin[1] - +cadenas[1];

    anoInicio = +cadenas[2];
    mesInicio = +cadenas[1];
    diaInicio = +cadenas[0];

    anoFin = +cadenasFin[2];
    mesFin = +cadenasFin[1];
    diaFin = +cadenasFin[0];

    if (resultado === 0) {
        sumatoriaTotalCeldas++;
        return 1;
    } else {
        var meses = monthDiff(new Date(anoInicio, mesInicio, diaInicio), new Date(anoFin, mesFin, diaFin));
        sumatoriaTotalCeldas = sumatoriaTotalCeldas + meses;
        return meses;
    }

}

var sumDuracion = 0;

var nivelRow = 3;
var conteoAnos = 1;

var totalWidth = 0;

anoReales.forEach(element => {
    var labelAno = document.createElement('div');
    var divText = document.createElement('div');
    var t = document.createTextNode(element);
    divText.appendChild(t);

    divText.style = 'padding-top: 40px;margin-left: -15px; position: absolute; left: 0px;'
    labelAno.style = 'grid-area: 1 / ' + conteoAnos + ' / 1 / span 12;'
    conteoAnos = conteoAnos + 12;
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

contenedorItemsGrid.style = 'grid-template-columns: repeat('+columnas+' , 1fr); transform: translate3d('+ posicion +'%, 0px, 0px); width: ' + totalWidth + '%;';
var transferenciaRows = 0;
// todosEventos.reverse().forEach(event => {

//     var duracion = sacarDuracion(event.fechaInicio, event.fechaFin);

//     var evento = document.createElement('div');
//     evento.style = 'background-color: #00a148';

//     var col = columnas - sumDuracion - duracion - 1;
//     var lineaEvento = document.createElement('div');
//     var rowLine = nivelRow ;
//     var colLine = col;
//     var color = '';

//     if(event.cambioNivel) {
//         nivelRow++;
//         lineaEvento = document.createElement('div');
//         rowLine = nivelRow ;
        
//         color = '';
//         lineaEvento.classList.add('lineEvento');
        
//         switch(event.motivo) {
//             case 'contratacion':
//                 colLine = col + 3;
//                 color = '#ff8300';
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
//             case 'modificacionSueldo':
//                 colLine = col + 3;
//                 color = '#00a148';
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
//             case 'cambioPuesto':
//                 colLine = col + 3;
//                 color = '#00b4d1';
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
//             case 'baja':
//                 colLine = col + 3;
//                 color = '#ff2f28';
//                 duracionReactivacion = duracion + Math.round(espaciosVacios);
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracionReactivacion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
//             case 'reactivacion':
//                 colLine = col + 3;
//                 color = '#ff37ee';
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
//             case 'transferencia':
//                 colLine = col + 3;
//                 color = '#9252f5';
//                 lineaEvento.style = 'grid-column: '+ colLine +' / span '+ duracion +';grid-row: '+rowLine+' / '+rowLine+'; border: dashed 1px '+ color +'; border-top: unset;border-left: unset;';
//                 break;
            
//         }
        

//         // contenedorItemsGrid.appendChild(lineaEvento);
//     } 

    
//     // col = col ;
    

    
//     evento.classList.add('flex');

//     var contenidoEvento = document.createElement('div');
//     contenidoEvento.classList.add('contenedorBolita');

//     var bolita = document.createElement('div');
//     bolita.classList.add('bolita');
//     var colorLineaFin = '';
//     switch(event.motivo) {
//         case 'contratacion':
//             colorLineaFin = '#ff8300';
//             bolita.classList.add('naranja');
//             break;
//         case 'modificacionSueldo':
//             colorLineaFin = '#00a148';
//             contenidoEvento.classList.add('verde');
//             bolita.classList.add('bolitaVerde');
//             contenidoEvento.style.width = '100%';
//             var lineaAbajo = document.createElement('div');
//             lineaAbajo.classList.add('lineaAbajo');
//             lineaAbajo.classList.add('diplayNone');
//             var rowLineAbajo = nivelRow + 1;
//             lineaAbajo.style = 'grid-column: '+ col +' / span '+ duracion +';grid-row: '+rowLineAbajo+' / 10;position: relative;';
//             var contenedorTextos = document.createElement('div');
//             contenedorTextos.classList.add('textosLineas');

//             if(event.e !== '') {
//                 var textR = document.createTextNode(event.r + ',');
//                 var textRDiv = document.createElement('div');
//                 textRDiv.classList.add('textoR');
//                 textRDiv.appendChild(textR);
//                 var textE = document.createTextNode(event.e);
//                 var textEDiv = document.createElement('div');
//                 textRDiv.classList.add('textoE');
//                 textEDiv.appendChild(textE);
//                 contenedorTextos.appendChild(textRDiv);
//                 contenedorTextos.appendChild(textEDiv);
//             } else {
//                 var text = document.createTextNode(event.r);
//                 contenedorTextos.appendChild(text);
//             }
//             lineaAbajo.appendChild(contenedorTextos);
//             contenedorItemsGrid.appendChild(lineaAbajo);

//             break;
//         case 'cambioPuesto':
//             colorLineaFin = '#00b4d1';
//             bolita.classList.add('azul');
//             break;
//         case 'baja':

//             colorLineaFin = '#ff2f28';
//             contenidoEvento.classList.add('rojo');
//             bolita.classList.add('bolitaRojo');
//             contenidoEvento.style.width = '100%';

//             break;
//         case 'reactivacion':
//             colorLineaFin = '#ff37ee';
//             bolita.classList.add('rosa');
//             break;
//         case 'transferencia':
//             colorLineaFin = '#9252f5';
//             bolita.classList.add('morado');
//             break;
//         default:
//             colorLineaFin = '#a8a8a8';
//             contenidoEvento.classList.add('otros');
//             bolita.classList.add('bolitaOtros');
//             contenidoEvento.style.width = '100%';
//             break;
//     }

//     if(event.motivo === 'modificacionSueldo') {
//         duracion = duracion + Math.round(espaciosVacios);
//         evento.style = 'grid-column: '+ col +' / span '+ duracion +';grid-row: '+nivelRow+' / '+nivelRow+'; height: 60%;';
//     } else {
//         col = col + Math.round(espaciosVacios);
//         evento.style = 'grid-column: '+ col +' / span '+ duracion +';grid-row: '+nivelRow+' / '+nivelRow+'; height: 60%;';
//         if(todosEventos.indexOf(event) === 0) {
//             evento.style = 'grid-column: '+ col +' / span '+ duracion +';grid-row: '+nivelRow+' / '+nivelRow+'; height: 60%; border-right: solid 3px '+ colorLineaFin +';';
//         }
        
//     }


//     bolita.addEventListener("click", (eve) => {

//         $('.new_status').addClass("disabled");
//         $('.new_status').removeClass("active");
//         var bolitas = document.getElementsByClassName('bolita');
//         for (let index = 0; index < bolitas.length; index++) {
//             const element = bolitas[index];
//             element.style = "";
//             element.classList.add('disabled');
//         }
//         var lineas = document.getElementsByClassName('lineaAbajo');
//         for (let index = 0; index < lineas.length; index++) {
//             const element = lineas[index];
//             element.classList.add('diplayNone');
//         }
//         eve.target.classList.remove('disabled');
        

//         switch(event.motivo) {
//             case 'contratacion':
//                 bolita.style = "animation: sombra_naranja 2s infinite;";
//                 break;
//             case 'modificacionSueldo':
//                 bolita.style = "animation: sombra_verde 2s infinite;";
//                 lineaAbajo.classList.remove('diplayNone');
//                 break;
//             case 'cambioPuesto':
//                 bolita.style = "animation: sombra_azul 2s infinite;";
//                 break;
//             case 'baja':
//                 bolita.style = "animation: sombra_roja 2s infinite;";
//                 break;
//             case 'reactivacion':
//                 bolita.style = "animation: sombra_rosa 2s infinite;";
//                 break;
//             case 'transferencia':
//                 bolita.style = "animation: sombra_morada 2s infinite;";
//                 break;
//             default:
//                 break;
//         }
//         myFunction(todosEventos.indexOf(event));
//     });

//     var dropdownBolita = document.createElement('div');
//     dropdownBolita.classList.add('dropdown');

//     var contenedorInfoBolita = document.createElement('div');
//     contenedorInfoBolita.classList.add('dropdown-content');
//     contenedorInfoBolita.setAttribute("id", todosEventos.indexOf(event));

//     var tituloInfo = document.createElement('div');
//     tituloInfo.classList.add('tituloInfo');
//     var imgInfo = document.createElement('img');
//     var textInfo = document.createElement('div');
//     var txt;

//     var contenedorInfoBlanca = document.createElement('div');
//     var contenedorInfoGris = document.createElement('div');


//     switch(event.motivo) {
//         case 'contratacion':
//             imgInfo.src = 'assets/img/contratacion2.svg';
//             txt = document.createTextNode('Contratación');
//             textInfo.style = 'color : #ff8300;';

//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/puesto.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Puesto');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoBlanca.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.puesto);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoBlanca.appendChild(contenedorTextoPuesto);

//             contenedorInfoBlanca.appendChild(document.createElement('br'));

//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/fecha_inicio.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Fecha inicio');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoBlanca.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode('15 febrero, 2016');
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorTextoPuesto.classList.add('bold');
//             contenedorInfoBlanca.appendChild(contenedorTextoPuesto);



//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/ubicacion.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Ubicación');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoGris.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.puesto);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoGris.appendChild(contenedorTextoPuesto);


//             contenedorInfoGris.appendChild(document.createElement('br'));

//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/sucursal.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Sucursal');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoGris.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.desc);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoGris.appendChild(contenedorTextoPuesto);

//             contenedorInfoGris.appendChild(document.createElement('br'));

            

//             break;
//         case 'modificacionSueldo':
//             imgInfo.src = 'assets/img/modificacion_sueldo2.svg';
//             txt = document.createTextNode('Modificación sueldo');
//             textInfo.style = 'color : #00a148';

//                       var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/puesto.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Puesto');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoBlanca.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.puesto);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoBlanca.appendChild(contenedorTextoPuesto);

//             contenedorInfoBlanca.appendChild(document.createElement('br'));

//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/fecha_inicio.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Fecha inicio');
//             contenedorTituloPuesto.appendChild(txtPuesto);


//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/ubicacion.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Ubicación');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoGris.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.puesto);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoGris.appendChild(contenedorTextoPuesto);


//             contenedorInfoGris.appendChild(document.createElement('br'));

//             var tituloIconoPuesto = document.createElement('div');
//             var imgPuesto = document.createElement('img');
//             imgPuesto.src = 'assets/img/trayectoria/sucursal.svg';
//             tituloIconoPuesto.appendChild(imgPuesto);
//             var contenedorTituloPuesto = document.createElement('div');
//             var txtPuesto = document.createTextNode('Sucursal');
//             contenedorTituloPuesto.appendChild(txtPuesto);

//             primerContenedorBlanco = document.createElement('div');
//             primerContenedorBlanco.appendChild(imgPuesto);
//             primerContenedorBlanco.appendChild(contenedorTituloPuesto);
//             primerContenedorBlanco.classList.add('flexContainer');
//             contenedorInfoGris.appendChild(primerContenedorBlanco);
//             var textoPuesto = document.createTextNode(event.desc);
//             var contenedorTextoPuesto = document.createElement('div');
//             contenedorTextoPuesto.appendChild(textoPuesto);
//             contenedorTextoPuesto.classList.add('flexContainer');
//             contenedorTextoPuesto.classList.add('textoContenido');
//             contenedorInfoGris.appendChild(contenedorTextoPuesto);

//             contenedorInfoGris.appendChild(document.createElement('br'));
//             break;
//         case 'cambioPuesto':
//             imgInfo.src = 'assets/img/cambio_de_puesto2.svg';
//             txt = document.createTextNode('Cambio de puesto');
//             textInfo.style = 'color : #00b4d1';
//             break;
//         case 'baja':
//             imgInfo.src = 'assets/img/baja2.svg';
//             txt = document.createTextNode('Baja');
//             textInfo.style = 'color : #ff2f28';
//             break;
//         case 'reactivacion':
//             imgInfo.src = 'assets/img/reactivacion2.svg';
//             txt = document.createTextNode('Reactivación');
//             textInfo.style = 'color : #ff37ee';
//             break;
//         case 'transferencia':
//             imgInfo.src = 'assets/img/transferencia2.svg';
//             txt = document.createTextNode('Transferencia');
//             textInfo.style = 'color : #9252f5';
//             break;
//         default:
//             imgInfo.src = '';
//             txt = document.createTextNode('Otros');
//             textInfo.style = 'color : #424242';
//             break;
//     }

//     contenedorInfoBlanca.classList.add('paddingInfo');
//     contenedorInfoGris.classList.add('paddingInfo');
//     textInfo.appendChild(txt);
//     tituloInfo.appendChild(imgInfo);
//     tituloInfo.appendChild(textInfo);
//     contenedorInfoBolita.appendChild(tituloInfo);
//     contenedorInfoBolita.appendChild(contenedorInfoBlanca);
//     contenedorInfoGris.classList.add('contenedorInfoGris');
//     contenedorInfoBolita.appendChild(contenedorInfoGris);

//     var triangle = document.createElement('div');
//     triangle.classList.add('triangle-with-shadow');

//     contenedorInfoBolita.appendChild(triangle);
//     dropdownBolita.appendChild(bolita);
//     dropdownBolita.appendChild(contenedorInfoBolita);

//     contenidoEvento.appendChild(dropdownBolita);
//     evento.appendChild(contenidoEvento);

//     contenedorItemsGrid.appendChild(evento);


//     sumDuracion = sumDuracion + duracion;
// });


var space = document.createElement('div');
nivelRow = nivelRow + 5;
space.style = 'grid-area: '+ nivelRow +' / 1 / '+ nivelRow +' / span '+columnas+';'
contenedorItemsGrid.appendChild(space);

var ultimaBolita = document.createElement('div');
ultimaBolita.classList.add('ultimaBolita');

contenedorItemsGrid.appendChild(ultimaBolita);
var auxPosicion = (500 / anoReales.length);

function avanzaDerecha() {
    maxWidth = (100 - auxPosicion)*-1;
    if(posicion.toFixed(1) !== maxWidth.toFixed(1)){
        posicion = posicion - auxPosicion;
        contenedorItemsGrid.style = 'grid-template-columns: repeat('+columnas+' , 1fr); transform: translate3d('+posicion+'%, 0px, 0px); width: ' + totalWidth + '%;';    
    }
}
function avanzaIzquierda() {
    if(Math.trunc(Math.abs(posicion)) <= 10) {
        posicion = 0;
    }
    if(posicion !== 0) {
        posicion = posicion + auxPosicion;
        contenedorItemsGrid.style = 'grid-template-columns: repeat('+columnas+' , 1fr); transform: translate3d('+posicion+'%, 0px, 0px); width: ' + totalWidth + '%;';
    }
}

function zoomIn() {

    totalWidth = totalWidth - 50;
    contenedorItemsGrid.style = 'grid-template-columns: repeat('+columnas+' , 1fr); transform: translate3d('+posicion+'%, 0px, 0px); width: ' + totalWidth + '%;';
}

function zoomOut() {
    totalWidth = totalWidth + 50;
    contenedorItemsGrid.style = 'grid-template-columns: repeat('+columnas+' , 1fr); transform: translate3d('+posicion+'%, 0px, 0px); width: ' + totalWidth + '%;';
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.bolita')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  $('.new_status').click(function(){

    var bolitas = document.getElementsByClassName('bolita');
        for (let index = 0; index < bolitas.length; index++) {
            const element = bolitas[index];
            element.style = "";
            element.classList.remove('disabled');
        }

    $('.new_status').removeClass("active");
    $(this).addClass("active");

    $('.bolita').addClass("disabled");
    
    $('.lineaAbajo').addClass("diplayNone");
    switch(this.children[1].innerText) {
        case 'Modificación sueldo':
            $('.bolitaVerde').removeClass("disabled");
            $('.bolitaVerde').addClass("active");

            $('.lineaAbajo').removeClass("diplayNone");
            
            break;
        case 'Contratación':
            $('.naranja').removeClass("disabled");
            $('.naranja').addClass("active");
            break;
        case 'Cambio de puesto':
            $('.azul').removeClass("disabled");
            $('.azul').addClass("active");
            break;
        case 'Transferencia':
            $('.morado').removeClass("disabled");
            $('.morado').addClass("active");
            break;
        case 'Reactivación':
            $('.rosa').removeClass("disabled");
            $('.rosa').addClass("active");
            break;
        case 'Baja':
            $('.bolitaRojo').removeClass("disabled");
            $('.bolitaRojo').addClass("active");
            break;
        case 'No registrado':
            $('.bolitaOtros').removeClass("disabled");
            $('.bolitaOtros').addClass("active");
            break;
    }

});

$('.new_status').click(function(){
    $('.new_status').addClass("disabled");
    $(this).removeClass("disabled");
});