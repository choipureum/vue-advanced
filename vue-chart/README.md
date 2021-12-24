# vue-chart

## Project setup
```
npm install
npm install chart.js --save
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## chart.js 오픈소스
1. 외부 라이브러리 모듈화
 - 이유: Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함(일반 JS, jQuery 라이브러리 등)
 - 종류:
  1) 차트
  2) 데이터 피커
  3) 테이블
  4) 스피너 등등

## lint 강제하기
> npm i -D lint-staged husky
> 스테이징 영역에 있는 파일을 상대로 린트를 해주며 husky로 git 커맨드 실행시 특정 스크립트를 실행하게 도와주는 라이브러리

```json
//package.json에 추가
  "lint-staged": { 
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```


## 과정
1. 차트 라이브러리 NPM 설치
2. 설치된 라이브러리를 import 로  APP.vue에서 로딩
3. mounted() 라이프 사이클 훅에서 차트를 그림


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
