 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Les communes</h4>
                  </div>
                
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/commune/edit">
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
                                            <th>nom </th> 
                                            <th>tel </th>
                                            <th>email </th>
                                            <th>Adresse </th>
                                            <th>Nombre de département  </th>
                                            <th>Web site </th>
                                            <th>Langitude </th>
                                            <th>Latitude </th>
                                            <th>Présidant </th>
                                            <th>Delegation </th>
                                            
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($communes as $commune):
                    
                           foreach ($delegations as $delegation):
										     	if($commune->id_del==$delegation->id):
										?>
                                        <tr>
                                           <td><?=$commune->nom?></td>
                                            <td><?=$commune->tel?></td>
                                            <td><?=$commune->email?></td>
                                            <td><?=$commune->adress?> </td>
                                            <td><?=$commune->nbr_departement?> </td>
                                            <td><?=$commune->web_site?> </td>
                                            <td><?=$commune->langitude?> </td>
                                            <td><?=$commune->latitude?> </td>
                                            <td><?=$commune->presidant?> </td>
                                            <td><?=$delegation->titre?></td>
                                          
                                            <td> 
												<div class="button-list">
													<a href="/commune/edit?id=<?=$commune->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
                             <i class="icofont-edit text-success"></i></button></a>
													<a href="/commune/delete?id=<?=$commune->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette communes?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
                          <i class="icofont-ui-delete text-danger"></i></button></a>
												</div>
											</td>
                                        </tr>
                                        <?php 
                                         endif;
                                    endforeach;
                                    endforeach; 
                                    ?>
                                        </tbody>
                                    </table>
                 
            </div>
          </div>
        </div>