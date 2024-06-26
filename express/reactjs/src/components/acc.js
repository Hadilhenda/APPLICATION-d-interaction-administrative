import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Acc = (props) => {
  const navigate = useNavigate()
  useEffect((isLoggedIn) => {
    if (isLoggedIn) {
      return navigate('/login')
    }
  }, [])

  return (
    <section className='sign-in-page'>
      <header className='cs-site__header cs-style1'>
        <div className='cs-main__header'>
          <div className='container'>
            <div className='cs-main__header__in'>
              <div className='cs-main__header__left'>
                <a className='cs-site__branding' href='index.html'>
                  <img src='/static/img/agency/handshake.png' alt='' />
                </a>
              </div>
              <div className='cs-main__header__right'>
                <div className='cs-nav'>
                  <ul className='cs-nav__list'>
                    <li>
                      <a href='/login'>Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='cs-hero cs-style1 cs-center'>
        <div className='container'>
          <div
            className='cs-hero__text wow fadeInRight'
            data-wow-duration='0.8s'
            data-wow-delay='0.3s'
          >
            <h1 className='cs-hero__title'>
              Nous pouvons atteindre <br /> le sommet ensemble
            </h1>{' '}
            <br /> <br />
            <div className='cs-hero__subtitle'>
              Aujourd'hui, grâce à l'interaction de la direction, nous pouvons
              faire progresser la vie <br /> professionnelle de nos citoyens et
              gagner du temps en ajoutant plus à notre pays.
            </div>
          </div>
        </div>
        <div className='cs-hero__img cs-parallax'>
          <div className='cs-to__right'>
            <img src='/static/img/agency/hero-img.svg' alt='Hero Image' />
          </div>
        </div>
        <div className='cs-partical__shape_wrap'>
          <div className='cs-partical__shape cs-shape__position1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px'>
              <path
                fill-rule='evenodd'
                fill='rgb(189, 210, 249)'
                d='M15.000,-0.000 C23.284,-0.000 30.000,6.715 30.000,15.000 C30.000,23.284 23.284,30.000 15.000,30.000 C6.716,30.000 -0.000,23.284 -0.000,15.000 C-0.000,6.715 6.716,-0.000 15.000,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position2'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(238, 118, 115)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position3'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(54, 97, 193)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position4'>
            <svg xmlns='http://www.w3.org/2000/svg' width='10px' height='10px'>
              <path
                fill-rule='evenodd'
                fill='rgb(146, 179, 244)'
                d='M5.000,-0.000 C7.761,-0.000 10.000,2.238 10.000,5.000 C10.000,7.761 7.761,10.000 5.000,10.000 C2.239,10.000 -0.000,7.761 -0.000,5.000 C-0.000,2.238 2.239,-0.000 5.000,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position5'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px'>
              <path
                fill-rule='evenodd'
                fill='rgb(108, 136, 207)'
                d='M10.000,-0.000 C15.523,-0.000 20.000,4.477 20.000,10.000 C20.000,15.523 15.523,20.000 10.000,20.000 C4.477,20.000 -0.000,15.523 -0.000,10.000 C-0.000,4.477 4.477,-0.000 10.000,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position6'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(221, 232, 252)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.357 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.357 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position7'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width='20'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='60'
                d='M368 368L144 144M368 144L144 368'
              />
            </svg>
          </div>
          <div className='cs-partical__shape cs-shape__position8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='243px'
              height='243px'
            >
              <path
                fill-rule='evenodd'
                fill='rgb(221, 232, 252)'
                d='M121.500,0.000 C188.603,0.000 243.000,54.397 243.000,121.500 C243.000,188.602 188.603,243.000 121.500,243.000 C54.397,243.000 -0.000,188.602 -0.000,121.500 C-0.000,54.397 54.397,0.000 121.500,0.000 Z'
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <div className='cs-height__120 cs-height__lg__70'></div>
        <div className='container'>
          <div className='cs-height__70 cs-height__lg__50'></div>
          <div className='row'>
            <div className='col-xl-3 col-sm-6'>
              <a
                href='#'
                className='cs-icon__box cs-style1 text-center cs-hobble'
              >
                <div className='cs-icon__box__in cs-hover__layer4'>
                  <div className='cs-hover__layer3'>
                    <div className='cs-icon__box__icon cs-center cs-hover__layer3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        version='1.1'
                        x='0px'
                        y='0px'
                        viewBox='0 0 512 512'
                        xml:space='preserve'
                        width='512'
                        height='512'
                        fill='#5E2CED'
                      >
                        <path
                          d='M139.327,118.114L96.901,75.688c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.426,42.426    c5.857,5.858,15.356,5.858,21.213,0C145.185,133.469,145.185,123.972,139.327,118.114z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                        <path
                          d='M76,241H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S84.284,241,76,241z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                        <path
                          d='M497,241h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S505.284,241,497,241z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                        <path
                          d='M436.312,75.688c-5.857-5.858-15.355-5.858-21.213,0l-42.426,42.426c-5.858,5.858-5.858,15.355,0,21.213    c5.857,5.858,15.356,5.858,21.213,0l42.426-42.426C442.17,91.043,442.17,81.546,436.312,75.688z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                        <path
                          d='M256,0c-8.284,0-15,6.716-15,15v61c0,8.284,6.716,15,15,15s15-6.716,15-15V15C271,6.716,264.284,0,256,0z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                        <path
                          d='M339.867,150.205c-32.508-25.801-74.844-35.074-116.148-25.445c-48.028,11.198-86.69,49.285-98.495,97.031    c-11.843,47.898,1.711,96.721,36.258,130.601C173.886,364.556,181,382.921,181,402.777V406c0,13.296,5.801,25.26,15,33.505V467    c0,24.813,20.187,45,45,45h30c24.813,0,45-20.187,45-45v-27.495c9.199-8.245,15-20.208,15-33.505v-3.282    c0-19.545,7.495-38.266,20.563-51.361C376.994,325.87,391,292.005,391,256C391,214.557,372.363,175.996,339.867,150.205z M286,467    c0,8.271-6.729,15-15,15h-30c-8.271,0-15-6.729-15-15v-16h60V467z M330.326,330.166C311.689,348.843,301,375.288,301,402.718V406    c0,8.271-6.729,15-15,15h-15v-91.898c25.849-6.678,45-30.195,45-58.102c0-8.284-6.716-15-15-15s-15,6.716-15,15    c0,16.542-13.458,30-30,30s-30-13.458-30-30c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,27.906,19.151,51.424,45,58.102V421h-15    c-8.271,0-15-6.729-15-15v-3.223c0-27.863-10.393-54.035-28.513-71.805c-26.889-26.371-37.409-64.494-28.14-101.981    c9.125-36.908,39.029-66.353,76.184-75.015c8.414-1.962,16.874-2.926,25.235-2.926c23.774,0,46.738,7.801,65.451,22.653    C346.5,193.77,361,223.766,361,256C361,284.004,350.106,310.343,330.326,330.166z'
                          data-original='#000000'
                          className='active-path'
                          data-old_color='#000000'
                          fill='inherit'
                        />
                      </svg>
                    </div>
                    <h2 className='cs-icon__box__title'>Idea Genarate</h2>
                    <div className='cs-icon__box__subtitle'>
                      Contrary to popular belief lorem Ipsum empty
                    </div>
                    <span className='cs-icon__box__btn__icon'>
                      <i className='fas fa-long-arrow-alt-right'></i>
                    </span>
                  </div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
            <div className='col-xl-3 col-sm-6'>
              <a
                href='#'
                className='cs-icon__box cs-style1 text-center cs-hobble'
              >
                <div className='cs-icon__box__in cs-hover__layer4'>
                  <div className='cs-hover__layer3'>
                    <div className='cs-icon__box__icon cs-center cs-hover__layer3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        version='1.1'
                        x='0px'
                        y='0px'
                        viewBox='0 0 512 512'
                        xml:space='preserve'
                        width='512'
                        height='512'
                      >
                        <path
                          d='M499.904,456.607H12.096C5.415,456.607,0,462.022,0,468.703c0,6.679,5.415,12.096,12.096,12.096h487.808    c6.679,0,12.096-5.417,12.096-12.096C512,462.023,506.585,456.607,499.904,456.607z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                        <path
                          d='M468.37,88.305h-84.948c-6.679,0-12.096,5.417-12.096,12.096v82.24h-60.757V43.297c0-6.679-5.417-12.096-12.096-12.096    h-84.95c-6.679,0-12.096,5.417-12.096,12.096v228.882h-60.757V169.36c0-6.681-5.417-12.096-12.096-12.096H43.626    c-6.681,0-12.096,5.415-12.096,12.096v231.563c0,6.681,5.417,12.096,12.096,12.096h84.948h84.948h84.95h84.949h84.948    c6.681,0,12.096-5.417,12.096-12.096V100.401C480.466,93.722,475.051,88.305,468.37,88.305z M116.479,388.827H55.722V181.456    h60.757V388.827z M201.429,388.827h-60.757v-92.456h60.757V388.827z M286.378,194.737v194.09H225.62V55.393h60.758V194.737z     M371.328,388.827h-60.757V206.833h60.757V388.827z M456.276,388.827H395.52v-194.09v-82.24h60.757V388.827z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                      </svg>
                    </div>
                    <h2 className='cs-icon__box__title'>Strategy Build</h2>
                    <div className='cs-icon__box__subtitle'>
                      Contrary to popular belief lorem Ipsum empty
                    </div>
                    <span className='cs-icon__box__btn__icon'>
                      <i className='fas fa-long-arrow-alt-right'></i>
                    </span>
                  </div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
            <div className='col-xl-3 col-sm-6'>
              <a
                href='#'
                className='cs-icon__box cs-style1 text-center cs-hobble'
              >
                <div className='cs-icon__box__in cs-hover__layer4'>
                  <div className='cs-hover__layer3'>
                    <div className='cs-icon__box__icon cs-center cs-hover__layer3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        enable-background='new 0 0 64 64'
                        height='512'
                        viewBox='0 0 64 64'
                        width='512'
                      >
                        <path
                          d='m23 50-21-11 3 7-3 4 3 4-3 7z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                        <path
                          d='m47 8c5.52283 0 10 4.47711 10 10 0 5.52283-4.47717 10-10 10-5.18524 0-9.44763-3.94678-9.94952-9h-5c.51684 7.8158 7.0028 14 14.94952 14 8.2843 0 15-6.71576 15-15 0-8.2843-6.7157-15-15-15-7.94672 0-14.43268 6.18414-14.94952 14h5c.50189-5.05328 4.76428-9 9.94952-9z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                        <path
                          d='m44.29297 15.70703 1.41406-1.41406 3.70703 3.70703-3.70703 3.70703-1.41406-1.41406 1.29297-1.29297h-3.48517c.46338 2.28217 2.48035 4 4.89923 4 2.76141 0 5-2.23859 5-5s-2.23859-5-5-5c-2.41888 0-4.43585 1.71783-4.89923 4h3.48517z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                        <path
                          d='m42 18c0-.34253.03516-.67682.10077-1h-5.05029c-.03266.32898-.05048.66241-.05048 1s.01782.67102.05048 1h5.05029c-.06561-.32318-.10077-.65747-.10077-1z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                        <path
                          d='m24.29297 21.70703 2.70703-2.70703h5.05048c-.02198-.33203-.05048-.66241-.05048-1s.0285-.66797.05048-1h-5.05048l-2.70703-2.70703-1.41406 1.41406 1.29297 1.29297h-4.08594c-5.79004 0-10.5 4.71045-10.5 10.5s4.70996 10.5 10.5 10.5h11.08594l2.70703 2.70703 1.41406-1.41406-1.29297-1.29297h20.5c3.03223 0 5.5 2.46729 5.5 5.5s-2.46777 5.5-5.5 5.5h-10.5l-2.70703-2.70703-1.41406 1.41406 1.29297 1.29297h-16.17188v2h16.17188l-1.29297 1.29297 1.41406 1.41406 2.70703-2.70703h10.5c4.13574 0 7.5-3.36426 7.5-7.5s-3.36426-7.5-7.5-7.5h-20.5l1.29297-1.29297-1.41406-1.41406-2.70703 2.70703h-11.08594c-4.68652 0-8.5-3.81299-8.5-8.5s3.81348-8.5 8.5-8.5h4.08594l-1.29297 1.29297z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                      </svg>
                    </div>
                    <h2 className='cs-icon__box__title'>Goal Set</h2>
                    <div className='cs-icon__box__subtitle'>
                      Contrary to popular belief lorem Ipsum empty
                    </div>
                    <span className='cs-icon__box__btn__icon'>
                      <i className='fas fa-long-arrow-alt-right'></i>
                    </span>
                  </div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
            <div className='col-xl-3 col-sm-6'>
              <a
                href='#'
                className='cs-icon__box cs-style1 text-center cs-hobble'
              >
                <div className='cs-icon__box__in cs-hover__layer4'>
                  <div className='cs-hover__layer3'>
                    <div className='cs-icon__box__icon cs-center cs-hover__layer3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        version='1.1'
                        x='0px'
                        y='0px'
                        viewBox='0 0 512 512'
                        xml:space='preserve'
                        width='512'
                        height='512'
                        className=''
                      >
                        <path
                          d='M507.448,108.594c-2.844-2-6.49-2.49-9.76-1.281l-86.958,31.625c-10.781,3.917-19.365,11.813-24.167,22.229    c-0.9,1.953-1.491,3.982-2.083,6.008c-14.932-4.245-42.682-13.111-70.26-27.32c-41.673-21.473-73.51-10.867-100.816,9.961    c-13.836,0.272-32.906,1.908-51.652,3.56c-11.958,1.055-23.259,2.026-32.423,2.585c-0.225-5.504-1.513-10.966-3.889-16.126    c-4.802-10.417-13.385-18.313-24.167-22.229L14.313,85.979c-3.26-1.198-6.927-0.708-9.76,1.281C1.698,89.261,0,92.521,0,96    v213.333C0,315.229,4.771,320,10.667,320h31.156c13.251,0,25.579-6.25,33.548-16.342c4.245,3.228,9.273,7.008,14.546,10.967    c12.448,9.365,26.073,19.583,32.052,24.594c39.719,33.25,87.469,69.156,96.979,75.406c8.885,5.833,24.885,12.042,37.052,12.042    c4.76,0,16.75,0,25.167-7.115c8.677,3.406,18.031,3.24,26.729-0.594c8.677-3.823,15.698-11.031,19.781-19.792    c8.333,1.708,17.906,0.458,26.583-3.896c8.135-4.073,14.125-10.24,17.333-17.448c7.708,0.708,15.938-1.802,23.302-7.438    c10.522-8.043,15.34-19.921,13.977-31.639l27.057-14.969c7.924,10.741,20.518,17.556,34.247,17.556h31.156    c5.896,0,10.667-4.771,10.667-10.667V117.334C512,113.854,510.302,110.594,507.448,108.594z M61.802,284.823    c-3.104,8.281-11.135,13.844-19.979,13.844h-20.49V111.229l72.646,26.417c5.396,1.969,9.688,5.917,12.083,11.125    c2.406,5.208,2.615,11.042,0.604,16.406L61.802,284.823z M381.948,353.438c-3.615,2.771-8.677,4.313-10.927,2.063    c-0.115-0.115-0.293-0.104-0.411-0.214c-0.204-0.189-0.305-0.444-0.526-0.62c-7.625-6.021-41.792-40.979-62.906-63    c-4.073-4.26-10.833-4.417-15.073-0.323c-4.26,4.073-4.406,10.823-0.323,15.073c4.956,5.173,44.74,46.608,60.663,61.099    c-1.189,4.684-5.531,7.576-7.736,8.682c-6.833,3.427-13.958,2.854-16.625,0.375c-0.079-0.074-0.197-0.07-0.279-0.142    c-0.13-0.116-0.188-0.279-0.326-0.389c-12.792-10.219-44.885-44.323-52.146-52.219c-3.99-4.344-10.729-4.615-15.073-0.635    c-4.333,3.99-4.625,10.74-0.635,15.073c0.35,0.379,31.802,34.306,49.467,50.065c-1.736,4.988-5.273,9.119-9.811,11.122    c-3.349,1.488-8.587,2.251-14.572-2.172c-15.318-12.988-46.059-45.711-52.105-52.182c-4.01-4.313-10.781-4.531-15.073-0.51    c-4.302,4.021-4.531,10.771-0.51,15.073c7.168,7.672,28.355,30.128,44.461,45.333c-1.799,0.219-3.688,0.344-5.482,0.344    c-7.063,0-19.198-4.51-25.333-8.542c-7.479-4.917-54.438-39.958-94.99-73.917c-6.135-5.146-20.135-15.677-32.948-25.302    c-6.867-5.155-13.194-9.908-17.857-13.495l39.938-106.516c10.367-0.453,24.188-1.648,38.815-2.938    c8.273-0.729,16.555-1.44,24.469-2.056c-12.164,12.487-30.249,34.852-27.865,55.816c1.094,9.542,6.313,17.49,15.115,22.99    c17.427,10.906,49.688,1.76,65.229-17.354c10.031-1.448,16.813-4.01,24.208-7.677c12.5,11.75,29.26,25.563,46.865,40.073    c30.646,25.25,65.385,53.875,74.573,69.927C391.333,345.271,384.24,351.688,381.948,353.438z M400.247,319.134    c-14.212-19.012-45.02-44.449-75.039-69.186c-20.01-16.49-38.906-32.063-51-44.156c-3.333-3.313-8.448-4.063-12.573-1.865    c-10.865,5.823-15.76,8.229-28.031,9.458c-3.271,0.333-6.208,2.146-7.958,4.927c-8.365,13.271-31.615,19.583-38.99,14.979    c-4.188-2.625-5-5.292-5.229-7.323c-1.031-9.073,8.156-24.781,23.396-40.031c37.74-37.74,64.719-45.125,99.625-27.125    c33.164,17.099,65.895,26.767,79.635,30.419c0.397,1.598,0.685,3.212,1.271,4.779l41.417,110.451L400.247,319.134z M490.667,320    h-20.49c-8.844,0-16.875-5.563-19.979-13.844l-44.865-119.635c-2.01-5.375-1.802-11.208,0.604-16.417    c2.396-5.208,6.688-9.156,12.083-11.125l72.646-26.417V320z'
                          data-original='#000000'
                          className='active-path'
                          fill='inherit'
                          data-old_color='#000000'
                        />
                      </svg>
                    </div>
                    <h2 className='cs-icon__box__title'>Interaction</h2>
                    <div className='cs-icon__box__subtitle'>
                      interaction administratif (étude de cas hôpital –
                      municipalité )
                    </div>
                    <span className='cs-icon__box__btn__icon'>
                      <i className='fas fa-long-arrow-alt-right'></i>
                    </span>
                  </div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
          </div>
        </div>
        <div className='cs-height__100 cs-height__lg__50'></div>
      </div>

      <div className='cs-height__130 cs-height__lg__70'></div>

      <div className='cs-parallax cs-style2'>
        <div className='container'>
          <div className='row cs-row__reverse__xl'>
            <div className='col-xl-6'>
              <div className='cs-vertical__middle'>
                <div className='cs-vertical__middle__in'>
                  <div className='cs-text__box cs-style1'>
                    <h2 className='cs-text__box__title'>Problématique</h2>
                    <div className='cs-height__25 cs-height__lg__25'></div>
                    <div className='cs-text__box__text'>
                      <p>
                        Actuellement, les hôpitaux sont témoins des problèmes
                        des <bR /> familles décédées du covid-19 ces dernières
                        années et les <bR /> municipalités ont tardé à les
                        enterrer, et nous n'avons pas oublié <bR />
                        l'accumulation de déchets médicaux, également ce que
                        nous voyons après les nouvelles naissances, Par exemple
                        il y a des problèmes avec l'enregistrement du nom,
                        <bR /> ou les parents du week-end doivent attendre
                        jusqu'à lundi pour s'inscrire.
                      </p>
                    </div>
                  </div>
                  <div className='cs-height__30 cs-height__lg__30'></div>
                </div>
              </div>
            </div>
            <div
              className='col-xl-6 wow fadeInLeft'
              data-wow-duration='0.8s'
              data-wow-delay='0.3s'
            >
              <div className='cs-right__full__width'>
                <div className='cs-box cs-size1 cs-align__left cs-space55'>
                  <img src='/static/img/agency/about2.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cs-parallax__shape cs-position1 cs-to__up'>
          <svg xmlns='http://www.w3.org/2000/svg' width='243px' height='243px'>
            <path
              fill-rule='evenodd'
              fill='rgb(221, 232, 252)'
              d='M121.500,0.000 C188.603,0.000 243.000,54.397 243.000,121.500 C243.000,188.602 188.603,243.000 121.500,243.000 C54.397,243.000 -0.000,188.602 -0.000,121.500 C-0.000,54.397 54.397,0.000 121.500,0.000 Z'
            ></path>
          </svg>
        </div>
        <div className='cs-height__100 cs-height__lg__50'></div>
      </div>

      <div id='portfolio'>
        <div className='container'>
          <div className='cs-height__120 cs-height__lg__70'></div>
          <div className='cs-section__heading cs-style1 text-center'>
            <h2
              className='cs-section__title wow fadeInUp'
              data-wow-duration='0.8s'
              data-wow-delay='0.2s'
            >
              {' '}
              Plateforme Baladyati qui vous donne{' '}
            </h2>
            <div className='cs-height__25 cs-height__lg__15'></div>
            <div className='cs-section__subtitle'>
              les solution du problème qui vous rencontrez dans le municipalité
              et les hôpitaux .
            </div>
          </div>
          <div className='cs-height__70 cs-height__lg__50'></div>
          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <a
                href='portfolio_details.html'
                className='cs-portfolio cs-style1'
              >
                <div
                  className='cs-portfolio__thumb cs-bg'
                  data-src='/static/img/agency/portfolio3.jpg'
                ></div>
                <div className='cs-portfolio__info'>
                  <div className='cs-portfolio__info__up'>
                    <h2 className='cs-portfolio__title'>
                      Application CITOYEN.TN
                    </h2>
                    <div className='cs-portfolio__subtitle'></div>
                  </div>
                  <div className='cs-portfolio__info__bg'></div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <a
                href='portfolio_details.html'
                className='cs-portfolio cs-style1'
              >
                <div
                  className='cs-portfolio__thumb cs-bg'
                  data-src='/static/img/agency/portfolio4.jpg'
                ></div>
                <div className='cs-portfolio__info'>
                  <div className='cs-portfolio__info__up'>
                    <h2 className='cs-portfolio__title'>
                      Le confort de citoyen
                    </h2>
                    <div className='cs-portfolio__subtitle'></div>
                  </div>

                  <div className='cs-portfolio__info__bg'></div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <a
                href='portfolio_details.html'
                className='cs-portfolio cs-style1'
              >
                <div
                  className='cs-portfolio__thumb cs-bg'
                  data-src='/static/img/agency/portfolio6.jpg'
                ></div>
                <div className='cs-portfolio__info'>
                  <div className='cs-portfolio__info__up'>
                    <h2 className='cs-portfolio__title'>Les statistiques</h2>
                    <div className='cs-portfolio__subtitle'></div>
                  </div>
                  <div className='cs-portfolio__info__bg'></div>
                </div>
              </a>
              <div className='cs-height__30 cs-height__lg__30'></div>
            </div>
          </div>
          <div className='cs-height__30 cs-height__lg__30'></div>
        </div>
      </div>
      <div className='cs-height__130 cs-height__lg__70'></div>
      <section className='cs-parallax cs-style1'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-6 wow fadeInRight'
              data-wow-duration='0.8s'
              data-wow-delay='0.2s'
            >
              <div className='cs-left__full__width'>
                <div className='cs-box cs-size1 cs-align__right cs-space55'>
                  <img src='/static/img/agency/about1.svg' alt='' />
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='cs-vertical__middle'>
                <div className='cs-vertical__middle__in'>
                  <div className='cs-text__box cs-style1'>
                    <h2 className='cs-text__box__title'>
                      Taux de réussite de notre plateforme{' '}
                    </h2>
                    <div className='cs-height__25 cs-height__lg__25'></div>
                    <div className='cs-text__box__text'>
                      Nous proposons de conception et de développer une <bR />{' '}
                      plate-forme d'interaction administrative entre le
                      municipalité <br /> et tous les hôpitaux qui tourne avec
                      lui a pour objectif de :
                    </div>
                    <div className='cs-height__30 cs-height__lg__30'></div>
                    <ul className='cs-list cs-style1 cs-mp0'>
                      <li>
                        <i className='far fa-check-square'></i>Déclarer les
                        nouveau-né et les décès a partir l’hôpital.
                      </li>
                      <li>
                        <i className='far fa-check-square'></i>Entretenir la
                        relation avec les citoyen.
                      </li>
                      <li>
                        <i className='far fa-check-square'></i>Statistiques pour
                        les nouveau-nés et les morts , y compris les mortes avec
                        le virus covid-19.
                      </li>
                      <li>
                        <i className='far fa-check-square'></i>Résoudre les
                        risques de problème des véhicules de déchet médicaux.
                      </li>
                      <li>
                        <i className='far fa-check-square'></i>Améliore
                        intégration entre hôpital et municipalité.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cs-parallax__shape cs-position1 cs-to__left'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(71, 104, 238)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.357 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.357 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position2 cs-to__left'>
            <svg xmlns='http://www.w3.org/2000/svg' width='10px' height='10px'>
              <path
                fill-rule='evenodd'
                fill='rgb(215, 201, 192)'
                d='M5.000,-0.000 C7.761,-0.000 10.000,2.238 10.000,5.000 C10.000,7.761 7.761,10.000 5.000,10.000 C2.238,10.000 -0.000,7.761 -0.000,5.000 C-0.000,2.238 2.238,-0.000 5.000,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position3 cs-yellow__color cs-add__shape cs-to__left__up'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              viewBox='0 0 512 512'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='80'
                d='M256 112v288M400 256H112'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position4 cs-cross__shape cs-orange__color cs-to__rotate'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width='20'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='60'
                d='M368 368L144 144M368 144L144 368'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position5 cs-to__up'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='243px'
              height='243px'
            >
              <path
                fill-rule='evenodd'
                fill='rgb(221, 232, 252)'
                d='M121.500,0.000 C188.603,0.000 243.000,54.397 243.000,121.500 C243.000,188.602 188.603,243.000 121.500,243.000 C54.397,243.000 -0.000,188.602 -0.000,121.500 C-0.000,54.397 54.397,0.000 121.500,0.000 Z'
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <div className='cs-height__120 cs-height__lg__70'></div>
          <div className='container'>
            <div className='cs-section__heading cs-style1 text-center'>
              <h2
                className='cs-section__title wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.2s'
              >
                Choose Your Right Solution
              </h2>
              <div className='cs-height__25 cs-height__lg__15'></div>
              <div className='cs-section__subtitle'>
                Consulted he eagerness unfeeling deficient existence of. Calling
                nothing end fertile for venture <br />
                way boy. Esteem spirit temper too say adieus who direct esteem.
              </div>
            </div>
            <div className='cs-height__70 cs-height__lg__50'></div>
            <div className='cs-slider cs-style1 cs-gap-30'>
              <div
                className='cs-slider__container'
                data-autoplay='0'
                data-loop='1'
                data-speed='600'
                data-center='0'
                data-slides-per-view='responsive'
                data-xs-slides='1'
                data-sm-slides='2'
                data-md-slides='3'
                data-lg-slides='4'
                data-add-slides='4'
              >
                <div className='cs-slider__wrapper'>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          version='1.1'
                          x='0px'
                          y='0px'
                          viewBox='0 0 512 512'
                          xml:space='preserve'
                          width='512'
                          height='512'
                          className=''
                        >
                          <path
                            d='M401.268,93.739H110.184c-9.083,0-16.445,7.362-16.445,16.445v291.083c0,9.083,7.362,16.445,16.445,16.445h291.083    c9.083,0,16.445-7.362,16.445-16.445V110.184C417.713,101.101,410.351,93.739,401.268,93.739z M384.822,384.822H126.63V126.63    h258.193V384.822z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M224.754,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C241.199,7.362,233.837,0,224.754,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M287.246,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.089,0,16.445-7.362,16.445-16.445V16.445C303.692,7.362,296.33,0,287.246,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M162.261,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C178.707,7.362,171.345,0,162.261,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M349.739,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C366.184,7.362,358.822,0,349.739,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M224.754,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C241.199,434.394,233.837,427.032,224.754,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M287.246,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.089,0,16.445-7.357,16.445-16.445v-52.077C303.692,434.394,296.33,427.032,287.246,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M162.261,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C178.707,434.394,171.345,427.032,162.261,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M349.739,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C366.184,434.394,358.822,427.032,349.739,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,208.308h-52.077c-9.083,0-16.445,7.362-16.445,16.445c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,215.67,504.638,208.308,495.555,208.308z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,270.801h-52.077c-9.083,0-16.445,7.362-16.445,16.445c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,278.163,504.638,270.801,495.555,270.801z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,145.816h-52.077c-9.083,0-16.445,7.362-16.445,16.445s7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445S504.638,145.816,495.555,145.816z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,333.293h-52.077c-9.083,0-16.445,7.362-16.445,16.445s7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,340.655,504.638,333.293,495.555,333.293z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,208.308H16.445C7.362,208.308,0,215.67,0,224.754c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,215.67,77.606,208.308,68.522,208.308z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,270.801H16.445C7.362,270.801,0,278.163,0,287.246c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,278.163,77.606,270.801,68.522,270.801z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,145.816H16.445C7.362,145.816,0,153.178,0,162.261s7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445S77.606,145.816,68.522,145.816z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,333.293H16.445C7.362,333.293,0,340.655,0,349.739s7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,340.655,77.606,333.293,68.522,333.293z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M308.077,187.478H203.923c-9.083,0-16.445,7.362-16.445,16.445v104.154c0,9.083,7.362,16.445,16.445,16.445h104.154    c9.083,0,16.445-7.362,16.445-16.445V203.923C324.522,194.84,317.16,187.478,308.077,187.478z M291.632,291.632h-71.263v-71.263    h71.263V291.632z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>IT Consulting</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          enable-background='new 0 0 512 512'
                          height='512'
                          viewBox='0 0 512 512'
                          width='512'
                        >
                          <path
                            d='m428.82 328.109-45.963 45.962-17.678-17.678c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l28.284 28.284c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l56.569-56.568c5.858-5.857 5.858-15.355 0-21.213-5.854-5.858-15.352-5.858-21.211 0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m218.651 323.409c-2.317-.819-4.677-1.67-7.039-2.549v-42.301c4.34 1.496 6.586 3.673 6.883 3.976 4.545 5.135 12.391 5.651 17.571 1.138 5.205-4.536 5.748-12.432 1.212-17.636-4.271-4.901-13.126-11.05-25.666-13.146v-6.891c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5v8.276c-.876.228-1.759.474-2.652.743-15.112 4.552-26.398 17.456-29.455 33.676-2.803 14.873 2.02 29.26 12.584 37.546 5.057 3.967 11.23 7.602 19.523 11.389v54.913c-6.049-.804-10.573-2.782-17.661-7.418-5.778-3.78-13.524-2.16-17.303 3.618-3.779 5.777-2.16 13.524 3.618 17.303 12.257 8.018 20.874 10.781 31.346 11.646v8.308c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5v-9.476c8.214-2.01 15.684-5.989 22.01-11.801 8.459-7.772 14.168-18.302 16.076-29.65 3.923-23.332-8.264-43.612-31.047-51.664zm-36.133-16.839c-3.144-2.466-4.497-7.665-3.445-13.245.794-4.212 3.172-9.1 7.539-12.153v28.233c-1.481-.926-2.864-1.87-4.094-2.835zm42.526 64.358c-1.217 7.239-5.768 14.875-13.432 19.011v-42.469c14.657 5.875 14.302 18.287 13.432 23.458z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m497 262c-18.954 0-35.995-10.532-44.473-27.485l-2.11-4.222c-2.541-5.083-7.735-8.293-13.417-8.293h-80c-5.682 0-10.876 3.21-13.417 8.292l-2.11 4.222c-.813 1.625-1.706 3.191-2.67 4.694-20.477-27.615-43.211-52.189-63.802-73.323v-49.014c19.905-28.102 29.999-58.983 29.999-91.871v-10c0-8.284-6.716-15-15-15h-10c-27.78 0-64.015 17.992-80 26.746-15.985-8.754-52.22-26.746-80-26.746h-10c-8.284 0-15 6.716-15 15v10c0 32.887 10.094 63.769 30 91.872v49.019c-62.534 64.284-125 141.711-125 231.109l.001 1.076c.14 62.818 52.091 113.924 115.81 113.924h168.378c23.723 0 46.819-7.257 66.205-20.618 12.868 8.681 27.07 15.418 42.295 19.985 1.406.422 2.858.633 4.311.633s2.904-.211 4.311-.633c32.234-9.67 59.892-29.054 79.981-56.054 20.09-27.001 30.708-59.062 30.708-92.716v-85.597c0-8.284-6.716-15-15-15zm-342-135h90v30h-90zm37.305-70.124c4.734 2.829 10.646 2.829 15.384.003 11.624-6.932 44.646-24.117 67.207-26.583-.951 23.872-8.382 45.805-22.604 66.704h-104.583c-14.223-20.9-21.653-42.833-22.604-66.704 22.56 2.466 55.582 19.651 67.2 26.58zm-76.494 425.124c-47.213 0-85.707-37.678-85.81-83.978l-.001-1.022c0-78.661 58.065-150.097 116.315-210h107.373c20.142 20.68 42.345 44.696 61.996 71.397-5.817 2.345-12.136 3.603-18.684 3.603-8.284 0-15 6.716-15 15v85.597c0 33.654 10.618 65.715 30.708 92.716 4.171 5.605 8.672 10.877 13.469 15.807-12.771 7.074-27.212 10.88-41.987 10.88zm366.189-119.403c0 54.256-33.971 101.385-85 118.66-51.029-17.275-85-64.404-85-118.66v-71.995c22.701-4.285 42.437-18.2 54.125-38.603h61.75c11.688 20.402 31.424 34.318 54.125 38.603z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Financial Plan</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          enable-background='new 0 0 512 512'
                          height='512'
                          viewBox='0 0 512 512'
                          width='512'
                        >
                          <path
                            d='m61 150h-30v120h30v30h30v-30h30v-120h-30v-30h-30zm30 90h-30v-60h30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m211 240v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m331 210v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m451 180v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m16 360h123.541l120-60h120l81.58-40.79-6.039 25.844 29.213 6.827 16.149-69.103-64.971-28.543-12.067 27.467 24.299 10.675-75.246 37.623h-120l-120 60h-116.459z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m481 330h-90v152h-30v-152h-90v152h-30v-131.271l-90 45v86.271h-30v-92h-90v92h-31v30h512v-30h-31zm-60 30h30v122h-30zm-120 0h30v122h-30zm-120 54.271 30-15v82.729h-30zm-120 5.729h30v62h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Business Growth</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          version='1.1'
                          x='0px'
                          y='0px'
                          viewBox='0 0 512.005 512.005'
                          xml:space='preserve'
                          width='512'
                          height='512'
                        >
                          <path
                            d='M224,170.669h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128c0,5.888,4.779,10.667,10.667,10.667H224     c5.888,0,10.667-4.779,10.667-10.667v-128C234.667,175.448,229.888,170.669,224,170.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M138.667,234.669H96c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667h42.667     c5.888,0,10.667-4.779,10.667-10.667v-64C149.333,239.448,144.555,234.669,138.667,234.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M309.333,106.669h-42.667c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667h42.667     c5.888,0,10.667-4.779,10.667-10.667v-192C320,111.448,315.221,106.669,309.333,106.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M505.749,475.587L378.411,348.248c30.123-36.779,48.256-83.755,48.256-134.912c0-117.632-95.701-213.333-213.333-213.333     S0,95.704,0,213.336s95.701,213.333,213.333,213.333c51.157,0,98.133-18.133,134.912-48.256l127.339,127.339     c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z      M213.333,384.003c-94.101,0-170.667-76.565-170.667-170.667S119.232,42.669,213.333,42.669S384,119.235,384,213.336     S307.435,384.003,213.333,384.003z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Market Analysis</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          version='1.1'
                          x='0px'
                          y='0px'
                          viewBox='0 0 512 512'
                          xml:space='preserve'
                          width='512'
                          height='512'
                          className=''
                        >
                          <path
                            d='M401.268,93.739H110.184c-9.083,0-16.445,7.362-16.445,16.445v291.083c0,9.083,7.362,16.445,16.445,16.445h291.083    c9.083,0,16.445-7.362,16.445-16.445V110.184C417.713,101.101,410.351,93.739,401.268,93.739z M384.822,384.822H126.63V126.63    h258.193V384.822z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M224.754,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C241.199,7.362,233.837,0,224.754,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M287.246,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.089,0,16.445-7.362,16.445-16.445V16.445C303.692,7.362,296.33,0,287.246,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M162.261,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C178.707,7.362,171.345,0,162.261,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M349.739,0c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.362,16.445-16.445V16.445C366.184,7.362,358.822,0,349.739,0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M224.754,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C241.199,434.394,233.837,427.032,224.754,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M287.246,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.089,0,16.445-7.357,16.445-16.445v-52.077C303.692,434.394,296.33,427.032,287.246,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M162.261,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C178.707,434.394,171.345,427.032,162.261,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M349.739,427.032c-9.083,0-16.445,7.362-16.445,16.445v52.077c0,9.083,7.362,16.445,16.445,16.445    c9.083,0,16.445-7.357,16.445-16.445v-52.077C366.184,434.394,358.822,427.032,349.739,427.032z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,208.308h-52.077c-9.083,0-16.445,7.362-16.445,16.445c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,215.67,504.638,208.308,495.555,208.308z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,270.801h-52.077c-9.083,0-16.445,7.362-16.445,16.445c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,278.163,504.638,270.801,495.555,270.801z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,145.816h-52.077c-9.083,0-16.445,7.362-16.445,16.445s7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445S504.638,145.816,495.555,145.816z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M495.555,333.293h-52.077c-9.083,0-16.445,7.362-16.445,16.445s7.362,16.445,16.445,16.445h52.077    c9.089,0,16.445-7.362,16.445-16.445C512,340.655,504.638,333.293,495.555,333.293z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,208.308H16.445C7.362,208.308,0,215.67,0,224.754c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,215.67,77.606,208.308,68.522,208.308z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,270.801H16.445C7.362,270.801,0,278.163,0,287.246c0,9.083,7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,278.163,77.606,270.801,68.522,270.801z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,145.816H16.445C7.362,145.816,0,153.178,0,162.261s7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445S77.606,145.816,68.522,145.816z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M68.522,333.293H16.445C7.362,333.293,0,340.655,0,349.739s7.362,16.445,16.445,16.445h52.077    c9.083,0,16.445-7.362,16.445-16.445C84.968,340.655,77.606,333.293,68.522,333.293z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M308.077,187.478H203.923c-9.083,0-16.445,7.362-16.445,16.445v104.154c0,9.083,7.362,16.445,16.445,16.445h104.154    c9.083,0,16.445-7.362,16.445-16.445V203.923C324.522,194.84,317.16,187.478,308.077,187.478z M291.632,291.632h-71.263v-71.263    h71.263V291.632z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>IT Consulting</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          enable-background='new 0 0 512 512'
                          height='512'
                          viewBox='0 0 512 512'
                          width='512'
                        >
                          <path
                            d='m428.82 328.109-45.963 45.962-17.678-17.678c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l28.284 28.284c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l56.569-56.568c5.858-5.857 5.858-15.355 0-21.213-5.854-5.858-15.352-5.858-21.211 0z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m218.651 323.409c-2.317-.819-4.677-1.67-7.039-2.549v-42.301c4.34 1.496 6.586 3.673 6.883 3.976 4.545 5.135 12.391 5.651 17.571 1.138 5.205-4.536 5.748-12.432 1.212-17.636-4.271-4.901-13.126-11.05-25.666-13.146v-6.891c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5v8.276c-.876.228-1.759.474-2.652.743-15.112 4.552-26.398 17.456-29.455 33.676-2.803 14.873 2.02 29.26 12.584 37.546 5.057 3.967 11.23 7.602 19.523 11.389v54.913c-6.049-.804-10.573-2.782-17.661-7.418-5.778-3.78-13.524-2.16-17.303 3.618-3.779 5.777-2.16 13.524 3.618 17.303 12.257 8.018 20.874 10.781 31.346 11.646v8.308c0 6.904 5.596 12.5 12.5 12.5s12.5-5.596 12.5-12.5v-9.476c8.214-2.01 15.684-5.989 22.01-11.801 8.459-7.772 14.168-18.302 16.076-29.65 3.923-23.332-8.264-43.612-31.047-51.664zm-36.133-16.839c-3.144-2.466-4.497-7.665-3.445-13.245.794-4.212 3.172-9.1 7.539-12.153v28.233c-1.481-.926-2.864-1.87-4.094-2.835zm42.526 64.358c-1.217 7.239-5.768 14.875-13.432 19.011v-42.469c14.657 5.875 14.302 18.287 13.432 23.458z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m497 262c-18.954 0-35.995-10.532-44.473-27.485l-2.11-4.222c-2.541-5.083-7.735-8.293-13.417-8.293h-80c-5.682 0-10.876 3.21-13.417 8.292l-2.11 4.222c-.813 1.625-1.706 3.191-2.67 4.694-20.477-27.615-43.211-52.189-63.802-73.323v-49.014c19.905-28.102 29.999-58.983 29.999-91.871v-10c0-8.284-6.716-15-15-15h-10c-27.78 0-64.015 17.992-80 26.746-15.985-8.754-52.22-26.746-80-26.746h-10c-8.284 0-15 6.716-15 15v10c0 32.887 10.094 63.769 30 91.872v49.019c-62.534 64.284-125 141.711-125 231.109l.001 1.076c.14 62.818 52.091 113.924 115.81 113.924h168.378c23.723 0 46.819-7.257 66.205-20.618 12.868 8.681 27.07 15.418 42.295 19.985 1.406.422 2.858.633 4.311.633s2.904-.211 4.311-.633c32.234-9.67 59.892-29.054 79.981-56.054 20.09-27.001 30.708-59.062 30.708-92.716v-85.597c0-8.284-6.716-15-15-15zm-342-135h90v30h-90zm37.305-70.124c4.734 2.829 10.646 2.829 15.384.003 11.624-6.932 44.646-24.117 67.207-26.583-.951 23.872-8.382 45.805-22.604 66.704h-104.583c-14.223-20.9-21.653-42.833-22.604-66.704 22.56 2.466 55.582 19.651 67.2 26.58zm-76.494 425.124c-47.213 0-85.707-37.678-85.81-83.978l-.001-1.022c0-78.661 58.065-150.097 116.315-210h107.373c20.142 20.68 42.345 44.696 61.996 71.397-5.817 2.345-12.136 3.603-18.684 3.603-8.284 0-15 6.716-15 15v85.597c0 33.654 10.618 65.715 30.708 92.716 4.171 5.605 8.672 10.877 13.469 15.807-12.771 7.074-27.212 10.88-41.987 10.88zm366.189-119.403c0 54.256-33.971 101.385-85 118.66-51.029-17.275-85-64.404-85-118.66v-71.995c22.701-4.285 42.437-18.2 54.125-38.603h61.75c11.688 20.402 31.424 34.318 54.125 38.603z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Financial Plan</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          enable-background='new 0 0 512 512'
                          height='512'
                          viewBox='0 0 512 512'
                          width='512'
                        >
                          <path
                            d='m61 150h-30v120h30v30h30v-30h30v-120h-30v-30h-30zm30 90h-30v-60h30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m211 240v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m331 210v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m451 180v-30h30v-120h-30v-30h-30v30h-30v120h30v30zm-30-120h30v60h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m16 360h123.541l120-60h120l81.58-40.79-6.039 25.844 29.213 6.827 16.149-69.103-64.971-28.543-12.067 27.467 24.299 10.675-75.246 37.623h-120l-120 60h-116.459z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='m481 330h-90v152h-30v-152h-90v152h-30v-131.271l-90 45v86.271h-30v-92h-90v92h-31v30h512v-30h-31zm-60 30h30v122h-30zm-120 0h30v122h-30zm-120 54.271 30-15v82.729h-30zm-120 5.729h30v62h-30z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Business Growth</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                  <div className='cs-slide'>
                    <a href='#' className='cs-icon__box cs-style2 text-center'>
                      <div className='cs-icon__box__icon cs-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          version='1.1'
                          x='0px'
                          y='0px'
                          viewBox='0 0 512.005 512.005'
                          xml:space='preserve'
                          width='512'
                          height='512'
                        >
                          <path
                            d='M224,170.669h-42.667c-5.888,0-10.667,4.779-10.667,10.667v128c0,5.888,4.779,10.667,10.667,10.667H224     c5.888,0,10.667-4.779,10.667-10.667v-128C234.667,175.448,229.888,170.669,224,170.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M138.667,234.669H96c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667h42.667     c5.888,0,10.667-4.779,10.667-10.667v-64C149.333,239.448,144.555,234.669,138.667,234.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M309.333,106.669h-42.667c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667h42.667     c5.888,0,10.667-4.779,10.667-10.667v-192C320,111.448,315.221,106.669,309.333,106.669z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                          <path
                            d='M505.749,475.587L378.411,348.248c30.123-36.779,48.256-83.755,48.256-134.912c0-117.632-95.701-213.333-213.333-213.333     S0,95.704,0,213.336s95.701,213.333,213.333,213.333c51.157,0,98.133-18.133,134.912-48.256l127.339,127.339     c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z      M213.333,384.003c-94.101,0-170.667-76.565-170.667-170.667S119.232,42.669,213.333,42.669S384,119.235,384,213.336     S307.435,384.003,213.333,384.003z'
                            data-original='#000000'
                            className='active-path'
                            fill='inherit'
                            data-old_color='#000000'
                          />
                        </svg>
                      </div>
                      <div className='cs-height__35 cs-height__lg__35'></div>
                      <h2 className='cs-icon__box__title'>Market Analysis</h2>
                      <span className='cs-btn cs-style1 cs-color2 cs-primary__font'>
                        <span className='cs-btn__text'>Join us Now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='cs-pagination cs-style1 cs-hidden cs-center'></div>
              <div className='cs-slider__arrows cs-style1 cs-center'>
                <div className='cs-left__arrow cs-center'>
                  <i className='fas fa-chevron-left'></i>
                </div>
                <div className='cs-right__arrow cs-center'>
                  <i className='fas fa-chevron-right'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='cs-height__130 cs-height__lg__70'></div>
        </div>
        <div className='cs-gray__bg '>
          <div className='cs-parallax cs-style3'>
            <div className='cs-height__120 cs-height__lg__70'></div>
            <div className='cs-section__heading cs-style1 text-center'>
              <h2
                className='cs-section__title wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.2s'
              >
                Réunion
              </h2>
              <div className='cs-height__25 cs-height__lg__15'></div>
              <div className='cs-section__subtitle'>
                Les communes peut organiser réunion régional pour traiter les
                problème avec les hôpitaux <br />.
              </div>
            </div>
            <div className='cs-height__70 cs-height__lg__50'></div>
            <div className='container'>
              <div className='text-center'>
                <img src='/static/img/agency/counter-img.svg' alt='' />
              </div>
              <div className='cs-height__60 cs-height__lg__40'></div>
              <div className='row'>
                <div className='col-lg-3 col-sm-6'>
                  <div className='cs-counter cs-style1 text-center'>
                    <div className='cs-counter__number'>
                      <span data-count-to='1200' className='odometer'></span>
                    </div>
                    <h4 className='cs-counter__title'>Les communes</h4>
                  </div>
                  <div className='cs-height__25 cs-height__lg__25'></div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='cs-counter cs-style1 text-center'>
                    <div className='cs-counter__number'>
                      <span data-count-to='1854' className='odometer'></span>
                    </div>
                    <h4 className='cs-counter__title'>Les hôpitaux</h4>
                  </div>
                  <div className='cs-height__25 cs-height__lg__25'></div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='cs-counter cs-style1 text-center'>
                    <div className='cs-counter__number'>
                      <span data-count-to='15' className='odometer'></span>
                    </div>
                    <h4 className='cs-counter__title'>Les participant</h4>
                  </div>
                  <div className='cs-height__25 cs-height__lg__25'></div>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <div className='cs-counter cs-style1 text-center'>
                    <div className='cs-counter__number'>
                      <span data-count-to='30' className='odometer'></span>
                      <span>+</span>
                    </div>
                    <h4 className='cs-counter__title'>TOTAL REUNION</h4>
                  </div>
                  <div className='cs-height__25 cs-height__lg__25'></div>
                </div>
              </div>
            </div>
            <div className='cs-height__100 cs-height__lg__45'></div>
            <div className='cs-parallax__shape cs-position1 cs-to__left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='380px'
                height='183px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(106, 208, 53)'
                  d='M378.984,-0.000 C252.656,0.124 126.328,0.248 -0.000,0.372 C-0.000,0.372 36.612,88.662 173.743,81.860 C173.743,81.860 225.550,196.399 380.000,181.690 C379.661,121.126 379.323,60.563 378.984,-0.000 Z'
                />
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position2 cs-to__right'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='385px'
                height='183px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(152, 141, 182)'
                  d='M1.335,182.997 C129.220,182.658 257.104,182.319 384.989,181.981 C384.989,181.981 347.774,93.769 208.964,100.802 C208.964,100.802 156.322,-13.629 -0.006,1.341 C0.441,61.893 0.888,122.445 1.335,182.997 Z'
                />
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position3 cs-to__left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16px'
                height='16px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(131, 104, 207)'
                  d='M8.000,-0.000 C12.418,-0.000 16.000,3.582 16.000,8.000 C16.000,12.418 12.418,16.000 8.000,16.000 C3.582,16.000 -0.000,12.418 -0.000,8.000 C-0.000,3.582 3.582,-0.000 8.000,-0.000 Z'
                />
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position4 cs-to__right cs-cross__shape cs-green__color'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                width='20'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='60'
                  d='M368 368L144 144M368 144L144 368'
                ></path>
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position5 cs-to__left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25px'
                height='25px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(238, 118, 115)'
                  d='M12.500,-0.000 C19.403,-0.000 25.000,5.596 25.000,12.500 C25.000,19.403 19.403,25.000 12.500,25.000 C5.596,25.000 -0.000,19.403 -0.000,12.500 C-0.000,5.596 5.596,-0.000 12.500,-0.000 Z'
                />
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position6 cs-to__left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(174, 155, 225)'
                  d='M10.000,-0.000 C15.523,-0.000 20.000,4.477 20.000,10.000 C20.000,15.522 15.523,20.000 10.000,20.000 C4.477,20.000 -0.000,15.522 -0.000,10.000 C-0.000,4.477 4.477,-0.000 10.000,-0.000 Z'
                />
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position7 cs-to__right cs-add__shape'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                viewBox='0 0 512 512'
              >
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='60'
                  d='M256 112v288M400 256H112'
                ></path>
              </svg>
            </div>
            <div className='cs-parallax__shape cs-position8 cs-to__left'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13px'
                height='13px'
              >
                <path
                  fill-rule='evenodd'
                  fill='rgb(254, 179, 107)'
                  d='M6.500,-0.000 C10.090,-0.000 13.000,2.910 13.000,6.500 C13.000,10.089 10.090,13.000 6.500,13.000 C2.910,13.000 -0.000,10.089 -0.000,6.500 C-0.000,2.910 2.910,-0.000 6.500,-0.000 Z'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='cs-parallax cs-style4'>
          <div className='container'>
            <div className='cs-height__120 cs-height__lg__70'></div>
            <div className='cs-section__heading cs-style1 text-center'>
              <h2
                className='cs-section__title wow fadeInUp'
                data-wow-duration='0.8s'
                data-wow-delay='0.2s'
              >
                CITOYEN.TN
              </h2>
              <div className='cs-height__25 cs-height__lg__15'></div>
              <div className='cs-section__subtitle'>
                Bonjour monsieur/madame, aujourd'hui avec la nouvelle
                application CITOYEN.TN vous pouvez facilement imprimer les actes
                de naissance de vos enfants et aussi imprimer les actes de décès
                de vos parents ou enfants. <br />
                Il y a un problème dans votre ville ? vous pouvez déposer une
                réclamation via CITOYEN.TN.
              </div>
            </div>
            <div className='cs-height__70 cs-height__lg__50'></div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='cs-left__full__width'>
                  <div className='cs-box cs-size1 cs-align__right'>
                    <img src='/static/img/agency/testimonial-img.svg' alt='' />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-6 wow fadeInRight'
                data-wow-duration='0.8s'
                data-wow-delay='0.3s'
              >
                <div className='cs-vertical__middle'>
                  <div className='cs-vertical__middle__in'>
                    <div className='cs-slider cs-style1 cs-testimonial__slider__style1'>
                      <div className='cs-tesimonial__shape cs-style1'></div>
                      <div className='cs-tesimonial__shape cs-style2'></div>
                      <div className='cs-tesimonial__shape cs-style3'></div>
                      <div
                        className='cs-slider__container'
                        data-autoplay='0'
                        data-loop='1'
                        data-speed='600'
                        data-center='0'
                        data-fade-slide='1'
                        data-slides-per-view='1'
                      >
                        <div className='cs-slider__wrapper'>
                          <div className='cs-slide'>
                            <div className='cs-testimonial cs-style1'>
                              <div className='cs-testimonial__info'>
                                <div className='cs-testimonial__avatar'>
                                  <img
                                    src='/static/img/agency/portfolio3.jpg'
                                    alt=''
                                  />
                                </div>
                                <div className='cs-testimonial__meta'>
                                  <h3 className='cs-testimonial__avatar_name'>
                                    CITOYEN.TN
                                  </h3>
                                  <div className='cs-testimonial__avatar_designation'>
                                    Application Mobile
                                  </div>
                                </div>
                              </div>
                              <div className='cs-testimonial__text'>
                                “Aujourd'hui avec la nouvelle application
                                CITOYEN.TN votre vie et plus facile .”
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='cs-slider__arrows cs-style2'>
                        <div className='cs-left__arrow cs-center'>
                          <i className='fas fa-long-arrow-alt-left'></i>
                        </div>
                        <div className='cs-right__arrow cs-center'>
                          <i className='fas fa-long-arrow-alt-right'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cs-parallax__shape cs-position1 cs-to__up'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(101, 198, 50)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position2 cs-to__left'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(252, 210, 5)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position3 cs-to__right'>
            <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
              <path
                fill-rule='evenodd'
                fill='rgb(235, 235, 235)'
                d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
              />
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position4 cs-to__rotate cs-add__shape'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              viewBox='0 0 512 512'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='60'
                d='M256 112v288M400 256H112'
              ></path>
            </svg>
          </div>
          <div className='cs-parallax__shape cs-position5 cs-to__left'>
            <svg xmlns='http://www.w3.org/2000/svg' width='28px' height='28px'>
              <path
                fill-rule='evenodd'
                fill='rgb(112, 87, 248)'
                d='M14.000,-0.000 C21.732,-0.000 28.000,6.268 28.000,14.000 C28.000,21.732 21.732,28.000 14.000,28.000 C6.268,28.000 -0.000,21.732 -0.000,14.000 C-0.000,6.268 6.268,-0.000 14.000,-0.000 Z'
              />
            </svg>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className='cs-cta cs-style1 text-center'>
          <div
            className='cs-cta-in text-center cs-bg__parallax'
            data-src='/static/img/agency/cta-bg.png'
          >
            <div className='container'>
              <div className='cs-cta__in'>
                <h2
                  className='cs-cta__title wow fadeInLeft'
                  data-wow-duration='0.8s'
                  data-wow-delay='0.2s'
                >
                  Are You Ready? Try A Demo For Free Consultation
                </h2>
                <div className='cs-cta__btn'>
                  <a
                    href='contact_1.html'
                    className='cs-btn cs-style1 cs-color3 cs-primary__font'
                  >
                    <span className='cs-btn__text'>Contact Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='cs-footer cs-style1 cs-parallax'>
        <div className='cs-height__110 cs-height__lg__70'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='cs-footer__item'>
                <h2 className='cs-widget__title'>About</h2>
                <div className='cs-footer__widget__text'>
                  We always try to give our best quality guidence for our all
                  clients. So they will success growth business well.
                </div>
                <div className='cs-height__15 cs-height__lg__15'></div>
                <div className='cs-social__btns cs-style1'>
                  <a href='#'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-pinterest-p'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='cs-footer__item widget_nav_menu'>
                <h2 className='cs-widget__title'>Services</h2>
                <ul className='menu'>
                  <li>
                    <a href='#'>IT Consultant</a>
                  </li>
                  <li>
                    <a href='#'>Business Growth</a>
                  </li>
                  <li>
                    <a href='#'>Investent Plan</a>
                  </li>
                  <li>
                    <a href='#'>Product Development</a>
                  </li>
                  <li>
                    <a href='#'>Industrial Consultant</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='cs-footer__item widget_nav_menu'>
                <h2 className='cs-widget__title'>Support</h2>
                <ul className='menu'>
                  <li>
                    <a href='#'>Documentation</a>
                  </li>
                  <li>
                    <a href='#'>Product</a>
                  </li>
                  <li>
                    <a href='#'>Reporting Issue</a>
                  </li>
                  <li>
                    <a href='#'>Terms Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='cs-copyright text-center'>
          <div className='container'>© 2022 - Plateforme Baladyati.com </div>
        </div>
        <div className='cs-parallax__shape cs-position1'>
          <svg xmlns='http://www.w3.org/2000/svg' width='13px' height='13px'>
            <path
              fill-rule='evenodd'
              fill='rgb(97, 192, 49)'
              d='M6.500,-0.000 C10.090,-0.000 13.000,2.910 13.000,6.500 C13.000,10.090 10.090,13.000 6.500,13.000 C2.910,13.000 -0.000,10.090 -0.000,6.500 C-0.000,2.910 2.910,-0.000 6.500,-0.000 Z'
            />
          </svg>
        </div>
        <div className='cs-parallax__shape cs-position2 cs-to__up'>
          <img src='/static/img/agency/footer-image.png' alt='' />
        </div>
        <div className='cs-parallax__shape cs-position3 cs-to__left__up'>
          <svg xmlns='http://www.w3.org/2000/svg' width='416px' height='403px'>
            <path
              fill-rule='evenodd'
              fill='rgb(51, 69, 100)'
              d='M210.500,62.000 C284.230,62.000 344.000,121.769 344.000,195.499 C344.000,269.229 284.230,328.999 210.500,328.999 C136.770,328.999 77.000,269.229 77.000,195.499 C77.000,121.769 136.770,62.000 210.500,62.000 Z'
            />
            <path
              fill-rule='evenodd'
              stroke='rgb(29, 46, 75)'
              stroke-width='2px'
              stroke-linecap='butt'
              stroke-linejoin='miter'
              fill='none'
              d='M207.500,1.000 C321.547,1.000 414.000,90.543 414.000,201.000 C414.000,311.457 321.547,401.000 207.500,401.000 C93.453,401.000 1.000,311.457 1.000,201.000 C1.000,90.543 93.453,1.000 207.500,1.000 Z'
            />
          </svg>
        </div>
        <div className='cs-parallax__shape cs-position4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='10px' height='10px'>
            <path
              fill-rule='evenodd'
              fill='rgb(62, 80, 110)'
              d='M5.000,-0.000 C7.761,-0.000 10.000,2.238 10.000,5.000 C10.000,7.761 7.761,10.000 5.000,10.000 C2.238,10.000 -0.000,7.761 -0.000,5.000 C-0.000,2.238 2.238,-0.000 5.000,-0.000 Z'
            />
          </svg>
        </div>
        <div className='cs-parallax__shape cs-position5'>
          <svg xmlns='http://www.w3.org/2000/svg' width='15px' height='15px'>
            <path
              fill-rule='evenodd'
              fill='rgb(112, 87, 248)'
              d='M7.500,-0.000 C11.642,-0.000 15.000,3.358 15.000,7.500 C15.000,11.642 11.642,15.000 7.500,15.000 C3.358,15.000 -0.000,11.642 -0.000,7.500 C-0.000,3.358 3.358,-0.000 7.500,-0.000 Z'
            />
          </svg>
        </div>
      </footer>

      <div className='cs-video__popup'>
        <div className='cs-video__popup__overlay'></div>
        <div className='cs-video__popup__content'>
          <div className='cs-video__popup__layer'></div>
          <div className='cs-video__popup__container'>
            <div className='cs-video__popup__align'>
              <div className='ratio ratio-16x9'>
                <iframe src='about:blank'></iframe>
              </div>
            </div>
            <div className='cs-video__popup__close'></div>
          </div>
        </div>
      </div>

      <div id='cs-scrollup'>
        <i className='fas fa-chevron-up'></i>
      </div>
    </section>
  )
}

export default Acc
