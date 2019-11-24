<?php require "db.php"?>
<?php
    $data =$_POST;
    if( isset($data['do_signup']) )
    {
        $errors = array();
        if( trim($data['login']) == '' )
        {
            $errors[] = 'Введите логин!';
        }
        if( trim($data['email']) == '' )
        {
            $errors[] = 'Введите email!';
        }
        if( trim($data['name']) == '' )
        {
            $errors[] = 'Введите ваше имя!';
        }
        if( ($data['password']) == '' )
        {
            $errors[] = 'Введите пароль!';
        }
        if( ($data['password_2']) != $data['password'] )
        {
            $errors[] = 'Пароль не совпадают';
        }
        if( R::count('user', "login = ?", array($data['login'])) 
        > 0 )
        {
            $errors[] = 'Пользователь с таким логином уже существует';
        }
        if( R::count('user', "email = ?", array($data['email'])) 
        > 0 )
        {
            $errors[] = 'Пользователь с такой email уже существует';
        }
        if( empty($errors) )
        {
            $user = R::dispense('user');
            $user->login = $data['login'];
            $user->email = $data['email'];
            $user->name = $data['name'];
            $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
            $user->date_of_registration = date('Y-m-d');
            R::store($user);
            header('Location: http://registration/');
            echo '<script>alert("Вы успешно зарегистрированы")</script>';  
            
        }
        else
        {
            echo '<div style="color: red;">'. array_shift($errors) .'</div><hr/>';
        }
    }
    ?>
    <script async>
    
    </script>