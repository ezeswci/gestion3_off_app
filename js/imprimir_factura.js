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
	//alert(getCookie('factura'));
	var factura = JSON.parse(getCookie('factura'));
	var z = factura.productos;
	var productos = "<table border='1' cellpadding='0' align='center' width='100%' style='font-size:14px'><tr><td width='80' align='center'>C&oacute;digo</td><td width='300' align='left'>Detalle</td><td width='80' align='center'>Und.</td><td width='80' align='right'>Bultos</td><td width='150' align='right'>Unnitario</td><td width='150' align='right'>Total</td></tr>";


	for(items in z){
		var productos = productos +"<tr><td width='80' align='center'>"+z[items].prod_id+"</td><td width='300' align='left'>"+z[items].prod_detalle+"</td><td width='80' align='center'>"+z[items].prod_unidad+"</td><td width='80' align='right'>"+z[items].prod_cant+"</td><td width='150' align='right'>"+z[items].prod_unit+"</td><td width='150' align='right' style='mso-number-format:\"#,##0.00\"'>"+z[items].prod_total+"</td></tr>";
		//alert('Producto :'+z[items].prod_id);
		}
	
	//--------------------------------
		var page = '<h1>Fecha : '+fecha+'</h1><p></h1><p><h2>Se&ntilde;ores = '+cliente+'</p></h2><p>'+productos+'</table></p>Total Factura = '+factura_total;
		alert(page);
		cordova.plugins.printer.print(page, 'Document.html', function () {
			alert('printing finished or canceled')
		});
}