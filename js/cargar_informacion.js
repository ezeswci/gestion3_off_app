function CargarInformacion()
{
	startLoadingAnimation();
	delete_cookie('productosJson','',1);
	delete_cookie('contactosJson','',1);
	delete_cookie('preciosJson','',1);
	CargarProductos()
	CargarContactos()
	CargarPrecios()
	closeLoadingAnimation();
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
}


function CargarProductos()
{
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
//alert("Productos = empresa="+empresa+" usuario="+usuario+" www="+www)
var json=JSON.stringify({"empresa":empresa,"usuario":usuario});

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
	setCookie('productosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerProductos.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);
}

function CargarContactos()
{
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
var json=JSON.stringify({"empresa":empresa,"usuario":usuario});

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
	setCookie('contactosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerContactos.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);
}

function CargarPrecios()
{
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
var json=JSON.stringify({"empresa":empresa,"usuario":usuario});

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
	setCookie('preciosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerPrecios.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);
}
