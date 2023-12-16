# 개발자 비상근무

# 🚀 기능 요구 사항

> 기능 구현 완료시 기능 목록 옆에 '⭕️' 표시가 되어있습니다.

## 1. 비상 근무를 배정할 월과 시작 요일을 입력받는다. ⭕️

### 🔍 입, 출력 예시

```
비상 근무를 배정할 월과 시작 요일을 입력하세요> 5,월
```

### ❗️ 예외사항 ❗️

- 요일은 일, 월, 화, 수, 목, 금, 토, 일 이다. 이외의 입력값은 예외처리한다.

- 월은 1월부터 12월까지이다 이외의 입력값은 예외처리한다.

### ❗️ 알아두어야 할 점 ❗️

- 년도는 고려하지 않는다.

- 매년 2월은 28일까지 있다.

## 2. 평일 비상 근무할 사원 닉네임을 입력 받는다. ⭕️

### 🔍 입, 출력 예시

```
평일 비상 근무 순번대로 사원 닉네임을 입력하세요> 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
```

### ❗️ 예외사항 ❗️

- 각 근무자의 닉네임은 중복되면 안된다.

- 각 근무자의 닉네임은 최대 5자여야한다.

- 근무자는 최소 5명 이상이어야한다.

- 근무자의 숫자는 최대 35명까지이다.

- 비상 근무자는 평일이나 휴일, 공휴일에 각 1번씩만 나와야한다. 만약 그 주에 2번이상 나오면 예외처리한다.

### ❗️ 알아두어야 할 점 ❗️

- 비상 근무자는 평일, 휴일에 각 1번씩 편성되어야한다.

- 비상 근무자는 어떤 경우에도 연속 2일은 근무할수 없다. 어쩔수 없이 연속 2일 근무해야할 경우, 다음 근무자와 순서를 바꿔야한다.

```
평일 순번: 수아, 루루, 글로, 솔로스타, 수아, 슬링키, 참새, 도리, 준팍, 도밥, 고니 => 이러면 수아가 2번 근무를 하기 때문에 안된다.
```

- 예를 들어서 금요일이 휴일이고, 수아가 목요일날 펑일 근무를 서고, 금요일날(휴일)에 또 서야하는경우, 다음 휴일 근무자와 순서를 바꾼다.

```
평일 순번: 준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리
휴일 순번: 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
근무 예시: 준팍(월요일),도밥(화요일),고니(수요일),수아(목요일),루루(금요일/휴일),수아(토요일/휴일),...
```

- 만약 법정 공휴일인 수요일에 수아가 비상근무를 서고, 다음날 평일인 목요일에 또 서야하는 경우 금요일(평일)의 근무자와 순서를 바꾼다.

```
평일 순번: 준팍,도밥,수아,루루,글로,솔로스타,우코,슬링키,참새,도리,고니
휴일 순번: 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
근무 예시: 준팍(월요일),도밥(화요일),수아(수요일/휴일),루루(목요일),수아(금요일),루루(토요일/휴일),글로(일요일/휴일),...
```

- 비상 근무자 배정 시 다음 근무자와 순서를 바꿔야 하는 경우에는, 앞의 날짜부터 순서를 변경해야 한다.

## 3. 휴일(토요일, 일요일, 법정공휴일) 비상 근무 순서를 입력받는다. ⭕️

### 🔍 입, 출력 예시

```
휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> 수아,루루,글로,솔로스타,우코,슬링키,참새,도리,준팍,도밥,고니
```

### ❗️ 예외사항 ❗️

- 이전에 평일에 입력받았던 비상근무자들과 동일해야한다. 만약 그렇지 않은 경우에, 평일 근무자부터 다시 입력받는다

## 4. 최종적인 비상근무표를 출력한다. ⭕️

```
5월 1일 월 준팍
5월 2일 화 도밥
5월 3일 수 고니
5월 4일 목 수아
5월 5일 금(휴일) 루루
5월 6일 토 수아
5월 7일 일 글로
5월 8일 월 루루
5월 9일 화 글로
5월 10일 수 솔로스타
5월 11일 목 우코
5월 12일 금 슬링키
5월 13일 토 솔로스타
5월 14일 일 우코
5월 15일 월 참새
5월 16일 화 도리
5월 17일 수 준팍
5월 18일 목 도밥
5월 19일 금 고니
5월 20일 토 슬링키
5월 21일 일 참새
5월 22일 월 수아
5월 23일 화 루루
5월 24일 수 글로
5월 25일 목 솔로스타
5월 26일 금 우코
5월 27일 토 도리
5월 28일 일 준팍
5월 29일 월 슬링키
5월 30일 화 참새
5월 31일 수 도리
```

### ❗️ 알아두어야 할 점 ❗️

