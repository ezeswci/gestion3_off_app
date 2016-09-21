function CargarInformacion()
{
	startLoadingAnimation();
	delete_cookie('productosJson','',1);
	delete_cookie('contactosJson','',1);
	delete_cookie('preciosJson','',1);
	delete_cookie('acumuladas','',1);
	delete_cookie('factura_acumula','',1);
	CargarProductos()
	CargarContactos()
	CargarPrecios()
	closeLoadingAnimation();
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
	//alert('Productos = '+xmlhttp.responseText);
	setCookie('productosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerProductos.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}

function CargarContactos()
{
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
//alert("Contactos empresa="+empresa+" usuario="+usuario+" www="+www)
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
	//alert('Contactos = '+xmlhttp.responseText);
	setCookie('contactosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerContactos.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}

function CargarPrecios()
{
var empresa = getCookie('empresa');
var usuario = getCookie('usuario');
var www = getCookie('www');
//alert("Precios empresa="+empresa+" usuario="+usuario+" www="+www)

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
	//alert('Precios = '+xmlhttp.responseText);
	setCookie('preciosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerPrecios.php",false);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}
