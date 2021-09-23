# Leegoing_react_basic
생활코딩 React 기초

1. React 기술이 해결한 문제
: 컴포넌트라는 사용자 정의 태그를 생성함으로써 아래 3가지 장점을 갖게되었다.
  1) 가독성
  2) 재사용성
  3) 유지보수
  --> 컴포넌트를 통해 HTML 활용도가 비약적으로 상승


2. create-react-app 설치 (https://create-react-app.dev/docs/getting-started/)
  1) npx
    npx create-react-app my-app
  2) npm
    npm init react-app my-app


3. React의 구조 : 크게 public 폴더와 src폴더로 구성.
 1) public 폴더 : index.html
 index.html이 웹페이지에 보여지게되고, index.html의 id가 root인 div 태그가 핵심

 2) src 폴더 : index.js, App.js
 index.js에서 App.js를 import하여 해당 내용을 index.html의 root에 정보를 뿌려준다.
 App.js에서 App 컴포넌트에 내용이 작성된다.
  * App은 function으로 작성되기도 하고, class로 작성되기도 한다.
    1. function App() {...} : App 함수가 컴포넌트로 쓰임.
    2. class App extends Component {...} : react의 Component 클래스를 상속받아 App 클래스 생성