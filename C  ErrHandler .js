// Err Handling
function LgEr(err,txt) { 
  txt = "Err:"+err.name+""+err.message+"\n >"+txt )
  // alert (txt) ;log (txt);
  return txt
}  //★★10
}

/*
try {  ★ napaka? ★ }
catch(err) { LgEr(err,"txt") }
finaly { ★ close ★  }
★★ 
OnError ErrHandler ????? 
★★
*/
//★★★★★★★★
