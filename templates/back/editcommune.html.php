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
								<input type="hidden" name="commune[id]" value="<?=$commune->id ?? ''?>">
                                   <div class="row g-3 align-items-center">    
								<div class="col-md-6">
                                        <label class="form-label" for="val-username">Nom  <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="commune[nom]" value="<?=$commune->nom ?? ''?>" placeholder="Enter title"  required>
                                        
                                 </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">Telephone  <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="commune[tel]" value="<?=$commune->tel ?? ''?>" placeholder="Enter title"  required>
                                      
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">Email <span class="text-danger">*</span></label>
                                      
                                            <input type="email" class="form-control" name="commune[email]" value="<?=$commune->email ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">nombre departement <span class="text-danger">*</span></label>
                                      
                                            <input type="int" class="form-control" name="commune[nbr_departement]" value="<?=$commune->nbr_departement ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">presidant <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="commune[presidant]" value="<?=$commune->presidant ?? ''?>" placeholder="Enter title"  required>
                                      
                                    </div> 
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">secretaire <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="commune[secretaire]" value="<?=$commune->secretaire ?? ''?>" placeholder="Enter title"  required>
                                     
                                    </div> 
                                     <div class="col-md-6">
                                        <label class="form-label" for="val-username">adress <span class="text-danger">*</span></label>
                                       
                                            <input type="text" class="form-control" name="commune[adress]" value="<?=$commune->adress ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">langitude <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="commune[langitude]" value="<?=$commune->langitude ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">latitude <span class="text-danger">*</span></label>
                                      
                                            <input type="text" class="form-control" name="commune[latitude]" value="<?=$commune->latitude ?? ''?>" placeholder="Enter title"  required>
                                       
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">web site <span class="text-danger">*</span></label>
                                     
                                            <input type="text" class="form-control" name="commune[web_site]" value="<?=$commune->web_site ?? ''?>" placeholder="Enter title"  required>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">createdAt <span class="text-danger">*</span></label>
                                       
                                            <input type="date" class="form-control" name="commune[createdAt]" value="<?=$commune->createdAt ?? ''?>" placeholder="Enter title"  required>
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" for="val-username">updatedAt <span class="text-danger">*</span></label>
                                       
                                            <input type="date" class="form-control" name="commune[updatedAt]" value="<?=$commune->updatedAt ?? ''?>" placeholder="Enter title"  required>
                                     
                                    </div>
                                     <div class="col-md-6">
                                        <label class="form-label" for="val-suggestions">Delegations <span class="text-danger">*</span></label>
                                      
                                           <select name ="commune[id_del]" class="form-control">
                                            <?php foreach ($delegations as $delegation): ?>
                                            <option value="<?=$delegation->id;?>"><?=$delegation->titre;?></option>
                                            <?php endforeach ?>
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