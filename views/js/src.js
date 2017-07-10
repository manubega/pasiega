/*=============================
=            SLIDE            =
=============================*/
var numeroSlide = 1;
var formatearloop = false;
var cantidadImg = $("#slide ul li ").length;
console.log('cantidadImg',cantidadImg);

$("#slide ul").css({"width":(cantidadImg * 100) + "%" });
$("#slide ul li").css({"width":(100/cantidadImg) + "%" });

/*INDICADORES*/
$("#indicador li").click(function(){

	var roleSlide = $(this).attr("role-slide");
	

	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ roleSlide +")").fadeIn();

	$("#indicador li").css({"opacity":".4"});

	$(this).css({"opacity":"1"});

	formatearloop = true;
	numeroSlide = roleSlide;

});

/* FIN INDICADORES*/
/*========================================
=            FUNCTION AVANZAR            =
========================================*/
function avanzar(){

		if (numeroSlide >= 4) {
		numeroSlide = 1;

	}
	else{
		numeroSlide++;

	}

	
	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

	$("#indicador li").css({"opacity":".4"});

	$("#indicador li:nth-child("+ numeroSlide +")").css({"opacity":"1"});
}


/*=====  End of FUNCTION AVANZAR  ======*/


/*FLECHA RIGHT*/
$("#right").click(function(){

avanzar();
formatearloop = true;

});

/*FIN FLECHA RIGHT*/


/*FLECHA LEFT*/
$("#left").click(function(){

	if (numeroSlide <= 1) {
		numeroSlide = 4;

	}
	else{
		numeroSlide--;

	}

	
	$("#slide ul li").css({"display":"none"});

	$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

	$("#indicador li").css({"opacity":".4"});

	$("#indicador li:nth-child("+ numeroSlide +")").css({"opacity":"1"});

	formatearloop = true;


});

/*FIN FLECHA LEFT*/

/*INTERVALO DE LAS IMAGENES*/
setInterval(function(){

	if (formatearloop) {
		formatearloop = false;
	}

	else{

		avanzar();
	}

	

},3000);




/*=====  End of SLIDE  ======*/

