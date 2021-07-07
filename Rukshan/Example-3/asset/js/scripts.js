window.addEventListener("load", initialize);

function initialize() {
    loadForm();
}

function loadForm() {
    txtName.value = "";
    txtEmail.value = "";
    txtWebsite.value = "";
    txtBudget.value = "";
    txtTimeline.value = "";
    txtCalc.value = "";
    txtDescription.value = "";

    txtName.style.border = "1px solid #4e4b4b";
    txtEmail.style.border = "1px solid #4e4b4b"
    txtWebsite.style.border = "1px solid #4e4b4b"
    txtBudget.style.border = "1px solid #4e4b4b"
    txtTimeline.style.border = "1px solid #4e4b4b"
    txtCalc.style.border = "1px solid #4e4b4b"
    txtDescription.style.border = "1px solid #4e4b4b"
}

function checkValidation(id, pattern) {
    var string = id.value;
    var patt = new RegExp(pattern);
    var result = patt.test(string);

    if (result) {
        id.style.border = "2px solid green";
    } else {
        id.style.border = "2px solid red";
    }
}

function clearForm() {
    loadForm();
}