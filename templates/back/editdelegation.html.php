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
								<input type="hidden" name="delegation[id]" value="<?=$delegation->id ?? ''?>">
								
                                     
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">titre  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="delegation[titre]" value="<?=$delegation->titre ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">population  <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="delegation[population]" value="<?=$delegation->population ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                     <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">gouvernorat <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                           <select name ="delegation[id_gouv]" class="form-control">
                                            <?php foreach ($gouvernorats as $gouvernorat):?>
                                            <option value="<?=$gouvernorat->id;?>"><?=$gouvernorat->gouvern;?></option>
                                            <?php  endforeach; ?>
                                           </select>
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