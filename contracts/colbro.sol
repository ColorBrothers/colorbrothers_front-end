pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7.sol";
import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7Metadata.sol";
import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7Pausable.sol";

contract Colbro is KIP7,KIP7Metadata,KIP7Pausable {
    address public owner; //컨트랙트 주인

    mapping(bytes => Car) public cars;
    mapping(bytes => Color[]) public colors;
    constructor(string memory name, string memory symbol, uint8 decimals) KIP7Metadata(name,symbol,decimals) public {
        owner = msg.sender;
    }

    //컬러데이터
    struct Color{
        address painter; //작업자
        string colorMaker; //페인트 제조사
        uint num;
        uint value;
    }

    struct Car {
      address register; //등록자
      uint date; //등록날짜
      bytes carNum; // 차량번호
      string brand; // 제조사
      string carName; // 차종
      string color; // 차량기본색상
      string parts; //수리부위
      uint arrayCount;
    }

    //시편데이터를 만들었을때 미션식별,작업자,브랜드,차종,차량번호를 이벤트로 호출
    event AddCar(
      address indexed _painter,
      bytes indexed _carNum,
      string brand,
      string cardName
    );
    
    //차량등록하기
    function addCar(string memory _brand, string memory _carName, bytes memory _carNum, string memory _color, string memory parts) public returns (string memory) {
      cars[_carNum] = Car(msg.sender, getToDay(now), _carNum, _brand, _carName, _color, parts, 0);
      emit AddCar(msg.sender,_carNum, _brand, _carName);
      _mint(msg.sender, 10**16);
      return ("Car Registration Successful");
    }

    function addColor(bytes memory _carNum, string memory _colorMaker ,uint _num, uint _value) public returns (string memory) {
      colors[_carNum].push(Color(msg.sender, _colorMaker, _num, _value));
      cars[_carNum].arrayCount++;
      _mint(msg.sender, 10**8);
      return ("Color Registration Successful");
    }

    function viewCarsData(bytes memory _carNum) view public returns (address, bytes memory, uint, string memory, string memory) {
      Car memory car = cars[_carNum];
      viewColorData(_carNum);
      return (car.register, car.carNum, car.date, car.parts, car.color);
    }

    function viewColorData(bytes memory _carNum) view private returns (Color[] memory) {
      Color[] memory color = new Color[](cars[_carNum].arrayCount);
      for (uint i = 0; i < cars[_carNum].arrayCount; i++) {
          Color storage colorss = colors[_carNum][i];
          color[i] = colorss;
      }
    //   _transfer(msg.sender,colors[_carNum][i].,)
      return color;
    }
    
    function viewColorDetail(bytes memory _carNum, uint _num) public returns (address, string memory, uint, uint) {
        Color memory color = colors[_carNum][_num];
        _transfer(msg.sender, color.painter, 10**4);
        return (color.painter, color.colorMaker, color.value, color.num);
    }
    
    function getToDay(uint _now) public pure returns (uint) {
      return _now;
    }
}