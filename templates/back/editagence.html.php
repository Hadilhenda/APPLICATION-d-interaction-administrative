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
								<input type="hidden" name="agence[id]" value="<?=$agence->id ?? ''?>">
			                        <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Nom <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input class="form-control" name="agence[nom]"  rows="5" placeholder="Enter Your Details." required><?=$agence->nom ?? ''?></input>
                                        </div>
                                    </div> 

                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-username">tel <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" name="agence[tel]" value="<?=$agence->tel ?? ''?>" placeholder="Enter title"  required>
                                        </div>
                                    </div>
                                  
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Fax <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input class="form-control" name="agence[fax]"  rows="5" placeholder="Enter Your Details." required><?=$agence->fax ?? ''?></input>
                                        </div>
                                    </div> 
                                    
                            
                                    <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">horaire_ouverture <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input class="form-control" type="time" name="agence[horaire_ouverture]"  rows="5" placeholder="Enter Your Details." required><?=$agence->horaire_ouverture ?? ''?></input>
                                        </div>
                                    </div> 
                                        </div>
                            
                                     <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">seance_nationale <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input class="form-control" name="agence[seance_nationale]"  rows="5" placeholder="Enter Your Details." required><?=$agence->seance_nationale ?? ''?></input>
                                        </div>
                                    </div> 
                                     
                                    </div>
                                     <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">seance_permanence <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                            <input class="form-control" name="agence[seance_permanence]"  rows="5" placeholder="Enter Your Details." required><?=$agence->seance_permanence ?? ''?></input>
                                        </div>
                                    </div> 
                                       <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Commune <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                           <select name ="agence[id_com]" class="form-control">
                                            <?php foreach ($communes as $commune): ?>
                                            <option value="<?=$commune->id;?>"><?=$commune->nom;?></option>
                                            <?php endforeach ?>
                                           </select>
                                        </div>
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