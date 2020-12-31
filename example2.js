//변수선언방법

let value = 1;
console.log(value);

//특정이름에 특정값을 담는것 (선언)

value = 2;
console.log(value);

//한번 선언된것은 다시선언할수없다

// --------------------------------------------------------------------------------------------------------------

//상수

const a = 1;

// --------------------------------------------------------------------------------------------------------------

//데이터 타입

let text = 'hello';
let name = '헬로우 자바스크립트';

//---------------------------------------------------------------------------------------------------------------

//참 혹은 거짓

let good = true;
let loading = false;

let friend = null; //없다!
let criminal; //값이 아직 설정되지않았다
console.log(criminal);

//널과 언디파인디드 널은 친구가없다. 언디파인디드는 범인을 아직 누군지모른다 이정도로의 해석

// --------------------------------------------------------------------------------------------------------------

//연산자

// = 이것은 대입연산자 1을 value에 넣겠다
let value = 1;

let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);

// let a 는 1이니까 그 렛 a에 3을 더하고 3을빼고 3을 곱하고 3을 나누는다는뜻

// --------------------------------------------------------------------------------------------------------------

//산술연산자

let a = 1 + 2 - (3 * 4) / 4;
console.log(a);

let a = 1;
console.log(a++);
console.log(a);
console.log(++a);
//a++ ++a 차이는 a를 계산하고 보여주느냐 계산을하고 a를 보여주느냐 차이이다

console.log(a--);
console.log(a);

// --------------------------------------------------------------------------------------------------------------

//논리연산자

// 낫 > 엔드 > 오얼 순으로 연산이 처리된다
//NOT !
//AND &&
//OR ||

const a = !true;
console.log(a);
//특정 불리언을 반전시켜준다 트루에 느낌표면 펄스가 되고 펄스에 느낌푠 트루가된다

//양옆에 결과가 트루일때만 트루가 나타난다
const a = true && true;
console.log(a);

//둘중에 하나가 트루라면 트루가된다
const a = true || true;
console.log(a);

const value = !((true && false) || (true && false) || !false);
console.log(value);

// !(true && false || true && false || true)
// !(false || false || true)
// !(true)
// false

// --------------------------------------------------------------------------------------------------------------

//비교연산자

const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);
// ==는 타입을 정확하게표현하지못하기때문에 ===을쓰는게 맞다

const a = 'a';
const b = 'b';
const notEquals = a !== b;
console.log(notEquals);

const a = 10;
const b = 20;
const c = 30;

console.log(a < b);
console.log(b > a);

console.log(b >= a);
//b가 a보다 크거나 같다
console.log(a <= c);
console.log(b < c);

const a = '안녕';
const b = '하세요';

console.log(a + b);

// --------------------------------------------------------------------------------------------------------------

//조건문

const a = 1;
if (a + 1 === 2) {
  console.log('a + 1이 2입니다');
  console.log('여러줄도 쓸수있다');
}
//이프문구문이 트루일때 콘솔로그가 발동된다

const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log('if문 안의 a 값은' + a);
}
console.log('if문 밖의 a 값은' + a);

const a = 10;
if (a > 15) {
  console.log('a가 15보다 큽니다');
} else {
  console.log('a가 15보다 크지 않습니다');
}

const a = 10;
if (a === 5) {
  console.log('5입니다!');
} else if (a === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}

// --------------------------------------------------------------------------------------------------------------

//function

function add(a, b) {
  return a + b;
  console.log('호출되지 않는 코드');
}
const sum = add(1, 2);
console.log(sum);

function hello(name) {
  console.log('hello,' + name + '!');
}
hello('구연희');

//위와같이 +연산자를 써도되지만 es6부턴 템플릿리터럴로 사용하여 좀더 편하게 쓸수있다

function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello('velopert');


//점수를 성적등급으로 변환하기


// --------------------------------------------------------------------------------------------------------------
