function CargarInformacion()
{
	startLoadingAnimation();
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
//alert("empresa="+empresa+" usuario="+usuario+" www="+www)
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
xmlhttp.open("POST",www+"/app_php/leerProductos.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
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
	//alert(xmlhttp.responseText);
	setCookie('contactosJson',xmlhttp.responseText, 1);
    }
  }
xmlhttp.open("POST",www+"/app_php/leerContactos.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
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
xmlhttp.open("POST",www+"/app_php/leerPrecios.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
//xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}
