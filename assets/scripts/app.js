const defaultResult =0;
let currentResult = defaultResult;
// currentResult =(currentResult+10) *3/2 -1;
// let desciption =`(${defaultResult}+10)*3/2 -1`
// outputResult(currentResult,desciption);
function getnumberInput(){
    return parseInt(userInput.value)
}

function add(){
    const enteredNo=getnumberInput()
    const description=`${currentResult}+${enteredNo}`
    currentResult = currentResult + enteredNo;
    outputResult =(currentResult,description);
}
function substract(){
    const enteredNo=getnumberInput()
    const description=`${currentResult}-${enteredNo}`
    currentResult = currentResult - userInput.value;
    outputResult =(currentResult,description);
}
function divide(){
    const enteredNo=getnumberInput()
    const description=`${currentResult}/${enteredNo}`
    currentResult = currentResult / userInput.value;
    outputResult =(currentResult,description);
}
function multiply(){
    const enteredNo=getnumberInput()
    const description=`${currentResult}*${enteredNo}`
    currentResult = currentResult * userInput.value;
    outputResult =(currentResult,description);
}