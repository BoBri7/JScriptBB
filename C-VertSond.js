// izračun % rel.vl. iz temp°C in Rosišča

f=0.07
function rv(t,r) { t=(r==null)?null:r-t
 function e(x){return Math.exp(x*f)}
 return (t==null)
  ? "  ~"
  : ("  "+(100*e(t)).toFixed(0)).slice(-3)
}