- 토요일, 일요일에는 휴일 표시를 하지않고 특별 공휴일에만 (휴일) 표시를 넣는다.

# 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary>

  `v18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>

  eslint 에 `max-depth': ['error', 2]` 룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

- <details>
    <summary> 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.</summary>

  eslintrc.cjs에 `'max-lines-per-function': ['error', 15],` 룰 추가
  </details>

- <details>
    <summary> 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. </summary>

  `asyncFnHandlerWithError` 라는 유틸 함수 생성 후 각 입력 받는 함수마다 실행
  </details>

# ✏️ 과제 진행 요구 사항

- <details>
    <summary>기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.</summary>

  README.md 파일 작성
  </details>

# - 📂 폴더 구조

<details>
<summary>자세히 보기</summary>

```
📦src
 ┣ 📂constants
 ┃ ┣ 📂conditions
 ┃ ┃ ┗ 📜condition.js
 ┃ ┣ 📂days
 ┃ ┣ 📂delimiters
 ┃ ┃ ┗ 📜delimiter.js
 ┃ ┣ 📂messages
 ┃ ┃ ┣ 📜errorMessage.js
 ┃ ┃ ┗ 📜progressMessage.js
 ┃ ┗ 📂targetData
 ┃ ┃ ┗ 📜targetData.js
 ┣ 📂database
 ┃ ┣ 📜allDate.js
 ┃ ┗ 📜holiday.js
 ┣ 📂domains
 ┃ ┗ 📜WorkShiftMachine.js
 ┣ 📂error
 ┃ ┗ 📜AppError.js
 ┣ 📂service
 ┃ ┗ 📜createCustomCalendar.js
 ┣ 📂utils
 ┃ ┣ 📜asyncFunctionHandlerWithError.js
 ┃ ┣ 📜convertDay.js
 ┃ ┣ 📜deepFreeze.js
 ┃ ┗ 📜isSpecialHoliday.js
 ┣ 📂validators
 ┃ ┣ 📜DayValidator.js
 ┃ ┣ 📜EmergencyWorkersValidator.js
 ┃ ┗ 📜MonthValidator.js
 ┣ 📂views
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OuputView.js
 ┣ 📜App.js
 ┗ 📜index.js
```

</details>

# 🔍 테스트 커버리지

jest의 커버리지 기능으로 테스트 실행 결과를 확인합니다.

```
npx jest --coverage
```

<details>
<summary>테스트 결과 보기</summary>

```
-----------------------------------|---------|----------|---------|---------|-------------------
File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------|---------|----------|---------|---------|-------------------
All files                          |   90.29 |       78 |   97.05 |    89.6 |
 src                               |     100 |      100 |     100 |     100 |
  App.js                           |     100 |      100 |     100 |     100 |
 src/constants/conditions          |     100 |      100 |     100 |     100 |
  condition.js                     |     100 |      100 |     100 |     100 |
 src/constants/delimiters          |     100 |      100 |     100 |     100 |
  delimiter.js                     |     100 |      100 |     100 |     100 |
 src/constants/messages            |     100 |      100 |     100 |     100 |
  errorMessage.js                  |     100 |      100 |     100 |     100 |
  progressMessage.js               |     100 |      100 |     100 |     100 |
 src/database                      |     100 |      100 |     100 |     100 |
  allDate.js                       |     100 |      100 |     100 |     100 |
  holiday.js                       |     100 |      100 |     100 |     100 |
 src/domains                       |   75.67 |    57.14 |     100 |   74.28 |
  WorkShiftMachine.js              |   75.67 |    57.14 |     100 |   74.28 | 47-49,90-96
 src/error                         |     100 |      100 |     100 |     100 |
  AppError.js                      |     100 |      100 |     100 |     100 |
 src/service                       |     100 |    83.33 |     100 |     100 |
  createCustomCalendar.js          |     100 |    83.33 |     100 |     100 | 8
 src/utils                         |     100 |    83.33 |     100 |     100 |
  asyncFunctionHandlerWithError.js |     100 |      100 |     100 |     100 |
  deepFreeze.js                    |     100 |      100 |     100 |     100 |
  isSpecialHoliday.js              |     100 |       50 |     100 |     100 | 4
 src/validators                    |   91.66 |     90.9 |     100 |   91.66 |
  DayValidator.js                  |     100 |      100 |     100 |     100 |
  EmergencyWorkersValidator.js     |      90 |    85.71 |     100 |      90 | 32,58
  MonthValidator.js                |     100 |      100 |     100 |     100 |
 src/views                         |   88.88 |       50 |      90 |   86.66 |
  InputView.js                     |     100 |      100 |     100 |     100 |
  OuputView.js                     |      75 |       50 |      75 |      75 | 11,24
-----------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.05 s
```

</details>
