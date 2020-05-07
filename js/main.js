jQuery(document).ready(function($) {
	$('.non__look').attr('data-id',0);
	$('.item__menu__main').click(function(event) {
		if ($(this).find('.submenu').length != 0) {
			let menu = $(this).find('.submenu');
			let id = menu.attr('data-id');
			if (+id == 0) {
				menu.stop().slideDown('400');
				menu.attr('data-id', 1);
			}else{
				menu.stop().slideUp('400');
				menu.attr('data-id', 0);
			}
		}
	});
	$('.non__look__btn').click(function(event) {
		let id = $(this).attr('data-id');
		if (id ==  0) {
			$('.non__look__panel').stop().slideDown(400);
			$(this).attr('data-id',1);
		}else{
			$('.non__look__panel').stop().slideUp(400);
			$(this).attr('data-id',0);
		}
	});
	$('.img__site_btn').click(function(event) {
		let id = $(this).attr('data-id');
		if (id == 0 ) {
			$('img').css('display','block');
			$('img').css('filter','grayscale(0%)');
			$('.image__header').css('background',"url('image/header__bg.jpg')");
			$('.img__non__look__panel p').text('Включены');
		}else if (id == 1){
			$('img').css('display','none');
			$('.image__header').css('background','none');
			$('.img__non__look__panel p').text('Выключены');

		}else if (id == 2){
			$('img').css('filter','grayscale(100%)');
			$('.img__non__look__panel p').text('Черно-белые');
		}
	});
	let deffFont = 16;
	$('.refont__btn').click(function(event) {
		let id = $(this).attr('data-id');
		if (id == 0 ){
			deffFont--;
			$('div').css('font-size',deffFont + "px");
			$('a ').css('font-size',deffFont + "px");
			$('p ').css('font-size',deffFont + "px");
			$('span ').css('font-size',deffFont + "px");
		}else{
			deffFont++;
			$('div').css({'font-size': deffFont+ 'px'});
			$('a').css({'font-size': deffFont+ 'px'});
			$('p').css({'font-size': deffFont+ 'px'});
			$('span').css({'font-size': deffFont+ 'px'});
		}
		$('.font__non__look__panel p').text(deffFont + " Пикселей")
	});

	$('.color__site_btn').click(function(){
		let id = $(this).attr('data-id');
		if (id == 0) {
			$('body').children().css('background','#fff');
			$('div').css('background','#fff');
			$('header').css('background','#fff');
			$('footer').css('background','#fff');
			$('h1 ').css('color','#000');
			$('h2 ').css('color','#000');
			$('h3 ').css('color','#000');
			$('a').css({'color': '#000'});
			$('b').css({'color': '#000'});
			$('p').css({'color': '#000'});
			$('span').css({'color': '#000'});
			$('.color__site__non__look__panel p ').text('Черным по белому');
		}else if (id == 1){
			$('body').css('background','#000');
			$('div').css('background','#000');
			$('header').css('background','#000');
			$('footer').css('background','#000');
			$('h1 ').css('color','#fff');
			$('h2 ').css('color','#fff');
			$('h3 ').css('color','#fff');
			$('a').css({'color': '#fff'});
			$('b').css({'color': '#fff'});
			$('p').css({'color': '#fff'});
			$('span').css({'color': '#fff'});
			$('.color__site__non__look__panel p ').text('Белым по черному');

		}else if (id == 2){
			$('body').css('background','#9dd1ff');
			$('div').css('background','#9dd1ff');
			$('header').css('background','#9dd1ff');
			$('footer').css('background','#9dd1ff');
			$('h1 ').css('color','#063462');
			$('h2 ').css('color','#063462');
			$('h3 ').css('color','#063462');
			$('a').css({'color': '#063462'});
			$('b').css({'color': '#063462'});
			$('p').css({'color': '#063462'});
			$('span').css({'color': '#063462'});
			$('.color__site__non__look__panel p ').text('Темно-синим по голубому');

		}else if (id == 3){
			$('body').css('background','#f7f3d6');
			$('div').css('background','#f7f3d6');
			$('header').css('background','#f7f3d6');
			$('footer').css('background','#f7f3d6');
			$('h1 ').css('color','#4d4b43');
			$('h2 ').css('color','#4d4b43');
			$('h3 ').css('color','#4d4b43');
			$('a').css({'color': '#4d4b43'});
			$('b').css({'color': '#4d4b43'});
			$('p').css({'color': '#4d4b43'});
			$('span').css({'color': '#4d4b43'});
			$('.color__site__non__look__panel p ').text('Коричневым по бежевому');
			s		}else if (id == 4){
				$('body').css('background','#3b2716');
				$('div').css('background','#3b2716');
				$('header').css('background','#3b2716');
				$('footer').css('background','#3b2716');
				$('h1 ').css('color','#a9e44d');
				$('h2 ').css('color','#a9e44d');
				$('h3 ').css('color','#a9e44d');
				$('a').css({'color': '#a9e44d'});
				$('b').css({'color': '#a9e44d'});
				$('p').css({'color': '#a9e44d'});
				$('span').css({'color': '#a9e44d'});
				$('.color__site__non__look__panel p ').text('Зеленым по темно-коричневому');
			}
		});

	// maps
	ymaps.ready(initO);
	function initO(){

		ymaps.ready(function(){
			let map = new ymaps.Map("mapO", {
				center: [63.565457, 53.691712],
				zoom: 15
			});
			let myGeoObject = new ymaps.GeoObject({
				geometry: {
					type: "Point", 
			        coordinates: [63.565457, 53.691712] // координаты точки
			    }
			});
			map.geoObjects.add(myGeoObject); 
		});

	} 
	ymaps.ready(initT);
	function initT(){
		ymaps.ready(function(){
			let map = new ymaps.Map("mapT", {
				center: [63.592498, 53.671095],
				zoom: 15
			});
			let myGeoObject = new ymaps.GeoObject({
				geometry: {
					type: "Point", 
			        coordinates: [63.592498, 53.671095] // координаты точки
			    }
			});
			map.geoObjects.add(myGeoObject); 
		});
	}




});

