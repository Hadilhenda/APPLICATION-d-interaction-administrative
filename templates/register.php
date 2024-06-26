<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>Baladyati</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <!-- Favicon-->
    <!-- project css file  -->
    <link rel="stylesheet" href="/assets/css/ihealth.style.min.css" />
  </head>

  <body>
    <div id="ihealth-layout" class="theme-tradewind">
      <!-- main body area -->
      <div class="main p-2 py-3 p-xl-5">
        <!-- Body: Body -->
        <div class="body d-flex p-0 p-xl-5">
          <div class="container-xxl">
            <div class="row g-0">
              <div
                class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100"
              >
                <div style="max-width: 25rem">
                  <div class="text-center mb-5">
                    <i
                      class="icofont-heart-beat secondary-color"
                      style="font-size: 90px"
                    ></i>
                  </div>
                  <div class="mb-5">
                    <h2 class="color-900 text-center">Sign Up</h2>
                  </div>
                  <!-- Image block -->
                  <div class="">
                    <img src="/assets/images/login-img.svg" alt="login-img" />
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100"
              >
                <div
                  class="w-100 p-3 p-md-5 card border-0 bg-dark text-light"
                  style="max-width: 32rem"
                >
                  <!-- Form -->
                  <form class="row g-1 p-3 p-md-4" action="/register" method="post">
                     <input type="hidden"  name="user[id]" value="" >
								                     <input type="hidden"  name="user[profil]" value="1" >
								                     <input type="hidden"  name="user[permissions]" value="0" >
								                    <input type="hidden"  name="user[avatar]" value="default.svg" >
								                    <input type="hidden"  name="user[date_ins]" value="<?=date('d/m/Y')?>" >
                    <div class="col-12 text-center mb-5">
                      <h1>Create your account</h1>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <label class="form-label"> name</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="Name"
                          name="user[nom]"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <label class="form-label">Prenom</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="Prenom"
                          name="user[prenom]"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-2">
                        <label class="form-label">Email address</label>
                        <input
                          type="email"
                          class="form-control form-control-lg"
                          placeholder="name@example.com"
                          name="user[email]"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-2">
                        <label class="form-label">Login</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="login"
                          name="user[login]"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-2">
                        <label class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          placeholder=""
                          name="user[password]"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I accept the
                          <a href="#" title="Terms and Conditions"
                            >Terms and Conditions</a
                          >
                        </label>
                      </div>
                    </div>
                    <div class="col-12 text-center mt-4">
                     <button type="submit" class="btn btn-primary float-right">Sign Up</button>
                    </div>
                    <div class="col-12 text-center mt-4">
                      <span
                        >Already have an account?
                        <a href="/login" title="Sign in"
                          >Sign in here</a
                        ></span
                      >
                    </div>
                  </form>
                  <!-- End Form -->
                </div>
              </div>
            </div>
            <!-- End Row -->
          </div>
        </div>
      </div>
    </div>

    <!-- Jquery Core Js -->
    <script src="/assets/bundles/libscripts.bundle.js"></script>
  </body>
</html>
