//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{		alert(imprimir);
		var cliente = getCookie('contacto_razon_social');	
		var total_factura = getCookie('total_factura');

        var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }
		//create(html, filePath, successCallback, errorCallback)
		var texto = "<html><head></head><body><h1>"+cliente+"</h1><p>Total Factura = "+total_factura+"</p></body></html>"
	    window.html2pdf.create(texto,"~/Download/presupuest.pdf",success,error);

        /*
	    window.html2pdf.create(
            "<html><head></head><body><h1>Some</h1><p>html content.</p></body></html>",
            "~/Documents/test.pdf", // on iOS,
            // "test.pdf", on Android (will be stored in /mnt/sdcard/at.modalog.cordova.plugin.html2pdf/test.pdf)
            success,
            error
        );
		*/
}