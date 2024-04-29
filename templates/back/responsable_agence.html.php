 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Responsable Municipalité</h4>
                  </div>
               
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/responsable_agence/edit">
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
                                            <th>nom</th> 
                                            <th>email</th>
                                            <th>Deplome  </th>
                                            <th>Specialite </th>
                                           <th>mission </th>
                                           <th>Agence </th>
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($responsable_agences as $responsable_agence):
										
                                             foreach ($utilisateurs as $utilisateur):
                                               if ($responsable_agence->id_user == $utilisateur->id):
                                                foreach ($agences as $agence):
                                               if ($responsable_agence->id_age == $agence->id):

										?>
                                        <tr>
                                            <td><?=$utilisateur->nom?></td>
                                            <td><?=$utilisateur->email?></td>
                                            <td><?=$responsable_agence->diplome?></td>
                                            <td><?=$responsable_agence->specialite?></td>
                                            <td><?=$responsable_agence->mission?></td>
                                            <td><?=$agence->nom?></td>
                                            <td> 
												<div class="button-list">
													<a href="/responsable_agence/modi?id=<?=$responsable_agence->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
 <i class="icofont-edit text-success"></i></button></a>
													<a href="/responsable_agence/delete?id=<?=$responsable_agence->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette responsables?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
<i class="icofont-ui-delete text-danger"></i></button></a>

<?php    if ($responsable_agence->etat == 0): ?>
<a href="/responsable_agence/debloquer?id=<?=$responsable_agence->id?>" onClick="return(confirm('Voulez-vous debloquer cette responsable_agence?'))" class="btn btn-danger-rgba">
                           <img src="/images/autoriser.jpg" style="width: 30px;height: 30px;"/>
                        </a>

<?php endif;   if ($responsable_agence->etat == 1):?>
  <a href="/responsable_agence/bloquer?id=<?=$responsable_agence->id?>" onClick="return(confirm('Voulez-vous bloquer cette responsable_agence?'))" class="btn btn-danger-rgba">
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