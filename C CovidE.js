function p(o) {o=o.toLowerCase()
 switch (o) {
 case "r" : oo=4142   ;break
 case "s" : oo=17729  ;break
 case "k" : oo=26078  ;break
 case "h" : oo=9139.  ;break
 case "z" : oo=16402  ;break
 default  : oo=9999999
 }
 return o+" "+oo }
//log(p("r")+"\n ★★★★★ \n" )




function f(x){x ="    "+field(o+"."+x)
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
