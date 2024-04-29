<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class gestionnaire_hopital{
	private $gestionnaire_hopitalsTable;
	private $utilisateursTable;
	private $authentication;
	private $hopitalsTable;
	private $pdo;
	private $rolesUsersTable;
	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $gestionnaire_hopitalsTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
							\AIFrame\DatabaseTable $hopitalsTable,
							 $pdo,
								\AIFrame\DatabaseTable $rolesUsersTable
		){

		$this->gestionnaire_hopitalsTable = $gestionnaire_hopitalsTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
		$this->hopitalsTable = $hopitalsTable;
		$this->pdo = $pdo;
		$this->rolesUsersTable = $rolesUsersTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$gestionnaire_hopital = $this->gestionnaire_hopitalsTable->findById($_GET['id']);
		}
		$hopitals = $this->hopitalsTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: gestionnaire_hopital';
		return ['template' => 'back/editgestionnaire_hopital.html.php',
				'title' => $title,
				'variables' => [
					'gestionnaire_hopital' => $gestionnaire_hopital ?? null,
					'user' => $user,
					'hopitals' => $hopitals
					]
				];
	}

//--------Enregistrement de données---------//
	public function saveEdit(){
		/// $_POST utilisateur 
			$utilisateur = $_POST['users'];
		
			$login = $utilisateur['login'];
			$password = $utilisateur['password'];
		$utilisateur['email'] = strtolower($utilisateur['email']);
		if (count($this->utilisateursTable->find('email', $utilisateur['email'])) > 0 && count($this->utilisateursTable->find('login', $utilisateur['login']))> 0) {
			return ['template' => 'back/editgestionnaire_hopital.html.php', 
				    'title' => 'erreur_register',
				    'variables' => [
				    		'utilisateur' => $utilisateur
				    ]
				   ]; 
		}
		else {
			$options = [
  'cost' => 8
];
			$utilisateur['password'] = password_hash($utilisateur['password'], PASSWORD_BCRYPT, $options);
			$this->utilisateursTable->save($utilisateur);
			$responsable = $_POST['gestionnaire_hopital'];
		 $responsable['id_user']=$this->pdo->lastInsertId();
	
		$this->gestionnaire_hopitalsTable->save($responsable);

		$roles['roleId']= 3;
		$roles['userId']=  $responsable['id_user'];
	$this->rolesUsersTable->save($roles);


	$email = $utilisateur['email'];

ini_set('SMTP','smtp.topnet.tn');
$from = "admin@admin.bladyati";
$to = $email;
$object = "parametre d`accer";
$msg = "Login : $login \n" ;
$msg .= "Password : $password \n" ;

mail ($to, $object, $msg, "From: $from");


		header('location: /gestionnaire_hopital/list');
	}
	


	}
//--------Affichage de données---------//

	public function list(){
		
		$gestionnaire_hopitals = $this->gestionnaire_hopitalsTable->findAll();
		$user = $this->authentication->getUser();
		$hopitals = $this->hopitalsTable->findAll();
			$utilisateurs = $this->utilisateursTable->findAll();

		$title = 'Liste :: gestionnaire_hopitals';
		return ['template' => 'back/gestionnaire_hopital.html.php',
				'title' => $title,
				'variables' => [
					'gestionnaire_hopitals' => $gestionnaire_hopitals,
					'user' => $user,
					'hopitals' => $hopitals,
					'utilisateurs' => $utilisateurs
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->gestionnaire_hopitalsTable->delete($_GET['id']);
		header('location: /gestionnaire_hopital/list');
	}

		public function bloquer(){
		
		$gestionnaire_hopital ['id'] = $_GET['id'];
		$gestionnaire_hopital ['etat']= '0';
		$this->gestionnaire_hopitalsTable->save($gestionnaire_hopital);
		header('location: /gestionnaire_hopital/list');
	}
	public function debloquer(){
		
		$gestionnaire_hopital ['id'] = $_GET['id'];
		$gestionnaire_hopital ['etat']= '1';
		$this->gestionnaire_hopitalsTable->save($gestionnaire_hopital);
	header('location: /gestionnaire_hopital/list');
}
	public function saveModi(){
		
		$gestionnaire_hopital = $_POST['gestionnaire_hopital'];
		$this->gestionnaire_hopitalsTable->save($gestionnaire_hopital);
		header('location: /gestionnaire_hopital/list');
	}
		public function modi(){
		
		if (isset($_GET['id'])){
			$gestionnaire_hopital = $this->gestionnaire_hopitalsTable->findById($_GET['id']);
		}
		$user = $this->authentication->getUser();
		$title = 'Traitement :: gestionnaire_hopital';
		return ['template' => 'back/modigestionnaire_hopital.html.php',
				'title' => $title,
				'variables' => [
					'gestionnaire_hopital' => $gestionnaire_hopital ?? null,
					'user' => $user,
					]
				];
	}

}