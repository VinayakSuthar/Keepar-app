import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

export default function App() {
  const [notes, setNotes] = useState([]);

  function AddNotes(newNote) {
    setNotes(prevNote=>{
      return [...prevNote, newNote]
    })
  }

  function deleteNotes(id) {
    setNotes(prevNote=> {
      return prevNote.filter((noteItem, index)=> {
        return index!==id
      });
    });
  }

  return (
    <>
      <Header/>
      <CreateArea onAdd={AddNotes}/>
      {notes.map((noteItem,index) => {
        return(
          <Note
          id={index}
          key={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNotes}
        />);
      })}
      <Footer/>
    </>
  )
}