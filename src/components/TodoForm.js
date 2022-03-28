import React, { useState } from "react";
export default function TodoForm(props) {
    const [text, setText] = useState("");

    function addItem(event) {
        event.preventDefault();
        if (text) {
        //   setItems([...items, text]);
        props.onAddItem(text)
          setText("");
        }
      }
      function handleChange(event) {
        let t = event.target.value;
        setText(t);
      }
  
    return (
    <form>
      <input type="text" onChange={handleChange} value={text} placeholder="Insert a task"></input>
      <button onClick={addItem}>Add</button>
    </form>
  );

  
}
