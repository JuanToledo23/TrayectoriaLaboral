var movimientoLinea = 0;

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

var trayectoriaPersonal = [
    {fechaInicio: '01/11/2008', fechaFin: '30/04/2009', grupo: 2, duracion: 3, motivo: 'baja', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '30/04/2009', grupo: 2, duracion: 6, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '31/12/2008', grupo: 2, duracion: 2, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: true, r:'', e:''},

    {fechaInicio: '01/07/2007', fechaFin: '31/12/2007', grupo: 1, duracion: 6, nivel: 0, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'No Registrado', cambioNivel: true, r: '', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '30/06/2007', grupo: 0, duracion: 5, nivel: 0, motivo: 'contratacion', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},

];
/* var trayectoriaPersonal = [

    {fechaInicio: '11/03/2019', fechaFin: '11/03/2019', grupo: 11, duracion: 1, cambioNivel: false, motivo: 'otros', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/12/2018', fechaFin: '10/03/2019', grupo: 10, duracion: 4, cambioNivel: false, motivo: 'transferencia', puesto: 'Gerente De Departamento', no: 0, desc: 'Bienestar Comunicac', cambioNivel: true, r:'', e:''},
    {fechaInicio: '16/12/2017', fechaFin: '15/12/2018', grupo: 10, duracion: 11, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/12/2017', fechaFin: '15/12/2017', grupo: 9, duracion: 1, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/09/2017', fechaFin: '30/11/2017', grupo: 9, duracion: 2, cambioNivel: false, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2015', fechaFin: '15/09/2017', grupo: 8, duracion: 32, cambioNivel: false, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '31/12/2014', grupo: 7, duracion: 11, cambioNivel: false, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2014', fechaFin: '01/01/2014', grupo: 7, duracion: 1, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Infor', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/01/2012', fechaFin: '31/12/2013', grupo: 6, duracion: 11, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2011', grupo: 5, duracion: 10, cambioNivel: false, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    
    {fechaInicio: '01/02/2011', fechaFin: '31/12/2013', grupo: 5, duracion: 22, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/01/2011', grupo: 4, duracion: 8, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/05/2010', fechaFin: '31/12/2010', grupo: 4, duracion: 7, cambioNivel: false, motivo: 'transferencia', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '15/05/2010', grupo: 3, duracion: 12, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/05/2009', fechaFin: '31/12/2009', grupo: 3, duracion: 7, cambioNivel: false, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '30/04/2009', grupo: 2, duracion: 5, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '01/11/2008', fechaFin: '31/12/2008', grupo: 2, duracion: 1, cambioNivel: false, motivo: 'otros', puesto: 'Desarrollador (Sistemas)', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: true, r:'', e:''},
    {fechaInicio: '01/07/2007', fechaFin: '31/12/2007', grupo: 1, duracion: 4, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'No Registrado', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '30/06/2007', grupo: 0, duracion: 4, cambioNivel: false, motivo: 'contratacion', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
    {fechaInicio: '16/02/2007', fechaFin: '31/10/2008', grupo: 0, duracion: 8, cambioNivel: false, motivo: 'modificacionSueldo', puesto: 'Analista', no: 0, desc: 'D Sistemas De Informacion', cambioNivel: false, r:'', e:''},
]; */

var anoActual = (new Date()).getFullYear();
var anoReales = [];

for (let year = +(trayectoriaPersonal.reverse()[0].fechaInicio.split('/'))[2]; year < anoActual; year++) {
    anoReales.push(''+year);
}

var gruposTrayectos = trayectoriaPersonal.map((task) => {
        return task.grupo;
}).unique();

var contenedorItemsGrid = document.getElementById('itemsGrid');
var totalColumnas = anoReales.length * 12;
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
var gridRow = gruposTrayectos.length + 1;

