import React from "react";
import ListItem from "./ListItem";

export default function List(props) {

  return (
  <ul> {props.items.map(item => (<ListItem key={item.id} item={item} onCheckItem={props.onCheckItem} onItemRemove={props.onItemRemove}></ListItem>))} </ul>
  )
}
