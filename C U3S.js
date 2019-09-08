function u3s() { 
  s =" ★ U3S funkcije ★\n"
  s+=" Sez(d) Ret: SezYy(datum) d=null=>akt.sezona\n"
  s+=" Sn(d)  Ret: actSez- Sez(d)  \n"
  s+=" S(s,x) Ret:x>0 left(s.x>0) / right(s.x<0) \n"
  
return s + "★ ★ ★\n" }
  
function Sez(D) { 
  return Number(moment(D).add(-188,"day").format("YY")) }
function Sn(D) {
  return Sez() - Sez(D) }
function S(S,X) { return X>0? S.slice(0,X) :S.slice(X) }
// ★★ END ★★
