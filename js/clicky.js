jQuery(document).ready(function() {
	jQuery('img').bind('click', function() {
		jQuery(this).toggleClass("active");
	    jQuery(this).attr({
	        src: jQuery(this).attr('data-src'), 
	        'data-src': jQuery(this).attr('src')
	    });
	   
	});
});
