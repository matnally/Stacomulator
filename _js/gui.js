
/////////////////////
// START TEMPLATES //
/////////////////////

function guiCreateComedianHTML(intComedian) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateComedian"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template


//COMBOBOX
elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
elemTemplateItem.innerHTML = guiComboBoxCreate(JSONcomedian, "selComedian");


  //IMAGE
  elemTemplateItem = elemTemplateNode.content.querySelector("img.imgComedianImage");
  elemTemplateItem.setAttribute("src", JSONcomedian[intComedian].image); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONcomedian[intComedian].name); //give it a unquie ID based on musican ID
  //NAME
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianNameTemplate");
  elemTemplateItem.innerHTML = JSONcomedian[intComedian].name;
  //DESCRIPTION
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONcomedian[intComedian].description;
  //SET
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianSetTemplate");
  elemTemplateItem.innerHTML = ""; //reset because of += in loop below
  for (let s in JSONcomedian[intComedian].set) {
    elemTemplateItem.innerHTML += JSONset[JSONcomedian[intComedian].set[s]].name;
    if ((JSONcomedian[intComedian].set.length > 1) && (s != 0))  elemTemplateItem.innerHTML += "<br>"; //add comma if more than 1 SET and not on the very first one
  } //for
  //RETURN
  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default
  return strTemp;
} //function

function guiCreateSetHTML(intSet) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateSet"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  //NAME
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetNameTemplate");
  elemTemplateItem.innerHTML = JSONset[intSet].name;
  //DESCRIPTION
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONset[intSet].description;
  //GENRE
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetGenreTemplate");
  elemTemplateItem.innerHTML = JSONgenre[JSONset[intSet].genre].name;
  //TURN
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetTurnTemplate");
  elemTemplateItem.innerHTML = JSONset[intSet].turn;
  //RETURN
  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default
  return strTemp;
} //function

function guiCreateVenueHTML(intVenue) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateVenue"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  //NAME
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueNameTemplate");
  elemTemplateItem.innerHTML = JSONvenue[intVenue].name;
  //DESCRIPTION
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONvenue[intVenue].description;
  //RETURN
  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default
  return strTemp;
} //function

/////////////////////
// END TEMPLATES //
/////////////////////

/////////////////////
// START GAME MENU //
/////////////////////

//SETTINGS
function guiGameMenuStartSettings() {
  navShow("#secGameMenuStartSettings");
} //function
//START
function guiGameMenuStart() {
  gameSetConfig();
  navShow("#secGameMenuStart");
} //function
//COMEDIAN CHOOSE
function guiGameMenuStartComedianChoose() {
  // updateElement("divComedianComboBox", guiComboBoxCreate(JSONcomedian, "selComedian"))
  // document.getElementById("selComedian").addEventListener("change",function(event){
  //   updateElement("divComedianChoose", guiCreateComedianHTML(this.value));
  // }, {passive: true});
  comedianMove(0); //init display starting comedian
  navShow("#secGameMenuStartComedianChoose");
} //function
//COMEDIAN CHOSEN
function guiGameMenuStartComedianChosen() {
  updateElement("divComedianChosen", guiComboBoxCreateSetComedian(JSONplayer[0].comedian, "selComedianChosen"))
} //function
//COMEDIAN CREATE
function guiGameMenuStartcomedianCreateCustom() {
  navShow("#secGameMenuStartComedianCreate");
} //function
//SET
function guiGameMenuMainMenuSet() { //clicked on WRITE SET from menu
//  updateElement("divSetComedian", guiComboBoxCreateSetComedian(JSONplayer[0].comedian, "selComedian"));
  document.getElementById("selComedian").addEventListener("change",function(event){
    updateElement("divComedianDetailsTemplate", guiCreateComedianHTML(this.value));
  }, {passive: true});
  updateElement("divGenre", guiComboBoxCreate(JSONgenre, "selGenre"));
  updateElement("divComedianDetailsTemplate", guiCreateComedianHTML(document.getElementById("selComedian").value));
reDrawreListen(document.getElementById("selComedian").value);
  navShow("#secSet")
} //function
//GIG
function guiGameMenuMainMenuGig() { //re-create and re-listener DOM elements
  //TODO: clean up
  //COMEDIAN
  updateElement("divGigComedian", guiComboBoxCreateSetComedian(JSONplayer[0].comedian, "selGigComedian"));
  document.getElementById("selGigComedian").addEventListener("change",function(event){
    guiCreateUpdateShowSet(JSONcomedian[this.value].set[0]); //init display starting comedian
    updateElement("divSetComedianTemplate", guiCreateComedianHTML(document.getElementById("selGigComedian").value) );
  }, {passive: true});
  updateElement("divSetComedianTemplate", guiCreateComedianHTML(document.getElementById("selGigComedian").value) );
  //TODO: what if a comedian has no sets written?
  //SET
  updateElement("divGigSetName", guiComboBoxCreateSetComedianSet(document.getElementById("selGigComedian").value, "selGigSet", "name"));
  document.getElementById("selGigSet").addEventListener("change",function(event){
    updateElement("divGigSetGenre", JSONgenre[JSONset[this.value].genre].name);
  }, {passive: true});
  updateElement("divSetDetailsTemplate", guiCreateSetHTML(document.getElementById("selGigSet").value) );
  //VENUE
  updateElement("divGigVenue", guiComboBoxCreate(JSONvenue, "selGigVenue"));
  document.getElementById("selGigVenue").addEventListener("change",function(event){
    updateElement("divVenueDetailsTemplate", guiCreateVenueHTML(this.value));
  }, {passive: true});
  updateElement("divVenueDetailsTemplate", guiCreateVenueHTML(document.getElementById("selGigVenue").value));
  //GUI
  guiCreateUpdateShowSet(JSONcomedian[document.getElementById("selGigComedian").value].set[0]); //init display starting comedian
  guiCreateUpdateShowSet(document.getElementById("selGigSet").value); //init display starting comedian
  navShow("#secGig")
} //function
//PUBLICITY
function guiGameMenuMainMenuPublicity() {
  navShow("#secPublicity")
} //function
//TV
function guiGameMenuMainMenuTV() {
  navShow("#secTV")
} //function

