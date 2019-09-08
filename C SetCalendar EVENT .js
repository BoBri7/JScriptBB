function I2K(Ti,Ds,Bt,Dh) { Bt=moment(Bt)
  if (Ti==null){ 
    Ds ="★★ Set Kalendar EVENT \n"
    Ds+=" Title,  \n"
    Ds+=" Description,  \n"
    Ds+=" BeginDateTime  \n"
    Ds+=" DurationHours \n" 
    return Ds ; exit }
  i=intent("android.intent.action.INSERT"); 
  // Create Intent object 
  i.data("content://com.android.calendar/events"); 
  // Data contains Google Calendar URI 
  i.extra("title", Ti ); 
  // Get event name from field Title 
  i.extra("description", Ds ); 
  // Get description from field Description
  i.extraLong("beginTime", Bt )
  //entry().field("Begin").getTime()); 
  // Get start time from field Begin 
  // Begin is of type DateTime parameter is of type Long, 
  // so extraLong() is used for conversion.
  i.extraLong("endTime", Bt+Dh*3600000 )
  //i.extraLong("endTime", entry().field("End").getTime())
  // Requires same conversion as above 
  // i.extra("o?", d ); //obvestilo ★ [ 1 ur, 2 ur,1 dan ]
  i.send(); // Send the message
//  retutn 0 //5★20
}  // ★★★ end I2K zapis v KOLEDAR ★★★
