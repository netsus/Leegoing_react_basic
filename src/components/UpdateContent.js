
function UpdateContent(props) {
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
        <p><input type="text" name="title" placeholder="title" /></p>
        <p>
          <textarea name="desc" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </article>
  );
}

export default UpdateContent;