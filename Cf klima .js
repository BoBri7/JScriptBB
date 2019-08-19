function tf(f) {f ="Temp."+f; d = f +"d"
   n=field(f) ; if (n!=null)  n+= field(d)/10
return n}
function tfp(f) {f ="Temp."+f; d = f +"d";p=entry().prev()
   n=p.field(f) ; if (n!=null)  n+= p.field(d)/10
return n}


function v(v,d,e) {  if ( v == null ) return "~"
  else { return Number(v).toFixed(d) + e   }}

function i(x,n,p) { if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x).slice(-n+1)}

function ie(x,n,e) { // if (p==1 && x >0 ) x="+"+x
  return " "+(" ".repeat(n)+x+e).slice(-n+1)}
