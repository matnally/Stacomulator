
/////////////////////
// START TEMPLATES //
/////////////////////

function guiCreateHTMLComedianDetails(intComedian, JSONtoUse, intAction) {
  let elemTemplateNode="",elemTemplateItem="",strTemp=""; // To hold the HTML
  let elemTemplate = document.querySelector("template.templateComedian"); //Get template
  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
  switch (intAction) { //determine what to show / limit dependant on ACTION
    case -2: //CHOOSE COMEDIAN - GAME START
      //COMBOBOX
      elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
      elemTemplateItem.innerHTML = guiComboBoxCreate(JSONtoUse, "selComedianChoose");
      //IMAGE
      elemTemplateItem = elemTemplateNode.content.querySelector("svg.imgComedianImage");
      elemTemplateItem.setAttribute("id", "imgComedianImageChoose"); //give it a unquie ID based on musican ID
    break;
    case -1: //CHOSEN COMEDIAN - after adding before GAME START
      //COMBOBOX
      elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
      elemTemplateItem.innerHTML = guiComboBoxCreateChosen(JSONtoUse, "selComedianChosen");
      //IMAGE
      elemTemplateItem = elemTemplateNode.content.querySelector("svg.imgComedianImage");
      elemTemplateItem.setAttribute("id", "imgComedianImageChosen"); //give it a unquie ID based on musican ID
    break;
    case 0: //WRITE SET
      //COMBOBOX
      elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
      elemTemplateItem.innerHTML = guiComboBoxCreateSetComedian(JSONtoUse, "selComedianSet")
      //IMAGE
      elemTemplateItem = elemTemplateNode.content.querySelector("svg.imgComedianImage");
      elemTemplateItem.setAttribute("id", "imgComedianImageSet"); //give it a unquie ID based on musican ID
    break;
    case 1: //GIG
      //COMBOBOX
      elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianComboBox");
      elemTemplateItem.innerHTML = guiComboBoxCreateSetComedian(JSONtoUse, "selComedianGig")
      //IMAGE
      elemTemplateItem = elemTemplateNode.content.querySelector("svg.imgComedianImage");
      elemTemplateItem.setAttribute("id", "imgComedianImageGig"); //give it a unquie ID based on musican ID
    break;
    default:
      // elemTemplateItem.innerHTML = "guiCreateHTMLComedianDetails default - CASE no catered for";
  } //switch
  //NAME
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianNameTemplate");
  elemTemplateItem.innerHTML = JSONcomedian[intComedian].name;
  //DESCRIPTION
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianDescriptionTemplate");
  elemTemplateItem.innerHTML = JSONcomedian[intComedian].description;
  //NO OF GIGS
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianNoOfGigsTemplate");
  elemTemplateItem.innerHTML = comedianCalcNoOfGigs(intComedian);
  //EXPERIENCE
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divComedianExperienceTemplate");
  elemTemplateItem.innerHTML = comedianCalcExperience(intComedian);
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
  //NO OF TIMES PERFORMED
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divSetPerformedTemplate");
  elemTemplateItem.innerHTML = comedianCalcNoOfTimesUsedSet(document.getElementById("selComedianGig").value, intSet);
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
  //AUDIENCE
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divVenueAudienceTemplate");
  elemTemplateItem.innerHTML = venueAudiencePossible(intVenue);
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
  guiDisplayActionFromMainMenu(-2);
} //function
//COMEDIAN CHOSEN
function guiGameMenuStartComedianChosen() {
  //TODO: only when added clicked?
  updateElement("divComedianChosen", guiComboBoxCreateSetComedian(JSONplayer[0].comedian, "selComedianChosen"))
  updateElement("divComedianChosen", guiCreateHTMLComedianDetails(JSONplayer[0].comedian[0], JSONplayer[0].comedian, -1)); //TODO: JSONplayer[0].comedian[0] to the first?
  updateIdenticon(JSONplayer[0].comedian[0], "#imgComedianImageChosen"); //dont put after switch as sometimes go to default
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
      updateIdenticon(event.target.value, "#imgComedianImageChoose"); //dont put after switch as sometimes go to default
    break;
    case isOnId(event.path,"selComedianChosen"): //CHOSEN COMEDIAN
      //CHOSEN COMEDIAN DETAILS - after adding
      updateElement("divComedianChosen", guiCreateHTMLComedianDetails(event.target.value, JSONplayer[0].comedian, -1));
      document.getElementById("selComedianChosen").value = event.target.value;
      updateIdenticon(event.target.value, "#imgComedianImageChosen"); //dont put after switch as sometimes go to default
    break;
    case isOnId(event.path,"selComedianSet"): //WRITE SET
      //SET DETAILS
      updateElement("divComedianDetailsTemplate", guiCreateHTMLComedianDetails(event.target.value, JSONplayer[0].comedian, 0));
      document.getElementById("selComedianSet").value = event.target.value;
      updateIdenticon(event.target.value, "#imgComedianImageSet"); //dont put after switch as sometimes go to default
    break;
    case isOnId(event.path,"selComedianGig"): //GIG
      //COMEDIAN DETAILS
      updateElement("divSetComedianTemplate", guiCreateHTMLComedianDetails(event.target.value, JSONplayer[0].comedian, 1));
      document.getElementById("selComedianGig").value = event.target.value;
      updateIdenticon(event.target.value, "#imgComedianImageGig"); //dont put after switch as sometimes go to default
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
      logIt("CASE DEFAULT", "document.addEventListener('change', function(event) - selComedianChosen?");
  } //switch
}); //document.addEventListener

