 <div class="col-lg-12">
                     <div class="iq-edit-list-data">
                        <div class="tab-content">
                           <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                              <div class="iq-card">
                                 <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                       <h4 class="card-title">Personal Information</h4>
                                    </div>
                                 </div>
                                 <div class="iq-card-body">

                                <form class="form-validate" method='post' enctype="multipart/form-data">
								<input type="hidden" name="user[id]" value="<?=$user->id ?? ''?>">
								
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Nom  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="user[nom]" value="<?=$user->nom ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Prenom  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="user[prenom]" value="<?=$user->prenom ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Email  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="user[email]" value="<?=$user->email ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Adresse  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="user[adresse]" value="<?=$user->adresse ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                   
                                   
                                    
                                   <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label"></label>
                                        <div class="col-lg-8">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>                                  
                                </form>
                                                                    </div>
                                    </div>  
                                 </div>
                              </div>
                           </div>
                                </div>
                              </div>
                           </div>
</div>