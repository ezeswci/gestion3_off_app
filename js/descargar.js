function descargar(){
	//alert('descargar '+getCookie('acumuladas'))
	if(getCookie('acumuladas').length>4){
			var acumuladas = JSON.parse(getCookie('acumuladas'));
			confirmar()}
			else
			{mostrar_alerta('Descargar.','No tiene informacion para descaragar',BootstrapDialog.TYPE_DANGER);}
}

function confirmar(){
	var texto = '<p>Esta seguro de descargar la informacion existente en el dispositivo al sistema general.</p>';
	
            BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                title: 'Confirmaci&oacute; de operaci&oacute;n',
                message: texto,
                buttons: [{
                   label: 'Aceptar',
				   cssClass: 'btn-success',
                	action: function(){
					 descargarInformacion()
                	}
                	}, {
                   label: 'Cancelar',
				   	cssClass: 'btn-danger',
                	action: function(dialogItself){
                   	 dialogItself.close();
                	}
                }]
            });     
}

function descargarInformacion()
{
//alert('descargarInformacion 99')
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
var acumuladas = JSON.parse(getCookie('acumuladas'));
var json=JSON.stringify({"empresa":empresa,"comprobantes":acumuladas});

var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	var value = xmlhttp.responseText;
	/*********************************
	*** Guarda tabla de productost ***
	*********************************/
	delete_cookie('acumuladas','',1);
	delete_cookie('factura_acumula','',1);

	BootstrapDialog.show({
                type: BootstrapDialog.TYPE_DANGER,
                title: 'Transferencia',
                message: 'La transferencia de informaci&oacute;n a finalizado',
                buttons: [{
                   label: 'Aceptar',
				   cssClass: 'btn-success',
                	action: function(){
					 location.href='index.html'
                	}
                }]
            });     

	//location.href='index.html';
    }
  }
//alert(www+"/app_php/descargar_informacion.php "+json)  
xmlhttp.open("POST",www+"/app_php/descargar_informacion.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);
}