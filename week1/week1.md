# 1주차 (23.04.10 ~ 23.04.16)

- 자바스크립트의 자료 구조 조사하기

## 권정현

- [스터디 - 내용](https://github.com/jeonghyeonkwon/js-study/blob/main/week1/jeonghyeon/study.md)

## 홍윤근

- [스터디 - 내용](https://github.com/jeonghyeonkwon/js-study/blob/main/week1/yghong/study.md)

## 완료 후 더 찾아볼 것

- char관련

  - 범위(한글 영어 상황 마다 다름) - 1byte = 8비트
    - 아스키
      - 영어, 숫자, " " - 1바이트(8비트)
      - 한글, 한자 - 2바이트(16비트)
    - UTF-8
      - 영어, 숫자, " " - 1바이트(8비트)
      - 한글, 한자 - 3바이트(32비트)
    - UTF-16
      - 영어, 숫자, " " - 2바이트(16비트)
      - 한글, 한자 - 2바이트(16비트)
  - 한글, 영어 어떻게 메모리에 남는지

- 빈 배열도 true인데 리액트에서 && 로 컴포넌트 뿌려주는 것에 대해
  - Array.isArray(arr) && arr.length === 0으로 하면 됨
  - {}, function(){}, NaN, "0", "false", "null" 도 true
- 배열은 정적으로 초기에 크기를 지정해 주는 것에 대한 불편함... 실무 사용 예시
  - 배열 특징
    - 하나의 데이터 형식만 사용할 수 있고 인덱스를 이용한 검색 성능이 좋음
    - 연속적이므로 메모리 관리에 용이
- weakmap, weakset 실무 사용 예시
