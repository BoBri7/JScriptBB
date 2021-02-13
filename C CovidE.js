function f(o,x,s,n){
 if(n==null)n=8
 if(s==null)s=""
 o =field(o+"."+x) 
 if(isNaN(o)||o==null)o="~ "
 if(parseInt(s)>0)o+=x.slice(0,s)
 else o+=s
 return (" ".repeat(n)+o).slice(-n) 
}
function obcn(o){ 
 if(!field("F"))return "★★"
 i =f(o,"potr","ok=")
 i+=("    "+(parseInt(i)*100/pr(o)).toFixed(1)).slice(-5)+"%;"
 i+=f(o,"vsi",";")
 i+=f(o,"umrl",1,5)
 i+="\n"
 i+=f(o,"novi",3)
 i+=f(o,"d.po2","/pd")
 if(o=="R")i+=f(o,"tnp","/t")
 return i 
}
function pr(o) { 
 switch (o.toLowerCase()) {
 case "r" : o=4142   ;break
 case "s" : o=17729  ;break
 case "k" : o=26078  ;break
 case "h" : o=9139   ;break
 case "z" : o=16402  ;break
 default  : o=9999999
 }
 return o 
}               

/*
 ///log(p("r")+"\n ★★★★★ \n" )

//akt-potr ok-vsi n-novi u-umrl po2-d.po2
function obcn(o){  // ★★★★
 i =f(o,"potr") + f(o,"vsi") +f(o,"umrl")
 i+="\n"
 i+=f(o,"novi")+ f(o,"d.po2")
 if(o=="R")i+=f(o,"tnpj")
 return i 
}
/* ★
function obc(o){
 i =f(o,"akt") + f(o,"ok") +f(o,"u")
 i+="\n"
 i+=f(o,"n")+ f(o,"po2")
 if(o=="R")i+=f(o,"tnp")
 return i 
} */

function f(o,x){x ="    "+field(o+"."+x)
 return x.slice(-5) }
*/
/* orig
function f(x){x ="   ____ "+field(o+"."+x)
 return x.slice(-5) }
 
O.  preb.   u.   u/1000
R.  4142.   2.  0.5
S  17729.  47.  2.7 
K  26078.  15.  0.6
H   9139.  14.  1.5
Z  16402.  17.  1.0
*/
