<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class recommandation{
	private $recommandationsTable;
	private $utilisateursTable;
	private $authentication;
	

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $recommandationsTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication
		){

		$this->recommandationsTable = $recommandationsTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$recommandation = $this->recommandationsTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: recommandation';
		return ['template' => 'back/editrecommandation.html.php',
				'title' => $title,
				'variables' => [
					'recommandation' => $recommandation ?? null,
					'user' => $user
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$recommandation = $_POST['recommandation'];
		$this->recommandationsTable->save($recommandation);
		header('location: /recommandation/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$recommandations = $this->recommandationsTable->findAll();
		$user = $this->authentication->getUser();
		

		$title = 'Liste :: recommandations';
		return ['template' => 'back/recommandation.html.php',
				'title' => $title,
				'variables' => [
					'recommandations' => $recommandations,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->recommandationsTable->delete($_GET['id']);
		header('location: /recommandation/list');
	}


		public function valider(){
		$recommandation ['id'] = $_GET['id'];
		$recommandation ['etat']= '1';
		$this->recommandationsTable->save($recommandation);
	header('location: /recommandation/list');
	}

}