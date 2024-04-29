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
								<input type="hidden" name="categorie[id]" value="<?=$categorie->id ?? ''?>">
								<input type="hidden" name="categorie[iduser]" value="<?=$user->id?>">

                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">Titre <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="categorie[titre]" value="<?=$categorie->titre ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                  
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Description <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <textarea class="form-control" name="categorie[desc]"  rows="5" placeholder="Enter Your Details." required><?=$categorie->desc ?? ''?></textarea>
                                        </div>
                                    </div> 
									<div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Image <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
											<input type="file" class="form-control" id="fileToUpload" name="fileToUpload"  accept="image/gif , image/jpeg,image/jpg,image/png" multiple /> 
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