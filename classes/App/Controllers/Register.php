<?php
namespace App\Controllers;
use \AIFrame\DatabaseTable;
use \AIFrame\Authentication;

class Register {
	private $usersTable;	
	private $authentication;


	public function __construct(\AIFrame\DatabaseTable $usersTable, \AIFrame\Authentication $authentication, \AIFrame\DatabaseTable $citoyensTable) {
		$this->usersTable = $usersTable;
		$this->authentication = $authentication;
		$this->citoyensTable = $citoyensTable;
	}
	public function home() {
		$citoyens = $this->citoyensTable->findAll();
		$count = $this->citoyensTable->total();
		$deces = $this->citoyensTable->total('etat', '4');
		$nnvalide = $this->citoyensTable->total('etat', '1');
		$jan = $this->citoyensTable->total('date_naissance', '%-01-%');
		$fev = $this->citoyensTable->total('date_naissance', '%-02-%');
		$mars = $this->citoyensTable->total('date_naissance', '%-03-%');
		$avr = $this->citoyensTable->total('date_naissance', '%-04-%');
		$mai = $this->citoyensTable->total('date_naissance', '%-05-%');
		$juin = $this->citoyensTable->total('date_naissance', '%-06-%');
		$juil = $this->citoyensTable->total('date_naissance', '%-07-%');
		$aout = $this->citoyensTable->total('date_naissance', '%-08-%');
		$sep = $this->citoyensTable->total('date_naissance', '%-09-%');
		$oct = $this->citoyensTable->total('date_naissance', '%-10-%');
		$nov = $this->citoyensTable->total('date_naissance', '%-11-%');
		$dec = $this->citoyensTable->total('date_naissance', '%-12-%');	
		$nnvalide = $this->citoyensTable->total('etat', '1');
		$Covid = $this->citoyensTable->total('cause_mort', '%covid%');
		$jan_dc = $this->citoyensTable->total('date_mort', '%-01-%');
		$fev_dc = $this->citoyensTable->total('date_mort', '%-02-%');
		$mars_dc = $this->citoyensTable->total('date_mort', '%-03-%');
		$avr_dc = $this->citoyensTable->total('date_mort', '%-04-%');
		$mai_dc = $this->citoyensTable->total('date_mort', '%-05-%');
		$juin_dc = $this->citoyensTable->total('date_mort', '%-06-%');
		$juil_dc = $this->citoyensTable->total('date_mort', '%-07-%');
		$aout_dc = $this->citoyensTable->total('date_mort', '%-08-%');
		$sep_dc = $this->citoyensTable->total('date_mort', '%-09-%');
		$oct_dc = $this->citoyensTable->total('date_mort', '%-10-%');
		$nov_dc = $this->citoyensTable->total('date_mort', '%-11-%');
		$dec_dc = $this->citoyensTable->total('date_mort', '%-12-%');
  

		$jan_Covid = $this->citoyensTable->total('date_enterement', '%-01-%');
		$fev_Covid = $this->citoyensTable->total('date_enterement', '%-02-%');
		$mars_Covid = $this->citoyensTable->total('date_enterement', '%-03-%');
		$avr_Covid = $this->citoyensTable->total('date_enterement', '%-04-%');
		$mai_Covid = $this->citoyensTable->total('date_enterement', '%-05-%');
		$juin_Covid = $this->citoyensTable->total('date_enterement', '%-06-%');
		$juil_Covid = $this->citoyensTable->total('date_enterement', '%-07-%');
		$aout_Covid = $this->citoyensTable->total('date_enterement', '%-08-%');
		$sep_Covid = $this->citoyensTable->total('date_enterement', '%-09-%');
		$oct_Covid = $this->citoyensTable->total('date_enterement', '%-10-%');
		$nov_Covid = $this->citoyensTable->total('date_enterement', '%-11-%');
		$dec_Covid = $this->citoyensTable->total('date_enterement', '%-12-%');	
		$title = 'Bienvenue dans notre monde';
		return ['template' => 'board.html.php', 
		'title' => $title,'variables' => [
				'citoyens' => $citoyens,
				'Covid' => $Covid,
				'count' => $count,
				'deces' => $deces,
					'nnvalide' => $nnvalide,
					'jan' => $jan,
					'fev' => $fev,
					'mars' => $mars,
					'avr' => $avr,
					'mai' => $mai,
					'juin' => $juin,
					'juil' => $juil,
					'aout' => $aout,
					'sep' => $sep,
					'oct' => $oct,
					'nov' => $nov,
					'dec' => $dec,
					'jan_dc' => $jan_dc,
					'fev_dc' => $fev_dc,
					'mars_dc' => $mars_dc,
					'avr_dc' => $avr_dc,
					'mai_dc' => $mai_dc,
					'juin_dc' => $juin_dc,
					'juil_dc' => $juil_dc,
					'aout_dc' => $aout_dc,
					'sep_dc' => $sep_dc,
					'oct_dc' => $oct_dc,
					'nov_dc' => $nov_dc,
					'dec_dc' => $dec_dc,
					'jan_Covid' => $jan_Covid,
					'fev_Covid' => $fev_Covid,
					'mars_Covid' => $mars_Covid,
					'avr_Covid' => $avr_Covid,
					'mai_Covid' => $mai_Covid,
					'juin_Covid' => $juin_Covid,
					'juil_Covid' => $juil_Covid,
					'aout_Covid' => $aout_Covid,
					'sep_Covid' => $sep_Covid,
					'oct_Covid' => $oct_Covid,
					'nov_Covid' => $nov_Covid,
					'dec_Covid' => $dec_Covid
					
		]];
	}

