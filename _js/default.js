
function updateElement(elemName, strTemp) {
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function generateRandomNumber(intMin, intMax) {
  intMin = Math.ceil(intMin);
  intMax = Math.floor(intMax);
  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin; //intMax and intMin inclusive
} //function

function calcPercentage(intValue, intTotal) {
  let intPercentage = 0;
  intPercentage = ((100 * intValue) / intTotal);
  if (isNaN(intPercentage)) intPercentage = 0; //FIXME: what to do when 0 and 0???
  return Math.ceil(intPercentage.toFixed(0));
} //function

function inArray(JSONtoUse, intValue) {
  let boolReturn = false;
  for (let i in JSONtoUse) {
    if (JSONtoUse[i] == intValue)
      boolReturn = true;
  } //for
  return boolReturn;
} //function


// LOGGING
function displayJSON(strJSON) { //ADMIN
  console.log(JSON.stringify(window[strJSON], null, 2));
  tabulatorUpdateTable(strJSON);
} //function
function logIt(strType, strLog) {
  let strText = "";
  switch (true) {
    case (JSONconfig[0].logging === "ALL"):
      strText = strLog;
      // console.log(strType + " - " + strLog);
    break;
    case (JSONconfig[0].logging === "ALL-ADMIN"):
      if ((strType === "INFO") || (strType === "EVENT") || (strType === "ERROR") || (strType === "DEBUG")) {
        strText = strLog;
        // console.log(strType + " - " + strLog);
      } //if
    break;
    case (JSONconfig[0].logging === "ALL-GAME"):
      if ((strType === "SET") || (strType === "GIG")) {
        strText = strLog;
        // console.log(strType + " - " + strLog);
      } //if
    break;
    default:
      if (JSONconfig[0].logging === strType) {
        strText = strLog;
        // console.log(strType + " - " + strLog);
      } //if
  } //switch
  if (!strText=="") console.log("[" + strType + "]" + " - " + "[" + strText+ "]");
} //function
