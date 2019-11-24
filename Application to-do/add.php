<?php
$task = $_POST['task'];
if($task == '') {
    echo 'enter task';
    exit();
}
    require 'db.php';

    $dsn = 'mysql:host=localhost;dbname=to-do';
    $pdo = new PDO($dsn, 'root', '');

    $sql = 'INSERT INTO tasks(task) VALUES(:task)';
    $query = $pdo->prepare($sql);
    $query->execute(['task' => $task]);

    header('Location: /');