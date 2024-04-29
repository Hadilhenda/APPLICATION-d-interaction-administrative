import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

//css
import NotificationDataService from './services/notifications.service'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/login'
import Register from './components/register'

import Profile from './components/profile'
import BoardUser from './components/boardUser'
import BoardAnalyste from './components/boardAnalyste'
import BoardAdmin from './components/boardAdmin'
import BoardGestionnaire_hopitals from './components/BoardGestionnaire_hopitals'
import BoardResponsable_agences from './components/BoardResponsable_agences'
import { logout } from './actions/auth'
import { clearMessage } from './actions/message'
import { history } from './helpers/history'
//components
import Home from './components/home.cp'
import Stati from './components/statistique'
import AddRecommandation from './components/recommandation/add.cp'
import EditRecommandation from './components/recommandation/edit.cp'
import ShowRecommandations from './components/recommandation/list.cp'
import AddUser from './components/user/add.cp'
import EditUser from './components/user/edit.cp'
import ShowUsers from './components/user/list.cp'
import AddAnalyste from './components/analyste/add.cp'
import EditAnalyste from './components/analyste/edit.cp'
import ShowAnalystes from './components/analyste/list.cp'
import AddMunicipalite from './components/municipalite/add.cp'
import EditMunicipalite from './components/municipalite/edit.cp'
import ShowMunicipalites from './components/municipalite/list.cp'
import AddHopital from './components/hopital/add.cp'
import EditHopital from './components/hopital/edit.cp'
import ShowHopitals from './components/hopital/list.cp'
import AddResponsable_hop from './components/responsable_hop/add.cp'
import EditResponsable_hop from './components/responsable_hop/edit.cp'
import ShowResponsable_hops from './components/responsable_hop/list.cp'
import AddDCitoyen from './components/citoyen/addD.cp'
import AddCitoyen from './components/citoyen/add.cp'
import EditCitoyen from './components/citoyen/edit.cp'
import ShowCitoyens from './components/citoyen/list.cp'

import ListDeces from './components/citoyen/listDeces.cp'

import ValideDCitoyen from './components/citoyenMun/valideDCitoyen.cp'
import DetailsCitoyens from './components/citoyenMun/DetailsCitoyen.cp'
import DetailsCitoyensD from './components/citoyenMun/DetailsCitoyenD.cp'
import ValideCitoyen from './components/citoyenMun/valideCitoyen.cp'
import MaleInfo from './components/citoyenMun/maleInfo.cp'
import ValiderinfoCitoyen from './components/citoyen/validerinfoCitoyen.cp'
import DateEnt from './components/citoyen/dateEnter.cp'
import ShowCitoyensMun from './components/citoyenMun/list.cp'
//ShowCitoyensDeces
import ShowCitoyensDeces from './components/citoyenMun/listDeces.cp'
import AddGouvernorat from './components/gouvernorat/add.cp'
import EditGouvernorat from './components/gouvernorat/edit.cp'
import ShowGouvernorats from './components/gouvernorat/list.cp'

import AddDelegation from './components/delegation/add.cp'
import EditDelegation from './components/delegation/edit.cp'
import ShowDelegations from './components/delegation/list.cp'
import ShowReclamations from './components/reclamation/list.cp'
import ShowDechets from './components/dechetMuni/list.cp'
import AddDechet from './components/dechet/add.cp'
import EditDechet from './components/dechetMuni/edit.cp'
import AccepteDech from './components/dechet/accepteDech.cp'

import ShowDechetsH from './components/dechet/list.cp'
import ShowReunions from './components/reunion/list.cp'
import AddReunion from './components/reunion/add.cp'
import EditReunion from './components/reunion/edit.cp'
import ShowParticipes from './components/participe/list.cp'

