 <div class="col-lg-12">
                     <div class="iq-edit-list-data">
                        <div class="tab-content">
                           <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                              <div class="iq-card">
                                 <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                       <h4 class="card-title">Modifier responsable</h4>
                                    </div>
                                 </div>
                                 <div class="iq-card-body">
                                <form class="form-validate" method='post' enctype="multipart/form-data">
								                     <input type="hidden"  name="users[id]" value="" >
								                     <input type="hidden"  name="users[profil]" value="1" >
                    <div class="col-6">
                      <div class="mb-2">
                        <label class="form-label">Diplome</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="diplome"
                          name="responsable_agence[diplome]"
                          value="<?=$responsable_agence->diplome ?? ''?>"
                          required
                        />
                      </div>
                    </div>
                             <div class="col-6">
                      <div class="mb-2">
                        <label class="form-label">specialite</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="specialite"
                          name="responsable_agence[specialite]"
                          value="<?=$responsable_agence->specialite ?? ''?>"
                          required
                        />
                      </div>
                    </div>
                               
                                 <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label"></label>
                                        <div class="col-lg-8">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>                                  
                                </div>
                                    </div>  
                                 </div>
                              </div>
                           </div>
                                </div>
                              </div>
                           </div>
</div>