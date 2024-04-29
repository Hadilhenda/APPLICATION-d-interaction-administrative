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
                     <a href="/categorie/edit">
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
                                            <th width='15%'>Image</th>
                                            <th>Titre</th>
                                            <th>Description</th>
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                      <tbody>
										<?php foreach ($categories as $categorie):
												// if($user->id==$categorie->iduser):
										?>
                                        <tr>
                                            <td><img src="/images/<?=$categorie->image?>" class="img-fluid" width="35" alt="categorie"></td>
                                            <td><?=$categorie->titre?></td>
                                            <td><?=$categorie->desc?></td>
                                            <td> 
												<div >
													<a href="/categorie/edit?id=<?=$categorie->id?>" > 
                          <button type="button" class="btn btn-success rounded-pill mb-3">
                            <i class="ri-quill-pen-line"></i></button>
                        </a>
													<a href="/categorie/delete?id=<?=$categorie->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette categories?'))" class="btn btn-danger-rgba">
                        <button type="button" class="btn btn-danger rounded-pill mb-3">
                          <i class="ri-delete-bin-2-fill pr-0"></i></button>
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