function dt() { S="\n ★★★★★★ \n ★ Date Time funct ★"
  S+= "\n ★ Ds(d/now,N/2) => Left-N(slo ime dneva) "
  S+= "\n ★ Now(N) => now()+Ndays"
  return  S + "\n ★★★★★★★"
}
function Ds(DT,NN) { try { 
  if ( isNaN(NN) ) NN=2 ; if (isNaN(DT)) DT = Now()
  Dd = moment(DT).format("d")
  Sd ="nedelja.ponedeljek.torek.sreda."
  Sd+="četrtek.petek.sobota.nedelja"
  return Sd.split(".")[Dd].slice(0,NN)//+" >"+DT+"<"
} catch (er) {er} 
}
function Now(X) {
  return new Date(moment(new Date()).add(X,"days")) 
} function now(X) { return Now(X) }

/* ★★★★ CANDIDATI ★★★

function tp(n) {return typeof (n) }
// date moment functions

/// 
function mf(d,f) { if(d==null) d=new Date(); if(f==null) f="DD.MM.YY HH:mm"; 
  return moment(d).format(f) }
function mfd(d) { if(d==null) d=new Date(); 
  return moment(d).format("DD.MM.YY HH:mm";) }

function df(x) { // if(x ==null) x =0
   return "YYMMDD DD.MM.YY YY.MM.DD.HH.mm".split(" ")[x] }  

function bod(d) { return mbe(d,0) }
function bom(d) { return mbe(d,1) }
function boy(d) { return mbe(d,2) }
function eod(d) { return mbe(d,"day") }//★★★??? 
function eom(d) { return mbe(d,-1) }
function eoy(d) { return mbe(d,-2) } //11
function dmyh(x) { s="day,month,year,hour,minute,week"; return x==null?s: s.split(",")[Math.abs(x)]}
function mbe(d,x){ 
  d=moment(d==null ? new Date() : d) ; 
  if(isStr(x)) return d.endOf(x)
  else {
    e=(x>0);  x=dmyh(x) ;
  return e==true ? d.startOf(x) : d.endOf(x)  }}
function nwd(a) { if(a==null) return new Date() 
  else { a=a.split("."); 
  return new Date(20+a[0],a[1]-1,a[2],a[3],a[4],0,0)}}
function mad(d,n,x) { if(x==null)x=0; if(n==null)n=1;
  return moment(d).add(n,dmyh(x)) } //+"s") }
★★★ END date f time Esen ★★★ */
