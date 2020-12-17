var name = 'mark'; //var 라는 단어의 변수를 사용할때 사용하는 키워드입니다

//Reserved Words 변수명 , 함수명으로 쓸수없는 이미 예약되어있는 예약어이다
// var return = '변수명' // return 은 예약어라 변수명으로 사용할수 없습니다
// function for() {} //for는 예약어라 함수명으로 사용 할 수 없습니다

//식별자 : 코드내의 변수 함수 혹은 속성을 식별하는 문자열 (대소문자를 구별한다 예를들어 fristName과 firstname은 다른 식별자이다)
//name , _name , $name 은가능하지만 앞에숫자를붙여 1name 의 식은 불가능하다
var firstName = 'jang';
function hello() {}
var person = { name: 'jaeyoung', age: 10 };
// 8번라인은 fistName 9번라인은 hello 12번라인은 person,name,age 가 식별자가 된다

//변수(variable) and 상수(constant)
//5와 10을 더해서 sum 이라는 상수에 보관한뒤 3으로 나누어 나머지가 0이면 야호 1을 출력하고 5로나누어 나머지가 0이면 야호2를 출력한다

const sum = 5 + 10; //여기서 const 상수이다 변하지않는값 선언과 동시에 바로 값을 넣어줘야하는 형태이다

if (sum / 3 === 0) {
  console.log('야호1');
}
if (sum / 5 === 0) {
  console.log('야호2');
}

//5와 10을 더해서 sum 이라는 상수에 보관한뒤 3으로 나누어 나머지가 0이면 야호 1을 출력하고 5로나누어 나머지가 0이면 야호2를 출력한다
//result라는 변수는 3으로 나누어 떨어지거나 , 5로 나누어 떨어지면 true라는 값을 가지고 , 아니면 false라는 값을 가진다
//상황에 따라 변수는 값을 재설정할수 있다

const sum = 5 + 10;
let result = false;

if (sum / 3 === 0) {
  console.log('야호1');
  result = true;
}
if (sum / 5 === 0) {
  console.log('야호2');
  result = true;
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

//호이스팅은 es5언어 명세 및 그 이전 표준 명세에서 사용된적이 없는 용어이다
//아래있는 선언을(만) 끌어올리는 현상을 호이스팅 var 키워드에는 적용되지만 let이나 const는 적용이안된다

//함수먼저

function hello1() {
  console.log('hello1');
}
hello1();

//함수의 호출을 먼저
hello2();

function hello2() {
  console.log('hello2');
}

age = 6;
age++;
console.log(age);

var age;

//Data Types 자료형
//변수가 가지는 고정 타입이 없다
//하지만 타입이 없는것은 아니다

let whatever = 'Jang';

whatever = 37;

whatever = true;

//기본타입 Boolean , Null , Undefined , Number , String , Symbol

//Boolean
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);

console.log(a, typeof a);

if (a) {
  console.log('false?');
}

const b = Boolean(false);

console.log(b, typeof b);

//Null 값을 가지고있지만 비어잇는 값을가지고있는것

const a = null;
console.log(a, typeof a);

//객체타입

//Undefined

let b;

console.log(b, typeof b);

b = undefined;

console.log(b, typeof b);

if (a == b) {
  console.log(a == b);
}

if (a === b) {
  console.log(a === b);
}
// Null과 undefined 는 ==일땐 서로같지만 ===일땐 타입까지 서로 다르게나온다

//Number

const a = 37;

console.log(a, typeof a);

const b = 96.7;

console.log(b, typeof b);

const c = NaN;

console.log(c, typeof c);

const d = Number('jang');

console.log(d, typeof d);

//NaN은 문자열이 숫자로 형변환할때 쓰인다

const e = Number('37');

console.log(e, typeof e);

//String

const a = 'jang';
console.log(a, typeof a);

const b = 'jang' + 'lee';

const c = a + 'lee';

console.log(c, typeof c);

