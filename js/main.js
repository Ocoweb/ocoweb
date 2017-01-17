;(function(){

	let sticky = false
	let currentPosition = 0
	const email = "ep.luisjesus@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))

		return false
	})

	checkScroll()

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$("#menu-opener").on("click", toggleNav)

	$(".menu-link").on("click", toggleNav)

	
	$(window).scroll(checkScroll)

	function checkScroll(){
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//Cambiar la nav
			
			sticky = true
			stickNavigation()
		}
	    if(!inBottom && sticky){
	    	//Ocultar navegacion sticky
	    	sticky = false
			unStickNavigation()
		}
	}

	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("mdi-menu")
	}
	
	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}


	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)
	}



})()