<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="2x2"
      href="/assets/images/logoBala.png"
      
    />
    <title>Baladyati </title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <!-- Favicon-->
    <!-- plugin css file  -->
    <link
      rel="stylesheet"
      href="/assets/plugin/datatables/responsive.dataTables.min.css"
    />
    <link
      rel="stylesheet"
      href="/assets/plugin/datatables/dataTables.bootstrap5.min.css"
    />
    <!-- project css file  -->
    <link rel="stylesheet" href="/assets/css/ihealth.style.min.css" />
    <link rel="stylesheet" href="/front/css/style.css" />
  </head>
  <body>
    <!-- <div class="cs-preloader">
    <div class="cs-preloader__in">
      <img src="/front/img/logo-icon.png" alt="">
    </div>
  </div> -->

  
    <div id="ihealth-layout" class="theme-tradewind">
      <!-- sidebar -->
      <div class="sidebar px-4 py-4 py-md-5 me-0">
        <div class="d-flex flex-column h-100">
          <a href="/index.html" class="mb-0 brand-icon">
            <!-- <span class="logo-icon">
              <i class="icofont-heart-beat fs-2"></i>
            </span> -->
            <div class="logo-icon">
                    <img src="/assets/images/logoBala.png" alt="login-" style=" height: 120px; width: 120px; "/>
                 
            <span class="logo-text">Baladyati</span> </div>
          </a>
          <!-- Menu: main ul -->

          <ul class="menu-list flex-grow-1 mt-3">
            <li class="collapsed">
              <a
                class="m-link active"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard"
                href="/#"
              >
                <i class="icofont-ui-home fs-5"></i> <span>Dashboard</span>
                <span
                  class="arrow icofont-rounded-down ms-auto text-end fs-5"
                ></span
              ></a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse show" id="dashboard">
                <!-- <li>
                  <a class="ms-link active" href="/index.html"
                    >Hospital Dashboard</a
                  >
                </li> -->
                <li>
                  <a class="ms-link" href="/stat/covid">
                    Covid-19 Dashboard</a
                  >
                </li>
                <li>
                <a href="/user/list" class="ms-link"> <i class="ri-group-fill"></i
                  ><span>Les utilisateur</span></a>
              </li>
              </ul>
            </li>
            

            <li class="collapsed">
              <a
                class="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-Doctor"
                href="/#"
              >
                <i class="icofont-doctor-alt fs-5"></i> <span>Responsable</span>
                <span
                  class="arrow icofont-rounded-down ms-auto text-end fs-5"
                ></span
              ></a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="menu-Doctor">
                <li>
                  <a class="ms-link" href="/analyste/list">All Analyste</a>
                </li>
                <li>
                  <a class="ms-link" href="/recommandation/list">All recommandations</a>
                </li>
                <li>
                  <a class="ms-link" href="/responsable_agence/list">Responsable agence</a>
                </li>
                <li>
                  <a class="ms-link" href="/gestionnaire_hopital/list">Gestionnaire hopital</a>
                </li>
                <!-- <li>
                  <a class="ms-link" href="/citoyen/list">les citoyen</a
                  >
                </li> -->
              
              </ul>
            </li>
            <!-- <li class="collapsed">
              <a
                class="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-Patient"
                href="/#"
              >
                <i class="icofont-blind fs-5"></i> <span>Citoyen</span>
                <span
                  class="arrow icofont-rounded-down ms-auto text-end fs-5"
                ></span
              ></a>
            
              <ul class="sub-menu collapse" id="menu-Patient">
                <li>
                  <a class="ms-link" href="/citoyen/list">Citoyen List</a>
                </li>
              </ul>
            </li> -->
            <li>
              <a class="m-link" href="/commune/list"
                ><i class="icofont-hospital fs-5"></i>
                <span>Municipalité</span></a
              >
            </li>
             <li>
              <a class="m-link" href="/agence/list"
                ><i class="icofont-hospital fs-5"></i>
                <span>Agence</span></a
              >
            </li>
            <li>
              <a class="m-link" href="/hopital/list"
                ><i class="icofont-hospital fs-5"></i>
                <span>Hopitals</span></a
              >
            </li>
          

            <li class="collapsed">
              <a
                class="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#page"
                href="/#"
              >
                <i class="icofont-page fs-5"></i> <span>Gouvernorats</span>
                <span
                  class="arrow icofont-rounded-down ms-auto text-end fs-5"
                ></span
              ></a>
              <!-- Menu: Sub menu ul -->
              <ul class="sub-menu collapse" id="page">
                <li><a class="ms-link" href="/gouvernorat/list">Gouvernorat</a></li>
                <li><a class="ms-link" href="/delegation/list"> Delegation</a></li>
              </ul>
            </li>
          </ul>

          <!-- Menu: menu collepce btn -->
          <button
            type="button"
            class="btn btn-link sidebar-mini-btn text-light"
          >
            <span class="ms-2"><i class="icofont-bubble-right"></i></span>
          </button>
        </div>
      </div>

      <!-- main body area -->
      <div class="main px-lg-4 px-md-4">
        <!-- Body: Header -->
        <div class="header">
          <nav class="navbar py-4">
            <div class="container-xxl">
              <!-- header rightbar icon -->
              <div
                class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1"
              >
                <div class="d-flex">
                  <a
                    class="nav-link text-primary collapsed"
                    href="/help.html"
                    title="Get Help"
                  >
                    <i class="icofont-info-square fs-5"></i>
                  </a>
                </div>
                <div class="dropdown notifications zindex-popover">
                  <a
                    class="nav-link dropdown-toggle pulse"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i class="icofont-alarm fs-5"></i>
                    <span class="pulse-ring"></span>
                  </a>
                  <div
                    id="NotificationsDiv"
                    class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
                  >
                    <div class="card border-0 w380">
                      <div class="card-header border-0 p-3">
                        <h5
                          class="mb-0 font-weight-light d-flex justify-content-between"
                        >
                          <span>Notifications</span>
                          <span class="badge text-white">06</span>
                        </h5>
                      </div>
                      <div class="tab-content card-body">
                        <div class="tab-pane fade show active">
                          <ul class="list-unstyled list mb-0">
                            <li class="py-2 mb-1 border-bottom">
                              <a href="/javascript:void(0);" class="d-flex">
                                <img
                                  class="avatar rounded-circle"
                                  src="/assets/images/xs/avatar1.jpg"
                                  alt=""
                                />
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Chloe Walkerr</span
                                    >
                                    <small>2MIN</small>
                                  </p>
                                  <span class=""
                                    >Added Appointment 2021-06-19
                                    <span class="badge bg-success"
                                      >Book</span
                                    ></span
                                  >
                                </div>
                              </a>
                            </li>
                            <li class="py-2 mb-1 border-bottom">
                              <a href="/javascript:void(0);" class="d-flex">
                                <div class="avatar rounded-circle no-thumbnail">
                                  AH
                                </div>
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Alan Hill</span
                                    >
                                    <small>13MIN</small>
                                  </p>
                                  <span class="">Lab sample collection</span>
                                </div>
                              </a>
                            </li>
                            <li class="py-2 mb-1 border-bottom">
                              <a href="/javascript:void(0);" class="d-flex">
                                <img
                                  class="avatar rounded-circle"
                                  src="/assets/images/xs/avatar3.jpg"
                                  alt=""
                                />
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Melanie Oliver</span
                                    >
                                    <small>1HR</small>
                                  </p>
                                  <span class=""
                                    >Invoice Create Patient Room A-803</span
                                  >
                                </div>
                              </a>
                            </li>
                            <li class="py-2 mb-1 border-bottom">
                              <a href="/javascript:void(0);" class="d-flex">
                                <img
                                  class="avatar rounded-circle"
                                  src="/assets/images/xs/avatar5.jpg"
                                  alt=""
                                />
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Boris Hart</span
                                    >
                                    <small>13MIN</small>
                                  </p>
                                  <span class=""
                                    >Medicine Order to Medical</span
                                  >
                                </div>
                              </a>
                            </li>
                            <li class="py-2 mb-1 border-bottom">
                              <a href="/javascript:void(0);" class="d-flex">
                                <img
                                  class="avatar rounded-circle"
                                  src="/assets/images/xs/avatar6.jpg"
                                  alt=""
                                />
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Alan Lambert</span
                                    >
                                    <small>1HR</small>
                                  </p>
                                  <span class="">Leave Apply</span>
                                </div>
                              </a>
                            </li>
                            <li class="py-2">
                              <a href="/javascript:void(0);" class="d-flex">
                                <img
                                  class="avatar rounded-circle"
                                  src="/assets/images/xs/avatar7.jpg"
                                  alt=""
                                />
                                <div class="flex-fill ms-2">
                                  <p
                                    class="d-flex justify-content-between mb-0"
                                  >
                                    <span class="font-weight-bold"
                                      >Zoe Wright</span
                                    >
                                    <small class="">1DAY</small>
                                  </p>
                                  <span class=""
                                    >Patient Food Order Room A-809</span
                                  >
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a class="card-footer text-center border-top-0" href="/#">
                        View all notifications</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover"
                >
                  <div class="u-info me-2">
                    <p class="mb-0 text-end line-height-sm">
                      <span class="font-weight-bold"><?php echo $user->nom ?> <?php echo $user->prenom ?></span>
                    </p>
                    <small>Admin Profile</small>
                  </div>
                  <a
                    class="nav-link dropdown-toggle pulse p-0"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    <img
                      class="avatar lg rounded-circle img-thumbnail"
                      src="/assets/images/xs/avatar10.jpg"
                      alt="profile"
                    />
                  </a>
                  <div
                    class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0"
                  >
                    <div class="card border-0 w280">
                      <div class="card-body pb-0">
                        <div class="d-flex py-1">
                          <img
                            class="avatar rounded-circle"
                            src="/assets/images/xs/avatar10.jpg"
                            alt="profile"
                          />
                          <div class="flex-fill ms-3">
                            <p class="mb-0">
                              <span class="font-weight-bold"><?php echo $user->nom ?> <?php echo $user->prenom ?></span>
                            </p>
                            <small class=""><?php echo $user->email ?></small>
                          </div>
                        </div>

                        <div><hr class="dropdown-divider border-dark" /></div>
                      </div>
                      <div class="list-group m-2">
                        <a
                          href="/virtual.html"
                          class="list-group-item list-group-item-action border-0"
                          ><i class="icofont-ui-video-chat fs-5 me-3"></i
                          >I-Health Virtual</a
                        >
                        <a
                          href="/patient-invoices.html"
                          class="list-group-item list-group-item-action border-0"
                          ><i class="icofont-dollar fs-5 me-3"></i>Patient
                          Invoices</a
                        >
                        <a
                          href="/logout"
                          class="list-group-item list-group-item-action border-0"
                          ><i class="icofont-logout fs-6 me-3"></i>Signout</a
                        >
                        <div><hr class="dropdown-divider border-dark" /></div>
                        <a
                          href="/ui-elements/auth-signup.html"
                          class="list-group-item list-group-item-action border-0"
                          ><i class="icofont-contact-add fs-5 me-3"></i>Add
                          personal account</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="setting ms-2">
                  <a
                    href="/#"
                    data-bs-toggle="modal"
                    data-bs-target="#Settingmodal"
                    ><i class="icofont-gear-alt fs-5"></i
                  ></a>
                </div>
              </div>

              <!-- menu toggler -->
              <button
                class="navbar-toggler p-0 border-0 menu-toggle order-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainHeader"
              >
                <span class="fa fa-bars"></span>
              </button>

              <!-- main menu Search-->
              <div
                class="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0"
              >
                <div class="input-group flex-nowrap input-group-lg">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                    aria-label="search"
                    aria-describedby="addon-wrapping"
                  />
                  <button
                    type="button"
                    class="input-group-text"
                    id="addon-wrapping"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <!-- Body: Body -->
   <?=$output?>

        <!-- Modal Custom Settings-->
        <div
          class="modal fade right"
          id="Settingmodal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Custom Settings</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body custom_setting">
                <!-- Settings: Color -->
                <div class="setting-theme pb-3">
                  <h6 class="card-title mb-2 fs-6 d-flex align-items-center">
                    <i class="icofont-color-bucket fs-4 me-2 text-primary"></i
                    >Template Color Settings
                  </h6>
                  <ul
                    class="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2"
                  >
                    <li data-theme="indigo"><div class="indigo"></div></li>
                    <li data-theme="tradewind" class="active">
                      <div class="tradewind"></div>
                    </li>
                    <li data-theme="monalisa"><div class="monalisa"></div></li>
                    <li data-theme="blue"><div class="blue"></div></li>
                    <li data-theme="cyan"><div class="cyan"></div></li>
                    <li data-theme="green"><div class="green"></div></li>
                    <li data-theme="orange"><div class="orange"></div></li>
                    <li data-theme="blush"><div class="blush"></div></li>
                    <li data-theme="red"><div class="red"></div></li>
                  </ul>
                </div>
                <div class="sidebar-gradient py-3">
                  <h6 class="card-title mb-2 fs-6 d-flex align-items-center">
                    <i class="icofont-paint fs-4 me-2 text-primary"></i>Sidebar
                    Gradient
                  </h6>
                  <div class="form-check form-switch gradient-switch pt-2 mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="CheckGradient"
                    />
                    <label class="form-check-label" for="CheckGradient"
                      >Enable Gradient! ( Sidebar )</label
                    >
                  </div>
                </div>
                <!-- Settings: Template dynamics -->
                <div class="dynamic-block py-3">
                  <ul class="list-unstyled choose-skin mb-2 mt-1">
                    <li data-theme="dynamic">
                      <div class="dynamic">
                        <i class="icofont-paint me-2"></i> Click to Dyanmic
                        Setting
                      </div>
                    </li>
                  </ul>
                  <div class="dt-setting">
                    <ul class="list-group list-unstyled mt-1">
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label>Primary Color</label>
                        <button
                          id="primaryColorPicker"
                          class="btn bg-primary avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label>Secondary Color</label>
                        <button
                          id="secondaryColorPicker"
                          class="btn bg-secondary avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label class="text-muted">Chart Color 1</label>
                        <button
                          id="chartColorPicker1"
                          class="btn chart-color1 avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label class="text-muted">Chart Color 2</label>
                        <button
                          id="chartColorPicker2"
                          class="btn chart-color2 avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label class="text-muted">Chart Color 3</label>
                        <button
                          id="chartColorPicker3"
                          class="btn chart-color3 avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label class="text-muted">Chart Color 4</label>
                        <button
                          id="chartColorPicker4"
                          class="btn chart-color4 avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center py-1 px-2"
                      >
                        <label class="text-muted">Chart Color 5</label>
                        <button
                          id="chartColorPicker5"
                          class="btn chart-color5 avatar xs border-0 rounded-0"
                        ></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Settings: Font -->
                <div class="setting-font py-3">
                  <h6 class="card-title mb-2 fs-6 d-flex align-items-center">
                    <i class="icofont-font fs-4 me-2 text-primary"></i> Font
                    Settings
                  </h6>
                  <ul class="list-group font_setting mt-1">
                    <li class="list-group-item py-1 px-2">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="font"
                          id="font-poppins"
                          value="font-poppins"
                        />
                        <label class="form-check-label" for="font-poppins">
                          Poppins Google Font
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item py-1 px-2">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="font"
                          id="font-opensans"
                          value="font-opensans"
                          checked=""
                        />
                        <label class="form-check-label" for="font-opensans">
                          Open Sans Google Font
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item py-1 px-2">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="font"
                          id="font-montserrat"
                          value="font-montserrat"
                        />
                        <label class="form-check-label" for="font-montserrat">
                          Montserrat Google Font
                        </label>
                      </div>
                    </li>
                    <li class="list-group-item py-1 px-2">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="font"
                          id="font-mukta"
                          value="font-mukta"
                        />
                        <label class="form-check-label" for="font-mukta">
                          Mukta Google Font
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Settings: Light/dark -->
                <div class="setting-mode py-3">
                  <h6 class="card-title mb-2 fs-6 d-flex align-items-center">
                    <i class="icofont-layout fs-4 me-2 text-primary"></i
                    >Contrast Layout
                  </h6>
                  <ul class="list-group list-unstyled mb-0 mt-1">
                    <li
                      class="list-group-item d-flex align-items-center py-1 px-2"
                    >
                      <div class="form-check form-switch theme-switch mb-0">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="theme-switch"
                        />
                        <label class="form-check-label" for="theme-switch"
                          >Enable Dark Mode!</label
                        >
                      </div>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center py-1 px-2"
                    >
                      <div
                        class="form-check form-switch theme-high-contrast mb-0"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="theme-high-contrast"
                        />
                        <label
                          class="form-check-label"
                          for="theme-high-contrast"
                          >Enable High Contrast</label
                        >
                      </div>
                    </li>
                    <li
                      class="list-group-item d-flex align-items-center py-1 px-2"
                    >
                      <div class="form-check form-switch theme-rtl mb-0">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="theme-rtl"
                        />
                        <label class="form-check-label" for="theme-rtl"
                          >Enable RTL Mode!</label
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="modal-footer justify-content-start">
                <button
                  type="button"
                  class="btn btn-white border lift"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary lift">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Jquery Core Js -->
    <script src="/assets/bundles/libscripts.bundle.js"></script>

    <!-- Plugin Js -->
    <script src="/assets/plugin/echarts/echarts.min.js"></script>
    <script src="/assets/bundles/apexcharts.bundle.js"></script>
    <script src="/assets/plugin/jqueryuicalandar/jquery-ui.min.js"></script>
    <script src="/assets/plugin/owlcarousel/owl.carousel.js"></script>
    <script src="/assets/bundles/dataTables.bundle.js"></script>
    <script src="/js/page/covid.js"></script>
    <script src="/front/js/main.js"></script>
    <!-- Jquery Page Js -->
    <script src="/js/template.js"></script>
    <script src="/js/page/index.js"></script>
    <script>
      $('#myDataTable')
        .addClass('nowrap')
        .dataTable({
          responsive: true,
          columnDefs: [{ targets: [-1, -3], className: 'dt-body-right' }],
        })
    </script>
  </body>
</html>
