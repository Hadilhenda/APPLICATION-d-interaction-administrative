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
      href="/assets/images/logoBalad.png"
      
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
                    <img src="/assets/images/baladyati.png" alt="login-" style=" height: 100px; width: 100px; "/>
                  </div>
                  <div class="mb-5">
                    <h2 class="color-900 text-center">Baladyati</h2>
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
                  <form
                    class="row g-1 p-3 p-md-4"
                    action="/login"
                    method="post"
                  >
                    <div class="col-12 text-center mb-5">
                      <h1>Sign in</h1>
                      
                    </div>
                   
                    <div class="col-12">
                      <div class="mb-2">
                        <label class="form-label">Login</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="login"
                          id="username"
                          name="login"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-2">
                        <!-- <div class="form-label">
                          <span
                            class="d-flex justify-content-between align-items-center"
                          >
                            Password
                            <a href="/auth-password-reset.html"
                              >Forgot Password?</a
                            >
                          </span>
                        </div> -->
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          placeholder="***************"
                          id="password"
                          name="password"
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
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-12 text-center mt-4">
                      <button type="submit" class="btn btn-lg btn-block btn-light lift text-uppercase">
                    Sign in
                  </button>
                    </div>
                    <!-- <div class="col-12 text-center mt-4">
                      <span
                        >Don't have an account yet?
                        <a href="/register">Sign up here</a></span
                      >
                    </div> -->
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
