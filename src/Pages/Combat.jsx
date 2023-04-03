import { Button } from "bootstrap";
import React from "react";
import App, { Roll } from '../App';

import { useState } from "react";

function Combat() {


    let btns = [];
    for (let i = 0; i < 15; i++) {
        btns.push(<BtnCombat key={i} btnname={i + " long name very long name"} clickMessage={"pressed " + i.toString()} />)
    }
    return (
        <div className="divCombat">
            <h3>Weapons</h3>
            <div className="divWeaponBtns">
                {btns}
            </div>
        </div>

    )
}


function BtnCombat({ key, btnname, clickMessage }) {
    return (
        <div className="divLblBtnCombat">
            <h4 className="lblCombat">{btnname}</h4>
            <button id={key} className="btnCombat" onClick={() => {
                Roll(clickMessage);
            }}>
                {"To Hit " + "[+5]"}
            </button>
            <button id={key} className="btnCombat" onClick={() => {
                Roll(clickMessage);
            }}>
                {"Damage " + "1d5+5"}
            </button>
        </div>

    )
}

export default Combat;