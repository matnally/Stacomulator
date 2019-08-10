
function gig(intComedian, intAudience, intSet) {


  var intWalkouts = 0;

  intWalkouts = gigGetWalkouts(intComedian, intAudience, intSet)
  intHecklers = gigGetHecklers(intComedian, intAudience, intSet)

  //create gig
  JSONgig.push({"comedian"  : intComedian
                ,"audience" : intAudience
                ,"set"      : intSet
                ,"walkouts" : intWalkouts
                ,"hecklers" : intHecklers
  }); //JSONgig.push

} //function
