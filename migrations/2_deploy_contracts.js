const Colbro = artifacts.require('./Colbro.sol')
const fs = require('fs')

module.exports = function (deployer) {
  deployer.deploy(Colbro)
    .then(() => {
    if (Colbro._json) {
      // 1. 최근에 배포한 컨트랙트의 ABI 파일을 'deployedABI'에 기록합니다.
      fs.writeFile(
        'deployedABI',
        JSON.stringify(Colbro._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${Colbro._json.contractName} is recorded on deployedABI file`)
        })
    }

    // 2. 최근에 배포한 컨트랙트 주소를 'deployedAddress'에 기록합니다.
    fs.writeFile(
      'deployedAddress',
      Colbro.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${Colbro.address} * is recorded on deployedAddress file`)
    })
  })
}