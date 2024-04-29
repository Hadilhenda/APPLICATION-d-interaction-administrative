<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class citoyen{
	private $citoyensTable;
	private $utilisateursTable;
	private $authentication;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $citoyensTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication
		){
		
		$this->citoyensTable = $citoyensTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$citoyen = $this->citoyensTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: citoyen';
		return ['template' => 'back/editcitoyen.html.php',
				'title' => $title,
				'variables' => [
					'citoyen' => $citoyen ?? null,
					'user' => $user
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$citoyen = $_POST['citoyen'];
		$this->citoyensTable->save($citoyen);
		header('location: /citoyen/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$citoyens = $this->citoyensTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: citoyens';
		return ['template' => 'back/citoyen.html.php',
				'title' => $title,
				'variables' => [
					'citoyens' => $citoyens,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->citoyensTable->delete($_GET['id']);
		header('location: /citoyen/list');
	}

	public function statcovid(){
		
		$citoyens = $this->citoyensTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: citoyens';
		return ['template' => 'back/statcovid.html.php',
				'title' => $title,
				'variables' => [
					'citoyens' => $citoyens,
					'user' => $user
					]
				];
	}

}