function tf(f) { n=field("Temp."+f)
  if (n!=null) { n+=field("Temp.d"+f)}
return n}
function v(v,d,e) {  if ( v == null ) return "  ~"
  else { return Number(v).toFixed(d) + e   }}
function i(x,n,p) { if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x).slice(-n+1)}
