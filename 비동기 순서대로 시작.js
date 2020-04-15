// https://gist.github.com/anvk/5602ec398e4fdc521e2bf9940fd90f84
// 비동기 순서대로 실행
function asyncFunc(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(e), e * 1000);
  });
}

const arr = [1, 2, 3];
let final = [];

function workMyCollection(arr) {
  return arr.reduce((promise, item) => {
    return promise
      .then((result) => {
        console.log(`item ${item}`);
        return asyncFunc(item).then((result) => final.push(result));
      })
      .catch(console.error);
  }, Promise.resolve());
}

workMyCollection(arr).then(() => console.log(`FINAL RESULT is ${final}`));
