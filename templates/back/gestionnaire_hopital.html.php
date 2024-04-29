 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Responsable hopital</h4>
                  </div>
                
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/gestionnaire_hopital/edit">
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
                    <table
                      class="table table-bordered table-responsive-md table-striped text-center"
                    >
                                        <thead>
                                        <tr>
                                            <th>Nom </th> 
                                            <th>Email</th>
                                            <th>Diplome  </th>
                                            <th>Specialite </th>
                                            <th>Mission </th>
                                            <th>Hopital  </th>
                                            <th>Login  </th>
                                           
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($gestionnaire_hopitals as $gestionnaire_hopital):
										
                                             foreach ($utilisateurs as $utilisateur):
                                              if ($gestionnaire_hopital->id_user==$utilisateur->id):
                                                 foreach ($hopitals as $hopital):
                                              if ($gestionnaire_hopital->id_hop==$hopital->id):
                                             
                                                 
										?>
                                        <tr>
                                            <td><?=$utilisateur->nom?></td>
                                            <td><?=$utilisateur->email?></td>
                                            <td><?=$gestionnaire_hopital->diplome?></td>
                                            <td><?=$gestionnaire_hopital->specialite?></td>
                                            <td><?=$gestionnaire_hopital->mission?></td>
                                            <td><?=$hopital->libelle?></td>
                                            <td><?=$utilisateur->login?></td>
                                          
                                            <td> 
												<div class="button-list">
													<a href="/gestionnaire_hopital/modi?id=<?=$gestionnaire_hopital->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
  <i class="icofont-edit text-success"></i></button></a>
  
													<a href="/gestionnaire_hopital/delete?id=<?=$gestionnaire_hopital->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette responsables?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
<i class="icofont-ui-delete text-danger"></i></button></a>

<?php    if ($gestionnaire_hopital->etat == 0): ?>
<a href="/gestionnaire_hopital/debloquer?id=<?=$gestionnaire_hopital->id?>" onClick="return(confirm('Voulez-vous debloquer cette gestionnaire_hopital?'))" class="btn btn-danger-rgba">
                           <img src="/images/autoriser.jpg" style="width: 30px;height: 30px;"/>
                        </a>

<?php endif;   if ($gestionnaire_hopital->etat == 1):?>
  <a href="/gestionnaire_hopital/bloquer?id=<?=$gestionnaire_hopital->id?>" onClick="return(confirm('Voulez-vous bloquer cette gestionnaire_hopital?'))" class="btn btn-danger-rgba">
                           <img src="/images/bloquer.png" style="width: 30px;height: 30px;"/></i></a>
                        </a>
                        <?php endif; ?>
												</div>
											</td>
                                        </tr>
                                        <?php 
                                         endif;
                                        endforeach;
                                     endif;
                                         endforeach;
                                    endforeach;
                              
                                    ?>
                                        </tbody>
                                    </table>
                
            </div>
          </div>
        </div>