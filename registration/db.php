<?php

require "libs/rb.php";
R::setup( 'mysql:host=localhost;dbname=register-bd',
        'root', '' );

session_start();