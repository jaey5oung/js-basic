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

const a = new Object();

console.log(a, typeof a);

const b = new Object(true);

console.log(b, typeof b);

const c = new Object({ name: 'Mark' });

console.log(c, typeof c);

//prototype 프로토타입 체인

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log('hello', this.name, this.age);
  };
}

Person.prototype.hello = function () {
  console.log('hello', this.name, this.age);
};

const p = new Person('Mark', 37);

p.hello();

console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);

// prototype 상속

function Person() {}

Person.prototype.hello = function () {
  console.log('hello');
};

function Korean(region) {
  this.region = region;
  this.where = function () {
    console.log('where', this.region);
  };
}

Korean.prototype = Person.prototype;
const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);

//객체 리터럴

const a = {};

console.log(a, typeof a);

const b = {
  name: 'Mark',
};

console.log(b, typeof b);

const c = {
  name: 'Mark',
  hello1() {
    console.log('hello1', this.name);
  },
  hello2: function () {
    console.log('hello2', this.name);
  },
  hello3: () => {
    console.log('hello3', this);
  },
};

c.hello1();
c.hello2();
c.hello3();

//표준 내장 객체

//Array

const a = new Array('red', 'black', 'white');

console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red', 'green', 'yellow'];

console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Obeject);

console.log(b.slice(0, 1));
//0번째부터 1개만 짤라오겠다 slice
console.log(Array.prototype.slice, Object.prototype.slice);

//class 객체를 만들수 있는 새로운방법 es6부터 지원되는것

//class
//선언적 방식
class A {}

console.log(new A());

//class 표현식을 변수에 할당

const B = class {};
console.log(new B());

//선언적 방식이지만 호이스팅은 일어나지 않는다

//constructor 생성자

class A {}

console.log(new A());

class B {
  constructor() {
    console.log('constructor');
  }
}

console.log(new B());

class C {
  constructor(name, age) {
    console.log('constructor', name, age);
  }
}

console.log(new C('Mark', 38));
console.log(new C());

//12월 19일 복습

//맴버 변수

class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.log(new A('mark', 34));

//class field 는 런타임 확인

class B {
  name;
  age;
}

console.log(new B());

class C {
  name = 'no name';
  age = 0;

  constructor(name) {
    this.name = name;
    this.age = age;
  }
}

console.log(new C('jang', 30));

//멤버 함수

class A {
  hello1() {
    console.log('hello1', this);
  }
  hello2 = () => {
    console.log('hello2', this);
  };
}

new A().hello1();
new A().hello2();

class B {
  name = 'Mark';

  hello() {
    console.log('hello', this.name);
  }
}

new B().hello();

// get , set

class A {
  _name = 'no name' + '@@@';

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value + '!!!';
  }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a);
console.log(a.name);
console.log(a._name);

//readonly

class B {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }
}

const b = new B();
console.log(b);
b.name = 'Mark';
console.log(b);

//static 변수, 함수
//객체가 아니고 클래스의 변수와 함수

class A {
  static age = 37;
  static hello() {
    console.log(A.age);
  }
}

console.log(A, A.age);
A.hello();

class B {
  age = 37;
  static hello() {
    console.log(this.age);
  }
}

console.log(B, B.age);
//스태틱은 함수를 내부에있는걸 호출해야 대므로 스태틱을 붙여줘야 호출이가능하다
B.hello();
// new B().hello();

class C {
  static name = '이 클래스의 이름을 C가 아니다';
}

//extends 상속

//상속 기본

class Parent {
  name = 'Lee';

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {}
const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();

//override
//클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가 덮어쓰기라고 생각하면댄다

class Parent {
  name = 'Lee';

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age = 37;

  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent();
const c = new Child();

//super 클래스의 상속 생성자 함수 변경

class Parent {
  name;

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age;

  constructor(name, age) {
    super(name);
    this.age = age;
    this.name = name;
  }

  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent('Mark');
const c = new Child('Mark', 39);

//자식에서 컨스트럭터를 쓸때 슈퍼를 무조건 사용해줘야한다

//static 상속

class Parent {
  static age = 37;
}

class Child extends Parent {}

console.log(Parent.age, Child.age);

//Promise
//ES6부터 js의 표준 내장 객체로 추가 되었습니다
//ES6 를 지원하는 브라우저나 node.js에서 전역에 있는 promise를 확인할수있습니다

console.log(Promise);

//생성자를 통해서 프로미스 객체를 만들수 있습니다
//생성자의 인자로 executor라는 함수를 이용합니다.

new Promise(/* executor */ (resolve, reject) => {});

/*executor 함수는 resolve 와 reject 를 인자로 가집니다
(resolve, reject) => {...}
resolve 와 reject 는 함수입니다.
resolve(), reject()
*/

//생성자를 통해서 프로미스 객체를 만드는순간 pending(대기) 상태라고 합니다

new Promise((resolve, reject) => {}); //pending

//executor 함수 인자 중 하나인 resolve함수를 실행하면 , fulfilled(이행) 상태가 됩니다.

new Promise((resolve, reject) => {
  resolve(); // fullfilled
});

//executor 함수 인자중 하나인 reject 함수를 실행하면 , rejected(거부) 상태가 됩니다

new Promise((resolve, reject) => {
  reject(); //rejected
});

//p라는 프로미스 객체는 1000ms 후에 fulfilled 가 된다

new Promise((resolve, reject) => {
  //pending
  setTimeout(() => {
    resolve(); //fulfilled
  }, 1000);
});

//p라는 프로미스 객체가 fulfilled되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다

const p = new Promise((resolve, reject) => {
  //pending
  setTimeout(() => {
    resolve(); //fulfilled
  }, 1000);
});

//call back 을 작성하는 공간
p.then(() => {
  console.log('1000ms gndp Fulfilled 됩니다');
});

//p.then으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback 이 실행됩니다

//then 을 설정하는 시점을 정확히하고, 함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해
//프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에 then 을 설정합니다

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      resolve(); //fulfilled
    }, 1000);
  });
}

