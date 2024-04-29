<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class commune{
	private $communesTable;
	private $utilisateursTable;
	private $authentication;
	private $delegationsTable;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $communesTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
							\AIFrame\DatabaseTable $delegationsTable
		){
		
		$this->communesTable = $communesTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
		$this->delegationsTable = $delegationsTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$commune = $this->communesTable->findById($_GET['id']);
		}
		$delegations = $this->delegationsTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: commune';
		return ['template' => 'back/editcommune.html.php',
				'title' => $title,
				'variables' => [
					'commune' => $commune ?? null,
					'user' => $user,
					'delegations' => $delegations
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$commune = $_POST['commune'];
		$this->communesTable->save($commune);
		header('location: /commune/list');
	}

//--------Affichage de données---------//

	public function list(){
		$delegations = $this->delegationsTable->findAll();
		$communes = $this->communesTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: communes';
		return ['template' => 'back/commune.html.php',
				'title' => $title,
				'variables' => [
					'communes' => $communes,
					'delegations' => $delegations,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->communesTable->delete($_GET['id']);
		header('location: /commune/list');
	}

}