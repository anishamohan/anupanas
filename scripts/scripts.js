$(document).ready(function() {
	$(document).scroll(function() {
    	if($(this).scrollTop() > 1) {
    	    $("#menu").css('background-color', '#3F475B');
    	} else {
    	    $("#menu").css('background-color', 'transparent');
    	}
    });
});
