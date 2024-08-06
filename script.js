"use strict"

let assignLetter = ("abcdefghijklmnopqrstuvwxyz");
let makeAssignLetterToSetArray = assignLetter.split("");

//!remove and add class for screen show and remove start
//for hide home screen to add remove class in the home screen
function addClassForHideHomeScreen(element) {
    document.getElementById(element).classList.add("hidden")
}
//for show playground screen to remove class
function removeClassForShowPlayScreen(element) {
    document.getElementById(element).classList.remove("hidden")
}
//remove playGround screen
function removePlaygroundScreen(element) {
    let catchPlayGroundID = document.getElementById(element);
    catchPlayGroundID.classList.add("hidden")
}
//!remove and add for your end score screen
//remove class to open end screen
function removeClassToShowEndScreen(element) {
    let catchEndScreenID = document.getElementById(element);
    catchEndScreenID.classList.remove("hidden")
}
//add class to hide end score screen
function addClassToHideEndScreen(element) {
    let catchEndScoreScreenID = document.getElementById(element);
    catchEndScoreScreenID.classList.add("hidden")
}
//!set and get random letter
//set random number and then get random letter
function setAndGetRandomLetter(element) {
    let setRandomNumber = Math.round(Math.random() * 25)
    let getRandomLetter = makeAssignLetterToSetArray[setRandomNumber];
    document.getElementById(element).innerText = getRandomLetter
}
//!set color current key button
//set color to highlight current button
function setColorHighlightButton(element) {
    let catchCurrentAlphabet = document.getElementById(element);
    let setColorCurrenButton = catchCurrentAlphabet.innerText.toLocaleLowerCase();
    document.getElementById(setColorCurrenButton).classList.add("bg-orange-600")
}
//!remove color current key button
//set remove current button color if not reset the past button color
function removeCurrenButtonColorIfNotReset(element) {
    let catchCurrentAlphabet = document.getElementById(element);
    let removeColorCurrenButton = catchCurrentAlphabet.innerText.toLocaleLowerCase();
    document.getElementById(removeColorCurrenButton).classList.remove("bg-orange-600")
}
//! count life
//count life function if mistake
function countFunction(element) {
    let catchLife = document.getElementById(element).innerText;
    let makeParseInt = parseInt(catchLife);
    if (makeParseInt > 0) {
        let minuss = makeParseInt - 1;
        document.getElementById(element).innerText = minuss
    }
}
//!my score
//set my score
function setMyScore(element) {
    let catchMyScore = document.getElementById(element);
    let getScoreInner = catchMyScore.innerText;
    let makeNumber = parseInt(getScoreInner);
    let makePlus = makeNumber + 1;
    catchMyScore.innerText = makePlus
}
//!reset life count number
//back to the previous number when enter the page
function resetLifeCountNumber(element) {
    let catchLifeCountID = document.getElementById(element);
    catchLifeCountID.textContent = 5
}
//!reset my score ammount in the playground
// reset my score number when back to playground page
function resetMyScore(element) {
    let catchMyScroeId = document.getElementById(element);
    catchMyScroeId.innerText = 0
}

//!getTottalScore
//get u have score and show
function tottalScore(element, elementTwo) {
    let catchScoreId = document.getElementById(element);
    let getTottalScore = catchScoreId.innerText;
    let catchSecondElemen = document.getElementById(elementTwo);
    catchSecondElemen.innerText = getTottalScore
}


function play() {
    //for reset life count number start
    resetLifeCountNumber("current-life");
    //for reset life count number end
    //for reset my scrore start
    resetMyScore("current-score")
    //for reset my scrore start

    addClassToHideEndScreen("final-score");
    addClassForHideHomeScreen("home-screen");
    removeClassForShowPlayScreen("play-ground");
    setAndGetRandomLetter("current-alphabet");
    setColorHighlightButton("current-alphabet");
}

//! get keyboard pressed button
//get pressed button and others
function keyUpFunction(e) {
    let endScreen = document.getElementById("final-score");
    //if endScreen have not the class of hidden
    if (!endScreen.classList.contains("hidden")) {
        return; // Exit the function if the end screen is visible
    }

    let pressedKeyToLowercase = e.key.toLowerCase();
    let getRandomLetterToCompare = document.getElementById("current-alphabet").innerText.toLowerCase()
    if (pressedKeyToLowercase === getRandomLetterToCompare) {
        //removeCurrenButtonColorIfNotReset("current-alphabet") use for reset past button color start
        removeCurrenButtonColorIfNotReset("current-alphabet")
        //removeCurrenButtonColorIfNotReset("current-alphabet") use for reset past button color end

        addClassForHideHomeScreen("home-screen");
        removeClassForShowPlayScreen("play-ground");
        setAndGetRandomLetter("current-alphabet");
        setColorHighlightButton("current-alphabet")
        setMyScore("current-score")
    } else {
        alert("oh no you have pressed wrong key")
        let catchLifeId = document.getElementById("current-life").innerText;
        let makeParseINT = parseInt(catchLifeId);

        countFunction("current-life")
        if (makeParseINT <= 1) {
            //removeCurrenButtonColorIfNotReset("current-alphabet") use for reset past button color start
            removeCurrenButtonColorIfNotReset("current-alphabet")
            //removeCurrenButtonColorIfNotReset("current-alphabet") use for reset past button color end
            removeClassToShowEndScreen("final-score")
            removePlaygroundScreen("play-ground")
            tottalScore("current-score", "last-score")
            let fff = document.getElementById("final-score");
        }
    }
}

document.addEventListener("keyup", keyUpFunction)


