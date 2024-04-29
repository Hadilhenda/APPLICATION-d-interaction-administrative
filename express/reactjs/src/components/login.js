import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { processLogin } from '../actions/auth'

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const Login = (props) => {
  const navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangelogin = (e) => {
    const login = e.target.value
    setLogin(login)
  }
  const Logo = {
    width: '15%',
    height: '20%',
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(processLogin(login, password))
        .then(() => {
          navigate('/')
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }
  useEffect((isLoggedIn) => {
    if (isLoggedIn) {
      return navigate('/profile')
    }
  }, [])

  return (
    /*
    <div className='col-md-12'>
      <div className='card card-container'>
        <Form onSubmit={handleLogin} ref={form}>
          <div className='form-group'>
            <label htmlFor='login'>login</label>
            <Input
              type='text'
              className='form-control'
              name='login'
              value={login}
              onChange={onChangelogin}
              validations={[required]}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary btn-block' disabled={loading}>
              {loading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {message && (
            <div className='form-group'>
              <div className='alert alert-danger' role='alert'>
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    */
    <section className='sign-in-page'>
      <div className='container sign-in-page-bg mt-5 p-0'>
        <div className='row no-gutters'>
          <div className='col-md-6 text-center'>
            <div className='sign-in-detail text-white'>
              <a className='sign-in-logo mb-5' href='#'>
                <img
                  src='/assets/images/res.png'
                  className='img-fluid'
                  alt='logo'
                  style={Logo}
                />
              </a>
              <div
                className='owl-carousel'
                data-autoplay='true'
                data-loop='true'
                data-nav='false'
                data-dots='true'
                data-items='1'
                data-items-laptop='1'
                data-items-tab='1'
                data-items-mobile='1'
                data-items-mobile-sm='1'
                data-margin='0'
              >
                <div className='item'>
                  <img
                    src='/assets/images/login/1.png'
                    className='img-fluid mb-4'
                    alt='logo'
                  />
                  <h4 className='mb-1 text-white'>Hopital</h4>
                  <p></p>
                </div>
                <div className='item'>
                  <img
                    src='/assets/images/login/2.png'
                    className='img-fluid mb-4'
                    alt='logo'
                  />
                  <h4 className='mb-1 text-white'>Municipalité</h4>
                  <p></p>
                </div>
                <div className='item'>
                  <img
                    src='/assets/images/login/3.png'
                    className='img-fluid mb-4'
                    alt='logo'
                  />
                  <h4 className='mb-1 text-white'>Dispensaire</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 position-relative'>
            <div className='sign-in-from'>
              <h1 className='mb-0'>Sign in</h1>
              <p>Enter your email address and password</p>
              <Form onSubmit={handleLogin} ref={form}>
                <div className='form-group'>
                  <label for='exampleInputEmail1'>Email address</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='login'
                    value={login}
                    onChange={onChangelogin}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label for='exampleInputPassword1'>Password</label>

                  <Input
                    type='password'
                    className='form-control'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    validations={[required]}
                  />
                </div>
                <div className='d-inline-block w-100'>
                  <div className='custom-control custom-checkbox d-inline-block mt-2 pt-1'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customCheck1'
                    />
                    <label className='custom-control-label' for='customCheck1'>
                      Remember Me
                    </label>
                  </div>
                  <button
                    className='btn btn-primary btn-block'
                    disabled={loading}
                  >
                    {loading && (
                      <span className='spinner-border spinner-border-sm'></span>
                    )}
                    <span>Login</span>
                  </button>
                  {message && (
                    <div className='form-group'>
                      <div className='alert alert-danger' role='alert'>
                        {message}
                      </div>
                    </div>
                  )}
                  <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                </div>
                {/* <div className='sign-info'>
                  <span className='dark-color d-inline-block line-height-2'>
                    Don't have an account? <a href='/#'>Sign up</a>
                  </span>
                  <ul className='iq-social-media'>
                    <li>
                      <a href='#'>
                        <i className='ri-facebook-box-line'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='ri-twitter-line'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='ri-instagram-line'></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
