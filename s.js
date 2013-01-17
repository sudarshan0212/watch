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
var email=/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,4}$/;
var count=0;
if(blank())
{
	if(!char1.test($('#1').val()))
	{
			alert("First name should contain only characters");
			return false;
	}
	else
	{
		
	}
	if(!char1.test($('#2').val()))
	{
			alert("Last name should contain only characters");
			return false;
	}
	else
	{
		count++;
	}
  /* if(!email.test($('#3').val()))
	{
		alert("Please enter valid email address");
		return false;
	}
	else
	{
		count++;
	}*/

	if(!char2.test($('#4').val())&&!char2.test($('#5').val()))
	{
			alert("Password must be alphanumeric and 8-15 in length");
			return false;
	}
	else if($('#4').val()!=$('#5').val())
	{
            		alert("Password and confirm password must be same");
					return false;
	}
	else
	{
		count++;
	}
	if(!char3.test($('#6').val()))
	{
		alert("Contact No should contain only numbers");		
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
		alert("Accept Terms and Condition");
		return false;
	}
}
else
{
	alert("You must fill all fields");
	return false;
}
}