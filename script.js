$(document).ready(function() {
	$( ".contact" ).submit(function( e ) {
		e.preventDefault();
		var clientname = $(".clientname").val();
		var email = $(".email").val();
	    var phone = $(".phone").val();
	    console.log(clientname);
	    console.log(email);
	    console.log(phone);
	});
});