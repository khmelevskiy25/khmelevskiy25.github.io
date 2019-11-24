<?php require "head.php" ?>
<?php 
$data = $_POST;
if( isset($data['do_login']) )
{
    $errors = array();
    $user = R::findOne('user', 'login = ?', array($data['login']));
    if( $user )
    {
        if(password_verify( $data['password'],$user->password )) 
        {
            $_SESSION['logged_user'] = $user;
            echo '<div style="color: green;">Вы авторизованы<br /> Можете перейти на <a href="http://registration/"
            >Главную</a> страницу</div><hr/>';
        }else
        {
        $errors[] = 'Пароль введен неверно';
        }
    } else
    {
        $errors[] = 'Пользователь с таким логином не найден';
    }
    if( ! empty($errors) )
    {
        echo '<div style="color: red;">'. array_shift($errors) .'</div><hr/>';
    }
}