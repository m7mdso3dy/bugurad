<?php
include 'functions.php';

/*
Error codes and how to deal with them
--------------------------------------
2xxx: server side errors which require a technical support from us
1xxx: client side errors mostly user related

200  : Everything is OK
20001: mailing error check your GSuite username/password or maybe got rate limited by Gmail
10001: Empty or Missing Parameters
10002: Invalid Email Format
10003: Client Website URL Checking
10004: Captcha Error

*/

function send_email_request($data,$type='contact'){
   	 $subject = str_replace("#company", $data['Company'], BUGUARD_REQUEST_SUBJECT_TEMPLATE); 
   	 $subject = str_replace("#request_type", $type, $subject); 
	//including the email template
	require_once(BUGUARD_REQUEST_MSG_TEMPLATE);
	//Retrieve the email body from the template
        $body   = $temp;
        $result  = bg_mail(BUGUARD_REQUESTS_EMAIL,"Buguard",$subject,$body);
        if ($result){
                echo json_encode(array('status' => 'success','code' => '200'));
                exit;

        }else{
                /*
                        TODO: add some way to report this internally
                */
                echo $result;
                echo json_encode(array(
                        'status' => 'error',
                        'code'   => '20001',
                        'msg'    => 'We are experiencing some technical difficulties please try again later.'
                ));
                exit;
        }
}

$missing  = array();
//determining the message type and set the requirments
if (!isset($_POST['type'])|| empty($_POST['type'])) $type= 'contact'; else $type=$_POST['type'];
switch($type)
	{	
		case 'contact':
$required = array("name","phone","email","company","website","service","message","jobTitle","captcha");
		break;
                case 'paymob':
$required = array("name","phone","email","Emails","jobTitle","company","captcha");
                break;
		case 'charity':
$required = array("name","phone","email","company","website","service","message","jobTitle","captcha");
		break;
		case 'services':
$required = array("name","company","email","message","captcha");
		break;
		default;

	}
foreach ($required as $rq) { if (bg_param($rq) == null){ array_push($missing, $rq);}}
if (sizeof($missing)){
        echo json_encode(
                array(
                        'status'   => 'error',
                        'code'     => '10001',
                        'msg'      => 'Missing or empty parameters.',
                        'required' => $missing
        ));
        exit;
}
if (!preg_match($EMAIL_REGEX, bg_param('email'))){
        echo json_encode(array(
                'status' => 'error',
                'code'   => '10002',
                'msg'    => 'Invalid email format.'
        ));
        exit;
}

if (bg_param('website')){
if (!preg_match($WEBSITE_REGEX , bg_param('website'))){
        /*
                TODO: maybe use curl to check the website is real?
        */
        echo json_encode(array(
                'status' => 'error',
                'code'   => '10003',
                'msg'    => 'Invalid website url.'
        ));
        exit;
}
}

if( !gcaptcha(bg_param('captcha')) ){
        echo json_encode(array(
                'status' => 'error',
                'code'   => '10004',
                'msg'    => 'Captcha Error'
        ));
        exit;
}

//Detrmining the type of message and pass the data to sending function
switch($type)
{
case 'contact':
case 'charity':
default :
send_email_request(array(
    'Name'=> 	bg_param('name'),
    'Job Title'=> bg_param('jobTitle'),
    'Phone'=> 	bg_param('phone'),
    'Email'=>	bg_param('email'),
    'Company'=>	bg_param('company'),
    'Website'=>	bg_param('website'),
    'Service'=>	bg_param('service'),
    'Message'=>	bg_param('message')),$type
);
break;
case 'paymob':
send_email_request(array(
    'Name'=>    bg_param('name'),
    'phone'=>    bg_param('phone'),
    'Email'=>   bg_param('email'),
    'Company'=>     bg_param('company'),
    'jobTitle'=> bg_param('jobTitle'),
    'Emails'=> bg_param('Emails')),$type
);
break;
case 'services':
send_email_request(array(
    'Name'=> 	bg_param('name'),
    'Email'=>	bg_param('email'),
    'Company'=>	bg_param('company'),
    'Message'=>	bg_param('message')),$type
);
break;
}
?>