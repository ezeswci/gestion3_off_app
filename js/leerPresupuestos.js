function leerPresupuestos()
{
	//alert('leer comprobantes '+getCookie('factura_acumula'));
	var presupuestos = JSON.parse(getCookie('factura_acumula'));
	//var fecha = getCookie('fecha');
	//var fecha_esp = fecha.substr(8,2)+'/'+fecha.substr(5,2)+'/'+fecha.substr(0,4)+' - Tot.Vta $ '+respuesta.total;
	document.getElementById('desc_comp').innerHTML = "<h4 class='form-signin-heading text-center'>fecha</h4>"
	/**************************
	*** Generar la pantalla ***
	**************************/
	var pant = '<table id="muestra_comprobante" class="table table-striped"><thead><tr><td>Comprob. Nro</td><td>Cliente</td><td>Total</td></tr>    </thead><tbody>'
	
	var z = presupuestos.comprobantes
	for(items in z){
	pant += '<tr style="font-size:80%" onclick="mostrarPresupuReserva('+z[items].cabecera.numero+')"><td>'+z[items].cabecera.numero+'</td><td>'+z[items].cabecera.cliente+'</td><td>'+z[items].cabecera.total+'</td></tr>'

	}
		pant += '</tbody></table>';
		document.getElementById("tab_comprobante").innerHTML=pant;
}

function mostrarPresupuReserva (comprobante){
	//alert('Comprobante = '+comprobante);
	var presupuestos = JSON.parse(getCookie('factura_acumula'));
	var z = presupuestos.comprobantes
	//alert(presupuestos);
	for(items in z){
	//alert(z[items].cabecera.numero+' == '+comprobante)
	if(z[items].cabecera.numero == comprobante ){
		var cliente = z[items].cabecera.cliente;	
		var total_factura = z[items].cabecera.total;
		var cliente_id = z[items].cabecera.cliente_id;
		// Cargar los productos
		//var y =JSON.stringify(z[items].productos);
		//alert('cliente '+cliente);
		//alert('total_factura '+total_factura);
		//alert('Productos 3 = '+y);
		var factura_actual = {"cabecera":{"numero":comprobante,"cliente":cliente,"cliente_id":cliente_id,"cond_venta":0,"total":total_factura,},"productos":z[items].productos}
		var facturaJson=JSON.stringify(factura_actual);
		//----------------------
		setCookie('factura_nro', comprobante, 1);
		setCookie('factura_total', total_factura, 1);
		setCookie('contacto_razon_social', cliente, 1);
		setCookie('contacto_id', cliente_id, 1);
		setCookie('factura', facturaJson, 1);

		//-----------------------
		location.href='facturar_04.html';
		break;
		}
	}

	//location.href='ver_presup_reserva_02.html'
}
