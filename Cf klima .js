function tf(f,e) {d="Temp.d"+f;f ="Temp."+f
  if( e==null) {
  n=field(f)
  if (n!=null)  n+= field(d)/10 }
  else { n=e.field(f)
  if (n!=null) n+=e.field(d)/10}
  return n}

function v(v,d,e) {  if ( v == null ) return "~"
  else { return Number(v).toFixed(d) + e   }}

function i(x,n,p) { if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x).slice(-n+1)}

function ie(x,n,e) { // if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x+e).slice(-n+1)}