gruposTrayectos.forEach(grupo => {
    const eventosGrupo = trayectoriaPersonal.filter(evento => {
        if(evento.grupo === grupo) {
            return true;
        } else {
            return false;
        }
    });

    
    agregarEvento(eventosGrupo);
    

    console.log(eventosGrupo);
});

function agregarEvento(grupo) {

    var heightColor = 100;
    var mayorDuracion = 0;
    console.log(grupo.length);
    
    var eventoMayorDuracion = null;

    if(grupo.length > 1){
        heightColor = heightColor / grupo.length;
        for (let index = 0; index < grupo.length; index++) {
            if (grupo[index].duracion > mayorDuracion)
            {
                mayorDuracion = grupo[index].duracion;
                eventoMayorDuracion = grupo[index];
            }
        }

    } else {
        mayorDuracion = grupo[0].duracion;
        eventoMayorDuracion = grupo[0];
    }

    var mesesSumados = 12 * anoReales.indexOf(eventoMayorDuracion.fechaInicio.split('/')[2]);
    var columnaInicio = +eventoMayorDuracion.fechaInicio.split('/')[1] + mesesSumados;
    var columnaSpanFinal = eventoMayorDuracion.duracion;
    
    var contenedorEventoPrincipal = document.createElement('div');
    contenedorEventoPrincipal.classList.add('flex');

    if(eventoMayorDuracion.cambioNivel) {
        gridRow--; 
    }

    contenedorEventoPrincipal.style = 'grid-column: '+ columnaInicio +' / span '+ columnaSpanFinal +';grid-row: '+ gridRow +' / '+ gridRow +'; height: 60%;';

    var contenedorBolita = document.createElement('div');
    contenedorBolita.classList.add('contenedorBolita');

    var bolitaPrincipal = document.createElement('div');
    bolitaPrincipal.classList.add('bolita');

    contenedorBolita.appendChild(bolitaPrincipal);

    grupo.forEach(eventoSeleccionado => {
        var colorTrayecto = document.createElement('div');
        
        /* Comentar en caso de querer que todos los eventos marquen el mismo tiempo de eventos */
        colorTrayecto.style.width = (eventoSeleccionado.duracion * 100) / mayorDuracion + '%';

        var colorbolita = document.createElement('div');
        colorbolita.classList.add('colorbolita');

        colorTrayecto.style.height = heightColor + '%';
        colorbolita.style.height = heightColor + '%';

        switch(eventoSeleccionado.motivo) {
            case 'contratacion':
                colorLineaFin = '#ff8300';
                colorTrayecto.classList.add('naranja');
                colorbolita.classList.add('bolitaNaranja');
                break;
            case 'modificacionSueldo':
                colorLineaFin = '#00a148';
                colorTrayecto.classList.add('verde');
                colorbolita.classList.add('bolitaVerde');
                break;
            case 'cambioPuesto':
                colorLineaFin = '#00b4d1';
                colorTrayecto.classList.add('azul');
                colorbolita.classList.add('bolitaAzul');
                break;
            case 'baja':

                colorLineaFin = '#ff2f28';
                colorTrayecto.classList.add('rojo');
                colorbolita.classList.add('bolitaRojo');

                break;
            case 'reactivacion':
                colorLineaFin = '#ff37ee';
                colorTrayecto.classList.add('rosa');
                colorbolita.classList.add('bolitaRosa');
                break;
            case 'transferencia':
                colorLineaFin = '#9252f5';
                colorTrayecto.classList.add('morado');
                colorbolita.classList.add('bolitaMorado');
                break;
            default:
                colorLineaFin = '#a8a8a8';
                colorTrayecto.classList.add('otros');
                colorbolita.classList.add('bolitaOtros');
                break;
        }

        bolitaPrincipal.appendChild(colorbolita);
        contenedorBolita.appendChild(colorTrayecto);
        
    });
        contenedorEventoPrincipal.appendChild(contenedorBolita);
        contenedorItemsGrid.appendChild(contenedorEventoPrincipal);

}

