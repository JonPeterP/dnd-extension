import React from "react";
import { useState } from "react";

function Edit() {
    const wEdit = [];

    return (
        <div className="divEdit">
            <h3>-- Weapon</h3>
            <div className="divWeaponEdits">
                <EditWeapon key="1"/>
                
                <EditWeapon key="2"/>

            </div>
        </div>
    )
}

function EditWeapon({ key}) {
   // wName, wHitDie, wHitRoll, wHitModify, wDmgDie, wDmgRoll, wDmgModify 
    return (
        <div id = {key} className="divWeaponEditField">
            <form name={"weapon"} className="formWeapon">
                <input type="text" name='wName' placeholder="Weapon Name" style={{width: "155px"}}></input>
                <input type="text" name='wHitRoll' placeholder="hit roll ex: (1d20+5)" style={{width: "155px"}}></input>
                <input type="text" name='wDmgRoll' placeholder="dmg roll ex: (1d8+3)" style={{width: "155px"}}></input>
                <input type="submit" value="Save" />
            </form>
        </div>
        /* <div className="divLblBtnCombat">
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
         </div> */

    )
}

export default Edit;