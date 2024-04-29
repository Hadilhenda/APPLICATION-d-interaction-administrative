import React, { useState, useEffect } from 'react'
import UserService from '../services/user.service'
const Stati = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        setContent(_content)
      }
    )
  }, [])
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='row'>
            <div className='col-md-6 col-lg-3'>
              <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
                <div className='iq-card-body'>
                  <div className='iq-progress-bar progress-bar-vertical iq-bg-primary'>
                    <span className='bg-primary' data-percent='70'></span>
                  </div>
                  <span className='line-height-4'>10 feb, 2020</span>
                  <h4 className='mb-2 mt-2'>Hypertensive Crisis</h4>
                  <p className='mb-0 text-secondary line-height'>
                    Ongoing treatment
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
                <div className='iq-card-body'>
                  <div className='iq-progress-bar progress-bar-vertical iq-bg-danger'>
                    <span className='bg-danger' data-percent='50'></span>
                  </div>
                  <span className='line-height-4'>12 Jan, 2020</span>
                  <h4 className='mb-2 mt-2'>Osteoporosis</h4>
                  <p className='mb-0 text-secondary line-height'>Incurable</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
                <div className='iq-card-body'>
                  <div className='iq-progress-bar progress-bar-vertical iq-bg-warning'>
                    <span className='bg-warning' data-percent='80'></span>
                  </div>
                  <span className='line-height-4'>15 feb, 2020</span>
                  <h4 className='mb-2 mt-2'>Hypertensive Crisis</h4>
                  <p className='mb-0 text-secondary line-height'>Examination</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
                <div
                  className='iq-card-body P-0 rounded'
                  background='url(/assets/images/page-img/38.jpg) no-repeat scroll center center'
                  background-size='contain '
                  min-height='146px'
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height iq-user-profile-block'>
            <div className='iq-card-body'>
              <div className='user-details-block'>
                <div className='user-profile text-center'>
                  <img
                    src='/assets/images/user/11.png'
                    alt='profile-img'
                    className='avatar-130 img-fluid'
                  />
                </div>
                <div className='text-center mt-3'>
                  <h4>
                    <b>Bini Jets</b>
                  </h4>
                  <p>Doctor</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    in arcu turpis. Nunc
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Assign
                  </a>
                </div>
                <hr />
                <ul className='doctoe-sedual d-flex align-items-center justify-content-between p-0'>
                  <li className='text-center'>
                    <h3 className='counter'>4500</h3>
                    <span>Operations</span>
                  </li>
                  <li className='text-center'>
                    <h3 className='counter'>3.9</h3>
                    <span>Medical Rating</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-8'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Health Curve</h4>
              </div>
            </div>
            <div className='iq-card-body'>
              <div id='home-chart-06' height='350px'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Nearest Treatment</h4>
              </div>
            </div>
            <div className='iq-card-body smaill-calender-home'>
              <input type='text' className='flatpicker d-none' />
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height-half'>
            <div className='iq-card-body'>
              <h6>APPOINTMENTS</h6>
              <h3>
                <b>5075</b>
              </h3>
            </div>
            <div id='wave-chart-7'></div>
          </div>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height-half'>
            <div className='iq-card-body'>
              <h6>NEW PATIENTS</h6>
              <h3>
                <b>1200</b>
              </h3>
            </div>
            <div id='wave-chart-8'></div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Hospital Management</h4>
              </div>
            </div>
            <div className='iq-card-body hospital-mgt'>
              <div className='progress mb-3' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='20%'
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  OPD
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='80% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  80%
                </div>
              </div>
              <div className='progress mb-3' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='30% '
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  Treatment
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='70% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  70%
                </div>
              </div>
              <div className='progress mb-3' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='60% '
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  Laboratory Test
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='40% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  85%
                </div>
              </div>
              <div className='progress mb-3' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='40% '
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  New Patient
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='60% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  70%
                </div>
              </div>
              <div className='progress mb-3' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='35% '
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  Doctors
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='65% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  95%
                </div>
              </div>
              <div className='progress' height='30px'>
                <div
                  className='progress-bar bg-primary'
                  role='progressbar'
                  width='28% '
                  aria-valuenow='15'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  Discharge
                </div>
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  width='80% '
                  aria-valuenow='30'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  35%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-3'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Patient Progress</h4>
              </div>
            </div>
            <div className='iq-card-body'>
              <ul className='patient-progress m-0 p-0'>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Bud Jet</h6>
                  </div>
                  <span className='badge badge-primary'>30%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Barney Cull</h6>
                  </div>
                  <span className='badge badge-success'>70%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Eric Shun</h6>
                  </div>
                  <span className='badge badge-danger'>15%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Rick Shaw</h6>
                  </div>
                  <span className='badge badge-warning'>55%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Ben Effit</h6>
                  </div>
                  <span className='badge badge-info'>45%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Rick Shaw</h6>
                  </div>
                  <span className='badge badge-warning'>55%</span>
                </li>
                <li className='d-flex mb-3 align-items-center'>
                  <div className='media-support-info'>
                    <h6>Marge Arita</h6>
                  </div>
                  <span className='badge badge-primary'>65%</span>
                </li>
                <li className='d-flex align-items-center'>
                  <div className='media-support-info'>
                    <h6>Barry Cudat</h6>
                  </div>
                  <span className='badge badge-danger'>15%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Patient overview</h4>
              </div>
            </div>
            <div className='iq-card-body pl-0 pr-0'>
              <div id='home-chart-03' height='280px'></div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Visits From Countries </h4>
              </div>
            </div>
            <div className='iq-card-body'>
              <div className='iq-details'>
                <span className='title text-dark'>United States</span>
                <div className='percentage float-right text-primary'>
                  95 <span>%</span>
                </div>
                <div className='iq-progress-bar-linear d-inline-block w-100'>
                  <div className='iq-progress-bar'>
                    <span className='bg-primary' data-percent='95'></span>
                  </div>
                </div>
              </div>
              <div className='iq-details mt-4'>
                <span className='title text-dark'>India</span>
                <div className='percentage float-right text-warning'>
                  75 <span>%</span>
                </div>
                <div className='iq-progress-bar-linear d-inline-block w-100'>
                  <div className='iq-progress-bar'>
                    <span className='bg-warning' data-percent='75'></span>
                  </div>
                </div>
              </div>
              <div className='iq-details mt-4'>
                <span className='title text-dark'>Australia</span>
                <div className='percentage float-right text-success'>
                  55 <span>%</span>
                </div>
                <div className='iq-progress-bar-linear d-inline-block w-100'>
                  <div className='iq-progress-bar'>
                    <span className='bg-success' data-percent='55'></span>
                  </div>
                </div>
              </div>
              <div className='iq-details mt-4'>
                <span className='title text-dark'>Brazil</span>
                <div className='percentage float-right text-danger'>
                  25 <span>%</span>
                </div>
                <div className='iq-progress-bar-linear d-inline-block w-100'>
                  <div className='iq-progress-bar'>
                    <span className='bg-danger' data-percent='25'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>New Appointments </h4>
              </div>
              <div className='iq-card-header-toolbar d-flex align-items-center'>
                <div className='dropdown'>
                  <span
                    className='dropdown-toggle text-primary'
                    id='dropdownMenuButton5'
                    data-toggle='dropdown'
                  >
                    <i className='ri-more-fill'></i>
                  </span>
                  <div
                    className='dropdown-menu dropdown-menu-right'
                    aria-labelledby='dropdownMenuButton5'
                  >
                    <a className='dropdown-item' href='#'>
                      <i className='ri-eye-fill mr-2'></i>View
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='ri-delete-bin-6-fill mr-2'></i>Delete
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='ri-pencil-fill mr-2'></i>Edit
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='ri-printer-fill mr-2'></i>Print
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='ri-file-download-fill mr-2'></i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='iq-card-body'>
              <div className='table-responsive'>
                <table className='table mb-0 table-borderless'>
                  <thead>
                    <tr>
                      <th scope='col'>Patient</th>
                      <th scope='col'>Doctor</th>
                      <th scope='col'>Date</th>
                      <th scope='col'>Timing</th>
                      <th scope='col'>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Petey Cruiser</td>
                      <td>Dr.Monty Carlo</td>
                      <td>20/02/2020</td>
                      <td>8:00 AM</td>
                      <td>+1-202-555-0146</td>
                    </tr>
                    <tr>
                      <td>Anna Sthesia</td>
                      <td>Dr.Pete Sariya</td>
                      <td>25/02/2020</td>
                      <td>8:30 AM</td>
                      <td>+1-202-555-0164</td>
                    </tr>
                    <tr>
                      <td>Paul Molive</td>
                      <td>Dr.Brock Lee</td>
                      <td>25/02/2020</td>
                      <td>9:45 AM</td>
                      <td>+1-202-555-0153</td>
                    </tr>
                    <tr>
                      <td>Anna Mull</td>
                      <td>Dr.Barb Ackue</td>
                      <td>27/02/2020</td>
                      <td>11:30 AM</td>
                      <td>+1-202-555-0154</td>
                    </tr>
                    <tr>
                      <td>Paige Turner</td>
                      <td>Dr.Walter Melon</td>
                      <td>28/02/2020</td>
                      <td>3:30 PM</td>
                      <td>+1-202-555-0101</td>
                    </tr>
                    <tr>
                      <td>Don Stairs</td>
                      <td>Dr.Arty Ficial</td>
                      <td>28/02/2020</td>
                      <td>4:30 PM</td>
                      <td>+1-202-555-0176</td>
                    </tr>
                    <tr>
                      <td>Pat Agonia</td>
                      <td>Dr.Barb Ackue</td>
                      <td>29/02/2020</td>
                      <td>5:00 PM</td>
                      <td>+1-202-555-0194</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Doctors Lists</h4>
              </div>
            </div>
            <div className='iq-card-body'>
              <ul className='doctors-lists m-0 p-0'>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/01.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Paul Molive</h6>
                    <p className='mb-0 font-size-12'>MBBS, MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton41'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/02.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Barb Dwyer</h6>
                    <p className='mb-0 font-size-12'>MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton42'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/03.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Terry Aki</h6>
                    <p className='mb-0 font-size-12'>MBBS</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton43'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/04.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Robin Banks</h6>
                    <p className='mb-0 font-size-12'>MBBS, MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton44'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/05.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Barry Wine</h6>
                    <p className='mb-0 font-size-12'>BAMS</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton45'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/06.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Zack Lee</h6>
                    <p className='mb-0 font-size-12'>MS, MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton46'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/07.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Otto Matic</h6>
                    <p className='mb-0 font-size-12'>MBBS, MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton47'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/08.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Moe Fugga</h6>
                    <p className='mb-0 font-size-12'>MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton48'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/09.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Bud Wiser</h6>
                    <p className='mb-0 font-size-12'>MBBS</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton49'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='d-flex mb-4 align-items-center'>
                  <div className='user-img img-fluid'>
                    <img
                      src='/assets/images/user/10.jpg'
                      alt='story-img'
                      className='rounded-circle avatar-40'
                    />
                  </div>
                  <div className='media-support-info ml-3'>
                    <h6>Dr. Barry Cade</h6>
                    <p className='mb-0 font-size-12'>MBBS, MD</p>
                  </div>
                  <div className='iq-card-header-toolbar d-flex align-items-center'>
                    <div className='dropdown show'>
                      <span
                        className='dropdown-toggle text-primary'
                        id='dropdownMenuButton50'
                        data-toggle='dropdown'
                        aria-expanded='true'
                        role='button'
                      >
                        <i className='ri-more-2-line'></i>
                      </span>
                      <div className='dropdown-menu dropdown-menu-right'>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-eye-line mr-2'></i>View
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='ri-bookmark-line mr-2'></i>Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a
                href='javascript:void();'
                className='btn btn-primary d-block mt-3'
              >
                <i className='ri-add-line'></i> View All Doctors{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stati
