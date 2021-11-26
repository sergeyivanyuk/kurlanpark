<?php
if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) ) {
	$name = $_POST['name'];
	$tel = $_POST['phone'];
	$email = $_POST['email'];
	if(mail('info@kurlanpark.ru',
			'Заявка на звонок',
			'Имя:'.$name."\n".
			'Телефон:'.$tel."\n".
			'E-mail:'.$email
			)
		) {
		echo('Успешно отправлено');
		header("Location: https://kurlanpark.ru");
	}	else {
		echo('Что-то пошло не так');
		header("Location: https://kurlanpark.ru");
	}
}
?>