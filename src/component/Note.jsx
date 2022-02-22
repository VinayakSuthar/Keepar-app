import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.content}</p>
      <button onClick={handleClick}>del</button>
    </div>
  );
} 

export default Note;