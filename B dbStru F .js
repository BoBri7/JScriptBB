
function H(){
 return ("db Stru funkcije"
 +"\n=f(fld.n,t;descr): polni izpis {kliče fld(a,b)}"
 +"\n=f()             : vrne izpis za f.(id)=0!"
)}
//★★★★★★★★★★★★★★★★★★★★★★ MAIN F
function fld(x,y){
//           x="field.name"
//             y=<Typ;description"
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INTERNE FUNKCIJE
 function vl(i){//★★ širine izpisa [fld.n,f.v,t,all]
  return field("dbStL").split(",")[i]
 }
 function c(x){//★★ počisti LBr...
  x=String(" "+x)//.valueOf()
  x=x.split("\n").join("~")
  try{      return x.replaceAll("\n"," ÷")+"<"}
  catch(er){return x+">"}
 } 
 function I(x,p){ //★★ pad L/R
   p=vl(p);if(p==null)p=0
   var s=" ".repeat(Math.max(1,Math.abs(p)-x.length))
   return (p>0?x+s:s+x).slice(-p-1)
  } // <<< int F <<<<<<<<<<<<<<<<<<<<<<

 var s=""
 if(x==null)return field("id")>0?"★":a.join("\n")  //★★★★  RETURN ★★★★
 //★★★★★★★★ POLNJENJE ARRAYA ★★★★★ ★★10
 if(x.slice(0,1)<"A") s+=""+x  //★ <labela ★ field>
 else{                s+=I(x,0)
  s+=I(vl(1)>0 ?": "+c(field(x)) :"",1)
  s+=(" ["+typeof(field(x))).slice(0,5)
 }
 /// YYYYYYYY ★★
 if(y!=null){
 y=y.split(";"); 
 for(var i=0;i<y.length;i++){
  yi=y[i]
  switch (i){
  case 0:
   s+=yi.length>0 && vl(2)>0?" "+I(yi,2)+"]":":" ;break
  default: s+=(yi=="L")
    ?"\n-"
    :" "+yi
  } //sw 
  } //for
 } //if
// }  // els.  ★★ 28
// var 
 l=vl(3);if(l==null)l=66
 s =s.slice(0,l)
   +(s.length>l?"•":".")//+s.length
 try{a.push(s)}
 catch(er){a=[s]}
 finally return "★"
}
//★★★ Lokal f(fld,aDesc) ★★★
function f(x,y){return x==null//&&field("id")==0
  ?fld():
  fld(x,y)
}
//★★★ EndFunct ★★★★★★★★★★★★★★★★★★★★★★★★★
