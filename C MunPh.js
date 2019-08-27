function MP(D,X) { F=29.5344;
  function ii(S,I){ return S.slice(I*2,I*2+2) }

  MF=" × . ).D.(D.O.(C.C.( . x ".split(".") 
  if(D ==null || isNaN(D) ) {
    D="X= 0:F 1=F.dD 2=F.dDf 3=F.dD.dDf 8=Df 9=aMF ★\n"
    return "\n★ MP(D.X) ★ "+D } // exit
  if ( moment(D).format("Y.MM") < "2000.01"){
     return "Y < 2000" + moment(D).format("<= Y.M.D ★")}
  M="191126,191028,190928,190830,190801,190702,190603,";
  M+="190505,190405,190306,190204,100115,"
  M+="010124,000001"; M = M.split(",");
  // mrki S+L★   MRK="191226s,190702m,190106m,0"; //mrki
  N=M.find( function(X) {
    return X <= moment(D).format("YYMMDD") })  
  M= new Date(20+ii(N,0),ii(N,1)-1,ii(N,2),12,0)
  N= moment(D).diff(M,"days") // ★★★★
  N= N-F*Math.floor(N / (F))
  NF= Math.round( N / F * (MF.length-1) )
  if ( isNaN( NF) || NF < 0 ) NF = 0 //★★★★★★★★★!
  N= ("0"+N).slice(-2)
  M= MF[NF]  
 switch ( Number(X) ) {
    case 9 :{ return MF; break }
    case 8 :{ return D.format("DD.MM.YY HH:mm"); break }
    case 3 :{ return M+" ."+N+"."+NF+"." ; break }
    case 2 :{ return M+" ."+NF+"."       ; break }
    case 1 :{ return M+" ."+N+"."         ; break}  
    default: return M 
  } //★ end sw
}   //★ END functuon MP ★★★ */
