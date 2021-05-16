$(function(){
	$(".sub_menu").hide();
	$(".sub_image").click(function(){
	$(this).next().slideToggle("fast");
	});
})