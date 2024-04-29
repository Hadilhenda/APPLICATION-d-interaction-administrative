 <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="iq-card">
                <div class="iq-card-header d-flex justify-content-between">
                  <div class="iq-header-title">
                    <h4 class="card-title">Les gouvernorat</h4>
                  </div>
                
                <div class="iq-card-body">
                  <div id="table" class="table-editable">
                    <span class="table-add float-right mb-3 mr-2">
                     <a href="/gouvernorat/edit">
                      <button class="btn btn-outline-primary">
                        <i class="ri-add-fill"
                          ><span class="mb-0 fw-bold ">Add New</span>
                          
                          </i
                        >
                      </button></a>
                    </span>
                    </div>
                    </div>
              </div></div> <bR>
                    <table
                      class="table table-bordered table-responsive-md table-striped text-center"
                    >
                                        <thead>
                                        <tr>
                                            <th width='15%'>image</th>
                                            <th>gouvern</th>
                                            <th>code</th>
                                            <th>creation</th>
                                            <th>population</th>
                                            <th>superficie</th>
                                            <th>delegation</th>
                                            <th>municipalite</th>
                                            <th>imadas</th>
                                            <th>note</th>
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($gouvernorats as $gouvernorat):
												// if($user->id==$gouvernorat->iduser):
										?>
                                        <tr>
                                            <td><img src="/images/<?=$gouvernorat->image?>" class="img-fluid" width="35" alt="gouvernorat"></td>
                                            <td><?=$gouvernorat->gouvern?></td>
                                            <td><?=$gouvernorat->code?></td>
                                            <td><?=$gouvernorat->creation?></td>
                                            <td><?=$gouvernorat->population?></td>
                                            <td><?=$gouvernorat->superficie?></td>
                                            <td><?=$gouvernorat->delegation?></td>
                                            <td><?=$gouvernorat->municipalite?></td>
                                            <td><?=$gouvernorat->imadas?></td>
                                            <td><?=$gouvernorat->note?></td>
                                            <td> 
												<div class="button-list">
													<a href="/gouvernorat/edit?id=<?=$gouvernorat->id?>" class="btn btn-success-rgba"><button type="button" class="btn btn-success rounded-pill mb-3">
 <i class="icofont-edit text-success"></i></button>
</a>
													<a href="/gouvernorat/delete?id=<?=$gouvernorat->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette gouvernorats?'))" class="btn btn-danger-rgba"><button type="button" class="btn btn-danger rounded-pill mb-3">
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