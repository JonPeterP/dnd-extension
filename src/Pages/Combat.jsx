import { Button } from "bootstrap";
import React from "react";
import {Roll} from '../App';

function Combat(){
    return(
    <div>
        <p>Test</p>
        <button onClick={() =>{
            Roll("passing text");
          
        }}>Roll 20</button>
    </div>
    )
}



export default Combat;