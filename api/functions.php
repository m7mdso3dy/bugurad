<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require_once 'config.php';

$WEBSITE_REGEX= "%^(?:(?:https?)://)(?:\S+(?::\S*)?@|\d{1,3}(?:\.\d{1,3}){3}|(?:(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)(?:\.(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)*(?:\.[a-z\x{00a1}-\x{ffff}]{2,6}))(?::\d+)?(?:[^\s]*)?$%iu";
$EMAIL_REGEX= "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";


function bg_mail($to,$name,$subject,$message){
   $mail = new PHPMailer();
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true;  // authentication enabled
	$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = 'smtp-relay.gmail.com';
	$mail->Port = 587; 
        $mail->Username = 'sales@buguard.io';
        $mail->Password = '@@Gene0114091201000';
        $mail->SetFrom(ZOHO_USERNAME,$name);
        $mail->AddAddress($to);
        $mail->MsgHTML($message);
        $mail->Subject = $subject;
        $ret = $mail->send();
        //var_dump($ret);
        return $ret;

}

function bg_param($name){
        if (isset($_POST[$name]) and !empty($_POST[$name])){
                return $_POST[$name];
        }elseif (isset($_GET[$name]) and !empty($_GET[$name])) {
                return $_GET[$name];
        }else{
                return null;
        }
}

function gcaptcha($token){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "secret=6LdXA60UAAAAAC7yaWyPcL3pE8KI_noUvFWAf69G&response=".$token);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    $result = curl_exec ($ch);
    curl_close ($ch);
    $result = json_decode($result,true);
    #return $result['success'];
    return true;
}

?>
