$('document').ready(function(){
	$('#content').append('<img src="http://cdn8.openculture.com/wp-content/uploads/2015/03/03225855/MoebiusGondola.jpg">');
	$('#content').append('<h1>The Restaurant at the End of the Universe</h1>');
	$('#content').append('<p>If you have done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the End of the Universe.</p>');
	$('#content').append('<p>Milliways is built on the fragmented remains of an eventually ruined planet which is enclosed in a vast time bubble and projected forward in time to the precise moment of the End of the Universe.</p>');	

	$('li').click(function(event){

		$(this).siblings().removeClass('clicked');
		$(this).toggleClass('clicked');
		$('#content').children().remove();		
		var classClicked = $(this).attr('id');
		if(classClicked === 'tab1'){
			$('#content').append('<img src="http://cdn8.openculture.com/wp-content/uploads/2015/03/03225855/MoebiusGondola.jpg">');
			$('#content').append('<h1>The Restaurant at the End of the Universe</h1>');
			$('#content').append('<p>If you have done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the End of the Universe.</p>');	
			$('#content').append('<p>Milliways is built on the fragmented remains of an eventually ruined planet which is enclosed in a vast time bubble and projected forward in time to the precise moment of the End of the Universe.</p>');	
		} else if (classClicked === 'tab2') {
			$('#content').append('<h1>Menu</h1>');
			$('#content').append('<ul><li>Ameglion Major Cow steak</li><li>Pan Galactic Gargle Blaster</li></ul>');
		} else if (classClicked === 'tab3') {
			$('#content').append('<h1>Contact</h1>');
			$('#content').append('<ul><li>Max Quordlepleen</li></ul>');
		}
	});
});