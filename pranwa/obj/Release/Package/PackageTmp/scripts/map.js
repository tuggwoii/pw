var mapshow = false;
var isFirst = true;

function closeMap() {
	$('.map-box').fadeOut(500);
	mapshow = false;
}

$(document).ready(function(){
	
	$('.map-btn').click(function(){
		if(!mapshow) {
			mapshow = true;
			$('.map-box').fadeIn(500);
			if(isFirst) {
				setTimeout(function(){
					var src = 'https://www.google.com/maps/d/embed?mid=1jBroCpzVMlZQV853BcB0k4LkgmA';
					$('.embed-responsive-item').attr("src",src);
				}, 550);
				setTimeout(function(){
					$('.close-map').show();
				}, 3000);
				isFirst = false;
			}
		}
		else {
			closeMap();
		}
	});
	
	$('.close-map').click(function(){
		closeMap();
	});
});