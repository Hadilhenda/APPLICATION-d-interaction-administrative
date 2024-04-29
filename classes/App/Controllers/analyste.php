<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class analyste{
	private $analystesTable;
	private $utilisateursTable;
	private $authentication;
	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $analystesTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication
		){

		$this->analystesTable = $analystesTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$analyste = $this->analystesTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: analyste';
		return ['template' => 'back/editanalyste.html.php',
				'title' => $title,
				'variables' => [
					'analyste' => $analyste ?? null,
					'user' => $user
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$analyste = $_POST['analyste'];
		$this->analystesTable->save($analyste);
		header('location: /analyste/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$analystes = $this->analystesTable->findAll();
		$user = $this->authentication->getUser();
				$utilisateurs = $this->utilisateursTable->findAll();

		$title = 'Liste :: analystes';
		return ['template' => 'back/analyste.html.php',
				'title' => $title,
				'variables' => [
					'analystes' => $analystes,
					'user' => $user,
					'utilisateurs' => $utilisateurs
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->analystesTable->delete($_GET['id']);
		header('location: /analyste/list');
	}

}