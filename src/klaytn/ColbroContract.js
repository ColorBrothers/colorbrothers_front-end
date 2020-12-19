import { cav } from 'klaytn/caver'

/**
 * 1. 컨트랙트 인스턴스 생성
    * 예시: new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
    * 이 인스턴스를 통해 컨트랙트 메서드를 호출할 수 있습니다.
 */

const ColbroContract = DEPLOYED_ABI
  && DEPLOYED_ADDRESS
  && new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

export default ColbroContract
