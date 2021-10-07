import React from "react";


function TOC(props) {
  console.log('TOC render');
  var lists = [];
  var data = props.data;
  var i = 0;
  while(i < data.length){
    lists.push(
      <li key={data[i].id}>
        <a
         href={`/content/${data[i].id}`}
         data-id={data[i].id}
         onClick={function(id, e){
           e.preventDefault();
           props.onChangePage(id);
         }.bind(this, data[i].id)}
        >{data[i].title}
        </a>
      </li>);
    i++;
  }
  return(
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  );
}

function dataequal(preProps, nextProps){
  return (
    preProps.data === nextProps.data
  )
}

export default React.memo(TOC, dataequal);