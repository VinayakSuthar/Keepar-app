import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h2 className="title">{props.title}</h2>
      <p className="content">{props.content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
    </div>
  );
} 

export default Note;