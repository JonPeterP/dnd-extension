
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

//Roll20(rollText, rName);