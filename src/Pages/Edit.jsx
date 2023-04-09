import React from "react";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";


//Weapon Object
function weapon(name, hit, dmg) {
    this.wName = name;
    this.wHitRoll = hit;
    this.wDmgRoll = dmg;
}

//Skill and saving throw object
function skill(name, modify) {
    this.sName = name;
    this.sModify = modify;
}

let initSaveSkill = [
    { "sName": "Strength", "sModify": "0" },
    { "sName": "Dexterity", "sModify": "0" },
    { "sName": "Constitution", "sModify": "0" },
    { "sName": "Intelligence", "sModify": "0" },
    { "sName": "Wisdom", "sModify": "0" },
    { "sName": "Charisma", "sModify": "0" }
]

let initSkill = [
    { "sName": "Acrobatics", "sModify": "0" },
    { "sName": "Animal Handling", "sModify": "0" },
    { "sName": "Arcana", "sModify": "0" },
    { "sName": "Athletics", "sModify": "0" },
    { "sName": "Deception", "sModify": "0" },
    { "sName": "History", "sModify": "0" },
    { "sName": "Insight", "sModify": "0" },
    { "sName": "Intimidation", "sModify": "0" },
    { "sName": "Investigation", "sModify": "0" },
    { "sName": "Medicine", "sModify": "0" },
    { "sName": "Nature", "sModify": "0" },
    { "sName": "Perception", "sModify": "0" },
    { "sName": "Performance", "sModify": "0" },
    { "sName": "Persuasion", "sModify": "0" },
    { "sName": "Religion", "sModify": "0" },
    { "sName": "Sleight of Hand", "sModify": "0" },
    { "sName": "Stealth", "sModify": "0" },
    { "sName": "Survival", "sModify": "0" },

]

