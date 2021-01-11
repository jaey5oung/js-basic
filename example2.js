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
//default 아무것도일치하지않은 경우 쓴다
//break를 쓰지않으면 밑에까지 실행되게 되므로 브레이크를 무조건 걸어준다

// --------------------------------------------------------------------------------------------------------------

//function

//파라메터는 인풋을 얘기한다
//결과값으로 반환하기위해선 return 리턴을 사용한다
function add(a, b) {
  return a + b;
  console.log('호출되지 않는 코드');
}
const sum = add(1, 2);
console.log(sum);

//헬로우라는 함수를 만들고 파라메타로 네임을 받아온다
function hello(name) {
  console.log('hello,' + name + '!');
}
hello('구연희');

//위와같이 +연산자를 써도되지만 es6부턴 템플릿리터럴로 사용하여 좀더 편하게 쓸수있다

function hello(name) {
  console.log(`Hello, ${name}!`);
}
hello('velopert');

//---------------------------------------------------------------------------------------------------------------

function hello(old) {
  return `나는, ${old}!`;
  //예를들어 return을 다시한다던지 이런것들은 안된다
}

const howOld = hello('27살입니다');
console.log(howOld);

//함수안에서 리턴이 사용되고 난후에는 그함수를 재반복할순없다

// --------------------------------------------------------------------------------------------------------------

//점수를 성적등급으로 변환하기

function getGreade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const greade = getGreade(89);
console.log(greade);

// --------------------------------------------------------------------------------------------------------------

//es6 애로우펑션 === 화살표함수

const add = (a, b) => {
  return a + b;
};

const sum = add(1, 2);
console.log(sum);

//위 함수를 더욱 간결하게 하기위해선

const add = (a, b) => a + b;
const sum = add(1, 2);
console.log(sum);

const hello = (name) => {
  console.log(`hello, ${name}!`);
};
hello('jangjaeyoung');

// --------------------------------------------------------------------------------------------------------------

//객체

const dog = {
  name: '멍멍이',
  age: 2,
  cute: true,
  sample: {
    a: 1,
    b: 2,
  },
};
//name,age 왼쪽에있는것들은 키값(띄어쓰기는안대고 따움표로 감싸서 사용할수있다)
//객체를 만들땐 항상 쉼표를 사용해야댄다
console.log(dog.name);
console.log(dog);

const ironMan = {
  name: '토니스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const captainAmerica = {
  name: '스티븐로저스',
  actor: '크리스에반스',
  alias: '캡틴아메리카',
};

//원래는 히어로에 엘리아스 네임 엑터를 넣기위해서 hero.alias 이런식으로 넣었지만 비구조할당으로 위에서 빼오고싶은 정보를 먼저 추출한후 적어주면 더 편하게  사용할수있다
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

//위쪽은 객체정보만 비구조할당으로 넣어놧지만 파라메타도 비구조할당으로 사용할수있다
function print({ alias, name, actor }) {
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// --------------------------------------------------------------------------------------------------------------

//객체안에 함수넣기

const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function () {
    console.log(this.sound);
  },
};

const cat = {
  name: '야옹이',
  sound: '야옹~~!',
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
catSay();

//say 함수의 this는 내가 속해있는 곳을 지칭한다
//펑션말고 화살표함수를 사용했을땐 내부에서 디스가 무엇인지 인지를하지못하기때문에 쓰지못한다
//디스를 밖으로 꺼내쓸땐 도그랑 캣의 관계가 깨진다

// --------------------------------------------------------------------------------------------------------------
const numbers = {
  a: 1,
  b: 2,
};

numbers.a = 5;
console.log(numbers);

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다');
    return this.a + this.b;
  },
};

//게터함수엔 항상 반환되는 리턴이잇어야댄다

console.log(numbers.sum);
//보통은 sum()이런식으로 호출하지만 게터는 조회만 할수잇다고 보면된다
numbers.b = 5;
console.log(numbers.sum);

//set 함수

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);

//getter, setter를 단순히 값 저장용이라고 생각하기보다는 캡슐화, 정보은닉

// --------------------------------------------------------------------------------------------------------------

//배열

const array = ['a', 1, '장재영', {}];
console.log(array[2]);

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

//배열을 추가할땐 푸쉬
objects.push({
  name: '호낭이',
});

console.log(objects);
//배열의 크기를 알아볼땐 length
console.log(objects.length);

// --------------------------------------------------------------------------------------------------------------

//반복문

//for문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const names = ['멍멍이', '야옹이', '멍뭉이'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//while문
let i = 0;
let isFun = false;

//while문에 조건은 트루가된다 예를들어 isFun ===false 도 !isFun으로 고쳐쓸수있다
while (isFun === false) {
  i++;
  if (i === 30) {
    isFun = true;
  }
}

//while문은 항상 조건이 마지막엔 펄스가 되야된다

//for of

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}

//for in

const doggy = {
  name: '멍멍이',
  sound: '멍멍이',
  age: 2,
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.vales(doggy));
//엔트리는 벨류와 키값을 둘다 알아보는것이구 키는 왼쪽 키값만 벨류는 오른쪽 벨류값을 알아보는 함수이다

//break and continue

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}
//컨티뉴는 특정 조건이 만족됬을때 그조건은 스킵이되고 조건이 반복되고 (다음)
//브레이크가 걸렸을때 그 시점에서 조건을 끝마치게된다 (끝)

// --------------------------------------------------------------------------------------------------------------

function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

// --------------------------------------------------------------------------------------------------------------

//forEach
//배열에있는 데이터들을 일괄적으로뽑아올때 쓴다

const superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터 스트레인지'];

function print(hero) {
  console.log(hero);
}

superheroes.forEach(print);

//더깔끔하게하는법
superheroes.forEach((hero) => {
  console.log(hero);
});

// for (i = 0; i < superheroes.length; i++) {
//   console.log(superheroes[i]);
// }

// --------------------------------------------------------------------------------------------------------------

//map
//배열안에원소를 변환할때 사용한다

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squared = [];
array.forEach((n) => {
  squared.push(n * n);
});
console.log(squared);

const squared = (n) => n * n;
const squared = array.map(squared);

console.log(squared);

const items = [
  {
    id: 1,
    text: 'hello',
  },
  {
    id: 2,
    text: 'bye',
  },
];

const texts = items.map((item) => item.text);
console.log(texts);

//몇번째에있는지 확인하기위한것 indexOf

const superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];

const index = superheroes.indexOf('토르');
console.log(index);

//------------------------------------------------------------------------------------------------------------------

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수배우기',
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  },
];

const index = todos.findIndex((todo) => todo.id === 3);
console.log(index);

//findeIndex 특정조건을 확인해서 그조건이 일치한다면 그것을 확인해주는 함수 (몇번쨰인지)
//find를 하게되면 그 값자체를 반환한다 (내용)

//------------------------------------------------------------------------------------------------------------------

//filter

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수배우기',
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  },
];

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);

//------------------------------------------------------------------------------------------------------------------

//splice 해당 배열을 삭제하는것 몇번째인지 명시를 해줘야함 (기존의배열을 건들음)
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);
console.log(index);
console.log(spliced);

//------------------------------------------------------------------------------------------------------------------

//slice는 기존의 배열을 건들지않음
const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);

//------------------------------------------------------------------------------------------------------------------



