function MP(D,X) {  dd = " • "

  function ii(S,I){ return S.slice(I*2,I*2+2) } //★inFun★
                  
  F=29.5344;
  MF=" ×. ).D.(D.O.(C.C.( "//. x "
  MF=MF.split(".") 

  if(D < 9 ) {
    D = "★★★  MP(datum, op ) ★★★   \n"
    D+= "★★★  Ver 4.1   29. 9. 2019  ★\n"
    D+= " Mf:[ " +MF.join(dd)+"]  "+MF.length +" faz\n"
    D+= " Mf= "+F+" dni       \n"
    D+= "★ op= 0:Faza        \n"
    D+= "★     1:Faza # 29,5 \n"
    D+= "★     2:Faza #  8   \n"
    D+= "★     9: datum(DMY) \n"
    return D } 
  if ( D==null || isNaN(D) ) D = new Date()
  if ( moment(D).format("Y.MM") < "2000.01"){
     return D+"= ? "+moment(D).format("Y.M.D < 2000 ? ")}
  Md ="191126,191028,190928,190830,190801,190702,190603,"
  Md+="190505,190405,190306,190204,100115,"
  Md+="010124,000001";
  Md = Md.split(",");
  // mrki S+L★   MRK="191226s,190702m,190106m,0"; //mrki
  N=Md.find( function(X) {                      //★sort
    return X <= moment(D).format("YYMMDD") })  
  M= new Date(20+ii(N,0),ii(N,1)-1,ii(N,2),12,0)
  N= moment(D).diff(M,"days") +27
        
  N= N-F*Math.floor(N / F)
  N= N.toFixed(1)
  NF= Math.round( N / F * (MF.length-1) )
  N= (String.fromCharCode(9).repeat(9)+N).slice(-6)  //★★★
  Mf= MF[NF]
  switch ( Number(X) ) {
    case 9 :{ return MF.join(dd); break }
    case 8 :{ return F          ; break }
    case 7 :{ return moment(D).format("DD.MM.YY")
           ; break }
 
  
    case 3 :{ return NF +dd+Mf          ; break }
    case 2 :{ return N                  ; break }
    case 1 :{ return NF                 ; break }    
    case 0 :{ return Mf                 ; break }
    default:  return Mf
  } //★ end sw
}   
function Chr(n) {return String.fromCharCode(n) }
//★ END functuon MP ★★★ */
