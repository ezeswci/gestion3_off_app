function imprimir_factura(factura){
	alert('imprimir');
	var cliente = getCookie('contacto_razon_social');	
	var total_factura = getCookie('total_factura');
	var doc = new jsPDF();
	alert('2');
	doc.setTextColor(0,0,255);
	alert('2');
	doc.text(20, 60, 'Cliente : '+cliente);
	alert('2');
	doc.text(20, 50, 'Total Facturado : '+total_factura);
	alert('2');
	//doc.output('datauri');// lo muestra por pantalla
	alert('2');
	var pdfOutput = doc.output();
	doc.save('comprobante.pdf'); // Lo descarga
	alert('9 '+pdfOutput);

}
