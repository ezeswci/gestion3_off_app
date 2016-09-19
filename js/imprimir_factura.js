//document.addEventListener('deviceready', onDeviceReady);
function imprimir_factura()
{		alert('imprimir');		
		var page = '<h1>Hello Document</h1>';
		cordova.plugins.printer.print(page, 'Document.html', function () {
			alert('printing finished or canceled')
		});
}