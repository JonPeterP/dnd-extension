import React from "react";
import App, { Roll, RollSkill } from '../App';
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";


function Skills(){
    const [skillList, setSkillList] = useState([]);

    const storageLoad = () => {

         //Skill load
         let skills = JSON.parse(localStorage.getItem("skill"));
         if (skills == null) {
             localStorage.setItem("skill", JSON.stringify(initSkill));
             skills = JSON.parse(localStorage.getItem("skill"));
 
         }
         setSkillList(skills);
    };

    let btnSkills = [];
    for (let i = 0; i < skillList.length; i++) {
        if (skillList[i].sName == "") continue;
        btnSkills.push(<BtnSkill
            key={i}
            btnname={skillList[i].sName}
            btnmodify={skillList[i].sModify}
        />
        )
    }

    useEffect(() => {
        try {
            storageLoad();
        } catch (e) {
            console.log(e);
        }
    }, []);


    return(
    <div className="divSkills">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Skills</Accordion.Header>
                    <Accordion.Body>
                        <div className="divSkillBtns">
                            {btnSkills}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

    </div>
    )
}

function BtnSkill({ key, btnname, btnmodify }) {
    return (
        <div className="divSkillCombat">
            <button id={key} className="btnCombat" onClick={() => {
                RollSkill(btnmodify, btnname);
            }} style={{width: "140px", height: "69px", margin: "4px"}}>
                {btnname + " " + btnmodify}
            </button>
        </div>

    )
}


export default Skills;