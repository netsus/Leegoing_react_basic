import React from 'react';
import logo from './logo.svg';
import TOC from "./components/TOC"
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

function App() {
  const state = {
    mode:'welcome',
    subject:{title:"REACT", sub:"For UI"},
    welcome:{title:'Welcome', desc:'Hello.  React!!'},
    contents:[
      {id:1, title:"HTML", desc: "HTML is for inforamtion."},
      {id:2, title:"CSS", desc: "CSS is for design."},
      {id:3, title:"JavaScript", desc: "JavaScript is for interactive."}
    ]
  }
  var _title, _desc = null;
  if(state.mode === 'welcome'){
    _title = state.welcome.title;
    _desc = state.welcome.desc;
  } else if(state.mode === 'read'){
    _title = state.contents[0].title;
    _desc = state.contents[0].desc;
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Subject 
        title={state.subject.title}
        sub={state.subject.sub}>
       </Subject>
      <TOC data={state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
}


// class App extends Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Subject title="REACT" sub="For UI"></Subject>
//         <TOC></TOC>
//         <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
//       </div>
//     );
//     }
//   }
export default App;
