// DateFormat(d,fstring)
function m(x){return moment(x)}
function df(dx,df){
 function f(xx){return dx.format(xx)}
 if(df==null)df=0
 df=String(df)
 dx=moment(dx); var F=""
 for(var ii=0;ii<df.length;ii++){
  var fi=df.charAt(ii)
  switch (fi){
  case "0":F+=f("DD.MM.YY");break
  case "1":F+=f("D.M.YY")  ;break
  case "2":F+=dw(dx,2);break
  case "3":F+=dw(dx,3);break
  case "4":F+=dw(dx)  ;break
  case "5":F+=dm(dx,3);break
  case "6":F+=f("d")  ;break //=dow
  case "7":F+=dw(dx,2)+f(" d.m.Y");break
  case "8":F+=dw(dx,3)+f(" D.")+dm(dx,3)+f(" YY");break
  case "9":F+=f("HH:mm");break
  case "d":F+=f("D") ;break
  case "D":F+=f("DD");break
  case "m":F+=f("M") ;break
  case "M":F+=f("MM");break
  case "y":F+=f("YY");break
  case "Y":F+=f("Y") ;break
  case "w":F+=f("w") ;break
  case "W":F+=f("WW");break
  case "h":F+=f("h") ;break
  case "H":F+=f("HH");break
  case "n":F+=f("mm");break //minute
  case "s":F+=f("ss");break
  case "S":F+=f("SSS");break //miliSec
  case "x":F+=doy(dx) ;break
  default:F+=fi
 }}
 return F
}
function doy(dx){dx=moment(dx)
 return dx.diff(new Date(dx.format("Y"),0,0),"day")
}
function boy(dx){return new Date(dx.format("Y"),0,1)}
function boy(dx){return new Date(moment(dx).startOf("Year"))}
function bod(dx){return new Date(moment(dx).startOf("day"))}
function dw(dx,df){
 dx=moment(dx).format("d")
 var w=".ponedeljek.torek.sreda."
 w+="četrtek.petek."
 w+="sobota.nedelja"
 w=w.split(".")[d]
 return f==null
  ?w
  :w.slice(0,f)
}
function dm(dx,df){
 dx=moment(dx).format("M")
 var m=".januar.februar.marec"
 m+=".april.maj.junij.julij"
 m+=".avgust.september"
 m+=".oktober.november.december"
 m=m.split(".")[dx]//.format("M")] 
 return f==null
  ?m
  :m.slice(0,f)
}
function u1(sx){
 sx=sx.slice(0,1).toUpperCase()+sx.slice(1)
 return sx
}
/*
function u1r(s){ 
 return s.replace(/^(\w)(.+)/,
 (match,p1,p2)=>p1.toUpperCase() 
 +p2.toLowerCase()) 
}
*/
//=====
