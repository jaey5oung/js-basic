var name = "mark" //var 라는 단어의 변수를 사용할때 사용하는 키워드입니다

//Reserved Words 변수명 , 함수명으로 쓸수없는 이미 예약되어있는 예약어이다
// var return = "변수명" // return 은 예약어라 변수명으로 사용할수 없습니다
// function for() {} //for는 예약어라 함수명으로 사용 할 수 없습니다

//식별자 : 코드내의 변수 함수 혹은 속성을 식별하는 문자열 (대소문자를 구별한다 예를들어 fristName과 firstname은 다른 식별자이다)
//name , _name , $name 은가능하지만 앞에숫자를붙여 1name 의 식은 불가능하다
var firstName = "jang"
function hello() {}
var person = { name: "jaeyoung", age: 10 }
// 8번라인은 fistName 9번라인은 hello 12번라인은 person,name,age 가 식별자가 된다

//변수(variable) and 상수(constant)
//5와 10을 더해서 sum 이라는 상수에 보관한뒤 3으로 나누어 나머지가 0이면 야호 1을 출력하고 5로나누어 나머지가 0이면 야호2를 출력한다

const sum = 5 + 10 //여기서 const 상수이다 변하지않는값 선언과 동시에 바로 값을 넣어줘야하는 형태이다

if (sum / 3 === 0) {
  console.log("야호1")
}
if (sum / 5 === 0) {
  console.log("야호2")
}

//5와 10을 더해서 sum 이라는 상수에 보관한뒤 3으로 나누어 나머지가 0이면 야호 1을 출력하고 5로나누어 나머지가 0이면 야호2를 출력한다
//result라는 변수는 3으로 나누어 떨어지거나 , 5로 나누어 떨어지면 true라는 값을 가지고 , 아니면 false라는 값을 가진다
//상황에 따라 변수는 값을 재설정할수 있다

const sum = 5 + 10
let result = false;

if (sum / 3 === 0) {
    console.log("야호1")
    result = true
  }
  if (sum / 5 === 0) {
    console.log("야호2")
    result = true
  }
  console.log(result);
  
  //블럭
  {
    const name = 'jang';
    console.log(name);
    
  }

  // console.log(name);

  //밖에서 안으로

  let age = 37;
  {
    age++;
  }

  //중첩
  //블럭은 블럭안에서 변수를선언할때 그 블럭범위에서만 사용할수있고 블럭밖에서 먼저 선언하게되면 어디서든 블럭범위에서 사용할수있다 하지만 블럭안에서 선언된것은 밖에서 사용은 불가능하다

  //var es5까지만 사용되었지만
  
  var c = 0;
  {
    c++;
    console.log(c);
    
  }
  
  {
    var d = 0;
    console.log(d);
    
  }

  console.log(d);

  //원래 const나 let을 사용할땐 블럭안에선언되어잇는걸 밖에서 사용하지못하지만 var같은경우는 블럭이 있든없든 함수처리를 하기때문에 블럭안에서 선언이되도 밖에서 사용할수있다

// var키워드와 hoisting
  