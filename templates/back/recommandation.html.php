 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title"> Lsite des recommandations </h4>
                  </div>
                </div>
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <!-- <span class="table-add float-right mb-3 mr-2">
                     <a href="/analyste/edit">
                      <button class="btn btn-outline-primary">
                        <i class="ri-add-fill"
                          ><span class="mb-0 fw-bold ">Add New</span>
                          
                          </i
                        >
                      </button></a>
                    </span> -->
                     </div>
                </div>
              </div> <br> 
                    <table
                      class="table table-bordered table-responsive-md table-striped text-center"
                    >
                                        <thead>
                                        <tr>
                                           
                                            <th>titre</th>
                                            <th>description</th>
                                   
                                            <th>domaine</th>
                                            <th>specification</th>
                                            
                                         <th width='15%'>Action</th> 
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($recommandations as $recommandation):
												//if($user->id==$analyste->iduser):
										?>
                                        <tr>
                                            
                                            <td><?=$recommandation->titre?></td>
                                            <td><?=$recommandation->description?></td>
                                         
                                            <td><?=$recommandation->domaine?></td>
                                            <td><?=$recommandation->specification?> </td>
                                            
                                             <td> 
												<div class="button-list">
													<!-- <a href="/recommandation/valide?id=<?=$recommandation->id?>" class="btn btn-success-rgba">
                                                <button type="button" class="btn btn-success rounded-pill mb-3">
                            <i class="icofont-edit text-success"></i></button></a> -->
                           
													<a href="/recommandation/valider?id=<?=$recommandation->id?>" onClick="return(confirm('Voulez-vous valider cette recommandation?'))" class="btn btn-danger-rgba">
                           <img src="/images/autoriser.jpg" style="width: 30px;height: 30px;"/>
                        </a>
												</div>
											</td> 
                                        </tr>
                                        <?php 
                                     //endif;
                                    endforeach; 
                                    ?>
                                        </tbody>
                                   
    </table>
                 
            </div>
          </div>
        </div>