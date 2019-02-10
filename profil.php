<!DOCTYPE html>
<html lang="bg">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width-device-width, initial-scale-1.0">
	<meta http-equiv="X-UA-Compatible" content="le=edge">
<title>X-BOOKS ПРОФИЛ</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Orbitron|Ubuntu&effect=neon" rel="stylesheet">
	<link rel="stylesheet" href="assets/styles/css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="assets/scripts/script.js"></script>
</head>
<body>
<!-- Header -->
<header>
<!-- Logo -->
<div class="logo">
	<a href="index.php"><img src="assets/images/x-books.png" alt="logo"></a>
</div>
<a id="aNG" href="index.php"><b>New Generation</b></a>
<a id="aMC" href="index.php"><b>Online Games</b></a>
<!-- /Logo -->
<!-- Nav1 -->
<div class="nav">
<nav>
	<ul class="big-res">
		<li>
			<a href="index.php">Начало</a>
		</li>
		<li>
			<a href="igri.php">Игри</a>
		</li>
		<li>
			<a href="info.php">Инфо</a>
		</li>
		<li>
			<a href="za-nas.php">За нас</a>
		</li>
		<li>
			<a href="kontakti.php">Контакти</a>
		</li>
	</ul>
	<ul class="sm-res">
		<li>
			<a id="menu1" href="javascript:"><i class="fas fa-bars" title="За Игри"></i></a>
			<ul id="sub1" class="submenu">
				<li>
					<a href="index.php"><i class="fas fa-home" title="Начало"></i></a>
				</li>
				<li>
					<a href="igri.php"><i class="fas fa-laptop" title="Игри"></i></a>
				</li>
				<li>
					<a href="info.php"><i class="fas fa-info" title="Инфо"></i></a>
				</li>
				<li>
					<a href="za-nas.php"><i class="fas fa-book" title="За нас"></i></a>
				</li>
				<li>
					<a href="kontakti.php"><i class="fas fa-map-signs" title="Контакти"></i></a>
				</li>
			</ul>
		</li>
	</ul>
</nav>
</div>
<!-- /Nav1 -->
<!-- Nav2 -->
<div class="nav2">
<nav>
	<ul class="big-res">
		<li>
			<a href="login.php">Вход/Регистрация</a>
		</li>
		<li>
			<a href="profil.php">Профил</a>
		</li>
		<li>
			<a href="rezultati.php">Резултати</a>
		</li>
		<li>
			<a href="liubimi.php">Любими</a>
		</li>
	</ul>
	<ul class="sm-res">
		<li>
			<a id="menu2" href="javascript:"><i class="far fa-address-card" title="За Играчи"></i></a>
			<ul id="sub2" class="submenu">
				<li>
					<a href="login.php"><i class="fas fa-sign-in-alt" title="Вход/Регистрация"></i></a>
				</li>
				<li>
					<a href="profil.php"><i class="fas fa-user-alt" title="Профил"></i></a>
				</li>
				<li>
					<a href="rezultati.php"><i class="fas fa-star" title="Резултати"></i></a>
				</li>
				<li>
					<a href="liubimi.php"><i class="fas fa-heart" title="Любими"></i></a>
				</li>
			</ul>
		</li>
	</ul>
</nav>
</div>
<!-- /Nav2 -->
<!-- Nav3 -->
<div class="nav3">
<nav>
	<ul>
		<li class="yup">
			<button id="lang" type="button" title="Език / Language"><span>EN</span></button>
		</li>
		<li>
			<a href="javascript:"><i class="fas fa-search"></i></a>
		</li>
		<li class="yup">
			<form>
				<input type="text" id="search" size="9" placeholder="Търсене">
			</form>
		</li>
	</ul>
</nav>
</div>
<!-- /Nav3 -->
</header>
<!-- /Header -->
<h1>ПРОФИЛ</h1>
<!-- Section1 -->
<section>
	<div class="up">
		<h2>ТОВА Е ВАШИЯТ ПРОФИЛ</h2>
	</div>
</section>
<!-- /Section1 -->
<br>
<!-- Footer -->
<footer>
<!-- Nav1 -->
<nav class="nav">
	<ul>
		<li>
			<a href="index.php">Начало</a>			
		</li>
		<li>
			<a href="igri.php">Игри</a>
		</li>
		<li>
			<a href="info.php">Инфо</a>
		</li>
		<li>
			<a href="za-nas.php">За нас</a>
		</li>
		<li>
			<a href="kontakti.php">Контакти</a>
		</li>
	</ul>
</nav>
<!-- /Nav1 -->
<!-- Nav2 -->
<nav class="nav2">
	<ul>
		<li>
			<a href="login.php">Вход/Регистрация</a>
		</li>
		<li>
			<a href="profil.php">Профил</a>
		</li>
		<li>
			<a href="rezultati.php">Резултати</a>
		</li>
		<li>
			<a href="liubimi.php">Любими</a>
		</li>
	</ul>
</nav>
<!-- /Nav2 -->
<br>
<div class="copyright">
	<p>Veselin Yolov &copy <?php echo date("Y"); ?></p>
</div>
</footer>
<!-- /Footer -->
</body>
</html>