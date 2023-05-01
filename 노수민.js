const example = [[1,2,3], [4, [5,6]], 7, [8,9]];

function flatten(data) {
  // 결과 값을 담을 배열 만들기
  let output = [];
  // 입력 받은 배열에 대해 forEach문을 이용해 원소 하나하나에 콜백 함수를 실행
  data.forEach((item) => {
    // 입력 받은 값이 배열일 경우
    if (Array.isArray(item)) {
      // flatten 함수에 다시 넣어서 돌린 뒤 나온 배열 값을 하나하나 전개하여 output 배열에 추가
      output.push(...flatten(item))
    } else {
      // 배열이 아닐 경우 output 배열에 추가
      output.push(item)
    }
  });
  return output;
}

console.log(flatten(example));