// DateFormat(d,fstring)
function m(x){return moment(x)}
function df(d,df){
 function f(x){return d.format(x)}
 if(df==null)df=0
 df=String(df)
 d=moment(d); var F=""
 for(i=0;i<df.length;i++){
  fi=df.charAt(i)
  switch (fi){
  case "0":F+=f("DD.MM.YY");break
  case "1":F+=f("D.M.YY")  ;break
  case "2":F+=dw(d,2);break
  case "3":F+=dw(d,3);break
  case "4":F+=dw(d)  ;break
  case "5":F+=dm(d,3);break
  case "6":F+=dm(d)  ;break //<
  case "7":F+=dm(d)  ;break //<
  case "8":F+=dw(d,3)
             +f(" D.")
             +dm(d,3)
             +f(" YY");break
  case "9":F+=f("HH:mm");break
  case "d":F+=f("D") ;break
  case "D":F+=f("DD");break
  case "m":F+=f("M") ;break
  case "M":F+=f("MM");break
  case "Y":F+=f("YY");break
  case "y":F+=f("Y");break
  case "w":F+=f("w");break
  case "W":F+=f("WW");break
  default:F+=fi
 }}
 return F
}
function dw(d,f){
 d=moment(d).format("d")
 var w=".ponedeljek.torek.sreda."
 w+="četrtek.petek."
 w+="sobota.nedelja"
 w=w.split(".")[d]
 return f==null
  ?w
  :w.slice(0,f)
}
function dm(d,f){
 d=moment(d).format("M")
 var m=".januar.februar.marec"
 m+=".april.maj.junij.julij"
 m+=".avgust.september"
 m+=".oktober.november.december"
 m=m.split(".")[d]//.format("M")] 
 return f==null
  ?m
  :m.slice(0,f)
}
function u1(s){
 s=s.slice(0,1).toUpperCase()+s.slice(1)
 return s
/*
function u1r(s){ 
 return s.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase()) 
}
*/
//=====
