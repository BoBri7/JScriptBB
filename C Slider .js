//★★ GH 23. 12. 2021 
function slider(ip,tt,tx){var m=moment(),c=ip>0?1:-1
 function l(x){if(c==1)message(x); else log(x) 
 }
 if(tt==null)  return m
 if(m-tt<888) return tt
 l(tx+" ["+"|".repeat(ip*50*c)+".".repeat(50-ip*50*c)+"]")
 return m
} //★★★
