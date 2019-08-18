function tf(f,e) {n= e==null?field("Temp."+f):e.field("Temp."+f)
  if (n!=null) {n+= e==null?field("Temp.d"+f):e.field("Temp.d"+f)}
  return n}
function v(v,d,e) {  if ( v == null ) return "~"
  else { return Number(v).toFixed(d) + e   }}
function i(x,n,p) { if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x).slice(-n+1)}
function ie(x,n,e) { // if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x+e).slice(-n+1)}
