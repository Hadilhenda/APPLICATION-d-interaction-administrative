 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Les utilisateurs</h4>
                  </div>
                
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/user/edit">
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
                                            <th>nom  </th>
                                            <th>prenom </th>
                                            <th>Email  </th>
                                            <th>Adress </th>
                                         
                                            
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($users as $user):
										//	if($user->id==$user->iduser):
										?>
                                        <tr>
                                            <td><?=$user->nom?></td>
                                            <td><?=$user->prenom?></td>
                                            <td><?=$user->email?></td>
                                            <td><?=$user->adresse?></td>
                                            
                                          
                                            <td> 
												<div class="button-list">
													<a href="/user/edit?id=<?=$user->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
                             <i class="icofont-edit text-success"></i></button></a>
													<a href="/user/delete?id=<?=$user->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette responsables?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
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