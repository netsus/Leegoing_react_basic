import React, { useState } from 'react';

function UpdateContent(props) {
  const [title, setTitle] = useState(props.data.title);
  const [desc, setDesc] = useState(props.data.desc);

  console.log('UpdateContent render');
  console.log(props.data);
  return(
    <article>
      <h2>Update</h2>
      <form action="create_process" method="post"
       onSubmit={function(e){
         e.preventDefault();
         props.addContent(
           e.target.title.value,
           e.target.desc.value
           );
         alert('Submit!!!')
       }}
      >
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="title"
            value={title}
            onChange={function(e){
              setTitle(e.target.value);
            }} /></p>
        <p>
          <textarea 
            name="desc" 
            placeholder="description"
            value={desc}
            onChange={function(e){
              setDesc(e.target.value);
            }}></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </article>
  );
}

export default UpdateContent;