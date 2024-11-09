let $textColor = null;
let $operatorColor = null;
let $numberColor = null;
let $stringColor = null;
let $commentColor = null;
let $keywordColor = null;
let $builtFunctionColor = null;
let $localMethodColor = null;
let $localPropertyColor = null;
let $nilColor = null;
let $boolColor = null;
let $functionColor = null;
let $localColor = null;
let $selfColor = null;
let $functionNameColor = null;
let $backgroundColor = null;

let $homePage = null;
let $templatePage = null;

let canGenerate = true;

const defaultColors = {
    TEXT: "#cccccc",
    OPERATOR: "#cccccc",
    NUMBER: "#ffc600",
    STRING: "#adf195",
    COMMENT: "#666666",
    KEYWORD: "#f86d7c",
    BUILTFUNCTION: "#84d6f7",
    LOCALMETHOD: "#fdfbac",
    LOCALPROPERTY: "#61a1f1",
    NIL: "#ffc600",
    BOOL: "#ffc600",
    FUNCTION: "#f86d7c",
    LOCAL: "#f86d7c",
    SELF: "#f86d7c",
    FUNCTIONNAME: "#fdfbac",
    BACKGROUND: "#252525",
};

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    loadElements();
});

function loadElements() {
    $homePage = document.getElementById("home-page");
    $templatePage = document.getElementById("templates-page");

    $textColor = document.getElementById("textColor");
    $operatorColor = document.getElementById("operatorColor");
    $numberColor = document.getElementById("numberColor");
    $stringColor = document.getElementById("stringColor");
    $commentColor = document.getElementById("commentColor");
    $keywordColor = document.getElementById("keywordColor");
    $builtFunctionColor = document.getElementById("builtFunctionColor");
    $localMethodColor = document.getElementById("localMethodColor");
    $localPropertyColor = document.getElementById("localPropertyColor");
    $nilColor = document.getElementById("nilColor");
    $boolColor = document.getElementById("boolColor");
    $functionColor = document.getElementById("functionColor");
    $localColor = document.getElementById("localColor");
    $selfColor = document.getElementById("selfColor");
    $functionNameColor = document.getElementById("functionNameColor");
    $backgroundColor = document.getElementById("backgroundColor");

    $textColor.value = defaultColors.TEXT;
    $operatorColor.value = defaultColors.OPERATOR;
    $numberColor.value = defaultColors.NUMBER;
    $stringColor.value = defaultColors.STRING;
    $commentColor.value = defaultColors.COMMENT;
    $keywordColor.value = defaultColors.KEYWORD;
    $builtFunctionColor.value = defaultColors.BUILTFUNCTION;
    $localMethodColor.value = defaultColors.LOCALMETHOD;
    $localPropertyColor.value = defaultColors.LOCALPROPERTY;
    $nilColor.value = defaultColors.NIL;
    $boolColor.value = defaultColors.BOOL;
    $functionColor.value = defaultColors.FUNCTION;
    $localColor.value = defaultColors.LOCAL;
    $selfColor.value = defaultColors.SELF;
    $functionNameColor.value = defaultColors.FUNCTIONNAME;
    $backgroundColor.value = defaultColors.BACKGROUND;

    $textColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("textColor"), this.value);
    });
    $operatorColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("operatorColor"), this.value);
    });
    $numberColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("numberColor"), this.value);
    });
    $stringColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("stringColor"), this.value);
    });
    $commentColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("commentColor"), this.value);
    });
    $keywordColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("keywordColor"), this.value);
    });
    $builtFunctionColor.addEventListener("input", function () {
        setColor(
            document.getElementsByClassName("builtFunctionColor"),
            this.value
        );
    });
    $localMethodColor.addEventListener("input", function () {
        setColor(
            document.getElementsByClassName("localMethodColor"),
            this.value
        );
    });
    $localPropertyColor.addEventListener("input", function () {
        setColor(
            document.getElementsByClassName("localPropertyColor"),
            this.value
        );
    });
    $nilColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("nilColor"), this.value);
    });
    $boolColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("boolColor"), this.value);
    });
    $functionColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("functionColor"), this.value);
    });
    $localColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("localColor"), this.value);
    });
    $selfColor.addEventListener("input", function () {
        setColor(document.getElementsByClassName("selfColor"), this.value);
    });
    $functionNameColor.addEventListener("input", function () {
        setColor(
            document.getElementsByClassName("functionNameColor"),
            this.value
        );
    });
    $backgroundColor.addEventListener("input", function () {
        document.getElementsByClassName(
            "backgroundColor"
        )[0].style.backgroundColor = this.value;
    });
}

function setColor(array, color) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.style.color = color;
    }
}

function generate() {
    if (!canGenerate) {
        return;
    }

    document.getElementById("textMessage").style.display = "block";
    canGenerate = false;

    // Copy the text inside the text field
    navigator.clipboard.writeText("ERES UN TILIN");

    setTimeout(() => {
        document.getElementById("textMessage").style.display = "none";
        canGenerate = true;
    }, 1500);
}

function viewTemplates() {
    $homePage.style.display = "none";
    $templatePage.style.display = "block";
}

function backHomePage() {
    $homePage.style.display = "block";
    $templatePage.style.display = "none";
}
