

function Roll(rollText) {
    console.log("running this command");
    //Enter to textbox and click enter
    var textarea = document.querySelector('textarea[title="Text Chat Input"]');
    textarea.value = rollText;
    var sendbtn = document.getElementById("chatSendBtn");
    sendbtn.click();
    console.log(textarea);
}

Roll(rollText);