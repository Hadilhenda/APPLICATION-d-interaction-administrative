<?php
namespace App;

class mapRoutes implements \AIFrame\Routes {
	private $usersTable;
	private $authentication;
	#etape 1
	private $categoriesTable;	
	private $gouvernoratsTable;	
	private $analystesTable;	
	private $responsable_agencesTable;
	private $gestionnaire_hopitalsTable;
	private $citoyensTable;	
	private $hopitalsTable;
	private $communesTable;
	private $decessTable;	
	private $delegationsTable;
	private $recommandationsTable;
	private $rolesUsersTable;
		private $agencesTable;
	private $pdo;
	public function __construct() {
		include __DIR__ . '/../../includes/DatabaseConnection.php';
 	$this->pdo = $pdo;
		$this->usersTable = new \AIFrame\DatabaseTable($pdo, 'users', 'id');
		$this->authentication = new \AIFrame\Authentication($this->usersTable, 'login', 'password');
		
//////////////////////////////////////////////////////////Model instance  # etape 2 
		$this->agencesTable = new \AIFrame\DatabaseTable($pdo, 'agences', 'id');
		$this->categoriesTable = new \AIFrame\DatabaseTable($pdo, 'categories', 'id');
		$this->analystesTable = new \AIFrame\DatabaseTable($pdo, 'analystes', 'id');
	    $this->responsable_agencesTable = new \AIFrame\DatabaseTable($pdo, 'responsable_agences', 'id');
	    $this->gestionnaire_hopitalsTable = new \AIFrame\DatabaseTable($pdo, 'gestionnaire_hopitals', 'id');
		$this->citoyensTable = new \AIFrame\DatabaseTable($pdo, 'citoyens', 'id');
			$this->hopitalsTable = new \AIFrame\DatabaseTable($pdo, 'hopitals', 'id');
				$this->communesTable = new \AIFrame\DatabaseTable($pdo, 'communes', 'id');
		$this->decessTable = new \AIFrame\DatabaseTable($pdo, 'decess', 'id');
		$this->gouvernoratsTable = new \AIFrame\DatabaseTable($pdo, 'gouvernorats', 'id');
		$this->delegationsTable = new \AIFrame\DatabaseTable($pdo, 'delegations', 'id');
		$this->recommandationsTable = new \AIFrame\DatabaseTable($pdo, 'recommandations', 'id');
		$this->rolesUsersTable = new \AIFrame\DatabaseTable($pdo, 'user_roles', 'id');
	}

