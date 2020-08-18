$(document).ready(function(){
    cargarMenu();
});

function cargarMenu(){
    $("menuPricipal").html('<div id="effect" class="ui-widget-content ui-corner-all">'+
      '<div id="menuPrincipal">'+
        '<div id="menu">'+
          '<ul class="l-navegacion nivel1">'+
				'<li><a href="login.html"><div></div><div>Inicio</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Alertas</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Reportería</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Casas RBS</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Ficha tienda</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Jefe con estrella</div></a></li>'+
				'<li><a href="login.html"><div></div><div>Comedor</div></a></li>'+
			'</ul>'+
        '</div>'+
      '</div>'+
    '</div>');
}


