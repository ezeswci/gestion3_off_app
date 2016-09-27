//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{		
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
	//alert('2');
	var factura = JSON.parse(getCookie('factura'));
	//alert('2');
	var z = factura.productos;
	var productos = "<table border='1' cellpadding='0' align='center' width='100%' style='font-size:14px'><tr><td width='80' align='center'>C&oacute;digo</td><td width='300' align='left'>Detalle</td><td width='80' align='center'>Undidad</td><td width='80' align='right'>Cantidad</td><td width='150' align='right'>Imp. Unit.</td><td width='150' align='right'>Total</td></tr>";


	for(items in z){
		// Formatear los numeros
		var val_unitario = FormatMoney( z[items].prod_unit, '', '', '.', ',', 2, 2 );
		var val_total = FormatMoney( z[items].prod_total, '', '', '.', ',', 2, 2 );
		var productos = productos +"<tr><td width='80' align='center'>"+z[items].prod_id+"</td><td width='300' align='left'>"+z[items].prod_detalle+"</td><td width='80' align='center'>"+z[items].prod_unidad+"</td><td width='80' align='right'>"+z[items].prod_cant+" "+z[items].prod_medida+"</td><td width='150' align='right'>"+val_unitario+"</td><td width='150' align='right' style='mso-number-format:\"#.##0,00\"'>"+val_total+"</td></tr>";
		//alert('Producto :'+z[items].prod_id);
		}
	var val_final = FormatMoney( factura_total, '', '', '.', ',', 2, 2 );
	var linea_total = "<tr><td colspan = '4' align='center'><td width='150' align='right'> Total Presupuesto </td><td width='150' align='right' style='mso-number-format:\"#.##0,00\"'>"+val_final+"</td></tr>"
	//--------------------------------
		var page = '<h1>Fecha : '+fecha+'</h1><p></h1><p><h2>Presupuesto Nro : = '+factura_nro+'</p></h2><h2>Se&ntilde;ores = '+cliente+'</p></h2><p>'+productos+linea_total+'</table>';

		//alert(page);
		//cordova.plugins.printer.print(page, 'Document.html', function () {alert('printing finished or canceled')});
		cordova.plugins.printer.print(page, 'Document.html');
}