<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class delegation{
	private $delegationsTable;
	private $utilisateursTable;
	private $authentication;
	private $gouvernoratsTable;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $delegationsTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication,
								\AIFrame\DatabaseTable $gouvernoratsTable
		){
		
		$this->delegationsTable = $delegationsTable;
			$this->gouvernoratsTable = $gouvernoratsTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$delegation = $this->delegationsTable->findById($_GET['id']);
		}
		$gouvernorats = $this->gouvernoratsTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: delegation';
		return ['template' => 'back/editdelegation.html.php',
				'title' => $title,
				'variables' => [
					'delegation' => $delegation ?? null,
					'gouvernorats' =>$gouvernorats,
					'user' => $user
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
			$dossier="images/";
	 $file=rand(1000,100000)."-".basename($_FILES["fileToUpload"]["name"]);     
		$new_file_name=strtolower($file);
		$final_file = str_replace('','-',$new_file_name);
		$target_file=$dossier.$final_file;
		$file_loc=$_FILES['fileToUpload']['tmp_name'];
		move_uploaded_file($file_loc,$target_file);
		
		$delegation = $_POST['delegation'];
		$delegation['image']=$final_file;
		$this->delegationsTable->save($delegation);
		header('location: /delegation/list');
	}

//--------Affichage de données---------//

	public function list(){
		$gouvernorats = $this->gouvernoratsTable->findAll();
		$delegations = $this->delegationsTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: delegations';
		return ['template' => 'back/delegation.html.php',
				'title' => $title,
				'variables' => [
					'delegations' => $delegations,
					'user' => $user,
					'gouvernorats' =>$gouvernorats
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->delegationsTable->delete($_GET['id']);
		header('location: /delegation/list');
	}

}