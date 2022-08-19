//let 은 두번선언 못함!!!!!!!! >> 권장사항
//전역변수는 var, let을 사용하지 않음
/*
function run() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}


run();
console.log('Done !!!');
*/
/*
function run() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 1000);
}

run();
console.log('Done !!!');
*/

//<세번째 코드>
//자바스크립트는 함수를 [1급객체]로 판단 >> 변수처럼 쓸 수 있다
// run( callback 이란 함수를 호출할 것!!!)
/*
function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  run(() => {
    console.log('Done !!!');
  });
*/


/*네번째 코드 */
//Promise() 콜백을 지향하는 방식 
//resolve >> 성공했을때 사용 
//reject >> 실패했을때 사용 
// callback 복잡함을 해결하기 위해 Promise() 가 도입됨
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

function run2() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 2000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

//비동기 속성을 가는 함수 지정 
//await는 실행되는 함수가 끝날때 까지 기다려라!!!
async function process() {
  await run();
  await run();
  console.log('Done !!!');
}

process();

