import React from "react";

function TOC(props) {
  var lists = [];
  var data = props.data;
  var i = 0;
  while(i < data.length){
    lists.push(
      <li key={data[i].id}>
        <a
         href={`/content/${data[i].id}`}
         data-id={data[i].id}
         onClick={function(e){
           e.preventDefault();
           props.onChangePage(e.target.dataset.id);
         }}
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

export default TOC;