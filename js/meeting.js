
$(document).ready(function(){
	$(".selection").attr("value","0");

	$(".selection").mouseover(function () {
		if($(this).attr("value") != "1")
		$(this).css("background-color", "red");
	});
	
	$(".selection").mouseleave(function () {
		if($(this).attr("value") != "1")
		$(this).css("background-color", "green");
	});
	
	$(".selection").click(function (){
		$(this).attr("value","1");
		$(this).css("background-color", "yellow");
		
		console.log($(this).attr("value"));
	});

	$("#reset").click(function(){
		$(".selection").attr("value", "0");
		$(".selection").css("background-color", "green");
	});


});