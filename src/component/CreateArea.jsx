import React from "react";

export default function CreateArea() {
  return (
    <form className="create-note">
      <input type="text" placeholder="title" />
      <textarea name="note" id="note" cols="3" placeholder="add note here..."></textarea>
      <button>Add</button>
    </form>
  );
}