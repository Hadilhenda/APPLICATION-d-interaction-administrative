 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Les delegation </h4>
                  </div>
               
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/delegation/edit">
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
                                        
                                            <th>titre  </th>
                                            <th>population </th>
                                            <th>gouvernorats </th>
                                            
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										                                <?php foreach ($delegations as $delegation):
										                                    //	if($user->id==$delegation->iduser):
                                            foreach ($gouvernorats as $gouvernorat):
                                                     // if ($responsable_hop->id_us==$users->id):
                                                       if ($delegation->id_gouv==$gouvernorat->id):
										                                ?>
                                        <tr>
                                            
                                            <td><?=$delegation->titre?></td>
                                            <td><?=$delegation->population?></td>
                                            <td><?=$gouvernorat->gouvern?></td>
                                            
                                            <td> 
												<div class="button-list">
													<a href="/delegation/edit?id=<?=$delegation->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
                            <i class="icofont-edit text-success"></i></button></a>
													<a href="/delegation/delete?id=<?=$delegation->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette delegations?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
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