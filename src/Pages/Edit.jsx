import React from "react";
import { useState, useEffect } from "react";


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
    const [spellList, setSpellList] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [saveList, setSaveList] = useState([]); 

    const AddNewWeapon = event => {
        let newW = new weapon("", "", "");
        if (containsObject(newW, weaponList) == false) {
            setWeaponList(weaponList.concat(newW));
            storageSave(weaponList);
        }
    }

    const removeWeapon = (weapName) => {
        setWeaponList((curr) =>
            curr.filter((weap) => weap.wName != weapName)
        );
        console.log("Deleting: " + weapName);
        console.log(weaponList);
        
        storageSave(weaponList);
        //console.log("weapon list:");
        //console.log(weaponList);
    }

    function EditWeapon({ key, wName, wHitRoll, wDmgRoll, weaponLst }) {
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
                    break;
                }
                if (weaponArr[i].wName == "" && newW.wName != "") {
                    //Fills first empty cell
                    weaponArr[i].wName = newW.wName;
                    weaponArr[i].wHitRoll = newW.wHitRoll;
                    weaponArr[i].wDmgRoll = newW.wDmgRoll;

                    storageSave(weaponArr);
                    break;
                }
            }
            /////Disable button on click but not workign that well
            //console.log(event);
            //event.target[3].disabled = true;
        }

        return (
            <div id={key} className={"divWeaponEditField " + wName}>
                <form name={"weapon"} className="formWeapon" autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" name='wName' placeholder="Weapon Name" style={{ width: "155px" }} onChange={handleChange}
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
                    removeWeapon(wName);
                }} style={{ width: "40px", height: "30px", padding: "0", marginTop: "5px" }}>del</button>
            </div>
        )
    }




    //CHROME LOCAL STORAGE
    function storageSave(weap) {
        localStorage.setItem("weapon", JSON.stringify(weap));
        console.log("Storage saved");
        console.log(JSON.stringify(weap));
    }

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


    return (

        <div className="divEdit">
            <h3>-- Weapon</h3>
            <div className="divWeaponEdits">
                {
                    weaponList.map((item, index) => (
                        <EditWeapon id={index}
                            key={index}
                            wName={item.wName}
                            wHitRoll={item.wHitRoll}
                            wDmgRoll={item.wDmgRoll}
                            weaponLst={weaponList}
                        />
                    ))
                }
            </div>
            <div className="div-AddWeapButton" style={{ marginTop: "12px" }}>
                -----------------------------------
                <button className="btnAddWeap" onClick={AddNewWeapon} style={{ width: "25px", height: "30px", padding: "0", marginLeft: "12px" }}>
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





export default Edit;