class Test {

    constructor () {}
 
    getInfo () {// 확장의 각종 정보
      return {
        id : 'test'
        name : 'Test', // 확장의 이름
        blocks : [// 각 블록의 정의
          {
            opcode : 'hello', //이 블록이 실행되면 hello라는 함수가 호출되는
            blockType : Scratch.BlockType.COMMAND, // "10 걸음 이동"과 같은 일반적인 명령 블록
            text : 'hello'// 블록에 표시되는 텍스트
          }
        ]
      }
    }
 
    hello () {
      console.log ( 'hello'); // console log에 hello 출력
    }
  }
 
  Scratch.extensions.register (new Test ());