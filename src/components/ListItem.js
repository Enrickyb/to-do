import Card from "./Card";
import React from "react";
import DoneImg from "./DoneImg";

<DoneImg></DoneImg>

export default function ListItem(props) {
  return (
    <li >
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button className="btnaddtask" onClick={() => {props.onCheckItem(props.item);}}>
            <DoneImg done={props.item.done}></DoneImg>
          </button>

          <button className="btnaddtask" onClick={() => {props.onItemRemove(props.item)}}>
            <img alt="check" src="./assets/trash.png"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}
