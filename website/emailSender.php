<?php

header("Content-Type: text/html;charset=utf-8");


$email = $_POST['email'];
$subject = $email['subject'];
$userEmail = $email['userEmail'];
$body = $email['body'];
var_dump($userEmail);

//Envio de email
	$destinatario = "odiseo.team@gmail.com";
	$asunto = $subject;
	$cuerpo = $body;

	//Envío en formato HTML
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	//Dirección del remitente
	$headers .= "From: web odiseo\n";

	mail($destinatario, $asunto, $cuerpo, $headers);
