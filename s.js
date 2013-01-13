function validate(e)
{
var key=e.which;
if(key>96&&key<123||key>64&&key<91)
{
	return true;
}
else
{
	return false;
}
}
function pvalidate(e)
{
var key=e.which;
if(key>96&&key<123||key>64&&key<91||key>47&&key<58)
{
	return true;
}
else
{
	return false;
}
}
function cvalidate(e)
{
var key=e.which;
if(key>47&&key<58)
{
	return true;
}
else
{
	return false;
}
}

$(document).ready(function(){
//$('#toggle').click(function() {

$('input:text').focusin(function(){
var  x=$(this).attr('id');
   
   switch(x)
   {
	    case '1':
	       $('#d1').hide();
		   break;
        case '2':
	   	    $('#d2').hide();
		    break;
		case '3':
		   $('#d3').hide();
		   break;
		case '7':
		   $('#d7').hide();
		   break;
		  
   }
   
	
});

$('input:text').focusout(function() {
	var y=$(this).attr('id');

	switch(y)
	{
		case '1':
			if($(this).val()=="")
			{
				$('#d1').show();
			}
				
		break;
	 
		case '2':
			if($(this).val()=="")
			{
				$('#d2').show();
			}
		break;

		case '3':
			if($(this).val()=="")
			{
				$('#d3').show();
			}
		break;
	 
		case '7':
			if($(this).val()=="")
			{
				$('#d7').show();
			}
		break;

	}
});

$('input:password').focusin(function(){
var a=$(this).attr('id');

	switch(a)
    {
			case '4':
				$('#d4').hide();
				break;

			case '5':
				$('#d5').hide();
				break;
    }
});

$('input:password').focusout(function() {
var b=$(this).attr('id');
	
		switch(b)
		{
			case '4':
				if($(this).val()=="")
				{
					$('#d4').show();
				}
			break;

			case '5':
				if($(this).val()=="")
				{
					$('#d5').show();
				}
			break;	
		}
});


$('#1').keypress(function(e){
return validate(e);
});
$('#2').keypress(function(e){
return validate(e);
});
$('#3').keypress(function(e){
return validate(e);
});
$('#4').keypress(function(e){
return pvalidate(e);
});
$('#5').keypress(function(e){
return pvalidate(e);
});

$('#7').keypress(function(e){
return cvalidate(e);
});

});

