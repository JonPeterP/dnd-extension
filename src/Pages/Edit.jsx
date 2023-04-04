import React from "react";
import { useState } from "react";


//Weapon Object

function weapon(name, hit, dmg) {
    this.wName = name;
    this.wHitRoll = hit;
    this.wDmgRoll = dmg;
}


function Edit() {

    const wEdit = [];



    //edit this later just use objects
    const [weaponList, setWeaponList] = useState([]);
    /*
    let weapDiv = document.querySelectorAll(".divWeaponEditField")
    weapDiv.forEach(weap => {
        if (containsObject(weap, weaponList) == false) {
            //console.log("adding object now");
            setWeaponList([...weaponList, weap]);
        }
    });*/


    const AddNewWeapon = event => {
        weapon.wName = "";
        weapon.wDmgRoll = "";
        weapon.wHitRoll = "";

        const newW = new weapon("", "", "");


        console.log(containsObject(newW, weaponList));
        if (containsObject(newW, weaponList) == false) {
            
            setWeaponList(weaponList.concat(...weaponList, weapon));
            //setWeaponList(weaponList.concat(<EditWeapon key={weaponList.length} />));
        }
        console.log(weaponList);

    }


    return (

        <div className="divEdit">
            <h3>-- Weapon</h3>
            <div className="divWeaponEdits">
                {
                    
                    weaponList.map((item, index) => (
                        
                        <EditWeapon id={index}
                            key = {index}
                            wName={item.wName}
                            wHitRoll={item.wHitRoll}
                            wDmgRoll={item.wDmgRoll}
                        />

                    ))
                }
            </div>
            <div className="div-AddWeapButton" style={{marginTop: "12px"}}>
                -----------------------------------
                <button className="btnAddWeap" onClick={AddNewWeapon} style={{width: "40px", height: "30px", padding: "0"}}>
                    +
                </button>
            </div>
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


function EditWeapon({ key, wName, wHitRoll, wDmgRoll }) {
    // wName, wHitDie, wHitRoll, wHitModify, wDmgDie, wDmgRoll, wDmgModify 
    return (
        <div id={key} className="divWeaponEditField">
            <form name={"weapon"} className="formWeapon">
                <input type="text" name='wName' placeholder="Weapon Name" style={{ width: "155px" }}></input>
                <input type="text" name='wHitRoll' placeholder="hit roll ex: (1d20+5)" style={{ width: "155px" }}></input>
                <input type="text" name='wDmgRoll' placeholder="dmg roll ex: (1d8+3)" style={{ width: "155px" }}></input>
                <button onClick={() =>{
                    console.log("del");
                }}  style={{width: "40px", height: "30px", padding: "0"}}  >del</button>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default Edit;