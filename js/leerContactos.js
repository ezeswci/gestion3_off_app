function leerContactos(tipo)
{

	if(getCookie('contactosJson').length>4){
			levantarContactos()}
			else
			{BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                title: 'Sicrinizar',
                message: 'Debe sincronizar el dispositivo con el sistema central antes de comenzar a operar',
                buttons: [{
                   label: 'Aceptar',
				   cssClass: 'btn-success',
                	action: function(){
					 location.href='index.html'
                	}
                }]
            });     
			}
}

function levantarContactos(tipo)
{
startLoadingAnimation();

var x = document.getElementById("contactos");
//alert('z = '+getCookie('contactosJson'))
var z = JSON.parse(getCookie('contactosJson'));
var i = 0;

var option = document.createElement("option");
option.text = 'Seleccione un contacto';
option.value = '0';
x.add(option, x[i]);
for(items in z){
	i = i + 1;
	//alert("Nombre:"+z[items].nombre+"  "+"id:"+z[items].id+' I= '+i)
	var option = document.createElement("option");
	option.text = z[items].nombre;
	option.value = z[items].id;
	x.add(option, x[i]);
	}
closeLoadingAnimation();
}

// Guardar el seleccionado
function seleccion_contacto() {
    var x = document.getElementById("contactos").selectedIndex; 
    var y = document.getElementById("contactos").options; 

    //var a = document.getElementById("cond_venta").selectedIndex; 
   // var b = document.getElementById("cond_venta").options; 

	var error = '';
    if(y[x].value < 1){error = error+"<p>Debe seleccionar un contacto</p>"};
    //if(b[a].value < 1){error = error+"<p>Debe seleccionar una condicion de venta</p>"};
	if(error.length > 0){mostrar_alerta('Generaci&oacute;n de Comprobante',error,BootstrapDialog.TYPE_DANGER);return}

	setCookie('contacto_id', y[x].value, 1);
	setCookie('contacto_razon_social', y[x].text, 1);
	//setCookie('cond_venta', b[a].value, 1);
	//setCookie('cond_venta_nombre', b[a].text, 1);
	location.href='facturar_03.html'

}

// Guardar el seleccionado
function contacto_codigo() {
		document.getElementById("contactos").value = document.getElementById("co_id").value;
		if(document.getElementById("co_id").value == 0) {document.getElementById("contactos").focus();}
;
}

function contactos_mostrar_codigo() {
		document.getElementById("co_id").value = document.getElementById("contactos").value;
		//document.getElementById("cond_venta").focus();
}