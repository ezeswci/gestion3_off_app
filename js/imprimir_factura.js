//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{		alert('imprimir');
		var cliente = getCookie('contacto_razon_social');	
		var total_factura = getCookie('total_factura');

        var success = function(status) {
            alert('Message: ' + status);}

        var error = function(status) {
            alert('Error: ' + status);}
		//create(html, filePath, successCallback, errorCallback)
		var html = "<html><head></head><body><h1>Prueba de Html</h1><p>Total Factura = $9999</p></body></html>"
	    //window.html2pdf.create(texto,"~/Download/presupuest.pdf",success,error);
		var nombre="test1.pdf";
		var filePath=""+nombre;// fileSystem.root+"/swci/" cordova.file.externalApplicationStorageDirectory+"/swci/"
        window.html2pdf.create(html, filePath, success, error);
		
}