import { useState } from "react";
import Card from "./Card";

export default function Modal(props){

    function HideModal(e){
        let target = e.target       
        if(target.className == 'modal'){
          props.onHideModal()
      }
    }

    return(
        <div id="modal" onClick={HideModal} className={props.show?"modal": "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )
}