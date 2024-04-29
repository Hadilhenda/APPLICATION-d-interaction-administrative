 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">les hopitaux</h4>
                  </div>
                
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/hopital/edit">
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
                                            <th>Libelle </th>
                                            <th>Télephone </th>
                                            <th>Email </th>
                                            <th>Adresse </th>
                                            <th>Numéro urgence </th>
                                            <th>Web site </th>
                                            <th>Langitude </th>
                                            <th>Latitude </th>
                                            <th>PDG </th>
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($hopitals as $hopital):
										//	if($user->id==$hopital->iduser):
										?>
                                        <tr>
                                            <td><?=$hopital->libelle?> </td>
                                            <td><?=$hopital->tel?></td>
                                            <td><?=$hopital->email?></td>
                                            <td><?=$hopital->adress?> </td>
                                            <td><?=$hopital->num_urgence?> </td>
                                            <td><?=$hopital->web_site?> </td>
                                            <td><?=$hopital->langitude?> </td>
                                            <td><?=$hopital->latitude?> </td>
                                            <td><?=$hopital->PDG?> </td>
                                            <td> 
												<div class="button-list">
													<a href="/hopital/edit?id=<?=$hopital->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
 <i class="icofont-edit text-success"></i></button></a>
													<a href="/hopital/delete?id=<?=$hopital->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette Hopital?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
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