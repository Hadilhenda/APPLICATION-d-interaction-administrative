  <!-- Start Breadcrumbbar -->                    
  <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">Datatable</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Datatable</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="widgetbar">
                            <a href="/deces/edit"><button class="btn btn-primary">CREATION</button></a>
                        </div>                        
                    </div>
                </div>          
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar -->    
            <div class="contentbar">                
                <!-- Start row -->
                <div class="row">
                 
                    <!-- Start col -->
                    <div class="col-lg-12">
                        <div class="card m-b-30">
                            <div class="card-header">
                                <h5 class="card-title">Les decess</h5>
                            </div>
                            <div class="card-body">
                                <h6 class="card-subtitle">Export data to Copy, CSV, Excel & Note.</h6>
                                <div class="table-responsive">
                                    <table id="datatable-buttons" class="table table-striped table-bordered">
                                        <thead>
                                        <tr>                                            
                                            <th>date deces </th>
                                            <th>cas </th>
                                            <th>nom </th>
                                            <th>prenom </th>
                                            <th width='15%'>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
										<?php foreach ($decess as $deces):
										//	if($user->id==$deces->iduser):
                                            foreach ($citoyens as $citoyen):
                                              if ($deces->id_c==$citoyen->id):
										?>
                                        <tr>  
                                            <td><?=$deces->date_deces?></td>
                                            <td><?=$deces->ca_d?></td>
                                            <td>
                                         <?=$citoyen->nom?>
                                        </td> 
                                        <td><?=$citoyen->prenom?>  </td>
                                            <td> 
												<div class="button-list">
													<a href="/deces/edit?id=<?=$deces->id?>" class="btn btn-success-rgba"><i class="icofont-edit text-success"></i></a>
													<a href="/deces/delete?id=<?=$deces->id?>" onClick="return(confirm('Voulez-vous sur supprimer cette responsables?'))" class="btn btn-danger-rgba"><i class="icofont-ui-delete text-danger"></i></a>
												</div>
											</td>
                                        </tr>
                                        <?php 
                                        // endif;
                                        endif ;
                                               endforeach; 
                                    endforeach; 
                                    ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
                <!-- End row -->
            </div>
            <!-- End Contentbar -->