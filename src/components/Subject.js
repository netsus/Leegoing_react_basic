function Subject(props) {
  return(
    <header>
      <h1>
        <a href="/" 
        onClick={(e) => {
          e.preventDefault();
        }}>{props.title}</a>
      </h1>
      {props.sub}
    </header>
  );
}

export default Subject;