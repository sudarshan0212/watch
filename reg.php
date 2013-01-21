<?php
$host = 'localhost';
$user = 'root';
$pass = 'root';
$fname= $_POST['fname'];
$lname= $_POST['lname'];
$email= $_POST['email'];
$password= $_POST['pass'];
$cnt= $_POST['cnt'];
$conn = mysql_connect($host,$user,$pass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql ="INSERT INTO reg1 VALUES ('".$fname."','".$lname."','".$email."','".$password."',".$cnt.")";

mysql_select_db('test');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not enter data: ' . mysql_error());
}
echo "Entered data successfully\n";
mysql_close($conn);
?>