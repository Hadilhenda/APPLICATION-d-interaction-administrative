<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class agence{
	private $agencesTable;
	private $utilisateursTable;
	private $authentication;
 private $communesTable;
	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $agencesTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
       \AIFrame\DatabaseTable $communesTable
		){
		
		$this->agencesTable = $agencesTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
  $this->communesTable = $communesTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$agence = $this->agencesTable->findById($_GET['id']);

		}
		$communes = $this->communesTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: agence';
		return ['template' => 'back/editagence.html.php',
				'title' => $title,
				'variables' => [
					'agence' => $agence ?? null,
					'user' => $user,
     'communes' => $communes
					]
				];
	}

//--------Enregistrement de données---------//
	public function saveEdit(){
		$agence = $_POST['agence'];
		$this->agencesTable->save($agence);
	
		header('location: /agence/list');
	}


// 127.0.0.1: / mail / email.php/email= & username= & password= 
//--------Affichage de données---------//

	public function list(){
		
		$agences = $this->agencesTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: agences';
		return ['template' => 'back/agence.html.php',
				'title' => $title,
				'variables' => [
					'agences' => $agences,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->agencesTable->delete($_GET['id']);
		header('location: /agence/list');
	}

}