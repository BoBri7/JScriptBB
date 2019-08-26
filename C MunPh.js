function MP(D,X) { F=29.5344;
  MF= mf //" × . ).D.(D.O.(C.C.( .x".split(".") 
  if ( moment(D).format("Y") < "2000"){
     return "Y < 2000" + moment(D).format("<= Y.M.D ★")}

  M="191126,191028,190928,190830,190801,190702,190603,";
  M+="190505,190405,190306,190204,100115,"
  M+="010124,000001"; M = M.split(",");
  // mrki S+L★   MRK="191226s,190702m,190106m,0"; //mrki
  N=M.find( function(X) {
    return X <= moment(D).format("YYMMDD") })  //★10
M=new Date(20+N.slice(0,2),N.slice(2,4)-1,N.slice(-2)-2,0) 
  N=moment(D).diff(M,"days") // ★★★★
      N= N-Math.round(F*Math.floor(N/F)   )
      NF = Math.round( N / F * MF.length )
      N= ("0"+N).slice(-2)
      M= MF[NF]  
 switch ( Number(X) ) {
    case 3 :{ return N+" "+NF+" "+MF.length+" "+M; break }
    case 2 :{ return NF+" "+M; break }
    case 1 :{ return NF  ; break} 
    default:{ return M ; break}
  }
*/
}  //★★★★★★★ END functuon MP ★★★ */
function I(X) { return ("0"+X).slice(-2)+" "}
function DF(AD){ return moment(AD).format('DD.MM.YY') }
function AAd(A,X) { A[X]=1+Number(A[X]) }
// ★★★★★★★
d = new Date(2019,8,22); 
log( "★★ BEGIN "+  DF(d) +"★★\n")
cf = "000000000".split("")  ; ci = " | "

kk = 3
for ( k =0 ; k < kk; k++) { ck = "000000000".split("")  
 for ( i =0 ; i < kk; i++) { d= moment(d).add(1,"day")  
  mf = 
 
  AAd( ck,mf) ; AAd( cf, mf)
  log (i +" "+ DF(d) +" "+ mf +" "+ck.join(ci) )
 } // i
 log ( "ck "+ ck.join(ci)  )
} // k

log ( "cf "+ cf.join(ci) )

// ★★★★★★★★★★★★★★
log( "★★★ END ★★★") 

/*
// Moon Phases
function MP(d,x) { md=29.5344;
  M="191226s,190702m,190106m,0"; //mrki
  m="191126,191028,190928,190830,190801,190702,";
  m+="190603,190505,190405,190306,190204,100115,010124";
// preveri ★★★★ 
  f=m.split(",").find( function(e) {
  return e <= moment(d).format("YYMMDD") }) 

  n=new Date(20+f.slice(0,2),f.slice(2,4)-1,f.slice(-2)) 
  r=moment(d).diff(n,"days") 
  r=Math.round(r-Math.floor(r/md) *md)
  if (x!=null) { return r } 
else {  m="× ) D (D O (C C (".split(" ") 
  return m[Math.round(r/md*(m.length-1.2))] }
} */
//★★★★★★★

