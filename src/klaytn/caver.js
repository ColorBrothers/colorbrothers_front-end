/**
 * caver-js 라이브러리는 Klaytn 노드에 연결하게 해줍니다.
 * 'rpcURL' 값을 변경하여 특정 Klaytn 노드에 연결할 수 있습니다.
 * rpcURL을 변경하지 않는 경우 기본 설정값은 'https://api.baobab.klaytn.net:8651'입니다.
 */
import Caver from 'caver-js'

export const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651'
}

export const cav = new Caver(config.rpcURL)

export default cav