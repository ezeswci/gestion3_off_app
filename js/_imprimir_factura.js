function imprimir_factura(factura){
	alert('imprimir');
	var cliente = getCookie('contacto_razon_social');	
	var total_factura = getCookie('total_factura');
	/*startLoadingAnimation();
	var usuario = getCookie('usuario');
	var www = getCookie('www');
	//var factura = getCookie('factura_id');
	var factura = getCookie('facturaJson');
	var dir_mail = document.getElementById('dir_mail').value;
	var tipo_comprobante = getCookie('tipo_comprobante');
	
	var json=JSON.stringify({"empresa":empresa,"dir_mail":dir_mail,"factura":factura,"tipo_comprobante":tipo_comprobante});
	*/
	// Imprimir
	var imp_factura ='esta es la factura que voy a imrimir a la empresa :'+cliente+' por un total de '+total_factura;
	var ventana=window.open('','_blank');  //abrimos una ventana vacía nueva
	//ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
	ventana.document.write(imp_factura);
	ventana.document.close();  //cerramos el documento
	ventana.print();  //imprimimos la ventana
	ventana.close();  //cerramos la ventana

}
