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
								<input type="hidden" name="analyste[id]" value="<?=$analyste->id ?? ''?>">
							        

                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">diplome <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="analyste[diplome]" value="<?=$analyste->diplome ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                  <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">specialite <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="analyste[specialite]" value="<?=$analyste->specialite ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                     
                                    
                                    
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">mission <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="analyste[mission]" value="<?=$analyste->mission ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">createdAt <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="date" class="form-control" name="analyste[createdAt]" value="<?=$analyste->createdAt ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">updatedAt <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="date" class="form-control" name="analyste[updatedAt]" value="<?=$analyste->updatedAt ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label"></label>
                                        <div class="col-lg-8">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                                     
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