/* trayectoriaPersonal.forEach(eventoSeleccionado => {
    var contenedorEventoPrincipal = document.createElement('div');
    contenedorEventoPrincipal.classList.add('flex');

    var mesInicio = +eventoSeleccionado.fechaInicio.split('/')[1];
    var columnaInicio = mesInicio;
    var columnaSpanFinal = eventoSeleccionado.duracion;
    if(eventoSeleccionado.cambioNivel) {
        gridRow--; 
    }

    contenedorEventoPrincipal.style = 'grid-column: '+ columnaInicio +' / span '+ columnaSpanFinal +';grid-row: '+ gridRow +' / '+ gridRow +'; height: 60%;';


    var contenedorBolita = document.createElement('div');
    contenedorBolita.classList.add('contenedorBolita');

    var bolitaPrincipal = document.createElement('div');
    bolitaPrincipal.classList.add('bolita');

    var colorLineaFinal = '';

    //gridRow--;
    
    contenedorBolita.style.width = '100%';
    switch(eventoSeleccionado.motivo) {
        case 'contratacion':
            colorLineaFin = '#ff8300';
            contenedorBolita.classList.add('naranja');
            bolitaPrincipal.classList.add('bolitaNaranja');
            break;
        case 'modificacionSueldo':
            colorLineaFin = '#00a148';
            contenedorBolita.classList.add('verde');
            bolitaPrincipal.classList.add('bolitaVerde');
            

           /*  var lineaAbajo = document.createElement('div');
            lineaAbajo.classList.add('lineaAbajo');
            lineaAbajo.classList.add('diplayNone');
            var rowLineAbajo = nivelRow + 1;
            lineaAbajo.style = 'grid-column: '+ col +' / span '+ duracion +';grid-row: '+rowLineAbajo+' / 10;position: relative;';
            var contenedorTextos = document.createElement('div');
            contenedorTextos.classList.add('textosLineas');

            if(event.e !== '') {
                var textR = document.createTextNode(event.r + ',');
                var textRDiv = document.createElement('div');
                textRDiv.classList.add('textoR');
                textRDiv.appendChild(textR);
                var textE = document.createTextNode(event.e);
                var textEDiv = document.createElement('div');
                textRDiv.classList.add('textoE');
                textEDiv.appendChild(textE);
                contenedorTextos.appendChild(textRDiv);
                contenedorTextos.appendChild(textEDiv);
            } else {
                var text = document.createTextNode(event.r);
                contenedorTextos.appendChild(text);
            }
            lineaAbajo.appendChild(contenedorTextos);
            contenedorItemsGrid.appendChild(lineaAbajo); 

            break;
        case 'cambioPuesto':
            colorLineaFin = '#00b4d1';
            bolitaPrincipal.classList.add('azul');
            bolitaPrincipal.classList.add('bolitaAzul');
            break;
        case 'baja':

            colorLineaFin = '#ff2f28';
            contenedorBolita.classList.add('rojo');
            bolitaPrincipal.classList.add('bolitaRojo');

            break;
        case 'reactivacion':
            colorLineaFin = '#ff37ee';
            bolitaPrincipal.classList.add('rosa');
            bolitaPrincipal.classList.add('bolitaRosa');
            break;
        case 'transferencia':
            colorLineaFin = '#9252f5';
            bolitaPrincipal.classList.add('morado');
            bolitaPrincipal.classList.add('bolitaMorado');
            break;
        default:
            colorLineaFin = '#a8a8a8';
            contenedorBolita.classList.add('otros');
            bolitaPrincipal.classList.add('bolitaOtros');
            break;
    }
    contenedorBolita.appendChild(bolitaPrincipal)
    contenedorEventoPrincipal.appendChild(contenedorBolita);
    contenedorItemsGrid.appendChild(contenedorEventoPrincipal);
}); */
