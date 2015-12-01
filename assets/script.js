$(document).ready(function(){

	$(".topbar-text") .click(function(){
	alert("Thanks for visiting my website!");
	});

	
	$(".container-background").click(function() {
 	$("#text-container").hide();
	});
	

	$("#submit").click(function() {
 	$("#text-container1").show();
	});


	$(".container-background").click(function() {
 	$("#text-container1").show();
	});



	$(".topbar-text").hover(function() {
	$(".topbar-text").css("background-color", "grey");
	});



});