//es6에서 나온 템플릿스트링 자주쓰이게된다 (빽틱)
const d = `${a} lee`;

console.log(d, typeof d);

//symbol 같은값이여도 고유한값을 만들고싶을때 사용한다 생성자 함수로 만들수도없다 Ex. new Symbol(); (x)

const a = Symbol();
const b = Symbol(37);
const c = Symbol('Jang');
const d = Symbol('Jang');
console.log(a, typeof a);
console.log(c === d);

//조건문 표현식이 참으로 평가될때, 실행되는 블럭

// if(표현식){
//   표현식이 참으로 평가될때, 실행되는 문장들의 모음
// }

if (true) {
  console.log('항상 실행');
}
if (false) {
  console.log('항상 실행되지 않음');
}

//블록에 코드가 한줄이면, 중괄호 {}는 생략 가능하다

if (true) console.log('항상 실행');
if (false) console.log('항상 실행 되지 않음');

//표현식이 거짓으로 평가될때 Falsy
// false, 0 , '', null, undefined, NaN(숫자가아닐때)
if (false) console.log(false);
if (0) console.log(false);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

//표현식이 참으로 평가될때 Truethy
//Falsy의 반대 : true, 37, 'Mark', {}, []
if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if ({}) console.log({});
if ([]) console.log([]);

//else {} if에 해당하지 않을때
//if() {} else {}

const n = 37;

if (n > 0) {
  console.log('n이 0보다 큰 경우 ');
}

if (n < 0) {
  console.log('n이 0보다 큰경우');
} else {
  console.log('n이 0보다 크지 않은 경우');
}

//블록 안 문장이 하나일 경우 , 중괄호 없이 사용가능

if (n > 0) console.log('n이 0보다 큰 경우');
else console.log('n이 0보다 크지 않은 경우');

//else if{} if에 해당하지 않을때

const n = 15;

if (n % 3 === 0) {
  console.log('n은 3의 배수 입니다');
} else if (n % 5 === 0) {
  console.log('n은 5의 배수입니다');
} else {
  console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다');
}

// n이 3의 배수이면서, 5의 배수이면 뭐라고 출력될까요
if (n % 3 === 0 && n % 5 === 0) {
  console.log('n은 15의 배수입니다');
} else if (n % 3 === 0) {
  console.log('n은 3의 배수입니다');
} else if (n % 5 === 0) {
  console.log('n은 5의 배수입니다');
} else {
  console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다');
}

// n%3 === 0과 n%5 === 0 의 값은 여러번 반복되므로, 변수나 상수에 넣습니다

const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;

if (multipleOfThree && multipleOfFive) {
  console.log('n은 15의 배수입니다');
} else if (multipleOfThree) {
  console.log('n은 3의 배수입니다');
} else if (multipleOfFive) {
  console.log('n은 5의 배수입니다');
} else {
  console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다');
}
//중첩을 이용해서 표현할수도 있다

//논리 연산자를 이용한 조건문 평가 &&(엔드연산자) ||(or연산자) !(not연산자)

//표현식 && 표현식

if (true && true) {
  console.log('두개 모두 참이면');
}

if (true && false) {
  console.log('한개만 참이면 거짓');
}

if (false && true) {
  console.log('한개만 참이면 거짓');
}

if (false && false) {
  console.log('둘다 거짓이면 거짓');
}

// 표현식 || 표현식

if (true || true) {
  console.log('두개 모두 참이면 참');
}

if (true || false) {
  console.log('한개만 참이면 참 ');
}

if (false || true) {
  console.log('한개만 참이면 참');
}
if (false || false) {
  console.log('두개 모두 거짓이면 거짓');
}

//!표현식

if (!true) {
  console.log('참이면 거짓');
}

if (!false) {
  console.log('거짓이면 참 ');
}

//논리 연산자를 이용한 조건부 실행

//표현식 && 표현식
//둘다 참 일떄만 참이다.
//표현식은 앞에 먼저 평가하고, 뒤에를 평가한다.
//앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다

