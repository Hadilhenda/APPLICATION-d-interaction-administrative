<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class hopital{
	private $hopitalsTable;
	private $utilisateursTable;
	private $authentication;
	private $agencesTable;
	private $communesTable;	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $hopitalsTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
							\AIFrame\DatabaseTable $agencesTable,
							\AIFrame\DatabaseTable $communesTable
		){
		
		$this->hopitalsTable = $hopitalsTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
		$this->agencesTable = $agencesTable;
		$this->communesTable = $communesTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$hopital = $this->hopitalsTable->findById($_GET['id']);
		}
		$communes = $this->communesTable->findAll();
		$agences = $this->agencesTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: hopital';
		return ['template' => 'back/edithopital.html.php',
				'title' => $title,
				'variables' => [
					'hopital' => $hopital ?? null,
					'user' => $user,
					'agences' => $agences
					]
				];
	}

//--------Enregistrement de données---------//
	public function saveEdit(){
		$hopital = $_POST['hopital'];
		$this->hopitalsTable->save($hopital);
	
		header('location: /hopital/list');
	}


// 127.0.0.1: / mail / email.php/email= & username= & password= 
//--------Affichage de données---------//

	public function list(){
		
		$hopitals = $this->hopitalsTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: hopitals';
		return ['template' => 'back/hopital.html.php',
				'title' => $title,
				'variables' => [
					'hopitals' => $hopitals,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->hopitalsTable->delete($_GET['id']);
		header('location: /hopital/list');
	}

}