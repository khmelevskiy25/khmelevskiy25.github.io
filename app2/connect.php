<?php
const COUNT_COMMENTS = 5;
$db = @mysqli_connect('127.0.0.1', 'root', '', 'app2') or die('<script>console.log("Ошибка соединения с базой данных")</script>');
mysqli_set_charset($db, "utf8") or die('<script>console.log("Не установлена кодировка)</script>');