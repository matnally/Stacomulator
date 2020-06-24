
/////////////////////
// START TEMPLATES //
/////////////////////

function guiCreateHTMLComedianDetails(intComedian, JSONtoUse, intAction) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateComedian"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  //COMBOBOX
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
  switch (intAction) { //determine what to show / limit
    case -2: //CHOOSE COMEDIAN - GAME START
      elemTemplateItem.innerHTML = guiComboBoxCreate(JSONtoUse, "selComedianChoose");
    break;
    case 0: //WRITE SET
      elemTemplateItem.innerHTML = guiComboBoxCreateSetComedian(JSONtoUse, "selComedianSet")
    break;
    case 1: //GIG
      elemTemplateItem.innerHTML = guiComboBoxCreateSetComedian(JSONtoUse, "selComedianGig")
    break;
    default:
      elemTemplateItem.innerHTML = "guiCreateHTMLComedianDetails default - CASE no catered for";
  } //switch
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
  //RETURN
  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default
  return strTemp;
} //function

function guiCreateHTMLSetDetails(intSet) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateSet"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  //COMBOBOX
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetComboBox");
  elemTemplateItem.innerHTML = guiComboBoxCreateSetComedianSet(document.getElementById("selComedianGig").value, "selSet", "name");
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

function guiCreateHTMLVenueDetails(intVenue) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateVenue"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  //COMBOBOX
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueComboBox");
  elemTemplateItem.innerHTML = guiComboBoxCreate(JSONvenue, "selVenue");
  //NAME
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueNameTemplate");
  elemTemplateItem.innerHTML = JSONvenue[intVenue].name;
  //DESCRIPTION
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONvenue[intVenue].description;
  //NAME - CATEGORY PROPERTY
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueCategoryNameTemplate");
  elemTemplateItem.innerHTML = JSONvenueCategory[JSONvenue[intVenue].category].name;
  //DESCRIPTION - CATEGORY PROPERTY
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueCategoryDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONvenueCategory[JSONvenue[intVenue].category].description;
  //CAPACITY - CATEGORY PROPERTY
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueCategoryCapacityTemplate");
  elemTemplateItem.innerHTML = JSONvenueCategory[JSONvenue[intVenue].category].capacity;
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
  guiDisplay(-2);
} //function
//COMEDIAN CHOSEN
function guiGameMenuStartComedianChosen() {
  updateElement("divComedianChosen", guiComboBoxCreateSetComedian(JSONplayer[0].comedian, "selComedianChosen"))
} //function
//COMEDIAN CREATE
function guiGameMenuStartcomedianCreateCustom() {
  navShow("#secGameMenuStartComedianCreate");
} //function

//GUI DISPLAY
//COMBO BOXES
const isOnId = (path,id) => path.some(element => element.id === id); //get element ID from Event Path
document.addEventListener("change", function(event) { //what to display when a particular combo is changed
  switch (true) {
    case isOnId(event.path,"selComedianChoose"): //CHOOSE COMEDIAN
      //COMEDIAN DETAILS
      updateElement("divComedianChoose", guiCreateHTMLComedianDetails(event.target.value, JSONcomedian, -2));
      document.getElementById("selComedianChoose").value = event.target.value;
    break;
    case isOnId(event.path,"selComedianSet"): //WRITE SET
      //SET DETAILS
      updateElement("divComedianDetailsTemplate", guiCreateHTMLComedianDetails(event.target.value, JSONplayer[0].comedian, 0));
      document.getElementById("selComedianSet").value = event.target.value;
    break;
    case isOnId(event.path,"selComedianGig"): //GIG
      //COMEDIAN DETAILS
      updateElement("divSetComedianTemplate", guiCreateHTMLComedianDetails(event.target.value, JSONplayer[0].comedian, 1));
      document.getElementById("selComedianGig").value = event.target.value;
      //SET DETAILS
      updateElement("divSetDetailsTemplate", guiCreateHTMLSetDetails(JSONcomedian[event.target.value].set[0]));
      //VENUE DETAILS
      updateElement("divVenueDetailsTemplate", guiCreateHTMLVenueDetails(0));
    break;
    case isOnId(event.path,"selSet"): //GIG - SET
      //SET DETAILS
      updateElement("divSetDetailsTemplate", guiCreateHTMLSetDetails(event.target.value));
      document.getElementById("selSet").value = event.target.value;
    break;
    case isOnId(event.path,"selVenue"): //GIG - VENUE
      //VENUE DETAILS
      updateElement("divVenueDetailsTemplate", guiCreateHTMLVenueDetails(event.target.value));
      document.getElementById("selVenue").value = event.target.value;
    break;
    default:
  } //switch
});
function guiDisplay(intAction) {
  let intComedian = 0;
  switch (intAction) {
    case -2:
      //CHOOSE COMEDIAN - GAME START
      //COMEDIAN DETAILS
      intComedian = 0;
      updateElement("divComedianChoose", guiCreateHTMLComedianDetails(intComedian, JSONcomedian, -2));
      //SHOW
      navShow("#secGameMenuStartComedianChoose");
      document.getElementById("selComedianChoose").focus();

    break;
    case 0:
      //WRITE SET
      //COMEDIAN DETAILS
      intComedian = JSONplayer[0].comedian[0];
      updateElement("divComedianDetailsTemplate", guiCreateHTMLComedianDetails(intComedian, JSONplayer[0].comedian, 0));
      document.getElementById("selComedianSet").value = intComedian;
      //SET DETAILS
      updateElement("divGenre", guiComboBoxCreate(JSONgenre, "selGenre"));
      //SHOW
      navShow("#secSet");
    break;
    case 1:
      //GIG
      //COMEDIAN DETAILS
      intComedian = JSONplayer[0].comedian[0]; //inti value
      updateElement("divSetComedianTemplate", guiCreateHTMLComedianDetails(intComedian, JSONplayer[0].comedian, 1));
      //SET DETAILS
      updateElement("divSetDetailsTemplate", guiCreateHTMLSetDetails(JSONcomedian[intComedian].set[0]));
      document.getElementById("selSet").value = JSONcomedian[intComedian].set[0];
      //VENUE DETAILS
      updateElement("divVenueDetailsTemplate", guiCreateHTMLVenueDetails(0));
      //SHOW
      navShow("#secGig");
    break;
    case 2:
      //PUBLICITY
      //SHOW
      navShow("#secPublicity");
    break;
    case 3:
      //TV WORK
      //SHOW
      navShow("#secTV");
    break;
    default:
      logIt("ERROR", "guiDisplay: default switch case");
  } //switch
} //function


///////////////////
// END GAME MENU //
///////////////////


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
