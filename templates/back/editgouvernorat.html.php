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
								 <input type="hidden" name="gouvernorat[id]" value="<?=$gouvernorat->id ?? ''?>">
								 
                                    
                                      <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">image <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
									  <input type="file" class="form-control" id="fileToUpload" name="fileToUpload"  accept="image/gif , image/jpeg,image/jpg,image/png" multiple /> 
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">gouvernerat <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[gouvern]" value="<?=$gouvernorat->gouvern ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                  
                                   <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">code <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[code]" value="<?=$gouvernorat->code ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div> 
									<div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">creation <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[creation]" value="<?=$gouvernorat->creation ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div> 
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Population <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[population]" value="<?=$gouvernorat->population ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                     <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">superficie <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[superficie]" value="<?=$gouvernorat->superficie ?? ''?>" placeholder="Enter title"  required>
                                            
                                        </div>
                                    </div>
                                   
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">delegation <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[delegation]" value="<?=$gouvernorat->delegation ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">municipalite <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[municipalite]" value="<?=$gouvernorat->municipalite ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">imadas <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[imadas]" value="<?=$gouvernorat->imadas ?? ''?>" placeholder="Enter title"  required>                      
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">note <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="gouvernorat[note]" value="<?=$gouvernorat->note ?? ''?>" placeholder="Enter title"  required>
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