function pr(o) { //★ prebivalci /občinah
 switch (String(o).toLowerCase()) {
 case "r" : o=   4142 ;break 
 case "s" : o=  17729 ;break
 case "k" : o=  26078 ;break
 case "h" : o=   9139 ;break
 case "z" : o=  16402 ;break
 default  : o=2000000 }
 return o/1000 
} //★10
function f(o,x,s,n){//★ vrednost polja
 if(n==null)n=9;  if(s==null)s=""
 o =field(o+"."+x) 
 if(isNaN(o)||o==null)o="~ "
 if(parseInt(s)>0)o+=x.slice(0,s)
 else o+=s
 return ("    "+o).slice(-n) 
} //★18
function F(o,x) { return field(o+"."+x) 
}
function p(o,x,f) { if(f==null)f=1
 x=x*f/pr(o)
 return x.toFixed(x>9?0:1)
}//★ 23
function obcn(o){//★ izp.cov.#/občino
 if(!field("F"))return " ~ ~\n ~ ~"
 var i =f(o,"potr","okuž:")
 i+=("  "+p(o,F(o,"potr"))).slice(-4)
 i+="%; akt.p="
 i+=f(o,"vsi","}/tp:",12)
 i+=p(o,F(o,"vsi"))//+" p"+pr(o)

 i+="\n" //★ 31

 i+=f(o,"novi","n," ) //novi/
 i+=f(o,"umrl","u," ) // umrli
 //i+=f(o,"d.po2","d×",11) //dni/podvojit
 //if(o=="R")i+=f(o,"tnp","°/t")
 //nov/teden
 i+=("        R*"+R(o)).slice(-12)
 return i 
}//★40
function cpt(c) { //★ sum 
 C="potr;novi;vsi;umrl;d.po2;R".split(";")
 if(c==null) return C;
 var s ="", o ="RSKHZ".split("")
 for(i=0;i<o.length;i++){
 if(C[c]=="R") v=R(o[i])
 else { v=field(o[i]+"."+C[c])
 if(C[c].slice(-1)!="2" ) {
  v=(v*1000/pr(o[i])) }
 }
 v=v.toFixed(v>9?0:1)
 s+=o[i]+":"+("★ "+v).slice(-5)
 s+=(i==2)?"\n ":i<o.length-1?"; ":" "
 } return s +" "+C[c]
}//★52
function R(o){
 function r(o,n){
  var p="d.po2;tpnp".split(";")
  v=field( o+"."+p[n])
  o="d%"[n]
  if(v==null) { return null }
  switch (n) {
  case 0:v=-50*Math.log(v)+280+0.1*v;
  break
  case 1:v= 90*Math.exp(0.013*v)+10 ;
  break }
 return v 
 }
 o= avg([r(o,0),r(o,1)])
 if(o=="0") return "~ "
 else return Number(o.toFixed(o>9?0:1))
}//★16★68
function avg(a){var l=a.length,s=0,j=0 
 //if(l==0)return "~"
 for(i=0;i<l;i++){ ai=a[i]
  if(!(isNaN(ai)||ai==null)){j++;s+=ai}
 }
 return j==0?"0":s/j 
}//★★ //★★★★ E N D ★

//★★★★ E N D ★
