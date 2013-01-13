function validate(email){

	$.post('email.php',{email:email},function(data){
		$('#email_feedback').text(data);
});
}

$('#email').focusin(function(){

	if($('#email').val()=="")
	{
		$('#email_feedback').text('Go on, enter a valid email address..');
		
	}
	else
	{
		validate($('#email').val());
	}
}).blur(function(){

	$('#email_feedback').text(' ');

}).keyup(function(){

	validate($('#email').val());

});