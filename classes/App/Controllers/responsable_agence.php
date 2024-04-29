<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class responsable_agence{
	private $responsable_agencesTable;
	private $utilisateursTable;
	private $authentication;
	private $communesTable;
	private $rolesUsersTable;
	private $pdo;
	private $agencesTable;
	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $responsable_agencesTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
							\AIFrame\DatabaseTable $communesTable, 		$pdo,
							\AIFrame\DatabaseTable $rolesUsersTable ,
								\AIFrame\DatabaseTable $agencesTable,
					
							
		){

		$this->responsable_agencesTable = $responsable_agencesTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
		$this->communesTable = $communesTable;
		$this->rolesUsersTable = $rolesUsersTable;
		$this->pdo = $pdo;
		$this->agencesTable = $agencesTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$responsable_agence = $this->responsable_agencesTable->findById($_GET['id']);
		}
		$agences = $this->agencesTable->findAll();
		$communes = $this->communesTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: responsable_agence';
		return ['template' => 'back/editresponsable_agence.html.php',
				'title' => $title,
				'variables' => [
					'responsable_agence' => $responsable_agence ?? null,
					'user' => $user,
					'communes' => $communes,
					'agences' => $agences
					]
				];
	}

//--------Enregistrement de données---------//
	public function saveModi(){
		
		$responsable_agence = $_POST['responsable_agence'];
		$this->responsable_agencesTable->save($responsable_agence);
		header('location: /responsable_agence/list');
	}

	public function saveEdit(){
		/// $_POST utilisateur 
			$utilisateur = $_POST['users'];
		
			$login = $utilisateur['login'];
			$password = $utilisateur['password'];
		$utilisateur['email'] = strtolower($utilisateur['email']);
		if (count($this->utilisateursTable->find('email', $utilisateur['email'])) > 0 && count($this->utilisateursTable->find('login', $utilisateur['login']))> 0) {
			return ['template' => 'back/editresponsable_agence.html.php', 
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
			$responsable = $_POST['responsable_agence'];
		 $responsable['id_user']=$this->pdo->lastInsertId();
	
		$this->responsable_agencesTable->save($responsable);

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


		header('location: /responsable_agence/list');
	}
	


	}

//--------Affichage de données---------//

	public function list(){
		
		$responsable_agences = $this->responsable_agencesTable->findAll();
		$user = $this->authentication->getUser();
		$communes = $this->communesTable->findAll();
		$agences = $this->agencesTable->findAll();
	$utilisateurs = $this->utilisateursTable->findAll();
		$title = 'Liste :: responsable_agences';
		return ['template' => 'back/responsable_agence.html.php',
				'title' => $title,
				'variables' => [
					'responsable_agences' => $responsable_agences,
					'user' => $user,
					'communes' => $communes,
					'agences' => $agences,
					'utilisateurs' => $utilisateurs
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->responsable_agencesTable->delete($_GET['id']);
		header('location: /responsable_agence/list');
	}


	public function modi(){
		
		if (isset($_GET['id'])){
			$responsable_agence = $this->responsable_agencesTable->findById($_GET['id']);
		}
		$communes = $this->communesTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: responsable_agence';
		return ['template' => 'back/modiresponsable_agence.html.php',
				'title' => $title,
				'variables' => [
					'responsable_agence' => $responsable_agence ?? null,
					'user' => $user
					]
				];
	}

	public function bloquer(){
		
		$responsable_agence ['id'] = $_GET['id'];
		$responsable_agence ['etat']= '0';
		$this->responsable_agencesTable->save($responsable_agence);
		header('location: /responsable_agence/list');
	}
	public function debloquer(){
		
		$responsable_agence ['id'] = $_GET['id'];
		$responsable_agence ['etat']= '1';
		$this->responsable_agencesTable->save($responsable_agence);
	header('location: /responsable_agence/list');
}
}

