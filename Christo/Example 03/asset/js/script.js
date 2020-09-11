window.addEventListener("load", initialize);

function initialize() {
    btnReset.addEventListener("click", btnResetMC);

    valid = "2px solid green";
    invalid = "2px solid red";
    initial = "1px solid white";

    loadForm();
}

function loadForm() {
    txtName.value = "";
    txtEmail.value = "";
    txtWebsite.value = "";
    txtBudget.value = "";
    txtTimeline.value = "";
    txtNumField.value = "";
    txtCommentsArea.value = "";

    setStyle(initial);
}

function setStyle(style) {
    txtName.style.border = style;
    txtEmail.style.border = style;
    txtWebsite.style.border = style;
    txtBudget.style.border = style;
    txtTimeline.style.border = style;
    txtNumField.style.border = style;
    txtCommentsArea.style.border = style;
}

function keyUpValidation(fieldId, pattern) {
    var string = fieldId.value;
    var ptrn = new RegExp(pattern);
    var result = ptrn.test(string);

    if (result) {
        fieldId.style.border = valid;
    } else {
        fieldId.style.border = invalid;
    }
}

function btnResetMC() {
    loadForm();
}