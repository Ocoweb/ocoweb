"use strict";$.fn.formObject=function(){var n={};return $.each($(this).serializeArray(),function(i,t){n[t.name]=t.value||""}),n},!function(){function n(){var n=o();n&&!a&&(a=!0,e()),!n&&a&&(a=!1,t())}function i(){$("#responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("mdi-menu"),$(".menu-collapsed").toggleClass("menu-expanded")}function e(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function t(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function o(){var n=$("#description"),i=n.height();return $(window).scrollTop()>$(window).height()-2*i}var a=!1;n(),$("#contact-form").on("submit",function(n){return n.preventDefault(),sendForm($(this)),!1}),$("#navigation").on("click",i),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$("#menu-opener").on("click",i),$(".menu-link").on("click",i),$(window).scroll(n),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})})}(),!function(){function n(){if(i())s();else{var n=$(o).find(".input:invalid").first().parent();t(n)}}function i(){return document.querySelector(o).checkValidity()}function t(n){$(".step.active").removeClass("active"),n.addClass("active"),n.find(".input").focus();var i=$current_circle.index(".step")+1;$(".path-step.active").removeClass("active");var t=$(".path-step:nth-child("+i+")").addClass("active");e(t)}function e(n){$(".path-step.active").removeClass("active"),n.addClass("active")}function s(){var n=$(o);$.ajax({url:n.attr("action"),method:"POST",data:n.formObject(),dataType:"json",success:function(){n.slideUp(),$("#info-contact").html("Enviamos tu mensaje, pronto nos pondremos en contacto contigo!")}})}var o="#contact-form";$(".step textarea").on("keydown",function(n){13==n.keyCode&&(n.preventDefault(),$(n.target).blur())}),$(".path-step").on("click",function(n){var i=$(n.target);e(i);var s=i.index(".path-step")+1,o=$(".step:nth-child("+s+")");t(o)}),$(o).find(".input").on("change",function(e){var s=$(e.target),o=s.parent().next(".step"),a=i();!a&&o.length>0?t(o):n()})}();