p().then(() => {
  console.log('1000ms 후에 Fulfilled 됩니다');
});

//마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행됩니다.

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      reject(); //rejected
    }, 1000);
  });
}

p()
  .then(() => {
    console.log('1000ms 후에 Fulfilled 됩니다');
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다');
  });

//Executor 의 resolve 함수를 실행할때 인자를 넣어 실행하면 , Then 의 callback 함수의 인자로 받을 수 있습니다
// resolve('hello');
// then((message)=>{...})

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log(message);
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다');
  });

//마찬가지로, executor의 reject 함수를 실행할때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있습니다
//reject('error');
//then((reason)=>{...})

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log(message);
  })
  .catch((reason) => {
    console.log(reason);
  });

//보통 reject 함수를 실행하면 rejected되는 이유를 넘기는데, 표준 내장 객체인 error의 생성자를 이용하여 error 객체를 만들수있다

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      reject(new Error('bad'));
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Fulfilled되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, finally() 를 설정하고, 함수를 인자로 넣습니다

function p() {
  return new Promise((resolve, reject) => {
    //pending
    setTimeout(() => {
      reject(new Error('bad'));
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('end');
  });

//보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
//이런 경우 함수가 진행되지 않고 , callback 함수 안으로 진행됩니다.

function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

c(() => {
  console.log('1000ms 후에 callback 함수가 실행됩니다.');
});

c(() => {
  c(() => {
    c(() => {
      console.log('3000ms 후에 callback 함수가 실행됩니다.');
    });
  });
});
//callback hell!!

//then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다
//then 에 함수를 넣는 여러 방법을 확인해봅시다.

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

p()
  .then(() => {
    return p();
  })
  .then(() => {})
  .then(p)
  .then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.');
  });

/* value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
value 가 프로미스 객체면, resolve 된 then 메서드를 실행합니다.
value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행합니다 */

Promise.resolve(/* value */);

Promise.resolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 1000);
  })
).then((data) => {
  console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.', data);
});

Promise.resolve('bar').then((data) => {
  console.log('then 메서드가 없는 경우, fulfilled 됩니다', data);
});

//promise.resolve를 쓰는이유는 프로미스 객체인지 아닌지 확인하기위해 쓰는것이다

//promise.reject 를 사용하면 , catch 로 연결된 rejected 상태로 변경된다.
Promise.reject(/* value */);

Promise.reject(new Error('reason'))
  .then((error) => {})
  .catch((error) => {
    console.log(error);
  });

//프로미스 객체 여러개를 생성하여, 배열로 만들어 인자로 넣고 promise.all 을 실해앟면
//배열의 모든 프로미스 객체들이 Fullfilled 되었을때, then 의 함수가 실행됩니다.
//then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다

// Promise.all([프로미스 객체들])

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
  console.log('모두 fulfilled 된 이후에 실행됩니다.', messages);
});

/* 프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자 값을 돌려줍니다
*/
//Promise.race([프로미스 객체들])

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
  console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', message);
});

//여기까지 프로미스였고 자바스크립트에서 비동기를 처리할때 가장 중요하게 해야대는것이다

//async-await
//비동기처리

//async function 함수이름(){}
//const 함수이름 = async()=>{}

//Promise 객체를 리턴하는 함수

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resoleve(ms);
    }, ms);
  });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then((ms) => {
  console.log(`${ms} ms 후에 실행된다`);
});

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

const ms = await p(1000);
console.log(`${ms} ms 후에 실행된다`);

//await 를 사용하는 경구 , 항상 async 함수 안에서 사용되어야 한다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resoleve(ms);
    }, ms);
  });
}

(async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행된다`);
})();

//async await 장점 코드가 밑으로 흘러가게끔 도와준다

//Promise 객체가 rejected 된 경우의 처리를 위해
//try catch 를 이용한다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('reason'));
    }, ms);
  });
}

(async function main() {
  try {
    const ms = await p(1000);
  } catch (error) {
    console.log(error);
  }
});

//async function 에서 return 되는 값은
//Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  return 'Mark';
}

(async function main() {
  try {
    const ms = await asyncP(1000);
    console.log(name);
  } catch (error) {
    console.log(error);
  }
});

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'Mark:' + ms;
}

(async function main() {
  try {
    const ms = await asyncP(1000);
    console.log(name);
  } catch (error) {
    console.log(error);
  }
});

// error의 전파

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms)
      reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'Mark:' + ms;
}

(async function main() {
  try {
    const ms = await asyncP(1000);
    console.log(name);
  } catch (error) {
    console.log(error);
  }
});

//finally

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms)
      reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'Mark:' + ms;
}

(async function main() {
  try {
    const ms = await asyncP(1000);
    console.log(name);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('end');
  }
})();

//Promise 리턴체이닝

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

p(1000)
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
    console.log('3000ms 후에 실행');
  });

//async await 한줄한줄 비동기가끝나면 처리

(async function main() {
  await p(1000);
  await p(1000);
  await p(1000);
  console.log('3000ms 후에 실행');
})();

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

//promise.all

(async function main() {
  const results = await Promise.all([p(1000), p(2000), p(3000)]);
  console.log(results);
})();

//promise.race

(async function main() {
  const result = await Promise.race([p(1000), p(2000), p(3000)]);
  console.log(result);
})();
