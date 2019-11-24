<?php
if(!empty($_POST))
{
    extract($_POST);
    clear();
    save_mess();
    header("Location: /"); 
    die(); 
}
$messages = get_mess();