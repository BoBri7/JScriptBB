function pr(o) {o=o.toLowerCase()
 switch (o) {
 case "r" : o=4142   ;break
 case "s" : o=17729  ;break
 case "k" : o=26078  ;break
 case "h" : o=9139   ;break
 case "z" : o=16402  ;break
 default  : o=9999999
 }
 return o }
//log(p("r")+"\n ★★★★★ \n" )


function obc(o){
 i =f(o,"akt") + f(o,"ok") +f(o,"u")
 i+="\n"
 i+=f(o,"n")+ f(o,"po2")
 if(o=="R")i+=f(o,"tnpj")
 return i 
}

function f(o,x){x ="    "+field(o+"."+x)
 return x.slice(-5) }
/* orig
function f(x){x ="   ____ "+field(o+"."+x)
 return x.slice(-5) }
 
O.  preb.   u.   u/1000
R.  4142.   2.  0.5
S 17729. 47.  2.7 
K 26078. 15.  0.6
H   9139. 14.  1.5
Z 16402. 17.  1 .0
*/
