 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Editable Table</h4>
                  </div>
                </div>
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/agence/edit">
                      <button class="btn btn-sm iq-bg-success">
                        <i class="ri-add-fill"
                          ><span class="pl-1">Add New</span>
                          
                          </i
                        >
                      </button></a>
                    </span>
                    <table
                      class="table table-bordered table-responsive-md table-striped text-center"
                    >
                      <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Telephone</th>
                                            <th>Fax</th>
                                            <th>horaire ouverture</th>
                                            <th>Seance nationale</th>
                                            <th>Seance permanence</th>
                                           
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                      <tbody>
										<?php foreach ($agences as $agence):
												// if($user->id==$agence->iduser):
										?>
                                        <tr>
                                           <td><?=$agence->nom?></td>
                                            <td><?=$agence->tel?></td>
                                            <td><?=$agence->fax?></td>
                                            <td><?=$agence->horaire_ouverture?></td>
                                            <td><?=$agence->seance_nationale?></td>
                                            <td><?=$agence->seance_permanence?></td> 
                                            <td> 
												<div >
													<a href="/agence/edit?id=<?=$agence->id?>"  
                          class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
                            <i class="icofont-edit text-success"></i></button>
                        </a>
													<a href="/agence/delete?id=<?=$agence->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette agences?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
                          <i class="icofont-ui-delete text-danger"></i></button>
                      </a>
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
            </div>
          </div>
        </div>