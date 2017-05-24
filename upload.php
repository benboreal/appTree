<?php

    $bdd = new pdo('mysql:host=localhost;dbname=treedatabase;charset=utf8', 'root', 'root');
    //$reponse = $bdd->query('SELECT * from users');
    //$données =$reponse->fetch(); 
    
	$picture = "images/".$_FILES['icone']['name'];
	$resultat = move_uploaded_file($_FILES['icone']['tmp_name'],$picture);	
	$baseUrl = "http://localhost/appTree/".$picture;
	$prenom =  $_POST['firstName'];
	$nom = $_POST['lastName'];
	$age = $_POST['age'];
	$o = array('url' => $baseUrl, 'prenom' => $prenom, 'nom' => $nom, 'age' => $age);
	json_encode($o);
	$add = ("INSERT INTO users(firstname, lastname, age, picture)
		VALUES('$prenom', '$nom', '$age', '$baseUrl')");
	$bdd->exec($add);	
	?>
	<p><?php var_dump($o); ?></p>		
<!--<p><?php// var_dump($o)?></p>
<p><?php// echo $_POST['lastName'];?></p>
<p><?php// echo $_POST['age'];?></p>
<img src="<?php// echo $baseUrl ?>">-->