function MP(D,X) { F=29.5344;
  function ii(S,I){ return S.slice(I*2,I*2+2) }

  MF=" × . ).D.(D.O.(C.C.( . x ".split(".") 
  if(D ==null || isNaN(D) ) {
    D="X= 0:F 1=dDf 2=dDf.F 3=dD.dDf.F 8=Df 9=AMF ★\n"
    return "\n★ MP(D.X) ★ "+D } // exit
  if ( moment(D).format("Y.MM") < "2000.01"){
     return "Y < 2000" + moment(D).format("<= Y.M.D ★")}
  M="191126,191028,190928,190830,190801,190702,190603,";
  M+="190505,190405,190306,190204,100115,"
  M+="010124,000001"; M = M.split(",");
  // mrki S+L★   MRK="191226s,190702m,190106m,0"; //mrki
  N=M.find( function(X) {
    return X <= moment(D).format("YYMMDD") })  //★10
/*  M=new Date(20+N.slice(0,2),
N.slice(2,4)-1,N.slice(-2)-2,0) */
  M= new Date(20+ii(N,0),ii(N,1)-1,ii(N,2),12,0)
//  D= moment(D).endOf("day").add(-12,"hours")
  N= moment(D).diff(M,"days") // ★★★★
  N= N-F*Math.floor(N / (F))
  NF= Math.round( N / F * (MF.length-1) )
  if ( isNaN( NF) || NF < 0 ) NF = 0 //★★★★★★★★★!
  N= ("0"+N).slice(-2)
  M= MF[NF]  
 switch ( Number(X) ) {
    case 9 :{ return MF; break }
    case 8 :{ return D.format("DD.MM.YY HH:mm"); break }
    case 3 :{ return N+" "+NF+" "+M; break }
    case 2 :{ return NF+" "+M; break }
    case 1 :{ return NF  ; break}   // ★ 20
    default: return M 
  }
}  
//★★★★★★★ END functuon MP ★★★ */
/*
log (" ★★ BEGIN ★★ TEST MP" )
log ( MP() )
function I(X) { return ("0"+X).slice(-2)+" "}
function DF(AD,X){ if (X==null) X=""
  return moment(AD).format("DD.MM.YY"+X) }
function AAd(A,X) { A[X]=1+Number(A[X]) }
// ★★★★★★★
d = new Date(2019,0,0); 
log( "★★ BEGIN "+  DF(d) +"★★\n")
cf = "000000000".split("")  ; ci = " . "

kk = 44
for ( k =0 ; k < 2   ; k++) { ck = "000000000".split("")  
 for ( i =0 ; i < kk ; i++) { d= moment(d).add(1,"day")  
  mf = MP(d,1)
 
  AAd( ck,mf) ; AAd( cf, mf)
  L = I(i)+" "+MP(d,8)+" >| "+cf.join(ci)+"| M="+MP(d,3)
  log (L)
 } // i 
 log ( "ck>| "+ ck.join(ci) +"|< "+  I(k))
} // k

log ( "cf >| "+ cf.join(ci) )
for(i =0;i < cf.length; i++ ) { 
  cf[i]=Math.round(Number(cf[i]) / kk)}
log ( "cf/>| "+ cf.join(ci)  +ci )
log ( "xx >| "+ "0123456789".split("").join(""+ci)+ci)
log ( ">> >| "+ MP(d,9).join(ci) +ci)

// ★★★★★★★★★★★★★★
log( MP() )
log( "★★★ END ★★★") 
// ★★★
*/
