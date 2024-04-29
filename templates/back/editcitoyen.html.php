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
								<input type="hidden" name="citoyen[id]" value="<?=$citoyen->id ?? ''?>">
								
                                   <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Nom  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="citoyen[nom]" value="<?=$citoyen->nom ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Prenom  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="citoyen[prenom]" value="<?=$citoyen->prenom ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">date naissance  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="date" class="form-control" name="citoyen[date_naissance]" value="<?=$citoyen->date_naissance ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Sexe   <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="citoyen[sexe]" value="<?=$citoyen->sexe ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">  mere  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="citoyen[nom_mere]" value="<?=$citoyen->nom_mere ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">pere <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="citoyen[nom_pere]" value="<?=$citoyen->nom_pere ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                   <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">createdAt <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="date" class="form-control" name="citoyen[createdAt]" value="<?=$citoyen->createdAt ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">updatedAt <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="date" class="form-control" name="citoyen[updatedAt]" value="<?=$citoyen->updatedAt ?? ''?>" placeholder="Enter title"  required>
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