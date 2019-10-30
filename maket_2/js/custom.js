$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial-slider').slick({
		arrows: false,
		dots: true,
	});

	$('.portfolio-slider').slick({
		dots: true,
		appendArrows: '.portfolio-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	})
});


function initMap() {
    var coordinates = {lat: -37.806006, lng: 144.961291}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 


 window.onload = function () {
			/*window.scrollTo(x,y) задает автоматическую прокрутку до координат*/
			var scrolled;
			var timer;

			document.getElementById('topUp').onclick = function(){
				scrolled = window.pageYOffset;
				// window.scrollTo(0,0);
				scrollToTop();
			}
			function scrollToTop () {
				if(scrolled > 0 ) {
					window.scrollTo(0, scrolled);
					scrolled = scrolled - 700; /* 100 - скорость прокрутки*/
					timer = setTimeout(scrollToTop, 100);
				}
				else {
					clearTimeout(timer);
					window.scrollTo(0,0);
				}
			}
		}


function valid (form) {
			var fail = false;
			var name = form.name.value;
			var email = form.email.value;

			var adr_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;


			if(name == "" || name == " ")
				fail = "Вы не ввели свое имя";
			else if(adr_pattern.test(email) ==  false)
				fail = "Вы ввели email неправельно";
		}
		document.onkeypress = function(event){
			console.log(event);
		}