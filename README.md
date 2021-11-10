# 5주차 미션: React-Messenger: Refactor!💌

## 서론
안녕하세요 14기 프론트엔드 운영진 김선종입니다.🤗

벌써 메신저로 진행하는 세 번째 미션인데요, 여러분들이 과제를 수행하실 때 마다 실력의 향상이 눈에 보이는 정도라 파트장 입장에서 아주 뿌듯합니다.

여러분들이 리액트를 지난 두달간 사용해 오시면서 기본적인 리액트의 개념과 사용법에 익숙해 지셨을 것이라 생각이 듭니다.

그러다 보니, 이제 조금 더 아름다운 코드와, 코드를 작성할 때에 생산성을 높이는 방법에 대해 고민해 보실 시기라고 생각이 들었어요.

리액트에선 자주 쓰이는 로직들을 hooks로 모아두어서 한단계 더 추상화 하여 관리할 수 있는데요, custom hooks라고 합니다.

여러분들이 과제를 수행하면서 함수들이 중복되는 경험을 하셨던 것 같은데, 이럴 때 custom hooks를 사용한다면 훨씬 가독성 좋은 코드를 작성할 수 있겠죠?

또한, 애플리케이션의 규모가 커지게 될 수록, 컴포넌트가 가지는 props의 종류 또한 다양해지게 됩니다. 무지성 코딩을 하다보면 가끔 이 props의 구성과 이름, 어떤 타입이 들어가야 하는지 헷갈리기 마련이죠.

보통 그럴 때 다시 컴포넌트 정의 부분으로 돌아가 prop의 구성을 보고 오곤 합니다.

하지만 이럴 때, typescript를 적용한다면, 컴포넌트의 구성과, 그 이름, 심지어 타입까지 한번에 자동완성으로 편리하게 관리할 수 있고, 생산성이 증대되겠죠.

따라서 이번주 과제는, 여러분들이 4주차 과제로 수행하셨던, messenger 애플리케이션의 리팩토링 입니다.

이 과정에서 custom hooks를 적용해 중복되는 로직을 최적화 해보시고, typescript를 통해 정적 타이핑의 이점을 느껴보시기 바랍니다.


# 미션

## 미션 목표
- Custom hooks의 사용법을 이해한다
- TypeScript의 정적 타이핑을 리액트에 적용해본다.
- UI 컴포넌트의 중복을 줄여본다.


## 기한
- 2021년 11월 19일(금)까지 (마감 기한 꼭 지켜주세요)


## 필수요건
- Custom hooks를 통해 중복되는 로직을 줄이기
- TypeScript 적용하기

## 선택사항
- Redux, Context API등 Flux 패턴 적용해보기
- Base UI Component system을 통해 UI 컴포넌트의 코드 재사용성 높이기


## 로컬 실행방법
---
디렉토리의 `.js` 파일중 하나를 `.tsx`로 변경한 후 `npm start`를 통해 서버를 실행합니다.

루트 디렉토리에 `tsconfig.json`파일이 생성되었는지 확인합니다. 이제 프로젝트가 타입스크립트로 변환되었습니다.


# 링크 및 참고자료
---

- [타입스크립트 기초](https://joshua1988.github.io/ts/intro.html)
- [TypeScript in React](https://react.vlpt.us/using-typescript/02-ts-react-basic.html)
- [Custom hooks](https://ko.reactjs.org/docs/hooks-custom.html)
- [Flux 패턴이란?](https://velog.io/@huurray/React%EC%9D%98-%ED%83%84%EC%83%9D%EA%B3%BC-Flux-%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)
- [`useReducer`](https://www.daleseo.com/react-hooks-use-reducer/)
