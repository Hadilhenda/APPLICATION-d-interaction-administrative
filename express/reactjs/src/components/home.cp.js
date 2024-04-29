import React, { useState, useEffect, useContext } from 'react'
import UserService from '../services/user.service'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CitoyenContext } from '../context/CitoyenContext'
import { shortenAddress } from '../utils/shortenAddress'
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='form-control'
  />
)
const Home = () => {
  //B
  const {
    citoyenCount,
    connectWallet,
    citoyens,
    currentAccount,
    isLoading,
    sendCitoyen,
    handleChange,
    formData,
  } = useContext(CitoyenContext)

  const handleSubmit = (e) => {
    const { nom, prenom, pere, mere, sexe, naissance, keyword } = formData

    e.preventDefault()

    if (!nom || !prenom || !pere || !mere || !sexe || !naissance || !keyword)
      return

    sendCitoyen()
  }

  //get transactions
  const CitoyensCard = ({
    nom,
    prenom,
    pere,
    mere,
    sexe,
    naissance,
    keyword,
    timestamp,
  }) => {
    return (
      <div>
        <div className=''>
          <div className=''>
            <p className=''>
              Nom: {nom} {prenom}
            </p>

            <p className=''>Pere : {pere}</p>

            <p className=''>Mere : {mere}</p>
            <p className=''>Sexe : {sexe}</p>
            <p className=''>Naissance : {naissance}</p>
          </div>

          <div className=''>
            <p className=''>{timestamp}</p>
          </div>
        </div>
      </div>
    )
  }
  //B.

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
    <>
      <header className='jumbotron'>
        <h3>{content}</h3>
        <p>
          {!currentAccount && (
            <button type='button' onClick={connectWallet} className=''>
              <p className=''>Connect Wallet</p>
            </button>
          )}
        </p>
        <p>Wallet Adresss : {shortenAddress(currentAccount)}</p>
      </header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4 row m-0 p-0'>
            <div className='col-sm-12'>
              <section>
                <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                  <Input
                    placeholder='Nom'
                    name='nom'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Prenom'
                    name='prenom'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Pere'
                    name='pere'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Mere'
                    name='mere'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Sexe'
                    name='sexe'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Naissance'
                    name='naissance'
                    type='date'
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder='Keyword'
                    name='keyword'
                    type='text'
                    handleChange={handleChange}
                  />

                  <div className='h-[1px] w-full bg-gray-400 my-2' />

                  {isLoading ? (
                    'LOADING ....'
                  ) : (
                    <button type='button' onClick={handleSubmit} className=''>
                      Send now
                    </button>
                  )}
                </div>
              </section>
            </div>
            <div className='col-sm-12'>
              <section>
                <div className=''>
                  <div className='flex flex-col md:p-12 py-12 px-4'>
                    {currentAccount ? (
                      <h3 className='text-white text-3xl text-center my-2'>
                        Latest People
                      </h3>
                    ) : (
                      <h3 className='text-white text-3xl text-center my-2'>
                        Connect your account to see the latest People
                      </h3>
                    )}

                    <div className='flex flex-wrap justify-center items-center mt-10'>
                      {[...citoyens].reverse().map((citoyen, i) => (
                        <CitoyensCard key={i} {...citoyen} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='iq-card iq-card-block iq-card-stretch iq-card-height'>
              <div className='iq-card-body pb-0'>
                <img
                  src='/assets/images/clinique.png'
                  alt='profile-img'
                  className='avatar-130 img-fluid'
                  style={{
                    width: '700px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '700px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
