require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
module.exports = {
  solidity: '0.8.0',
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-XMFTmorwdgLNIKJ7tia2jeGN2XWU_q4',
      accounts: [
        'a4a473fc541b4024ab82b54dde6dc2a0f1f07ecd44cbbadaa44e0cb549dbb732',
      ],
    },
  },
}