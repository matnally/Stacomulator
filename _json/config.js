
var JSONconfig = [{

  "turn" : 0 //init TURN no

  ,"logging" : "ALL" //default logging level

  //DIRECTORY PATHS
  ,"imageFolderComedian" : "_images/comedian/" //default folder to find COMEDIAN images
  ,"imageFolderAudience" : "_images/audience/" //default folder to find AUDIENCE images
  ,"imageFolderVenue"    : "_images/venue/" //default folder to find VENUE images

  //START JSON CREATION
    //PLAYER
    ,"JSONcomediansPerPlayerMin" : 2 //min no of COMEDIANs to add to PLAYER
    ,"JSONcomediansPerPlayerMax" : 4 //max no of COMEDIANs to add to PLAYER
    //COMEDIANS
    ,"JSONcomediansToCreate" : 10 //how many new COMEDIANs to create in JSON
    //VENUE
    ,"JSONaudiencePerVenueMin" : 2 //min no of AUDIENCEs to associate with VENUE
    ,"JSONaudiencePerVenueMax" : 4 //max no of AUDIENCEs to associate with VENUE
  //END JSON CREATION

  //START SUPPORTING LOGIC DEFAULTS
    // //WRITING SET
    // ,"setStalnessOffset" : 10 // (current turn - when set created) / setStalnessOffset - used to keep STALNESS down
    // //GIGGING
    // ,"gigHecklersMin"          : 1  //min no of HECKLERS to randomly generate for a GIG
    // ,"gigHecklersMax"          : 10 //max no of HECKLERS to randomly generate for a GIG
    // ,"gigSameGenreBonus"       : 10 //bonus to add if GENRE of SET is in AUDIENCE GENREs
    // ,"gigVenueConfidenceBonus" : 10 //add or delete if COMEDIAN has or has no confidence in the SET to perform at the VENUE
    // ,"gigSetQualityOffset"     : 2  // intSetConfidence += (intSetQuality / JSONconfig[0].gigSetQualityOffset) - used to keep SET QUALITY down
  //END SUPPORTING LOGIC DEFAULTS

  //START ADD TO ATTRIBUTES WHEN ACTIONED
    //GIG
    ,"gigComedianReputation" : 2 //add to COMEDIAN when GIG performed
    ,"gigSetReputation"      : 1 //add to SET when GIG performed
    //WRITE SET
    ,"setComedianReputation" : 1 //add to COMEDIAN when SET written
    // ,"setSetReputation"      : 1 //add to SET when SET written
  //END ADD TO ATTRIBUTES WHEN ACTIONED

}];
