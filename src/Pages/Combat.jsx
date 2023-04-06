import { Button } from "bootstrap";
import React from "react";
import App, { Roll } from '../App';

import { useState, useEffect} from "react";

function Combat() {
    const [weaponList, setWeaponList] = useState([]);
    const [spellList, setSpellList] = useState([]);

    const storageLoad = () => {
        let weaps = JSON.parse(localStorage.getItem("weapon"));
        let spells = JSON.parse(localStorage.getItem("spell"));

        if (weaps != null) setWeaponList(weaps);
        if (spells != null) setSpellList(spells);

        // console.log("retrived weapons");
        // console.log(weaponList);

        // console.log("weaps");
        // console.log(weaps);
    };

   
    useEffect(() =>{
        try {
            storageLoad();
        }catch (e){
            console.log(e);
        }
    }, []);


    let btns = [];
    for (let i = 0; i < weaponList.length; i++) {
        if(weaponList[i].wName == "") continue;
        btns.push(<BtnCombat
            key={i}
            btnname={weaponList[i].wName}
            btnhit = {weaponList[i].wHitRoll}
            btndmg={weaponList[i].wDmgRoll}
            />
        )
    }

    //holy this is redundant
    let btnSpells = [];
    for (let i = 0; i < spellList.length; i++) {
        if(spellList[i].wName == "") continue;
        btnSpells.push(<BtnCombat
            key={i}
            btnname={spellList[i].wName}
            btnhit = {spellList[i].wHitRoll}
            btndmg={spellList[i].wDmgRoll}
            />
        )
    }



    return (
        <div className="divCombat">
            <h3>Weapons</h3>
            <div className="divWeaponBtns">
                {btns}
            </div>
            <h3>Spells</h3>
            <div className="divSpellBtns">
                {btnSpells}
            </div>
            <h3>Saving Throws</h3>
            <div className="divSavingBtns">
                
            </div>
        </div>

    )
}


function BtnCombat({ key, btnname, btnhit, btndmg}) {
    return (
        <div className="divLblBtnCombat">
            <h4 className="lblCombat">{btnname}</h4>
            <button id={key} className="btnCombat" onClick={() => {
                Roll(btnhit, btnname);
            }}>
                {"To Hit " + btnhit}
            </button>
            <button id={key} className="btnCombat" onClick={() => {
                Roll(btndmg, btnname);
            }}>
                {"Damage " + btndmg}
            </button>
        </div>

    )
}

export default Combat;