<?php
// login.php

$users = [
    'admin' => '123456', // Username: admin, Password: 123456
    'user' => 'password' // Username: user, Password: password
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($users[$username]) && $users[$username] == $password) {
        header("Location: index.html");
        exit();
    } else {
        echo "Nome de usuário ou senha incorretos!";
    }
}
?>