///////////////////
// END GAME MENU //
///////////////////



// GUI updates / redraws
function guiCreateUpdateShowSet(intSet) { //re-create and re-listener DOM elements
  updateElement("divGigSetName", guiComboBoxCreateSetComedianSet(document.getElementById("selGigComedian").value, "selGigSet", "name"));
  document.getElementById("selGigSet").addEventListener("change",function(event){
    updateElement("divSetDetailsTemplate", guiCreateSetHTML(document.getElementById("selGigSet").value));
  }, {passive: true});
  updateElement("divSetDetailsTemplate", guiCreateSetHTML(document.getElementById("selGigSet").value));
} //function



/////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function guiPrevNextMove(intStep) {
  let intValue = guiPrevNextMoveGet(intStep);
  let intComedian = parseInt(document.getElementById("selGigComedian").value);
  // document.getElementById("selComedian").value = intValue; //make combobox reflect changes. will invoke onChange function
  updateElement("divSetDetailsTemplate", guiCreateSetHTML(JSONcomedian[intComedian].set[intValue]));
} //function
function guiPrevNextMoveGet(intStep) { //returns safe (not below 0 or above length) comedian index when moving up and down array
  let intComedian = parseInt(document.getElementById("selGigComedian").value);
  let intSet = parseInt(document.getElementById("selGigSet").value);
  let intValue = 0;
  intValue = JSONcomedian[intComedian].set.length; //TODO get current comedian / set?!?!?!
  intValue += intStep; //invoke step
  if (intValue < 0) intValue = JSONcomedian[intComedian].set.length - 1; //beyond the start so go to end (-1 becuase its an index)
  else if (intValue >= JSONcomedian[intComedian].set.length) intValue = 0; //beyond the end so go to start
  return intValue;

} //function
        //
        // function comedianMove(intStep) {
        //   let intComedian = comedianMoveGet(intStep);
        //   document.getElementById("selComedian").value = intComedian; //make combobox reflect changes. will invoke onChange function
        //   updateElement("divComedianChoose", guiCreateComedianHTML(intComedian));
        // } //function
        // function comedianMoveGet(intStep) { //returns safe (not below 0 or above length) comedian index when moving up and down array
        //   let intComedian = parseInt(document.getElementById("selComedian").value); //get current comedian
        //   intComedian += intStep; //invoke step
        //   if (intComedian < 0) intComedian = JSONcomedian.length - 1; //beyond the start so go to end (-1 becuase its an index)
        //   else if (intComedian >= JSONcomedian.length) intComedian = 0; //beyond the end so go to start
        //   return intComedian;
        // } //function
        //






////////////////////
// START COMBOBOX //
////////////////////

function guiComboBoxCreate(arrTemp, strID) {
  let strTemp = "";
  strTemp += "<select id='" + strID + "'>";
  for (let i in arrTemp) {
    strTemp += "<option value='" + i + "'>" + arrTemp[i].name + "</option>";
  } //for
  strTemp += "</select>";
  return strTemp;
} //function

function guiComboBoxCreateSetComedian(arrTemp, strID) {
  let strTemp = "";
  strTemp += "<select id='" + strID + "'>";
  for (let i in arrTemp) {
    strTemp += "<option value='" + arrTemp[i] + "'>" + JSONcomedian[arrTemp[i]].name + "</option>";
  } //for
  strTemp += "</select>";
  return strTemp;
} //function

function guiComboBoxCreateSetComedianSet(intComedian, strID, strProperty) {
  let strTemp = "";
  strTemp += "<select id='" + strID + "'>";
  for (let i in JSONcomedian[intComedian].set) {
    strTemp += "<option value='" + JSONcomedian[intComedian].set[i] + "'>" + JSONset[JSONcomedian[intComedian].set[i]][strProperty] + "</option>";
  } //for
  strTemp += "</select>";
  return strTemp;
} //function

////////////////////
// END COMBOBOX //
////////////////////

//////////////////////
// START NAVIGATION //
//////////////////////

function navHideAll() {
  let elems = document.getElementsByTagName("section");
  for (let i = 0; i < elems.length; i++) {
    $(elems[i]).hide();
  } //for
} //function

function navHide(elem) {
    $(elem).hide();
} //function

function navToggle(elem) {
    $(elem).toggle();
} //function

function navShow(elem) {
    navHideAll();
    $(elem).show();
} //function

function navShowSingle(elem) {
    $(elem).show();
} //function

////////////////////
// END NAVIGATION //
////////////////////
