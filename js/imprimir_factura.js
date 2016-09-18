function imprimir_factura(factura){
	alert('imprimir');
	var cliente = getCookie('contacto_razon_social');	
	var total_factura = getCookie('total_factura');
	var doc = new jsPDF();
	doc.setTextColor(0,0,255);
	doc.text(20, 60, 'Cliente : '+cliente);
	doc.text(20, 50, 'Total Facturado : '+total_factura);
	//doc.output('datauri');// lo muestra por pantalla
	doc.save('comprobante.pdf'); // Lo descarga

}
