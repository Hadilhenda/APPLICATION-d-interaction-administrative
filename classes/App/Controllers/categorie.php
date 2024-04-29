<?php
namespace App\Controllers;

use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class categorie{
	private $categoriesTable;
	private $utilisateursTable;
	private $authentication;

//---------Constructeur---------------//
	public function __construct(
							\AIFrame\DatabaseTable $categoriesTable,
							\AIFrame\DatabaseTable $utilisateursTable,
							\AIFrame\Authentication $authentication
		){
		
		$this->categoriesTable = $categoriesTable;
		$this->utilisateursTable = $utilisateursTable;
		$this->authentication = $authentication;
	}

//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$categorie = $this->categoriesTable->findById($_GET['id']);
		}
		
		$user = $this->authentication->getUser();
		$title = 'Traitement :: categorie';
		return ['template' => 'back/editcategorie.html.php',
				'title' => $title,
				'variables' => [
					'categorie' => $categorie ?? null,
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
        
		$categorie = $_POST['categorie'];
		$categorie['image']=$final_file;
		$this->categoriesTable->save($categorie);
		header('location: /categorie/list');
	}

//--------Affichage de données---------//

	public function list(){
		
		$categories = $this->categoriesTable->findAll();
		$user = $this->authentication->getUser();

		$title = 'Liste :: categories';
		return ['template' => 'back/categorie.html.php',
				'title' => $title,
				'variables' => [
					'categories' => $categories,
					'user' => $user
					]
				];
	}

//--------Suppression de données---------//

	public function delete(){
		
		$this->categoriesTable->delete($_GET['id']);
		header('location: /categorie/list');
	}

}