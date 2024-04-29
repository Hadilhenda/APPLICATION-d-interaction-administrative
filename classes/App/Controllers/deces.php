<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class deces{
	private $decessTable;
	private $utilisateursTable;
	private $authentication;
	private $citoyensTable;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $decessTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
							\AIFrame\DatabaseTable $citoyensTable
		){
		
		$this->decessTable = $decessTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
		$this->citoyensTable = $citoyensTable;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$deces = $this->decessTable->findById($_GET['id']);
		}
		$citoyens = $this->citoyensTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: deces';
		return ['template' => 'back/editdeces.html.php',
				'title' => $title,
				'variables' => [
					'deces' => $deces ?? null,
					'user' => $user,
					'citoyens' => $citoyens
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$deces = $_POST['deces'];
		$this->decessTable->save($deces);
		header('location: /deces/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$decess = $this->decessTable->findAll();
		$user = $this->authentication->getUser();
        $citoyens = $this->citoyensTable->findAll();
		$title = 'Liste :: decess';
		return ['template' => 'back/deces.html.php',
				'title' => $title,
				'variables' => [
					'decess' => $decess,
					'user' => $user,
					'citoyens' => $citoyens
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->decessTable->delete($_GET['id']);
		header('location: /deces/list');
	}

}