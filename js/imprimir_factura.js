//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{	alert('imprimir');	
	// recuperar informacion	
	var cliente = getCookie('contacto_razon_social');
	var factura_nro = getCookie('factura_nro');
	var factura_total = getCookie('factura_total');
	
		var page = '<h1>Presupuesto Nro : '+factura_nro+'</h1><p>Se&ntilde;ores = '+cliente+'</p><p>'+'Total Factura = '+factura_total;
		alert(page);
		cordova.plugins.printer.print(page, 'Document.html', function () {
			alert('printing finished or canceled')
		});
}