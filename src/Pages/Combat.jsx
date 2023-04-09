import { Button } from "bootstrap";
import React from "react";
import App, { Roll, RollSkill } from '../App';

import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

function Combat() {
    const [weaponList, setWeaponList] = useState([]);
    const [spellList, setSpellList] = useState([]);
    const [saveList, setSaveList] = useState([]);

    const storageLoad = () => {

        let weaps = JSON.parse(localStorage.getItem("weapon"));
        let spells = JSON.parse(localStorage.getItem("spell"));
        if (weaps != null) setWeaponList(weaps);
        if (spells != null) setSpellList(spells);

        //Save load
        let saves = JSON.parse(localStorage.getItem("save"));
        if (saves == null) {
            localStorage.setItem("save", JSON.stringify(initSaveSkill));
            saves = JSON.parse(localStorage.getItem("save"));

        }
        setSaveList(saves);
    };


    useEffect(() => {
        try {
            storageLoad();
        } catch (e) {
            console.log(e);
        }
    }, []);


    let btns = [];
    for (let i = 0; i < weaponList.length; i++) {
        if (weaponList[i].wName == "") continue;
        btns.push(<BtnCombat
            key={i}
            btnname={weaponList[i].wName}
            btnhit={weaponList[i].wHitRoll}
            btndmg={weaponList[i].wDmgRoll}
        />
        )
    }

    //holy this is redundant
    let btnSpells = [];
    for (let i = 0; i < spellList.length; i++) {
        if (spellList[i].wName == "") continue;
        btnSpells.push(<BtnCombat
            key={i}
            btnname={spellList[i].wName}
            btnhit={spellList[i].wHitRoll}
            btndmg={spellList[i].wDmgRoll}
        />
        )
    }

    let btnSaves = [];
    for (let i = 0; i < saveList.length; i++) {
        if (saveList[i].sName == "") continue;
        btnSaves.push(<BtnSkill
            key={i}
            btnname={saveList[i].sName}
            btnmodify={saveList[i].sModify}
        />
        )
    }


    return (
        <div className="divCombat">
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Weapons</Accordion.Header>
                    <Accordion.Body>
                        <div className="divWeaponBtns">
                            {btns}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Spells</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSpellBtns">
                            {btnSpells}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Saving Throws</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSaveBtns">
                            {btnSaves}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>

    )
}


function BtnCombat({ key, btnname, btnhit, btndmg }) {
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

function BtnSkill({ key, btnname, btnmodify }) {
    return (
        <div className="divSkillCombat">
            <button id={key} className="btnCombat" onClick={() => {
                RollSkill(btnmodify, btnname);
            }} style={{width: "140px", margin: "4px",  height: "69px"}}>
                {btnname + " " + btnmodify}
            </button>
        </div>

    )
}

export default Combat;