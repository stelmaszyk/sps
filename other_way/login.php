<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>LOGOWANIE - POZAvia</title>
  </head>
  <body>
    <?php
    session_start();
    mysqli_connect("localhost", "admin", "1a7fcdd5a9fd433523268883cfded9d0")
    mysqli_select_db("users");
     ?>
     <form method="POST" action="login.php">
      <b>Login:</b> <input type="text" name="login"><br>
      <b>Hasło:</b> <input type="password" name="pwd"><br>
      <input type="submit" value="Zaloguj się" name="website_login">
      </form>
    <?php
      if (isset($_POST['website_login']))
      {
        $login = $_POST['login'];
        $pwd = $_POST['pwd'];

        if (mysqli_num_rows(mysqli_query("SELECT login, pwd FROM users WHERE login = '".$login."' AND pwd = '".md5($pwd)."';")) > 0)
        {
          $_SESION['zalogowany'] = true;
          $_SESSION['login'] = $login;

          echo "Logowanie poprawne"
        }
        echo <<<INFO
        Nie udalo sie zalogowac, ponieważ wprowadzono bledne haslo. <br>
        Sprobuj ponownie, albo się <a href="register.php">zarejestruj</a>.
INFO
      }
     ?>
  </body>
</html>
