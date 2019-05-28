<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>POZAvia - panel logowania</title>
  </head>
  <body>
    <form method="POST" action="register.php">
      <b>Login: </b> <input type="text" name="login" required>
      <b>Haslo: </b> <input type="password" name="pwd" pattern="(?=.*[A=Z])(?=.*[a-z])(?=.*\d).{8,}" required>
      <b>Powtorz Haslo:</b> <input type="password" name="pwd2" pattern="(?=.*[A=Z])(?=.*[a-z])(?=.*\d).{8,}" required>
      <b>Adres e-Mail: </b> <input type="text" name="email"><br>
      <input type="submit" name="register" value="Zarejestruj się.">
    </form>
    <?php
      mysqli_connect("localhost", "admin", "1a7fcdd5a9fd433523268883cfded9d0");  //haslo w md5, haslo123
      //przekonwertowane na md5 na gromweb.
      mysqli_select_db("users");

      if isset($_POST['register'])
      {
        $login = $_POST['login'];
        pwd = $_POST['pwd'];
        pwd2 = $_POST['pwd2'];
        email = $_POST['email'];

        //sprawdzenie, czy konto istnieje (po loginie)
        if (mysqli_num_rows(mysqli_query("SELECT login FROM users WHERE login = '".$login."';")) == 0)
        {
          if ($pwd1 == $pwd2) //sprawdzenie zgodności hasel
          {
            mysqli_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `email`, `rejestracja`, `logowanie`, `ip`)
            VALUES ('".$login."', '".md5($pwd1)."', '".$pwd1."', '".time()."');");

            echo "Utworzono konto używkownika.";
          } else echo "Wprowadzone hasla nie są identyczne!";
        }
        else
        {
          echo <<<INFORMACJA
          Wybrany login już istnieje. Wprowadź inny login <br>
          Jeśli posiadasz już konto, przejdź do <a href="login.php">STRONY LOGOWANIA</a>.
INFORMACJA;
        }
      }
    ?>
  </body>
</html>
