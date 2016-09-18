function imprimir_factura(factura){
	alert('imprimir');
	var cliente = getCookie('contacto_razon_social');	
	var total_factura = getCookie('total_factura');
	var doc = new jsPDF();
	alert('1');
	doc.setTextColor(0,0,255);
	alert('1');
	doc.text(20, 60, 'Cliente : '+cliente);
	alert('1');
	doc.text(20, 50, 'Total Facturado : '+total_factura);
	alert('1');
	doc.output('datauri');// lo muestra por pantalla
	alert('1');
	//doc.save('comprobante.pdf'); // Lo descarga

}
