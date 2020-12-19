// truffle-config.js

const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

/**
 * Klaytn 네트워크에 컨트랙트를 배포하기 위한 트러플 네트워크 변수입니다.
 */
const NETWORK_ID = '1001'

/**
 * URL: 사용할 노드의 URL
 * PRIVATE_KEY: 트랜잭션 수수료를 지불할 계정의 개인키(본인의 개인키를 넣으세요)
 */
const URL = 'https://api.baobab.klaytn.net:8651'

// 충분한 KLAY가 있는 계정의 'Private key'를 truffle-config.js에 복사하세요.
const PRIVATE_KEY = ''

module.exports = {
  networks: {
    klaytn: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: '8500000',
      gasPrice: null,
    },
  },

  // 컴파일러 버전을 지정하세요. 여기선 0.5.6으로 하겠습니다.
  compilers: {
    solc: {
      version: '0.5.6',
    },
  },
}