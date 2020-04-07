
// START OF JSON //

var JSONaudience = [
  {
  	"name"         : "Stags and Hens"
  	,"description" : "desc1"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Average mob"
    ,"description" : "desc2"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Students"
    ,"description" : "desc3"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Guardian readers"
    ,"description" : "desc4"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Drunken locals"
    ,"description" : "desc5"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Grans and grannies"
    ,"description" : "desc6"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Families and children"
    ,"description" : "desc7"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Right wing cunts"
    ,"description" : "desc8"
  	,"image"       : "image.png"
    ,"genre"       : []
  },{
  	"name"         : "Mainstream"
    ,"description" : "desc9"
  	,"image"       : "image.png"
    ,"genre"       : []
  }
];

function audienceCreateJSON() { //add additional common / non unique / random properties
  for (let i in JSONaudience) {
    JSONaudience[i].genre = audienceCreateJSONgenre();
  } //for
} //function

function audienceCreateJSONgenre() { //returns array of unique genres
  let arrTemp = [];
  let intGenre = 0;
  for (let i=0; i<=generateRandomNumber(JSONconfig[0].JSONgenrePerAudienceMin, JSONconfig[0].JSONgenrePerAudienceMax); i++) {
    do {
      intGenre = generateRandomNumber(0, JSONgenre.length-1); //-1 because index
    } while (inArray(arrTemp, intGenre));
    arrTemp.push(intGenre);
  } //for
  return arrTemp;
} //function

// END OF JSON //



//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function audienceChoose(intVenue) { //get random index of audience at venue
  return JSONvenue[intVenue].audience[generateRandomNumber(0, JSONvenue[intVenue].audience.length-1)]; //-1 because index
} //function
