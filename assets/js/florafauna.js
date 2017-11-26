$(function() {
//CAMBIA LAS IMAGENES DE LA LISTA DE ABAJO POR LAS IMAGENES ACTIVAS
	var src = $("#bodybottom > div > ul.thumbnails > li.active > a > img").attr('src');
	src = src.toString();

    var newSrc = src.replace(".jpg","-active.jpg"); // re-assemble
    $("#bodybottom > div > ul.thumbnails > li.active > a > img").attr('src',newSrc);
});
