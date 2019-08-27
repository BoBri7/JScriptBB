Vn ="★ Ver 3.2. tor.27.avg.19 13:30   ★"
function MP(D,X) { F=29.5344; d1 = "  •  " ; d2 = " • "
  function ii(S,I){ return S.slice(I*2,I*2+2) } //★inFun★
  MF=" × . ).D.(D.O.(C.C.( . x ".split(".") 
  if(D==9) { return " Mf: [" +MF +"]"; exit }
  if(D==8) { return " Mf="+F+"dni "; exit }
  if(D==null || isNaN(D) ) {
    D ="\n★ X=0:F 1=F.dD 2=F.dDf 3=F.dD.dDf 4=3+dM "
    D+=       "7=d.m.y 8=Md 9=aMF ★"
    return "★★★★★★★\n★ MP(D.X) ★ "+Vn+D+"\n★★★★"} // exit
  if ( moment(D).format("Y.MM") < "2000.01"){
     return "Y < 2000" +D+" // " + moment(D).format("<= Y.M.D ★")}
  M="191126,191028,190928,190830,190801,190702,190603,";
  M+="190505,190405,190306,190204,100115,"
  M+="010124,000001"; M = M.split(",");
  // mrki S+L★   MRK="191226s,190702m,190106m,0"; //mrki
  N=M.find( function(X) {                      //★sort
    return X <= moment(D).format("YYMMDD") })  
  M= new Date(20+ii(N,0),ii(N,1)-1,ii(N,2),12,0)
  N= moment(D).diff(M,"days") // ★ 
        // ★★ ne rabim zamika 1/2 mlaja /end! ★★
  N= N-F*Math.floor(N / F)
  NF= Math.round( N / F * (MF.length-1) )
  N= (" 0"+N).slice(-3)  //★★★
  M= MF[NF]
  switch ( Number(X) ) {
    case 9 :{ return MF; break }
    case 8 :{ return d2+F+d2              ; break }
    case 7 :{ return moment(D).format("DD.MM.YY HH:mm")
           ; break }
    case 4 :{ return M+d1+N+d2+NF+d2+F+d2 ; break }
    case 3 :{ return M+d1+N+d2+NF+d2      ; break }
    case 2 :{ return M+d1+NF+d2           ; break }
    case 1 :{ return M+d1+N+d2            ; break }  
    case 0 :{ return M+d2;               ; break }
    default: return M 
  } //★ end sw
}   
//★ END functuon MP ★★★ */