let n = 5;
n % 5 === 0 && console.log('5로 나누어 떨어질때만 실행');

//앞 표현식의 평가 결과가 거짓일때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

n = 6;
n % 5 === 0 && console.log('5로 나누어 떨어질때만 실행');

//표현식 || 표현식
//둘 중에 하나만 참이면 참이다.
//앞 표현식을 평가를 해서 참 이면, 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

n = 5;
n % 5 === 0 || console.log('5로 나누어 떨어지지 않을때만 실행되지 않음 ');

//앞 표현식을 평가를 해서 거짓 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤 표현식이 실행된다.

n = 6;
n % 5 === 0 || console.log('5로 나누어 떨어지지 않을때만 실행되지 않음 ');

//삼항 연산자를 이용한 조건부 실행
//조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
//중괄호 {} 를 사용할수 없는 문법이기 때문에 하나의 표현식만 가능합니다

let n = 5;

console.log(n % 5 === 0 ? '5의배수입니다' : '5의배수가아닙니다');

//표현식의 결과를 변수에 할당할수 있습니다

const message = n % 5 === 0 ? '5의배수입니다' : '5의배수가아닙니다';
console.log(message);

//switch를 이용한 조건문
//switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호안에 있는 코드들을 비교해서 실행합니다.
//이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭입니다.
//문장이 한 줄이라서 중괄호는 생략했습니다

let n = 5;

switch (n) {
  default:
    console.log(n);
}

//다음은 n이 5로 나누었을때 나머지가 0인 경우에 실행되는 블럭을 추가한 것입니다.
//case '비교할 값' : 을 이용해서 맞으면 실행됩니다.
//case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행이 됩니다.

switch (n % 5) {
  case 0: {
    console.log('5의 배수입니다');
  }
  default:
    console.log(n);
}

//만약에 해당 블럭이 실행된 후 다음 블럭을 거치지 않고 switch 문을 나가고 싶다면 ,
//case 문 안에서 break; 를 실행합니다.

switch (n % 5) {
  case 0: {
    console.log('5의 배수입니다');
    break;
  }
  default:
    console.log(n);
}

//break와 case문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 합니다.

n = 6;

switch (n % 5) {
  case 0: {
    console.log('5의 배수입니다');
    break;
  }
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('5의 배수가 아닙니다');

  default:
    console.log(n);
}

//반복문이 없다면?

console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

//for 문을 사용한다면?
//보통 어떤 유한한 횟수만큼 반복할 때는 for문을 사용합니다.

for (let i = 0; i < 5; i++) {
  console.log('안녕하세요');
}

// for(초기화; 반복조건; 반복이 된후 실행되는 코드){
// 반복이 되는 코드블럭
// }

//for(a; b; c){
// d
// }
//  e

//  a -> d -> c -> b -> d -> c -> b -> e

//초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용할 수 있습니다.

for (let i = 0; i < 5; i++) {
  console.log('안녕하세요', i);
}

for (let i = 0, j = 5; i < 5; i++) {
  console.log('안녕하세요', i, j);
}

for (let i = 0, j = 2; i < 5; i++, j = j * j) {
  console.log('안녕하세요', i, j);
}

//반복문을 즉시 종료하고 싶을 때는 반복되는 블럭 안에서 break; 를 실행하면 가능합니다.

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i > 2) {
    break;
  }
  console.log('안녕하세요', i);
}
//반복되는 블럭 안에서 continue; 를 만나면 거기서 바로 해당 블럭은 종료합니다.
//그리고 이와 같이 다음 반복이 있으면 다음 반복으로 넘어갑니다.

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i < 2) {
    continue;
  }
  console.log('안녕하세요', i);
}

//무한루프
for (;;) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}

// while(조건(true or false)){
//   조건이 거짓이 될 때까지 반복실행
// }

//while 무한루프
while (true) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}

