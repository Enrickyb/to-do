import React from "react"

export default function ClearTasks(props){

    function clearTasks(){
    
        props.onClearTasks()
    }

    return(
    <button className="btnClearTasks" onClick={clearTasks}>Clear All Tasks</button>
    )
}