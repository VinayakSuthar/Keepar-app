import React, {useState} from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function updateNote(event) {
    const {name, value} = event.target;
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <form className="create-note">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={updateNote}
        placeholder="title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={updateNote}
        id="note"
        cols="3"
        placeholder="add note here..."
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
}