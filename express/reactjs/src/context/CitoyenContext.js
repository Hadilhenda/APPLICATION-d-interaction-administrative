import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const CitoyenContext = React.createContext()

const { ethereum } = window

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const citoyensContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )
  console.log({ provider, signer, citoyensContract })
  return citoyensContract
}

export const CitoyensProvider = ({ children }) => {
  const [formData, setformData] = useState({
    nom: '',
    prenom: '',
    pere: '',
    mere: '',
    sexe: '',
    naissance: '',
    keyword: '',
  })
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [citoyenCount, setCitoyenCount] = useState(
    localStorage.getItem('citoyenCount')
  )
  const [citoyens, setCitoyens] = useState([])

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllCitoyens = async () => {
    try {
      if (ethereum) {
        const citoyensContract = createEthereumContract()

        const availableCitoyens = await citoyensContract.getAllCitoyens()

        const structuredCitoyens = availableCitoyens.map((citoyen) => ({
          nom: citoyen.nom,
          prenom: citoyen.prenom,
          pere: citoyen.pere,
          mere: citoyen.mere,
          sexe: citoyen.sexe,
          naissance: citoyen.naissance,
          timestamp: new Date(
            citoyen.timestamp.toNumber() * 1000
          ).toLocaleString(),
          keyword: citoyen.keyword,
        }))

        console.log(structuredCitoyens)

        setCitoyens(structuredCitoyens)
      } else {
        console.log('Ethereum is not present')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        getAllCitoyens()
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfCitoyensExists = async () => {
    try {
      if (ethereum) {
        const citoyensContract = createEthereumContract()
        const currentCitoyenCount = await citoyensContract.getCitoyensCount()

        window.localStorage.setItem('citoyenCount', currentCitoyenCount)
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
      window.location.reload()
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const sendCitoyen = async () => {
    try {
      if (ethereum) {
        const { nom, prenom, pere, mere, sexe, naissance, keyword } = formData
        const citoyensContract = createEthereumContract()
        // const parsedAmount = ethers.utils.parseEther(amount)

        // await ethereum.request({
        //   method: 'eth_sendTransaction',
        //   params: [
        //     {
        //       from: currentAccount,
        //       to: addressTo,
        //       gas: '0x5208',
        //       value: parsedAmount._hex,
        //     },
        //   ],
        // })

        const citoyenHash = await citoyensContract.addToBlockchain(
          nom,
          prenom,
          pere,
          mere,
          sexe,
          naissance,
          keyword
        )

        setIsLoading(true)
        console.log(`Loading - ${citoyenHash.hash}`)
        await citoyenHash.wait()
        console.log(`Success - ${citoyenHash.hash}`)
        setIsLoading(false)

        const citoyensCount = await citoyensContract.getCitoyensCount()

        setCitoyenCount(citoyensCount.toNumber())
        window.location.reload()
      } else {
        console.log('No ethereum object')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect()
    checkIfCitoyensExists()
  }, [citoyenCount])

  return (
    <CitoyenContext.Provider
      value={{
        citoyenCount,
        connectWallet,
        citoyens,
        currentAccount,
        isLoading,
        sendCitoyen,
        handleChange,
        formData,
      }}
    >
      {children}
    </CitoyenContext.Provider>
  )
}
