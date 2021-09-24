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


3. 배포하는 방법
 1) npm run build  -> build폴더에 불필요한 정보 모두 제거하고 파일 생성 (용량이 10%수준으로 줄어든다.)
 2) 웹서버에서 빌드할때, 최상위 루트 경로를 build경로로 지정해서 배포하면 된다.
 --> npx serve -s build : build 디렉토리를 루트로 로컬상에서 배포 테스트해볼 수 있는 명령어.
   * npm start는 public 디렉토리를 루트로 HTML을 띄운다.

* React Developer Tools : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko
--> 리액트의 컴포넌트를 웹페이지 Inspect에서 볼 수 있게해주는 크롬 확장 프로그램