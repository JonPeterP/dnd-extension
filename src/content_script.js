
// See package json for npm run build-extension  codes
function Roll(rollText) {
    console.log("running this command");
    //Enter to textbox and click enter
    rollText = "/r " + rollText; 
    var textarea = document.querySelector('textarea[title="Text Chat Input"]');
    textarea.value = rollText;
    var sendbtn = document.getElementById("chatSendBtn");
    sendbtn.click();
    console.log(textarea);
}

Roll(rollText);