function Edit() {
    const wEdit = [];

    //edit this later just use objects
    const [weaponList, setWeaponList] = useState([]);
    const [spellList, setSpellList] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [saveList, setSaveList] = useState([]);

    //Nakakatamad imodular help
    const AddNewWeapon = event => {
        let newW = new weapon("", "", "");
        if (containsObject(newW, weaponList) == false) {
            setWeaponList(weaponList.concat(newW));
            storageSave(weaponList);
        }
    }

    const AddNewSpell = event => {
        let newW = new weapon("", "", "");
        if (containsObject(newW, spellList) == false) {
            setSpellList(spellList.concat(newW));
            storageSave(weaponList);
        }
    }




    const removeWeapon = (weapName) => {
        const lstResult = weaponList.filter(weap => weap.wName != weapName);
        setWeaponList(lstResult);
        storageSave("weapon", lstResult); //I hate useState  there is some delay of sort
    }

    const removeSpell = (spellName) => {
        const lstResult = spellList.filter(spel => spel.wName != spellName);
        setSpellList(lstResult);
        storageSave("spell", lstResult);
    }


    //html insert for skills
    function EditSkill({ key, sName, sModify, saveKey, skillLst }) {
        let skillArr = skillLst;

        const [inputs, setInputs] = useState({});
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }
        const handleSubmit = (event) => {

            event.preventDefault();
            const newS = new skill(sName, inputs.sModify);
            if (inputs.sModify == null) {
                alert("fill all field");
                return;
            }

            let i = 0;
            for (i = 0; i < skillArr.length; i++) {
                console.log("looping thru: " + skillArr[i].sName);
                if (skillArr[i].sName == newS.sName) {
                    skillArr[i].sModify = newS.sModify;

                    console.log("saving now");
                    storageSkillSave(saveKey, skillArr);

                    break;
                }
            }
        }


        return (
            <div id={key} className={"divSkillEditField " + sName}>
                <form name={"skill"} className="formSkill" autoComplete="off" onSubmit={handleSubmit}>
                    <label style={{ marginRight: "12px" }}>
                        {sName}
                    </label>
                    <input type="text" name='sModify' placeholder="modifier ex: +2" style={{ width: "32px", marginRight: "12px" }} onChange={handleChange}
                        defaultValue={sModify}></input>
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }


    function EditWeapon({ key, wName, wHitRoll, wDmgRoll, saveKey, weaponLst }) {
        // wName, wHitDie, wHitRoll, wHitModify, wDmgDie, wDmgRoll, wDmgModify 
        let weaponArr = weaponLst;
        const [inputs, setInputs] = useState({});
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }

        const handleSubmit = (event) => {
            console.log(weaponArr);
            event.preventDefault();
            const newW = new weapon(inputs.wName, inputs.wHitRoll, inputs.wDmgRoll);
            if (inputs.wName == null || inputs.wHitRoll == null | inputs.wDmgRoll == null) {
                alert("fill all field");
                return;
            }

            let i = 0;
            for (i = 0; i < weaponArr.length; i++) {
                console.log("looping thru: " + weaponArr[i].wName);
                if (weaponArr[i].wName == newW.wName) {
                    weaponArr[i].wHitRoll = newW.wHitRoll;
                    weaponArr[i].wDmgRoll = newW.wDmgRoll;
                    storageSave(saveKey, weaponArr);
                    break;
                }
                if (weaponArr[i].wName == "" && newW.wName != "") {
                    //Fills first empty cell
                    weaponArr[i].wName = newW.wName;
                    weaponArr[i].wHitRoll = newW.wHitRoll;
                    weaponArr[i].wDmgRoll = newW.wDmgRoll;

                    storageSave(saveKey, weaponArr);
                    break;
                }
            }
        }

        return (

            <div id={key} className={"divWeaponEditField " + wName}>
                <form name={"weapon"} className="formWeapon" autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" name='wName' placeholder="Weapon/Spell Name" style={{ width: "155px" }} onChange={handleChange}
                        defaultValue={wName}
                    ></input>
                    <input type="text" name='wHitRoll' placeholder="hit roll ex: (1d20+5)" style={{ width: "155px" }} onChange={handleChange}
                        defaultValue={wHitRoll}
                    ></input>
                    <input type="text" name='wDmgRoll' placeholder="dmg roll ex: (1d8+3)" style={{ width: "155px" }} onChange={handleChange}
                        defaultValue={wDmgRoll}
                    ></input>

                    <input type="submit" value="Save" />
                </form>
                <button onClick={() => {
                    console.log("del");
                    if (saveKey == "weapon") removeWeapon(wName);
                    if (saveKey == "spell") removeSpell(wName);

                }} style={{ width: "40px", height: "30px", padding: "0", marginTop: "5px" }}>del</button>
            </div>

        )
    }




    //CHROME LOCAL STORAGE
    function storageSave(saveKey, weap) {
        localStorage.setItem(saveKey, JSON.stringify(weap));
        //localStorage.setItem("spell", JSON.stringify(spell));
        console.log("Storage saved");
        console.log(JSON.stringify(weap));
    }

    function storageSkillSave(saveKey, skill) {
        localStorage.setItem(saveKey, JSON.stringify(skill));
        console.log("Storage saved");
        console.log(JSON.stringify(skill));
    }

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

        //Skill load
        let skills = JSON.parse(localStorage.getItem("skill"));
        if (skills == null) {
            localStorage.setItem("skill", JSON.stringify(initSkill));
            skills = JSON.parse(localStorage.getItem("skill"));

        }
        setSkillList(skills);
    };


    useEffect(() => {
        try {
            storageLoad();
        } catch (e) {
            console.log(e);
        }
    }, []);


    return (

        <div className="divEdit">


            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Weapons</Accordion.Header>
                    <Accordion.Body>
                        <div className="divWeaponEdits">
                            {
                                weaponList.map((item, index) => (
                                    <EditWeapon id={index}
                                        key={index}
                                        wName={item.wName}
                                        wHitRoll={item.wHitRoll}
                                        wDmgRoll={item.wDmgRoll}
                                        weaponLst={weaponList}
                                        saveKey={"weapon"}
                                    />
                                ))
                            }
                        </div>
                        <div className="div-AddWeapButton" style={{ marginTop: "12px" }}>
                            --------
                            <button className="btnAddWeap" onClick={AddNewWeapon} style={{ width: "25px", height: "30px", padding: "0", marginLeft: "12px" }}>
                                +
                            </button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Spells</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSpellEdits">
                            {
                                spellList.map((item, index) => (
                                    <EditWeapon id={index}
                                        key={index}
                                        wName={item.wName}
                                        wHitRoll={item.wHitRoll}
                                        wDmgRoll={item.wDmgRoll}
                                        weaponLst={spellList}
                                        saveKey={"spell"}
                                    />
                                ))
                            }
                        </div>
                        <div className="div-AddSpellButton" style={{ marginTop: "12px" }}>
                            --------
                            <button className="btnAddWeap" onClick={AddNewSpell} style={{ width: "25px", height: "30px", padding: "0", marginLeft: "12px" }}>
                                +
                            </button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Saving Throws</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSaveBtns">
                            {
                                saveList.map((item, index) => (
                                    <EditSkill id={index}
                                        key={index}
                                        sName={item.sName}
                                        sModify={item.sModify}
                                        skillLst={saveList}
                                        saveKey={"save"} />
                                ))
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Skills</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSkillBtns">
                            {
                                skillList.map((item, index) => (
                                    <EditSkill id={index}
                                        key={index}
                                        sName={item.sName}
                                        sModify={item.sModify}
                                        skillLst={skillList}
                                        saveKey={"skill"} />
                                ))
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].wName == obj.wName) {
            return true;
        }
    }
    return false;
}





export default Edit;