<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class gouvernorat{
	private $gouvernoratsTable;
	private $utilisateursTable;
	private $authentication;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $gouvernoratsTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication
		){
		
		$this->gouvernoratsTable = $gouvernoratsTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$gouvernorat = $this->gouvernoratsTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: gouvernorat';
		return ['template' => 'back/editgouvernorat.html.php',
				'title' => $title,
				'variables' => [
					'gouvernorat' => $gouvernorat ?? null,
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
        
		$gouvernorat = $_POST['gouvernorat'];
		$gouvernorat['image']=$final_file;
		$this->gouvernoratsTable->save($gouvernorat);
		header('location: /gouvernorat/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$gouvernorats = $this->gouvernoratsTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: gouvernorats';
		return ['template' => 'back/gouvernorat.html.php',
				'title' => $title,
				'variables' => [
					'gouvernorats' => $gouvernorats,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->gouvernoratsTable->delete($_GET['id']);
		header('location: /gouvernorat/list');
	}

}