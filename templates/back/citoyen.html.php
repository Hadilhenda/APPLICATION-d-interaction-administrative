 
 <div class="body d-flex py-lg-3 py-md-2">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Liste des citoyens</h4>
                  </div>
               
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/citoyen/edit">
                      <button class="btn btn-outline-primary">
                        <i class="ri-add-fill"
                          ><span class="mb-0 fw-bold ">Add New</span>
                          
                          </i
                        >
                      </button></a>
                    </span>
                     </div>
                        </div>
                </div>
              </div> <br>
                    <table id="myProjectTable" class="table table-hover align-middle mb-0" style="width:100%">
                                        <thead>
                                        <tr>
                                            <th>nom  </th>
                                            <th>prenom </th>
                                            <th>date naissance </th>
                                            <th>sexe </th>
                                            <th> nom mere</th>
                                            <th>nom pere </th>
                                            
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($citoyens as $citoyen):
										//	if($user->id==$citoyen->iduser):
										?>
                                        <tr>
                                            <td><?=$citoyen->nom?></td>
                                            <td><?=$citoyen->prenom?></td>
                                            <td><?=$citoyen->date_naissance?></td>
                                            <td><?=$citoyen->sexe?></td>
                                            <td><?=$citoyen->nom_mere?></td>
                                            <td><?=$citoyen->nom_pere?></td>
                                          
                                            <td> 
												<div class="button-list">
													<a href="/citoyen/edit?id=<?=$citoyen->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
                             <i class="icofont-edit text-success"></i></button></a>
													<a href="/citoyen/delete?id=<?=$citoyen->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette responsables?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
                          <i class="icofont-ui-delete text-danger"></i></button></a>
												</div>
											</td>
                                        </tr>
                                        <?php 
                                        // endif;
                                    endforeach; 
                                    ?>
                                        </tbody>
                                    </table>

               
            </div>
          </div>
        </div>