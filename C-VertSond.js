// izračun % rel.vl. iz temp°C in Rosišča
f=0.05
function rv(t,r) { 
function e(x){return Math.exp(x*f)} 
 t = (t==null || r==null) 
 ? "~" 
 : (100*e(t)).toFixed(0) 
 return ("   "+t).slice(-3)
}
/* f=0.05
function rv(t,r) { t=(r==null)?null:r-t
 function e(x){return Math.exp(x*f)}
 t = (t==null)
  ? "~"
  : (100*e(t)).toFixed(0)
 return "???   "+t).slice(-3)
} */
