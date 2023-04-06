import { Button } from "bootstrap";
import React from "react";
import App, { Roll } from '../App';

import { useState, useEffect} from "react";

function Combat() {
    const [weaponList, setWeaponList] = useState([]);

    const storageLoad = () => {
        let weaps = JSON.parse(localStorage.getItem("weapon"));
        if (weaps != null) setWeaponList(weaps);
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
    return (
        <div className="divCombat">
            <h3>Weapons</h3>
            <div className="divWeaponBtns">
                {btns}
            </div>
            <h3>Spells</h3>
            <div className="divSpellBtns">

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
                Roll(btnhit);
            }}>
                {"To Hit " + btnhit}
            </button>
            <button id={key} className="btnCombat" onClick={() => {
                Roll(btndmg);
            }}>
                {"Damage " + btndmg}
            </button>
        </div>

    )
}

export default Combat;