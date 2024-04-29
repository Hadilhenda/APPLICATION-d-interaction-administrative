 <div class="col-lg-12">
                     <div class="iq-edit-list-data">
                        <div class="tab-content">
                           <div class="tab-pane fade active show" id="personal-information" role="tabpanel">
                              <div class="iq-card">
                                 <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                       <h4 class="card-title">gestionnaire hopital</h4>
                                    </div>
                                 </div>
                                 <div class="iq-card-body">
                                <form class="form-validate" method='post' enctype="multipart/form-data">
								                     <input type="hidden"  name="users[id]" value="" >
								                     <input type="hidden"  name="users[profil]" value="1" >
								                   <div class="row g-3 align-items-center"> 

                                 <div class="col-md-6">
                                        <label class="col-lg-3 col-form-label" for="val-usersname">Nom  <span class="text-danger">*</span></label>
                                        
                                            <input
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Name"
                                                   name="users[nom]"
                                                   value="<?=$users->nom ?? ''?>"
                                                  required
                                            />
                                
                                    </div> 
                                    
                                    
                                
                                 


                                      <div class="col-md-6">
                                        <label class="col-lg-3 col-form-label" for="val-usersname">diplome  <span class="text-danger">*</span></label>
                                        
                                            <input
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Name"
                                                   name="gestionnaire_hopital[diplome]"
                                                   value="<?=$gestionnaire_hopital->diplome ?? ''?>"
                                                  required
                                            />
                                
                                    </div>

                                  <div class="col-md-6">
                                        <label class="col-lg-3 col-form-label" for="val-usersname">specialite  <span class="text-danger">*</span></label>
                                        
                                            <input
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Name"
                                                   name="gestionnaire_hopital[specialite]"
                                                   value="<?=$gestionnaire_hopital->specialite ?? ''?>"
                                                  required
                                            />
                                
                                    </div>
            
                        
                                <div class="col-md-6">
                  
                                        <label class="form-label" for="val-usersname">mission  <span class="text-danger">*</span></label>
                                     
                                            <input type="text" class="form-control" name="responsable_agence[mission]" value="<?=$responsable_agence->mission ?? ''?>" placeholder="Enter title"  required>
                                </div>
                        <div class="col-md-6">
                        <label class="form-label">Email address <span class="text-danger">*</span></label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="name@example.com"
                          name="users[email]"
                          value="<?=$users->email ?? ''?>"
                          required
                        />
            
                        </div>


                   
                      <div class="col-md-6">
                        <label class="form-label">Login<span class="text-danger">*</span></label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="login"
                          name="users[login]"
                          value="<?=$users->login ?? ''?>"
                          required
                        />
                      </div>
                   

                    <div class="col-md-6">
                   
                        <label class="form-label">Password <span class="text-danger">*</span></label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder=""
                          name="users[password]"
                          value="<?=$users->password ?? ''?>"
                          required
                        />
               
                    </div>
                         <div class="form-group col-sm-6">
                                        <label class="form-label" for="val-suggestions">Hopital <span class="text-danger">*</span></label>
                                        <div class="col-lg-6">
                                           <select name ="gestionnaire_hopital[id_hop]" class="form-control">
                                            <?php foreach ($hopitals as $hopital): ?>
                                            <option value="<?=$hopital->id;?>"><?=$hopital->libelle;?></option>
                                            <?php endforeach ?>
                                           </select>
                                        </div>
                                    </div>        
                                 <div class="col-md-6 align-items-center">
                                       
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