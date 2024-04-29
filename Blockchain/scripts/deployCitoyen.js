const main = async () => {
  const Citoyens = await hre.ethers.getContractFactory('Citoyens') // Class
  const citoyens = await Citoyens.deploy()

  await citoyens.deployed()
  // get adress of smartContract deployed in blockchain
  console.log('Citoyens deployed to:', citoyens.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0) //success
  } catch (error) {
    console.error(error)
    process.exit(1) //echec
  }
}

runMain()
