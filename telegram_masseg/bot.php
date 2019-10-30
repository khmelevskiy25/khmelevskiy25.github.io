<?php
error_reporting(1);
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$token = '633372931:AAH5OhtVloAgiW234Zlc-Frc_VCQ5WitSXk';
$chat_id = '663238953';
$arr = array(
    'Name: ' => $name,
    'email: ' => $email,
    'phone: ' => $phone,
);

foreach($arr as $key => $value)
{
    $txt .= "<b>".$key."</b>".$value."%0A"; 
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
&parse_mode=html&text={$txt}", "r");

if($sendToTelegram)
{
    header('Location: /');
}else
{
    echo 'Error';
}