	public function getRoutes(): array {
		
		$userController = new \App\Controllers\Register($this->usersTable,$this->authentication,$this->citoyensTable);
		$loginController = new \App\Controllers\Login($this->authentication);
	
//////////////////////////////////////////////////////////Control instance  # ETAPE 3 
		$categorieController = new \App\Controllers\categorie($this->categoriesTable,$this->usersTable,$this->authentication);
		$analysteController = new \App\Controllers\analyste($this->analystesTable,$this->usersTable,$this->authentication);
				$recommandationController = new \App\Controllers\recommandation($this->recommandationsTable,$this->usersTable,$this->authentication);
		$responsable_agenceController = new \App\Controllers\responsable_agence($this->responsable_agencesTable,$this->usersTable,$this->authentication,$this->communesTable, $this->pdo, $this->rolesUsersTable,$this->agencesTable);

		$communeController = new \App\Controllers\commune($this->communesTable,$this->usersTable,$this->authentication,$this->delegationsTable);
		$gestionnaire_hopitalController = new \App\Controllers\gestionnaire_hopital($this->gestionnaire_hopitalsTable,$this->usersTable,$this->authentication,$this->hopitalsTable, $this->pdo, $this->rolesUsersTable);
		$citoyenController = new \App\Controllers\citoyen($this->citoyensTable,$this->usersTable,$this->authentication);
  $hopitalController = new \App\Controllers\hopital($this->hopitalsTable,$this->usersTable,$this->authentication,$this->agencesTable,$this->communesTable);
  $decesController = new \App\Controllers\deces($this->decessTable,$this->usersTable,$this->authentication,$this->citoyensTable);
		$delegationController = new \App\Controllers\delegation($this->delegationsTable,$this->usersTable,$this->authentication,$this->gouvernoratsTable);
		$gouvernoratController = new \App\Controllers\gouvernorat($this->gouvernoratsTable,$this->usersTable,$this->authentication);
		$agenceController = new \App\Controllers\agence($this->agencesTable,$this->usersTable,$this->authentication,$this->communesTable);
		$routes = [
		// Home
			'' => [
					'GET' => [
						'controller' => $userController,
						'action' => 'home'
					]
				],
		// Login
			'login' => [
				'GET' => [
					'controller' => $loginController,
					'action' => 'loginForm'
				],
				'POST' => [
					'controller' => $loginController,
					'action' => 'processLogin'
				]
			],
			'login/error' => [
				'GET' => [
					'controller' => $loginController,
					'action' => 'error'
				]
			],
			'login/permissionserror' => [
				'GET' => [
					'controller' => $loginController,
					'action' => 'permissionsError'
				]
			],
		// Register
			'register' => [
				'GET' => [
					'controller' => $userController,
					'action' => 'registrationForm'
				],
				'POST' => [
					'controller' => $userController,
					'action' => 'registerUser'
				]
			],
		// logout
			'logout' => [
				'GET' => [
					'controller' => $loginController,
					'action' => 'logout'
				]
			],
		// user
			'profil' => [
				'GET' => [
					'controller' => $userController,
					'action' => 'profil'
				],
				'login' => true
			],
			'user/list' => [
				'GET' => [
					'controller' => $userController,
					'action' => 'list'
				],
				'login' => true,
				
			],
			'user/edit' => [
				'POST' => [
					'controller' => $userController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $userController,
					'action' => 'edit'
				],
				'login' => true
			],
			'user/delete' => [
				'GET' => [
					'controller' => $userController,
					'action' => 'delete'
				],
				'login' => true
			],
			'user/permissions' => [
				'GET' => [
					'controller' => $userController,
					'action' => 'permissions'
				],
				'POST' => [
					'controller' => $userController,
					'action' => 'savePermissions'
				],
				'login' => true,
				
			],
			//stat
			'stat/covid' => [
				'GET' => [
					'controller' => $citoyenController,
					'action' => 'statcovid'
				],
				'login' => true
			],
			//categorie
			'categorie/list' => [
				'GET' => [
					'controller' => $categorieController,
					'action' => 'list'
				],
				'login' => true
			],
			'categorie/edit' => [
				'POST' => [
					'controller' => $categorieController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $categorieController,
					'action' => 'edit'
				],
				'login' => true
			],

			'categorie/delete' => [
				'GET' => [
					'controller' => $categorieController,
					'action' => 'delete'
				],
				'login' => true
			],
			//analyste
			'analyste/list' => [
				'GET' => [
					'controller' => $analysteController,
					'action' => 'list'
				],
				'login' => true
			],
			'analyste/edit' => [
				'POST' => [
					'controller' => $analysteController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $analysteController,
					'action' => 'edit'
				],
				'login' => true
			],

			'analyste/delete' => [
				'GET' => [
					'controller' => $analysteController,
					'action' => 'delete'
				],
				'login' => true
			],
				//recommandation
			'recommandation/list' => [
				'GET' => [
					'controller' => $recommandationController,
					'action' => 'list'
				],
				'login' => true
			],
			'recommandation/edit' => [
				'POST' => [
					'controller' => $recommandationController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $recommandationController,
					'action' => 'edit'
				],
				'login' => true
			],

			'recommandation/delete' => [
				'GET' => [
					'controller' => $recommandationController,
					'action' => 'delete'
				],
				'login' => true
			],
			//Valider Recommandation 
			'recommandation/valider' => [
				'GET' => [
					'controller' => $recommandationController,
					'action' => 'valider'
				],
				'login' => true
			],
			//responsable_agence
			'responsable_agence/list' => [
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'list'
				],
				'login' => true
			],
			'responsable_agence/edit' => [
				'POST' => [
					'controller' => $responsable_agenceController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'edit'
				],
				'login' => true
			],
			'responsable_agence/modi' => [
				'POST' => [
					'controller' => $responsable_agenceController,
					'action' => 'saveModi'
				],
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'modi'
				],
				'login' => true
			],

