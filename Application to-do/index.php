<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>ToDo list</title>
</head>
<body>
<div class="container">
    <h1>To-do list</h1>
    <form action="/add.php" method="post" class="d-flex justify-content-between">
        <input type="text" name="task" id="task" placeholder="Need to do" class="form-control">
        <button type="submit" name="sendTask" class="btn btn-success">Send</button>
    </form>
    <?php
    require 'db.php';
    echo '<ul>';
    $query = $pdo->query('SELECT * FROM `tasks` ORDER BY `id` DESC');
    while($row = $query->fetch(PDO::FETCH_OBJ)) {
        echo '<li class="d-flex justify-content-between"><b>'.$row->task.'</b><a href="/delete.php?id='.$row->id.'"><button>delete</button></a></li>';
    }
    echo '</ul>';
    ?>
</div>
</body>
</html>
