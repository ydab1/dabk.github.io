<?php
$recepient = "andruha_dv_ydab@mail.ru";
$sitename = "Название сайта";
$name = trim($S_POST["name"]);
$phone = trim($S_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
