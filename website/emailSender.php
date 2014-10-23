<?php

header("Content-Type: text/html;charset=utf-8");


$email = $_POST['email'];
$name = $email['name'];
$userEmail = $email['userEmail'];
$body = $email['body'];
var_dump($userEmail);

//Envio de email
	$destinatario = "odiseo.team@gmail.com";
	$cuerpo = $body;

	//Envío en formato HTML
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	//Dirección del remitente
	$headers .= "From: ". $name . " <".$userEmail.">\r\n";

	mail($destinatario, "CONSULTA WEB", $cuerpo, $headers);
