$(document).ready(function() {
	
//попап подключили? открывается картинка после того как на нее нажали
	$('.popup').magnificPopup({type:'image'});
//открывается форма при нажатии на кнопку	
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,
	horizontalOffset: 60 //оффсет для бэкграунда
	//что бы не было видно повторений
});

//СКРИПТЫ НА КАРУСЕЛЬ

$(".carousel").owlCarousel({
	
	responsive : {
		0 : {
			items : 1,
			nav : true
		}
	},
	navText : ""
});

	//Функция для того что бы бэкграунд картинка
	//соответствовала высоте при измене размера окна
	//всё делается для адаптивности
	function wResize() {
		$("header").css("min-height", $(window).height());
		//вроде подходит эта команда, но
		//изза строки выше бэкграундная картинка по высоте не изменяется
		//поэтому добавили вместо height добавили MIN-HEIGHT

	};
	wResize();
	$(window).resize(function(){
		wResize()
	} );
//это табы на МОСКВА-КАРАГАНДА в шапке сайта
$(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//это табы на ТАБЛИЦУ "Скидки учащимся,дополнительная"
// в шапке сайта
$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//ЭТО ТАБЫ НА ОБРАТНУЮ СВЯЗЬ с КАРТОЙ "В МОСКВЕ" и "В КАРАГАНДЕ"

$(".s_contacts .tab").click(function() {
	$(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
	

//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		//var ths = $(this)
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				//ths.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

//ФИГАЧИМ АНИМАЦИЮ

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeInDown");
	$(".tabs_header .wrapper").animated("zoomIn", "zoomIn");
	$(".profy_item").animated("fadeInRight", "fadeOutRight");
	$(".s_pofi form").animated("slideInRight", "slideOutRight");
	$(".s_back h3").animated("flipInX", "flipInX");
	$(".s_back .button").animated("bounceIn", "bounceOut");
	$("footer").animated("fadeInLeft", "fadeOutRight");
});