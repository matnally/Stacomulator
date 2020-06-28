
// START OF JSON //

var JSONaudience = [
  {
  	"name"         : "Stags and Hens"
  	,"description" : "Drunken hecklers"
  	,"image"       : "image.png"
    ,"genre"       : [3,5,7,11,13,14,15,16,18]
  },{
  	"name"         : "A lil bit of everything mob"
    ,"description" : "Likes everything"
  	,"image"       : "image.png"
    ,"genre"       : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  },{
  	"name"         : "Students"
    ,"description" : "Drunken children"
  	,"image"       : "image.png"
    ,"genre"       : [0,1,2,4,5,6,7,10,12,13,14,15,16,17,18,19,20,21]
  },{
  	"name"         : "Guardian readers"
    ,"description" : "Enjoy the smell of their own farts"
  	,"image"       : "image.png"
    ,"genre"       : [0,1,2,4,7,8,9,10,15,20,21]
  },{
  	"name"         : "Drunken locals"
    ,"description" : "Come in from hearding the sheep"
  	,"image"       : "image.png"
    ,"genre"       : [3,11,13,14,15,16,18]
  },{
  	"name"         : "Grans and grannies"
    ,"description" : "desc6"
  	,"image"       : "image.png"
    ,"genre"       : [13,15,17]
  },{
  	"name"         : "Families and children"
    ,"description" : "Get offended by everything"
  	,"image"       : "image.png"
    ,"genre"       : [13,16,17,18]
  },{
  	"name"         : "Right wing cunts"
    ,"description" : "Horrible people"
  	,"image"       : "image.png"
    ,"genre"       : [3,4,6,9,11,13,14,15,20]
  },{
  	"name"         : "Mainstream"
    ,"description" : "desc9"
  	,"image"       : "image.png"
    ,"genre"       : [12,13,14,15,16,17,18,20]
  }
];

// function audienceCreateJSON() { //add additional common / non unique / random properties
//   for (let i in JSONaudience) {
//     JSONaudience[i].genre = audienceCreateJSONgenre();
//   } //for
//   console.log("done");
// } //function
//
// function audienceCreateJSONgenre() { //returns array of unique genres
//   let arrTemp = [];
//   let intGenre = 0;
//   for (let i=0; i<=generateRandomNumber(JSONconfig[0].JSONgenrePerAudienceMin, JSONconfig[0].JSONgenrePerAudienceMax); i++) {
//     do {
//       intGenre = generateRandomNumber(0, JSONgenre.length-1); //-1 because index
//     } while (inArray(arrTemp, intGenre));
//     arrTemp.push(intGenre);
//   } //for
//   return arrTemp;
// } //function

// END OF JSON //


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function audienceChoose(intVenue) { //get random index of audience at venue
  return JSONvenue[intVenue].audience[generateRandomNumber(0, JSONvenue[intVenue].audience.length-1)]; //-1 because index
} //function
