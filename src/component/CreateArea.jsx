import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isCollapse, setCollapse] = useState(true);

  function handleCollapse() {
    setCollapse(false);
  }

  function updateNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function handleForm(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <form className="create-note" onSubmit={handleForm}>
      {!isCollapse && (
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={updateNote}
          placeholder="title"
          autoComplete="off"
          tabIndex="2"
        />
      )}

      <textarea
        name="content"
        value={note.content}
        onChange={updateNote}
        id="note"
        rows={isCollapse ? 1 : 3}
        placeholder="add note here..."
        onClick={handleCollapse}
        tabIndex="1"
      />
      <Zoom in={!isCollapse}>
        <Fab onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
