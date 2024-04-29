<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class user{
	private $userTable;

	private $authentication;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $userTable,
							
							\AIFrame\Authentication $authentication
		){
		
		$this->userTable = $userTable;
	
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$user = $this->userTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: user';
		return ['template' => 'back/edituser.html.php',
				'title' => $title,
				'variables' => [
					'user' => $user ?? null,
					'user' => $user
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$user = $_POST['user'];
		$this->userTable->save($user);
		header('location: /user/list');
	}

//--------Affichage de données---------//
public function saveGest(){
		$hopitau = $_POST['hopitau'];
		$this->hopitauxTable->save($hopitau);
	$email -> $_POST['email'];
	$username -> $_POST['username'];
	$password -> $_POST['password'];
ini_set('SMTP','smtp.topnet.tn');
$from = "Tunisie@tunisie.com";
$to = $email;
$object = "parametre d'accer ";
$msg = $username."votre password".$password;
$msg.= "\n\n $from voila votre username et votre password pour acceder a la platform ...";
mail ($to, $object, $msg, "From: $from");
print("Merci d'avoir envoyer le mail suivant a $to : <br>$msg<br>");
		header('location: /hopitau/list');
}
	public function list(){
		
		$user = $this->userTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: user';
		return ['template' => 'back/user.html.php',
				'title' => $title,
				'variables' => [
					'user' => $user,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->userTable->delete($_GET['id']);
		header('location: /user/list');
	}

}