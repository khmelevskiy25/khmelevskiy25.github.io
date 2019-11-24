<?php
require_once 'connect.php';
require_once 'handler.php';

function clear()
{
    global $db;
    foreach($_POST as $key => $value)
    {
        $_POST[$key] = mysqli_real_escape_string($db, $value);
    }
}

function save_mess()
{
    global $db;
    clear();
    extract($_POST);
    $query = "INSERT INTO `comment_user` (name, text, email) VALUES ('$name', '$text','$email')";
    mysqli_query($db,$query);
}

function get_mess()
{
    global $db;
    $query = "SELECT * FROM `comment_user` ORDER BY `id` DESC";
    $res = mysqli_query($db, $query);
    return mysqli_fetch_all($res, MYSQLI_ASSOC);
}

function getCountComments()
{
    global $db;
    $query = "SELECT * FROM `comment_user`;";
    $res = mysqli_query($db, $query);
    if(!$res)
    {
        exit(mysql_error());
    }
    
    return mysqli_num_rows($res);
}