// do {
//   조건이 거짓이 될때까지 반복실행
// } while(조건)

do {
  console.log('안녕하세요');
} while (Math.random() * 100 <= 90);

// for of
// iterable = 배열
for (const i of [1, 2, 3]) {
  console.log(i);
}

// for in
// 모든 프로퍼티

Object.prototype.test = function () {};

for (const i in { a: 1, b: 2, c: 3 }) {
  console.log(i);
}

//함수

// function hello(){}  = 함수를 만들때 사용하는 키워드

//function
//이름이 hello1 인 함수를 선언

function hello1() {
  console.log('hello1');
}
console.log(hello1, typeof hello1);

//함수의 매개변수
//함수를 호출할 때 값을 지정

function hello2(name) {
  console.log('hello', name);
}

//함수의 리턴
//함수를 실행하면 얻어지는 값

function hello3(name) {
  return `hello3 ${name}`;
}

console.log(hello3('jang'));

//const hello = function(){}
//함수를 만들때 사용하는 키워드

//function
//이름이 hello1 인 함수를 선언

const hello1 = function () {
  console.log('hello1');
};
console.log(hello1, typeof hello1);

//함수의 매개변수
//함수를 호출할 때 값을 지정

const hello2 = function (name) {
  console.log('hello2', name);
};

//함수의 리턴
//함수를 실행하면 얻어지는 값

const hello3 = function (name) {
  return `hello3 ${name}`;
};

//첫번째 함수와 두번째함수의 만든것의 차이점은 첫번째는 선언적 function 과 익명 함수를 만들어 변수에 할당

console.log(hello2);

hello1();
hello2();
hello3();

function hello1() {
  console.log('hello1');
}

var hello2 = function () {
  console.log('hello2');
};

const hello3 = function () {
  console.log('hello3');
};

// const hello = new Function();
//생성자 함수로 함수를 만드는방법

//new Function(인자1,인자2,..,함수의 바디)
const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1, 2, 3));

// function 과 new Function() 의 차이점

global.a = 0;

{
  const a = 1;

  const test = new Function('return a');
  console.log(test());
}

{
  const a = 2;

  const test = function () {
    return a;
  };
  console.log(test());
}

// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
  console.log('hello1');
};

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

//매개변수가 하나일 때, 괄호 생략 가능

const hello2 = (name) => {
  console.log('hello2', name);
};

const hello3 = (name, age) => {
  console.log('hello3', name, age);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello4 = (name) => {
  return `hello4 ${name}`;
};

const hello5 = (name) => `hello5 ${name}`;

//생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age) {
  console.log(this);

  this.name = name;
  this.age = age;
}

const p = new Person('Mark', 37);
console.log(p, p.name, p.age);

const q = new Person('Jang', 15);
console.log(q, q.name, q.age);

// const cat =(name,age)=>{
//   this.name = name;
//   this.age = age
// }
// arrow function 에서는 this를 사용할수 없다

//함수를 호출하면 함수를 만들어서 리턴

function plus(base) {
  return function (num) {
    return base + num;
  };
}

const plus5 = plus(5);
console.log(plus(10));

const plus7 = plus(7);
console.log(plus7(8));

//함수를 인자로 하여 함수를 호출

function hello(c) {
  console.log('hello');
  c();
}
hello(function () {
  console.log('콜백');
});

// 객체(object) 함수,클래스(틀)=> 객체,개체,object

//function 틀(){}=> new 틀() 생성자함수로 객체만들기

function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기
function B(name, age) {
  console.log(name, age);
}

const b = new B();
const c = new B('Mark', 37);
console.log(B());

//객체에 속성 추가하기

function A() {
  this.name = 'Mark';
}

const a = new A(); //{name: 'Mark'}
console.log(a);

//함수를 속성으로 넣기

function B() {
  this.hello = function () {
    console.log('hello');
  };
}

new B().hello();


//new Object() 오브젝트로 객체 만들기

