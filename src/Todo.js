import React, { useEffect, useState } from "react";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import Modal from "./components/Modal";
import ClearTasks from "./components/ClearTasks";

const SAVED_ITEMS = "savedItems"

export default function Todo() {
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([]);  

  function onClearTasks(item){
    setItems([])
  }

  useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
      setItems(savedItems)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  },[items])


    function onAddItem(text){
      let it = new Item(text)
       setItems([...items, it])
       onHideModal() 
    }

    function onItemRemove(item){
      let filteredItems = items.filter(it=>it.id !== item.id)
      setItems(filteredItems)
    }

    function onCheckItem(item){
      let updatedItems = items.map(it=>{
        if(it.id === item.id){
          it.done = !it.done
        }
        return it
      })
      setItems(updatedItems)
    }
    
    function onHideModal(){ 
      setShowModal(false)
  }

  return (

    <div className="container">
      <header className="header">
        <h1>To do</h1>
        <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button>
      </header>
      <List onCheckItem={onCheckItem} onItemRemove={onItemRemove} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm> </Modal>
        <ClearTasks onClearTasks={onClearTasks}></ClearTasks>
    </div>
  );
}
