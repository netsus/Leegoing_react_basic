import React, { useState } from 'react';
import logo from './logo.svg';
import TOC from "./components/TOC"
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';


function App() {
  var max_content_id = 3;
  var state = {
    mode:'welcome',
    subject:{title:"REACT", sub:"For UI"},
    welcome:{title:'Welcome', desc:'Hello.  React!!'},
    contents:[
      {id:1, title:"HTML", desc: "HTML is for inforamtion."},
      {id:2, title:"CSS", desc: "CSS is for design."},
      {id:3, title:"JavaScript", desc: "JavaScript is for interactive."}
    ]
  }

  const [mode, setMode] = useState('welcome');
  const [content_id, SetContent_id] = useState(1);
  const [contents, SetContents] = useState(state.contents);


  var _title, _desc, _article = null;
  if( mode === 'welcome'){
    _title = state.welcome.title;
    _desc = state.welcome.desc;
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
  } else if( mode === 'read'){
    var i = 0;
    while(i < contents.length){
      var data = contents[i];
      if(data.id === content_id){
        _title = data.title;
        _desc = data.desc;
        break;
      }
      i++;
    }
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>
  } else if (mode === 'create'){
    _article = <CreateContent addContent={function(_title, _desc){
      // add content to this.state.contents
      max_content_id++;
      const newElement = {id:max_content_id, title:_title, desc:_desc};
      SetContents([...contents, newElement]);
      console.log(_title, _desc);
      console.log(this);
    }.bind(state)}></CreateContent>
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Subject 
        title={state.subject.title}
        sub={state.subject.sub}
        setMode={setMode} 
        onChangePage={function(){
          setMode('welcome');
        }}>
       </Subject>
      <TOC 
         onChangePage={function(id){
         setMode('read');
         SetContent_id(Number(id));
       }}
       data={contents}>
      </TOC>
      <Control
       onChangeMode={function(_mode){
         setMode(_mode);
       }}></Control>
      {_article}
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
