
// See package json for npm run build-extension  codes
function Roll20(rollText, rName) {
    
    //Enter to textbox and click enter
    rollText = "/r " + rollText + "  " + rName;
     
    var textarea = document.querySelector('textarea[title="Text Chat Input"]');
    textarea.value = rollText;
    var sendbtn = document.getElementById("chatSendBtn");
    sendbtn.click();
    //console.log(textarea);
}

function Roll20Skill(modify, rName){
     
    //Enter to textbox and click enter
    if(modify == "0") rollText = "/r 1d20 " + "  " + rName;
    else rollText = "/r 1d20 " + modify + "  " + rName;
     
    var textarea = document.querySelector('textarea[title="Text Chat Input"]');
    textarea.value = rollText;
    var sendbtn = document.getElementById("chatSendBtn");
    sendbtn.click();
    //console.log(textarea);
}

//Roll20(rollText, rName);