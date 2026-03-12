<?php


// Set email variables
$email_to = 'principal@smasc.education';
$email_subject = 'Form submission';

// Set required fields
$required_fields = array('Name','Email','Phone','Subject','Message');

// set error messages
$error_messages = array(
	'Name' => 'Please enter a name to proceed.',
	'Email' => 'Please enter a valid Email Address to continue.',
	'Phone' => 'Please enter a Phone to proceed.',
	'Subject' => 'Please enter a Subject to proceed.',
	'Message' => 'Please enter your Message to continue.',
);

// Set form status
$form_complete = FALSE;

// configure validation array
$validation = array();

		$headers  = "From: <www.smasc.education>\n";
			$headers .= "X-Sender: <www.smasc.education>\n";
			$headers .= 'X-Mailer: PHP/' . phpversion();
			$headers .= "X-Priority: 1\n"; // Urgent message!
			$headers .= "Return-Path: www.smasc.education\n"; // Return path for errors
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=iso-8859-1\n";

// check form submittal
if(!empty($_POST)) {
	// Sanitise POST array
	foreach($_POST as $key => $value) $_POST[$key] = remove_email_injection(trim($value));
	
	// Loop into required fields and make sure they match our needs
	foreach($required_fields as $field) {		
		// the field has been submitted?
		if(!array_key_exists($field, $_POST)) array_push($validation, $field);
		
		// check there is information in the field?
		if($_POST[$field] == '') array_push($validation, $field);
		
		// validate the email address supplied
		if($field == 'Email') if(!validate_email_address($_POST[$field])) array_push($validation, $field);
	}
	
	// basic validation result
	if(count($validation) == 0) {
		// Prepare our content string
		$email_content = 'New Website Comment: ' . "<br>";
		
		// simple email content
		foreach($_POST as $key => $value) {
			if($key != 'submit') $email_content .= $key . ': ' . $value . "<br>";
		}
		
		// if validation passed ok then send the email
		$suc = mail($email_to, $email_subject, $email_content, $headers);
		
		if($suc){
			?><p style="font-size:36px; color:#255e67; text-align:center;">Thank you for your Message!</p><?php
		}
		// Update form switch
		$form_complete = TRUE;
	}
}

function validate_email_address($email = FALSE) {
	return (preg_match('/^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i', $email))? TRUE : FALSE;
}

function remove_email_injection($field = FALSE) {
   return (str_ireplace(array("\r", "\n", "%0a", "%0d", "Content-Type:", "bcc:","to:","cc:"), '', $field));
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Contact Form</title>
        <style type="text/css">
span.error{
color:#333333;
display:block;
font-size:12px;
}
	</style>
<script type="text/javascript">
function setValue(field)
{
if(''!=field.defaultValue)
{
if(field.value==field.defaultValue)
{
field.value='';
}
else if(''==field.value)
{
field.value=field.defaultValue;
}
}
}
</script>

	
	<script type="text/javascript">
var nameError = '<?php echo $error_messages['Name']; ?>';
		var emailError = '<?php echo $error_messages['Email']; ?>';
		var phoneError = '<?php echo $error_messages['Phone']; ?>';
		var subjectError = '<?php echo $error_messages['Subject']; ?>';
		var commentError = '<?php echo $error_messages['Message']; ?>';
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
</script>

</head>


</html>