function guiDisplayActionFromMainMenu(intAction) {
  let intComedian = 0;
  let boolTemp = true;
  switch (intAction) {
    case -2:
      //CHOOSE COMEDIAN - GAME START
      //COMEDIAN DETAILS
      intComedian = 0;
      updateElement("divComedianChoose", guiCreateHTMLComedianDetails(intComedian, JSONcomedian, -2));
      updateIdenticon(intComedian, "#imgComedianImageChoose"); //dont put after switch as sometimes go to default
      //SHOW
      document.getElementById("selComedianChoose").focus();
      navShow("#secGameMenuStartComedianChoose");
    break;
    case -1:
      //CHOSEN COMEDIAN - GAME START
      //COMEDIAN DETAILS - after added
      updateElement("divComedianChosen", guiCreateHTMLComedianDetails(intComedian, JSONcomedian, -1));
      updateIdenticon(intComedian, "#imgComedianImageChosen"); //dont put after switch as sometimes go to default
    case 0:
      //WRITE SET
      //COMEDIAN DETAILS
      intComedian = JSONplayer[0].comedian[0];
      updateElement("divComedianDetailsTemplate", guiCreateHTMLComedianDetails(intComedian, JSONplayer[0].comedian, 0));
      document.getElementById("selComedianSet").value = intComedian;
      updateIdenticon(intComedian, "#imgComedianImageSet"); //dont put after switch as sometimes go to default
      //SET DETAILS
      updateElement("divGenre", guiComboBoxCreate(JSONgenre, "selGenre"));
      //SHOW
      navShow("#secSet");
    break;
    case 1:
      //GIG
      for (let c in JSONplayer[0].comedian) { //check if COMEDIAN has SET
         if (JSONcomedian[JSONplayer[0].comedian[c]].set.length < 1) boolTemp = false;
      } //for
      if (boolTemp == false) {
        logIt("GAME", "One or more of your COMEDIANs don't have a SET yet");
      } else {
        //COMEDIAN DETAILS
        intComedian = JSONplayer[0].comedian[0]; //init value
        updateElement("divSetComedianTemplate", guiCreateHTMLComedianDetails(intComedian, JSONplayer[0].comedian, 1));
        updateIdenticon(intComedian, "#imgComedianImageGig"); //dont put after switch as sometimes go to default
        //SET DETAILS
        updateElement("divSetDetailsTemplate", guiCreateHTMLSetDetails(JSONcomedian[intComedian].set[0]));
        document.getElementById("selSet").value = JSONcomedian[intComedian].set[0];
        //VENUE DETAILS
        updateElement("divVenueDetailsTemplate", guiCreateHTMLVenueDetails(0));
        //SHOW
        navShow("#secGig");
      } //if
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
  // updateIdenticon(intComedian);
} //function


function generateIdenticon(strName) {
  return strName; //TODO: something else?
} //function
function updateIdenticon(intComedian, strName) {
  jdenticon.update(strName, JSONcomedian[intComedian].image);
} //function


///////////////////
// END GAME MENU //
///////////////////





function tabulatorUpdateTable(strJSON) {

  let table = new Tabulator("#example-table", {
    data:window[strJSON] //load initial data into table
    ,autoColumns:true
    ,layout:"fitColumns" //fit columns to width of table (optional)
    ,rowClick:function(e, row) {
        table.selectRow(1);
      alert("Row " + row.getIndex() + " Clicked!!!!")
    } //rowClick
    ,rowContext:function(e, row) {
      alert("Row " + row.getIndex() + " Context Clicked!!!!")
    } //rowContext
  });

  //automatic number generating formatter
  let intNumm = 0;
  let autoNumFormatter = function(){ return intNumm++; };
  table.addColumn({formatter:autoNumFormatter,title:"ID", field:"id"}, true, "id");

} //function





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

function guiComboBoxCreateChosen(arrTemp, strID) {
  let strTemp = "";
  strTemp += "<select id='" + strID + "'>";
  for (let i in arrTemp) {
    strTemp += "<option value='" + arrTemp[i] + "'>" + JSONcomedian[arrTemp[i]].name + "</option>";
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
