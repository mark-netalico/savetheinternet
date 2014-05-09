window.onload = function () {
    if (!window.jQuery) {
        var jq = document.createElement('script'); 
        jq.type = 'text/javascript'; 
        jq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
        var sc = document.getElementsByTagName('script')[0];
        sc.parentNode.insertBefore(jq, sc);
    }
}

!(function($) {
	function setCookie(cname,cvalue,exdays)
	{
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	
	function getCookie(cname)
	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) 
		  {
		  var c = ca[i].trim();
		  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		  }
		return "";
	}

	if (getCookie('netNeutrality') != "disable") {
		
		jQuery('<div/>', {
		    id: 'netNeutrality',
		    text: 'Welcome to the slow lane! This is what your internet could be like if you don\'t fight the FCC to protect net neutrality. ',
		    style: 'position:fixed; z-index:99999999; top:0; width:100%; background:#ffffff; color: #ff0000; text-align:center; font-weight:bold; height:40px; line-height:40px;'
		}).prependTo('body');
		
		
		jQuery('<a/>', {
		    id: 'learnMore',
		    text: 'Click here to learn more.',
		    href: 'http://www.savetheinternet.com/',
		    target: "_blank",
		    style: 'text-decoration:underline; color: #fa0000;'
		}).appendTo('#netNeutrality');
		
		jQuery('<a/>', {
		    id: 'closeNetNeutrality',
		    text: 'X',
		    href: 'javascript:void(0);',
		    style: 'margin-left:15px; color: #000000;'
		}).appendTo('#netNeutrality');
		
		$( "#closeNetNeutrality" ).on( "click", function() {
			$('#netNeutrality').remove();
			setCookie('netNeutrality', 'disable', 30)
			});
		
			var images = $('img');
		images.each(function( index ) {
			$(this).hide();  					
		});	

		$('body').hide(function() {});
			
		$('body').fadeIn(10000, function(){		
			images.each(function( i ) {
				$(this).delay(5000*i).fadeIn(5000);
			});
		});  

		
	}	
})(jQuery);