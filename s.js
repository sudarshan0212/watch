$(document).ready(function(){
//$('#toggle').click(function() {

$('#1').focusin(function(){
$('#d1').hide();
});

$('#1').focusout(function() {
	if($('#1').val()=="")
	{
       $('#d1').show();
	}
});


$('#2').focusin(function(){
$('#d2').hide();
});

$('#2').focusout(function() {
	if($('#2').val()=="")
	{
       $('#d2').show();
	}
});

$('#3').focusin(function(){
$('#d3').hide();
});

$('#3').focusout(function() {
	if($('#3').val()=="")
	{
       $('#d3').show();
	}
});

$('#4').focusin(function(){
$('#d4').hide();
});

$('#4').focusout(function() {
	if($('#4').val()=="")
	{
       $('#d4').show();
	}
});
});

