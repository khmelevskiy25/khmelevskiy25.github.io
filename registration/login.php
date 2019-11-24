<?php require_once "head.php" ?>
<div class="container">
<div class="col">
    <h1>Авторизация</h1>
    <form action="auth.php" method="post" style="max-width: 500px">
    <input type="text" value="<?php echo @$data['login']?>" class="form-control mb-2" name="login" id="login" placeholder="Логин">
    <input type="password" value="<?php echo @$data['password']?>" name="password" class="form-control mb-2" id="pass" placeholder="Пяроль">
    <button class="btn btn-success mb-2" type="submit" name="do_login">Войти</button>
    </form>
</div>
</div>