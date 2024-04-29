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
                                <form  class="form-validate" method='post' enctype="multipart/form-data">
								<input type="hidden" name="hopital[id]" value="<?=$hopital->id ?? ''?>">
                                   <div class="row g-3 align-items-center">    
								<div class="col-md-6">
                                        <label class="form-label" for="val-username">libelle  <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="hopital[libelle]" value="<?=$hopital->libelle ?? ''?>" placeholder="Enter title"  required>
                                        
                                 </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">Telephone  <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="hopital[tel]" value="<?=$hopital->tel ?? ''?>" placeholder="Enter title"  required>
                                      
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">Email <span class="text-danger">*</span></label>
                                      
                                            <input type="email" class="form-control" name="hopital[email]" value="<?=$hopital->email ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">numéro urgence <span class="text-danger">*</span></label>
                                      
                                            <input type="int" class="form-control" name="hopital[num_urgence]" value="<?=$hopital->num_urgence ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">type <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="hopital[type]" value="<?=$hopital->type ?? ''?>" placeholder="Enter title"  required>
                                      
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">PDG <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="hopital[PDG]" value="<?=$hopital->PDG ?? ''?>" placeholder="Enter title"  required>
                                     
                                    </div> 
                                     <div class="col-md-6">
                                        <label class="form-label" for="val-username">adress <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="hopital[adress]" value="<?=$hopital->adress ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">langitude <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="hopital[langitude]" value="<?=$hopital->langitude ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">latitude <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="hopital[latitude]" value="<?=$hopital->latitude ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">web site <span class="text-danger">*</span></label>
                                     
                                            <input type="text" class="form-control" name="hopital[web_site]" value="<?=$hopital->web_site ?? ''?>" placeholder="Enter title"  required>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">createdAt <span class="text-danger">*</span></label>
                                       
                                            <input type="date" class="form-control" name="hopital[createdAt]" value="<?=$hopital->createdAt ?? ''?>" placeholder="Enter title"  required>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">updatedAt <span class="text-danger">*</span></label>
                                       
                                            <input type="date" class="form-control" name="hopital[updatedAt]" value="<?=$hopital->updatedAt ?? ''?>" placeholder="Enter title"  required>
                                     
                                    </div>
                                        <div class="form-group col-sm-6">
                                        <label class="col-lg-3 col-form-label" for="val-suggestions">Agences <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                           <select name ="hopital[id_age]" class="form-control">
                                            <?php foreach ($agences as $agence):?>
                                            <option value="<?=$agence->id;?>"><?=$agence->nom;?></option>
                                            <?php  endforeach; ?>
                                           </select>
                                        </div>
                                    </div> 
                                              <div class="col-lg-8">
                                            <button type="submit" class="btn btn-primary mt-4">Submit</button>
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