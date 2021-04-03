// ★  // prebivalci /občinah
function pr(o) {
 switch (o.toLowerCase()) { 
 case "r" : o= 4142 ;break 
 case "s" : o=17729 ;break
 case "k" : o=26078 ;break
 case "h" : o= 9139 ;break
 case "z" : o=16402 ;break
 default  : o=9999999 } 
 return o 
}// ★ // vrednost polja
function f(o,x,s,n){ 
 if(n==null)n=9
 if(s==null)s=""
 o =field(o+"."+x) 
 if(isNaN(o)||o==null)o="~ "
 if(parseInt(s)>0)o+=x.slice(0,s)
 else o+=s
 return ("     "+o).slice(-n) 
}
// ★ izpis cov.# za občino
function obcn(o){ 
 if(!field("F"))return " ~ ~\n ~ ~"
 i =f(o,"potr","ok:")
 i+=("   "+(parseInt(i)*100/pr(o)).toFixed(1)).slice(-4)+"%;"
 i+=f(o,"vsi","}\n",12)
 i+=f(o,"novi","n,",7)        //novi/
 i+=f(o,"umrl","u",8)      // umrli
 
 //i+=f(o,"d.po2","d×",11)    //dni/podvojit
 //if(o=="R")i+=f(o,"tnp","°/t") //nov/teden
 r=R(o)
 i+=f(r.toFixed(r>9?0:1),"R*","★",11)
 return i 
}
// ★★ case / 1000 prebivalcev
//c="potr;novi;vsi;d.po2".split(";")
//cpt(c[0])  // 
function cpt(c) {
 s =""; o ="RSKHZ".split("")
 for(i=0;i<o.length;i++){
  v=field(o[i]+"."+c)
  if(c.slice(-1)!="2" ) {
   v=(v*1000/pr(o[i])).toFixed(1) }
  s+=o[i]+":"+("     "+v).slice(-5)
  s+=(i==2)?"\n ":i<o.length-1?";   ":" "
 }
return s 
}
function R(o){ 
 function r(o,n){
  var p="d.po2;tpnp".split(";")
  v=field( o+"."+p[n])
  o="d%"[n]
  if(v==null) { return null }
  switch (n) {
  case 0:v=-50*Math.log(v)+280+0.1*v
     break
  case 1:v= 90*Math.exp(0.013*v)+10
     break
  } return v
 }  return avg([r(o,0),r(o,1)])
}
function avg(a){var l=a.length,s=0,j=0
 for(i=0;i<l;i++){ai=a[i]
  if(!(isNaN(ai)||ai==null)){j++;s+=ai}
 } return s/j 
}
//R("R").toFixed(1)
//★★


//★★★★ E N D ★
