CREATE TABLE IF NOT EXISTS 'users' (
  'id' int(100) NOT NULL AUTO_INCREMENT,
  'login' varchar(255) NOT NULL,
  'pwd' varchar(255) NOT NULL,
  'email' varchar(255) NOT NULL,
  'register_date' int(10) NOT NULL,
  PRIMARY KEY ('id')

)

INSERT INTO `users` (`id`, `login`, `haslo`, `email`)
   VALUES (1, 'admin', 'haselko13', 'admin@x.x', 11.11.1111);
