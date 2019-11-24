<?php require_once "head.php" ?>
<div class="container">
<div class="col">
    <h1>Регистрация</h1>
        <form action="/check.php" method="post" style="max-width: 500px">
            <input type="text" value="<?php echo @$data['login']?>" class="form-control mb-2" name="login" id="login" placeholder="Логин">
            <input type="text" value="<?php echo @$data['email']?>" name="email" class="form-control mb-2" id="email" placeholder="Ваш email">
            <input type="text" value="<?php echo @$data['name']?>" name="name" class="form-control mb-2" id="name" placeholder="Ваш Имя">
            <input type="password" value="<?php echo @$data['password']?>" name="password" class="form-control mb-2" id="pass" placeholder="Пяроль">
            <input type="password" value="<?php echo @$data['password_2']?>" name="password_2" class="form-control mb-2" id="pass" placeholder="Введите пароль еще раз">
            <button class="btn btn-success mb-2" type="submit" name="do_signup">Зарегистрировать</button>
        </form>
    </div>
</div>
<?php require_once "footer.php" ?>