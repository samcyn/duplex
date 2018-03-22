$(document).ready(function(){
	$('.category__item').click(function(){
		var category = $(this).attr('id');


		if(category == 'all'){
			$('.duplex__item').addClass('hide');
			setTimeout(function(){
				$('.duplex__item').removeClass('hide');
			}, 300);
		}
		else{
			$('.duplex__item').addClass('hide');
			setTimeout(function(){
				$('.' + category).removeClass('hide')
			}, 300);
		}
	});
});