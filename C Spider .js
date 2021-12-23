function slider(ip,tt,tx){ var m= moment()
 function l(x){message(x)}
 if(tt==null)  return m
 if(m-tt<55) return tt // req test ★★★★★
 l( tx+" ["+"|".repeat(ip*50)+".".repeat(50-ip*50)+"]")
 return m
}
