<?php include 'header.php'; ?>
<?php require_once 'connect.php'; ?>
<?php require_once 'function.php'; ?>
<?php require_once 'handler.php'; ?>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                Project
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item">
                        <a class="nav-link" href="login.php">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="register.php">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header"><h3>Комментарии</h3></div>
                         <div class="card-body">
                            <?php if(!empty($messages)): ?>
                            <?php foreach($messages as $message) : ?>
                            <div class="media">
                                <img src="img/no-user.jpg" class="mr-3" alt="..." width="64" height="64">
                                <div class="media-body">
                                    <h5 class="mt-0"><?=nl2br(htmlspecialchars( $message['name'] ))?></h5>
                                    <span><?=nl2br(htmlspecialchars($message['email']))?></span><br />
                                    <span><small><?=nl2br(htmlspecialchars($message['date']))?></small></span>
                                    <p>
                                    <?=nl2br(htmlspecialchars($message['text']))?>
                                    </p>
                                </div>
                            </div>
                            <?php endforeach ?>
                        <?php endif ?>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" style="margin-top: 20px;">
                    <div class="card">
                        <div class="card-header"><h3>Оставить комментарий</h3></div>

                        <div class="card-body">
                            <form action="handler.php" method="post">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Имя</label>
                                    <input required name="name" class="form-control" id="exampleFormControlTextarea1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">email</label>
                                    <input required name="email" class="form-control" id="exampleFormControlTextarea1" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Сообщение</label>
                                    <textarea required name="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button  onclick="showMessage();" type="submit" class="btn btn-success">Отправить</button>
                                <div id="show" class="alert alert-success hide" role="alert">Комментарий успешно добавлен</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
<?php include 'footer.php'; ?>