	public function getSession(){
		$this->usersTable->find('login', $_SESSION['username']);
		return ['template' => 'layout.html.php', 
				'title' => 'Register an account'];
	}

	public function registrationForm() {
		return ['template' => 'layout.html.php', 
				'title' => 'Register an account'];
	}




	public function registerUser() {
		$user = $_POST['user'];
		$user['email'] = strtolower($user['email']);
		if (count($this->usersTable->find('email', $user['email'])) > 0 && count($this->usersTable->find('login', $user['login'])) > 0) {
			return ['template' => 'layout.html.php', 
				    'title' => 'erreur_register',
				    'variables' => [
				    		'user' => $user
				    ]
				   ]; 
		}
		else {
			$user['password'] = password_hash($user['password'], PASSWORD_DEFAULT);
			$this->usersTable->save($user);

			
			session_start();
			session_regenerate_id();
			$_SESSION['username'] = $user['login'];
			$_SESSION['password'] = $user['password'] ;
			header('location: /');
		}
	}

	public function profil() {
		$users = $this->usersTable->findAll();
		$user = $this->authentication->getUser();

		return ['template' => 'back/profil.html.php',
				'title' => 'user List',
				'variables' => [
						'users' => $users,
						'user' => $user
					]
				];
	}

	//----------Formulaire de Traitement-----------//

	public function edit(){
		
		if (isset($_GET['id'])){
			$user = $this->usersTable->findById($_GET['id']);
		}
		$users = $this->usersTable->findAll();
		$user = $this->authentication->getUser();
		$title = 'Traitement :: user';
		return ['template' => 'back/edituser.html.php',
				'title' => $title,
				'variables' => [
					'user' => $user ?? null,
					'user' => $user,
					'users' => $users
					]
				];
	}

//--------Enregistrement de données---------//

	public function saveEdit(){
		
		$user = $_POST['user'];
		$this->usersTable->save($user);
		header('location: /user/list');
	}
	public function list() {
		$users = $this->usersTable->findAll();

		return ['template' => 'back/user.html.php',
				'title' => 'user List',
				'variables' => [
						'users' => $users
					]
				];
	}

	//--------Suppression de données---------//

	public function delete(){
		
		$this->usersTable->delete($_GET['id']);
		header('location: /user/list');
	}

	// public function permissions() {

		// $user = $this->usersTable->findById($_GET['id']);

		// $reflected = new \ReflectionClass('\Ijdb\Entity\user');
		// $constants = $reflected->getConstants();

		// return ['template' => 'permissions.html.php',
				// 'title' => 'Edit Permissions',
				// 'variables' => [
						// 'user' => $user,
						// 'permissions' => $constants
					// ]
				// ];	
	// }

	// public function savePermissions() {
		// $user = [
			// 'id' => $_GET['id'],
			// 'permissions' => array_sum($_POST['permissions'] ?? [])
		// ];

		// $this->usersTable->save($user);

		// header('location: /user/list');
	// }
}