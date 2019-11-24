<?php require_once "head.php" ?>
<?php if( isset($_SESSION['logged_user']) ) :?>
    <h2 class="title_success">Авторизован</h2>
    <p>Привет, <?php echo $_SESSION['logged_user']->name; ?></p>
    <a href="logout.php">Выйти</a>
<?php else : ?>
    <div class="container mt-4">
        <div class="row">
        <a href="/signup.php" class="btn btn-success">Зарегистрировать</a>
        <a href="/login.php" class="btn btn-success ml-4">Вход</a>
        </div>
    </div>
<?php endif; ?>
<?php echo '<script>alert("ок")</script>' ?>
<?php require_once "footer.php" ?>