import ShowReunionshop from './components/reunionHop/list.cp'
import ShowReunionsPar from './components/ParticipeHop/list.cp'
//import ShowResponsable_muns from './components/responsable_mun/list.cp'
const App = () => {
  const [showAnalysteBoard, setShowAnalysteBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [showResponsable_agencesBoard, setShowResponsable_agencesBoard] =
    useState(false)
  const [showGestionnaire_hopitalsBoard, setShowGestionnaire_hopitalsBoard] =
    useState(false)
  const navigate = useNavigate()
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()) // clear message when changing location
    })
  }, [dispatch])
  useEffect(() => {
    if (currentUser) {
      setShowAnalysteBoard(currentUser.roles.includes('ROLE_ANALYSTE'))
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'))
      setShowResponsable_agencesBoard(
        currentUser.roles.includes('ROLE_RESPONSABLE_AGENCES')
      )
      setShowGestionnaire_hopitalsBoard(
        currentUser.roles.includes('ROLE_GESTIONNAIRE_HOPITALS')
      )
    }
  }, [currentUser])
  const logOut = () => {
    dispatch(logout())
  }
  const Logo = {
    width: '35%',
    height: '90%',
  }

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    retrieveNotifications()
  }, [])
  const retrieveNotifications = () => {
    NotificationDataService.getAll(currentUser.id)
      .then((response) => {
        setNotifications(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const ValiderC = (id) => {
    navigate('/valideCitoyen/' + id)
  }
  const ValiderD = (id) => {
    navigate('/valideDCitoyen/' + id)
  }
  const Note = ({ id, action, citoyen, createdAt, idHop, nom, prenom }) => {
    return (
      <a href='' onClick={() => ValiderC(citoyen)} className='iq-sub-card'>
        <div className='media align-items-center'>
          <div className=''>
            <img
              className='avatar-40 rounded'
              src='/assets/images/user/01.jpg'
              alt=''
            />
          </div>
          <div className='media-body ml-3'>
            <h6 className='mb-0 '>{action}</h6>
            <small className='float-right font-size-12'>{createdAt}</small>
            <p className='mb-0'>
              {nom} {prenom}
            </p>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div id='app' className='wrapper'>
      <div className='iq-sidebar'>
        <div className='iq-sidebar-logo d-flex justify-content-between'>
          <a href='index.html'>
            <img
              src='/assets/images/res.png'
              className='img-fluid'
              alt='logo'
              style={Logo}
            />
            <span>Baladyti</span>
          </a>
          <div className='iq-menu-bt-sidebar'>
            <div className='iq-menu-bt align-self-center'>
              <div className='wrapper-menu'>
                <div className='main-circle'>
                  <i className='ri-more-fill'></i>
                </div>
                <div className='hover-circle'>
                  <i className='ri-more-2-fill'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='sidebar-scrollbar'>
          <nav className='iq-sidebar-menu'>
            <ul id='iq-sidebar-toggle' className='iq-menu'>
              <li className='iq-menu-title'>
                <i className='ri-subtract-line'></i>
                <span>Dashboard</span>
              </li>
              {showGestionnaire_hopitalsBoard && (
                <>
                  {/* <li className='nav-item'>
                    <Link to={'/statis'} className='nav-link'>
                      statique
                    </Link>
                  </li> */}

                  <li className='nav-item'>
                    <Link to={'/citoyens'} className='nav-link'>
                      Liste des citoyens
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/AddCitoyen'} className='nav-link'>
                      Deposer un nouvelle naissance
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/AddDechet'} className='nav-link'>
                      Demmande enlv déchets
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/listDechetsH'} className='nav-link'>
                      liste dechets
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/listDeces'} className='nav-link'>
                      Ajouter un nouvelle Décès
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/listReunionhop'} className='nav-link'>
                      les reunions
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/listParticipehop'} className='nav-link'>
                      Mes participations
                    </Link>
                  </li>
                </>
              )}
              {showResponsable_agencesBoard && (
                <>
                  {/* <li className='nav-item'>
                    <Link to={'/municipalites'} className='nav-link'>
                      municipalite
                    </Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to={'/reclamations'} className='nav-link'>
                      les reclamations
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/dechets'} className='nav-link'>
                      les dechets
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link to={'/responsable_muns'} className='nav-link'>
                      Responsable municipalite
                    </Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to={'/citoyen'} className='nav-link'>
                      Valider Naissance
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/citoyensD'} className='nav-link'>
                      Valider Décès
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/listReunion'} className='nav-link'>
                      les reunions
                    </Link>
                  </li>
                </>
              )}

              {showAnalysteBoard && (
                <>
                  <li className='nav-item'>
                    <Link to={'/analyste'} className='nav-link'>
                      Statistiques
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/analystes'} className='nav-link'>
                      Analystes
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/recommandations'} className='nav-link'>
                      recommandations
                    </Link>
                  </li>
                </>
              )}
              {showAdminBoard && (
                <>
                  <li className='nav-item'>
                    <Link to={'/admin'} className='nav-link'>
                      Statistiques
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/users'} className='nav-link'>
                      Users
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/gouvernorats'} className='nav-link'>
                      Gouvernorat
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/delegations'} className='nav-link'>
                      Delegations
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/analystes'} className='nav-link'>
                      Analystes
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/citoyens'} className='nav-link'>
                      Citoyens
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/hopitals'} className='nav-link'>
                      Hopital
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/municipalites'} className='nav-link'>
                      municipalite
                    </Link>
                  </li>
                </>
              )}
              {currentUser && (
                <li className='nav-item'>
                  <Link to={'/user'} className='nav-link'>
                    Users
                  </Link>
                </li>
              )}
              {currentUser ? (
                <div className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/profile'} className='nav-link'>
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <a href='/login' className='nav-link' onClick={logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/login'} className='nav-link'>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/register'} className='nav-link'>
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
          <div className='p-3'></div>
        </div>
      </div>

      <div id='content-page' className='content-page'>
        <div className='iq-top-navbar header-top-sticky'>
          <div className='iq-navbar-custom'>
            <div className='iq-sidebar-logo'>
              <div className='top-logo'>
                <a href='index.html' className='logo'>
                  <img
                    src='/assets/images/logo.png'
                    className='img-fluid'
                    alt=''
                  />
                  <span>Baladyti</span>
                </a>
              </div>
            </div>
            <nav className='navbar navbar-expand-lg navbar-light p-0'>
              <div className='iq-search-bar'>
                <form action='#' className='searchbox'>
                  <input
                    type='text'
                    className='text search-input'
                    placeholder='Type here to search...'
                  />
                  <a className='search-link' href='#'>
                    <i className='ri-search-line'></i>
                  </a>
                </form>
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='ri-menu-3-line'></i>
              </button>
              <div className='iq-menu-bt align-self-center'>
                <div className='wrapper-menu'>
                  <div className='main-circle'>
                    <i className='ri-more-fill'></i>
                  </div>
                  <div className='hover-circle'>
                    <i className='ri-more-2-fill'></i>
                  </div>
                </div>
              </div>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ml-auto navbar-list'>
                  <li className='nav-item'>
                    <a
                      className='search-toggle iq-waves-effect language-title'
                      href='#'
                    >
                      <img
                        src='/assets/images/small/Tunisia.png'
                        alt='img-flaf'
                        className='img-fluid mr-1'
                      />{' '}
                      Tunisia <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <div className='iq-sub-dropdown'>
                      <a className='iq-sub-card' href='#'>
                        <img
                          src='/assets/images/small/flag-02.png'
                          alt='img-flaf'
                          className='img-fluid mr-2'
                        />
                        French
                      </a>
                      <a className='iq-sub-card' href='#'>
                        <img
                          src='/assets/images/small/flag-03.png'
                          alt='img-flaf'
                          className='img-fluid mr-2'
                        />
                        Spanish
                      </a>
                      <a className='iq-sub-card' href='#'>
                        <img
                          src='/assets/images/small/flag-04.png'
                          alt='img-flaf'
                          className='img-fluid mr-2'
                        />
                        Italian
                      </a>
                      <a className='iq-sub-card' href='#'>
                        <img
                          src='/assets/images/small/flag-05.png'
                          alt='img-flaf'
                          className='img-fluid mr-2'
                        />
                        German
                      </a>
                      <a className='iq-sub-card' href='#'>
                        <img
                          src='/assets/images/small/flag-06.png'
                          alt='img-flaf'
                          className='img-fluid mr-2'
                        />
                        Japanese
                      </a>
                    </div>
                  </li>
                  <li className='nav-item iq-full-screen'>
                    <a href='#' className='iq-waves-effect' id='btnFullscreen'>
                      <i className='ri-fullscreen-line'></i>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#' className='search-toggle iq-waves-effect'>
                      <i className='ri-notification-3-fill'></i>
                      <span className='bg-danger dots'></span>
                    </a>
                    <div className='iq-sub-dropdown'>
                      <div className='iq-card shadow-none m-0'>
                        <div className='iq-card-body p-0 '>
                          <div className='bg-primary p-3'>
                            <h5 className='mb-0 text-white'>
                              All Notifications
                              <small className='badge  badge-light float-right pt-1'>
                                4
                              </small>
                            </h5>
                            {[...notifications]
                              .reverse()
                              .map((notification, i) => (
                                <Note key={i} {...notification} />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <a href='#' className='search-toggle iq-waves-effect'>
                      <i className='ri-mail-open-fill'></i>
                      <span className='bg-primary count-mail'></span>
                    </a>
                    <div className='iq-sub-dropdown'>
                      <div className='iq-card shadow-none m-0'>
                        <div className='iq-card-body p-0 '>
                          <div className='bg-primary p-3'>
                            <h5 className='mb-0 text-white'>
                              All Messages
                              <small className='badge  badge-light float-right pt-1'>
                                5
                              </small>
                            </h5>
                          </div>
                          <a href='#' className='iq-sub-card'>
                            <div className='media align-items-center'>
                              <div className=''>
                                <img
                                  className='avatar-40 rounded'
                                  src='/assets/images/user/01.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='media-body ml-3'>
                                <h6 className='mb-0 '>Municipalite</h6>
                                <small className='float-left font-size-12'>
                                  13 Jun
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href='#' className='iq-sub-card'>
                            <div className='media align-items-center'>
                              <div className=''>
                                <img
                                  className='avatar-40 rounded'
                                  src='/assets/images/user/02.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='media-body ml-3'>
                                <h6 className='mb-0 '>Lorem Ipsum Watson</h6>
                                <small className='float-left font-size-12'>
                                  20 Apr
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href='#' className='iq-sub-card'>
                            <div className='media align-items-center'>
                              <div className=''>
                                <img
                                  className='avatar-40 rounded'
                                  src='/assets/images/user/03.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='media-body ml-3'>
                                <h6 className='mb-0 '>Why do we use it?</h6>
                                <small className='float-left font-size-12'>
                                  30 Jun
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href='#' className='iq-sub-card'>
                            <div className='media align-items-center'>
                              <div className=''>
                                <img
                                  className='avatar-40 rounded'
                                  src='/assets/images/user/04.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='media-body ml-3'>
                                <h6 className='mb-0 '>Variations Passages</h6>
                                <small className='float-left font-size-12'>
                                  12 Sep
                                </small>
                              </div>
                            </div>
                          </a>
                          <a href='#' className='iq-sub-card'>
                            <div className='media align-items-center'>
                              <div className=''>
                                <img
                                  className='avatar-40 rounded'
                                  src='/assets/images/user/05.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='media-body ml-3'>
                                <h6 className='mb-0 '>
                                  Lorem Ipsum generators
                                </h6>
                                <small className='float-left font-size-12'>
                                  5 Dec
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className='navbar-list'>
                <li>
                  <a
                    href='#'
                    className='search-toggle iq-waves-effect d-flex align-items-center'
                  >
                    <img
                      src='/assets/images/user/1.jpg'
                      className='img-fluid rounded mr-3'
                      alt='user'
                    />
                    <div className='caption'>
                      <h6 className='mb-0 line-height'>
                        {currentUser.nom} Hopitals
                      </h6>
                      <span className='font-size-12'>Responsable</span>
                    </div>
                  </a>
                  <div className='iq-sub-dropdown iq-user-dropdown'>
                    <div className='iq-card shadow-none m-0'>
                      <div className='iq-card-body p-0 '>
                        <div className='bg-primary p-3'>
                          <h5 className='mb-0 text-white line-height'>
                            Hello Bini Jets
                          </h5>
                          <span className='text-white font-size-12'>
                            Available
                          </span>
                        </div>
                        <a
                          href='profile.html'
                          className='iq-sub-card iq-bg-primary-hover'
                        >
                          <div className='media align-items-center'>
                            <div className='rounded iq-card-icon iq-bg-primary'>
                              <i className='ri-file-user-line'></i>
                            </div>
                            <div className='media-body ml-3'>
                              <h6 className='mb-0 '>My Profile</h6>
                              <p className='mb-0 font-size-12'>
                                View personal profile details.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href='profile-edit.html'
                          className='iq-sub-card iq-bg-primary-hover'
                        >
                          <div className='media align-items-center'>
                            <div className='rounded iq-card-icon iq-bg-primary'>
                              <i className='ri-profile-line'></i>
                            </div>
                            <div className='media-body ml-3'>
                              <h6 className='mb-0 '>Edit Profile</h6>
                              <p className='mb-0 font-size-12'>
                                Modify your personal details.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href='account-setting.html'
                          className='iq-sub-card iq-bg-primary-hover'
                        >
                          <div className='media align-items-center'>
                            <div className='rounded iq-card-icon iq-bg-primary'>
                              <i className='ri-account-box-line'></i>
                            </div>
                            <div className='media-body ml-3'>
                              <h6 className='mb-0 '>Account settings</h6>
                              <p className='mb-0 font-size-12'>
                                Manage your account parameters.
                              </p>
                            </div>
                          </div>
                        </a>
                        <a
                          href='privacy-setting.html'
                          className='iq-sub-card iq-bg-primary-hover'
                        >
                          <div className='media align-items-center'>
                            <div className='rounded iq-card-icon iq-bg-primary'>
                              <i className='ri-lock-line'></i>
                            </div>
                            <div className='media-body ml-3'>
                              <h6 className='mb-0 '>Privacy Settings</h6>
                              <p className='mb-0 font-size-12'>
                                Control your privacy parameters.
                              </p>
                            </div>
                          </div>
                        </a>
                        <div className='d-inline-block w-100 text-center p-3'>
                          <a
                            href='/login'
                            className='nav-link'
                            onClick={logOut}
                          >
                            LogOut
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/statis' element={<Stati />} />
          <Route
            exact
            path='/recommandations'
            element={<ShowRecommandations />}
          />
          <Route
            exact
            path='/addRecommandation'
            element={<AddRecommandation />}
          />
          <Route
            path='/editRecommandation/:id'
            element={<EditRecommandation />}
          />
          <Route exact path='/users' element={<ShowUsers />} />
          <Route exact path='/addUser' element={<AddUser />} />
          <Route path='/editUser/:id' element={<EditUser />} />
          <Route exact path='/analystes' element={<ShowAnalystes />} />
          <Route exact path='/addAnalyste' element={<AddAnalyste />} />
          <Route path='/editAnalyste/:id' element={<EditAnalyste />} />
          <Route exact path='/municipalites' element={<ShowMunicipalites />} />
          <Route exact path='/addMunicipalite' element={<AddMunicipalite />} />
          <Route path='/editMunicipalite/:id' element={<EditMunicipalite />} />
          <Route exact path='/hopitals' element={<ShowHopitals />} />
          <Route exact path='/addHopital' element={<AddHopital />} />
          <Route path='/editHopital/:id' element={<EditHopital />} />
          <Route
            exact
            path='/responsable_hops'
            element={<ShowResponsable_hops />}
          />
          <Route
            exact
            path='/addResponsable_hop'
            element={<AddResponsable_hop />}
          />
          <Route
            path='/editResponsable_hop/:id'
            element={<EditResponsable_hop />}
          />
          <Route exact path='/citoyensD' element={<ShowCitoyensDeces />} />
          <Route exact path='/citoyen' element={<ShowCitoyensMun />} />
          <Route exact path='/citoyens' element={<ShowCitoyens />} />
          <Route exact path='/addCitoyen' element={<AddCitoyen />} />
          <Route exact path='/addDCitoyen' element={<AddDCitoyen />} />
          <Route path='/editCitoyen/:id' element={<EditCitoyen />} />
          <Route path='/detailsCitoyen/:id' element={<DetailsCitoyens />} />
          <Route path='/DetailsCitoyens/:id' element={<DetailsCitoyens />} />
          <Route path='/detailsCitoyenD/:id' element={<DetailsCitoyensD />} />
          <Route path='/valideDCitoyen/:id' element={<ValideDCitoyen />} />
          <Route path='/valideCitoyen/:id' element={<ValideCitoyen />} />
          <Route path='/maleInfo/:id' element={<MaleInfo />} />
          <Route
            path='/validerinfoCitoyen/:id'
            element={<ValiderinfoCitoyen />}
          />

          <Route path='/dateEnter/:id' element={<DateEnt />} />
          <Route path='/listDeces' element={<ListDeces />} />
          <Route exact path='/gouvernorats' element={<ShowGouvernorats />} />
          <Route path='/editGouvernorat/:id' element={<EditGouvernorat />} />
          <Route exact path='/addGouvernorat' element={<AddGouvernorat />} />
          <Route exact path='/delegations' element={<ShowDelegations />} />
          <Route path='/editDelegation/:id' element={<EditDelegation />} />
          <Route exact path='/addDelegation' element={<AddDelegation />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/user' element={<BoardUser />} />
          <Route path='/analyste' element={<BoardAnalyste />} />
          <Route path='/admin' element={<BoardAdmin />} />
          <Route
            path='/gestionnaire_hopitals'
            element={<BoardGestionnaire_hopitals />}
          />
          <Route
            path='/responsable_agences'
            element={<BoardResponsable_agences />}
          />
          <Route exact path='/reclamations' element={<ShowReclamations />} />
          <Route exact path='/AddDechet' element={<AddDechet />} />
          <Route exact path='/dechets' element={<ShowDechets />} />
          <Route path='/editDechet/:id' element={<EditDechet />} />
          <Route exact path='/listDechetsH' element={<ShowDechetsH />} />
          <Route path='/AccepteDech/:id' element={<AccepteDech />} />
          <Route exact path='/listReunion' element={<ShowReunions />} />
          <Route exact path='/AddReunion' element={<AddReunion />} />
          <Route path='/editReunion/:id' element={<EditReunion />} />
          <Route exact path='/participes/:id' element={<ShowParticipes />} />
          <Route exact path='/listReunionhop' element={<ShowReunionshop />} />
          <Route exact path='/listParticipehop' element={<ShowReunionsPar />} />
        </Routes>

        <footer className='bg-white iq-footer'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6'>
                <ul className='list-inline mb-0'>
                  <li className='list-inline-item'>
                    <a href='privacy-policy.html'>Privacy Policy</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='terms-of-service.html'>Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 text-right'>
                Copyright 2020 <a href='#'>Baladyti</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default App
