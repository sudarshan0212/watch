$('input:text').focusin(function(){
var id_sel=$(this).attr('id');
switch(id_sel)
	{
		case "1":
			$('#s1').text(" ");
			break;

		case "2":
			$('#s2').text(" ");
			break;

		case "3":
			$('#s3').text(" ");
			break;
	  
	case "6":
			$('#s6').text(" ");
			break;
	case "7":
			$('#s7').text(" ");
			break;
	}
});

$('input:password').focusin(function(){
var id_s=$(this).attr('id');
switch(id_s)
	{
	case "4":
			$('#4').attr('value',"");
	 		$('#s4').text(" ");
			break;
	case "5":
			$('#5').attr('value',"");
			$('#s5').text(" ");
			break;
	}
});

function blank()
{
var fname=$('#1').val();
var lname=$('#2').val();
var email=$('#3').val();
var pass=$('#4').val();
var cpass=$('#5').val();
var contact=$('#6').val();
    if(fname==''||lname==''||email==''||pass==''||cpass==''||contact=='')
	{
			return false;
	}
	else
	{
		return true;
	}
	
}
 
 function checkForm()
{
//var char1 = /^[A-Z]+\.?[A-Z]+$/;
var char1=/^[a-zA-Z]+$/ ;//characters
var char2 = /^([a-zA-Z0-9_-]){8,15}$/;//alpanumeric
var char3 = /^[0-9]+$/ ;//numbers
var email=/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
var count=0;
if(blank())
{
	if(!char1.test($('#1').val()))
	{
		    $('#s1').text("First name should contain only characters");
	
			return false;
	}
	else
	{
		
	}
	if(!char1.test($('#2').val()))
	{
			$('#s2').text("Last name should contain only characters");
			return false;
	}
	else
	{
		count++;
	}
   if(!email.test($('#3').val()))
	{
		$('#s3').text("Please enter valid email address");
		return false;
	}
	else
	{
		count++;
	}

	if(!char2.test($('#4').val())&&!char2.test($('#5').val()))
	{
			$('#s4').text("Password must be alphanumeric and 8-15 in length");
			return false;
	}
	else if($('#4').val()!=$('#5').val())
	{
            		$('#s5').text("Password and confirm password must be same");
					return false;
	}
	else
	{
		count++;
	}
	if(!char3.test($('#6').val()))
	{
		$('#s6').text("Contact No should contain only numbers");		
		return false;
	}
	else
	{
		count++;
	}
	if($('#7').attr("checked")==true)
	{
		return true;
	}
	else
	{
		$('#s7').text("Accept Terms and Condition");
		return false;
	}
}
else
{
	alert("You must fill all fields");
	return false;
}
}