			'responsable_agence/delete' => [
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'delete'
				],
				'login' => true
			],
			'responsable_agence/bloquer' => [
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'bloquer'
				],
				'login' => true
			],
			'responsable_agence/debloquer' => [
				'GET' => [
					'controller' => $responsable_agenceController,
					'action' => 'debloquer'
				],
				'login' => true
			],
			//gestionnaire_hopital
			'gestionnaire_hopital/list' => [
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'list'
				],
				'login' => true
			],
			'gestionnaire_hopital/edit' => [
				'POST' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'edit'
				],
				'login' => true
			],
   'gestionnaire_hopital/modi' => [
				'POST' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'saveModi'
				],
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'modi'
				],
				'login' => true
			],
			'gestionnaire_hopital/delete' => [
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'delete'
				],
				'login' => true
			],
    //autoriser et bloquer 
				'gestionnaire_hopital/bloquer' => [
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'bloquer'
				],
				'login' => true
			],
			'gestionnaire_hopital/debloquer' => [
				'GET' => [
					'controller' => $gestionnaire_hopitalController,
					'action' => 'debloquer'
				],
				'login' => true
			],
			//citoyen
			'citoyen/list' => [
				'GET' => [
					'controller' => $citoyenController,
					'action' => 'list'
				],
				'login' => true
			],
			'citoyen/edit' => [
				'POST' => [
					'controller' => $citoyenController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $citoyenController,
					'action' => 'edit'
				],
				'login' => true
			],

			'citoyen/delete' => [
				'GET' => [
					'controller' => $citoyenController,
					'action' => 'delete'
				],
				'login' => true
			],
				//delegation
			'delegation/list' => [
				'GET' => [
					'controller' => $delegationController,
					'action' => 'list'
				],
				'login' => true
			],
			'delegation/edit' => [
				'POST' => [
					'controller' => $delegationController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $delegationController,
					'action' => 'edit'
				],
				'login' => true
			],

			'delegation/delete' => [
				'GET' => [
					'controller' => $delegationController,
					'action' => 'delete'
				],
				'login' => true
			],
				//commune
			'commune/list' => [
				'GET' => [
					'controller' => $communeController,
					'action' => 'list'
				],
				'login' => true
			],
			'commune/edit' => [
				'POST' => [
					'controller' => $communeController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $communeController,
					'action' => 'edit'
				],
				'login' => true
			],

			'commune/delete' => [
				'GET' => [
					'controller' => $communeController,
					'action' => 'delete'
				],
				'login' => true
			],
			//hopitals
			'hopital/list' => [
				'GET' => [
					'controller' => $hopitalController,
					'action' => 'list'
				],
				'login' => true
			],
			'hopital/edit' => [
				'POST' => [
					'controller' => $hopitalController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $hopitalController,
					'action' => 'edit'
				],
				'login' => true
			],

			'hopital/delete' => [
				'GET' => [
					'controller' => $hopitalController,
					'action' => 'delete'
				],
				'login' => true
			],

			
					//gouvernorat
			'gouvernorat/list' => [
				'GET' => [
					'controller' => $gouvernoratController,
					'action' => 'list'
				],
				'login' => true
			],
			'gouvernorat/edit' => [
				'POST' => [
					'controller' => $gouvernoratController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $gouvernoratController,
					'action' => 'edit'
				],
				'login' => true
			],

			'gouvernorat/delete' => [
				'GET' => [
					'controller' => $gouvernoratController,
					'action' => 'delete'
				],
				'login' => true
			],
			//deces
			'deces/list' => [
				'GET' => [
					'controller' => $decesController,
					'action' => 'list'
				],
				'login' => true
			],
			'deces/edit' => [
				'POST' => [
					'controller' => $decesController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $decesController,
					'action' => 'edit'
				],
				'login' => true
			],

			'deces/delete' => [
				'GET' => [
					'controller' => $decesController,
					'action' => 'delete'
				],
				'login' => true
			],
					//agence
			'agence/list' => [
				'GET' => [
					'controller' => $agenceController,
					'action' => 'list'
				],
				'login' => true
			],
			'agence/edit' => [
				'POST' => [
					'controller' => $agenceController,
					'action' => 'saveEdit'
				],
				'GET' => [
					'controller' => $agenceController,
					'action' => 'edit'
				],
				'login' => true
			],

			'agence/delete' => [
				'GET' => [
					'controller' => $agenceController,
					'action' => 'delete'
				],
				'login' => true
			]
			
		];
		

		return $routes;
	}

	public function getAuthentication(): \AIFrame\Authentication {
		return $this->authentication;
	}

	public function checkPermission($permission): bool {
		$user = $this->authentication->getUser();

		if ($user && $user->hasPermission($permission)) {
			return true;
		} else {
			return false;
		}
	}

}