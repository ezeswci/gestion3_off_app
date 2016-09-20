//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{	alert('imprimir');	
	// recuperar informacion	
	var cliente = getCookie('contacto_razon_social');
	var factura_nro = getCookie('factura_nro');
	var factura_total = getCookie('factura_total');
	//-----------------------------------------------+
	var d = new Date();
	var dd = d.getDate();
	var mm = d.getMonth()+1; //hoy es 0!
	var hh = d.getHours();
	var ii = d.getMinutes();
	if(dd<10) {dd='0'+dd} 
	if(mm<10) {mm='0'+mm} 
	if(hh<10) {hh='0'+hh} 
	if(ii<10) {ii='0'+ii} 
	var yyyy = d.getFullYear();	
	var fecha = dd+'/'+dd+'/'+yyyy;
	//--------------------------------
	alert('2116');
	alert(getCookie('factura'));
	var factura = JSON.parse(getCookie('factura'));
	alert(factura.cabecera.empresa)
	var z = factura.productos;
	alert(z[0].prod_id);
	var productos = "<table border='1' cellpadding='0' 'style='font-size:1.1em;'><tr><td>Producto</td><td>Detalle</td><td>Bultos</td><td>Cantidad</td><td>Unitario</td><td>Total</td></tr>"


	for(items in z){
		var productos = productos +"<tr><td>"+z[items].prod_id+"</td><td>"+z[items].prod_detalle+"</td><td>"+z[items].prod_unidad+"</td><td>"+z[items].prod_cant+"</td><td>"+z[items].prod_unit+"</td><td>"+z[items].prod_total+"</td></tr>";
		alert('Producto :'+z[items].prod_id);
		}
	
	//--------------------------------
		var page = '<h1>Fecha : '+fecha+'</h1><p></h1><p><h2>Se&ntilde;ores = '+cliente+'</p></h2><p>'+'Total Factura = '+factura_total+"</br>"+productos;
		alert(page);
		cordova.plugins.printer.print(page, 'Document.html', function () {
			alert('printing finished or canceled')
		});
}