example = [[1,2,3], [4, [5,6]], 7, [8,9]]
def flatten(data):
    # 결과값을 담을 배열 만들기
    output =[]
    # 파이썬에서 for in 문은 자바스크립트의 forEach와 같다 -> 배열의 각 원소에 대해 각각 실행한다.
    for item in data:
        # 만약 data값이 list(배열)이라면 그 배열에 대해 flatten 함수를 다시 호출함
        if type(item) == list:
            # 재귀적으로 처리
            output += flatten(item)
        else:
            # 배열이 아닐 경우 output 배열에 값을 추가함
            output.append(item)
    return output

print(flatten(example))