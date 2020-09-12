window.addEventListener("load", initialize);

function initialize() {
    btnReset.addEventListener("click", btnResetMC);

    valid = "rgb(177,242,167)";
    invalid = "rgb(252,182,182)";
    initial = "white";
    loadForm();
}

function setStyle(style) {
    txtName.style.background = style;
    txtEmail.style.background = style;
    txtWebsite.style.background = style;
    txtBudget.style.background = style;
    txtTimeLine.style.background = style;
    txtCal.style.background = style;
    txtCommentArea.style.background = style;
}

function loadForm() {
    txtName.value = "";
    txtEmail.value = "";
    txtWebsite.value = "";
    txtBudget.value = "";
    txtTimeLine.value = "";
    txtCal.value = "";
    txtCommentArea.value = "";
    setStyle(initial);
}

function inputFieldValidation(id, pattern) {
    var string = id.value;
    var pattrn = new RegExp(pattern);
    var result = pattrn.test(string);
    if (result) {
        id.style.background = valid;
    } else {
        id.style.background = invalid;
    }
}

function btnResetMC() {
    loadForm();
}