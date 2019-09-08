function u3s() { 
  s =" ★ U3S funkcije ★\n"
  s+=" Sez(d) Ret: SezYy(datum) d=null=>akt.sezona\n"
  sj=" Sz(d)  Ret: Yy(d)/Y+1  \n"
  s+=" Sn(d)  Ret: actSez- Sez(d)  \n"
  s+=" S(s,x) Ret:x>0 left(s.x>0) / right(s.x<0) \n"
  
return s + "★ ★ ★\n" }
  
function Sez(D) { if(D==null) D=new Date()
  D=moment(D).add(-188,"day")
  return Number(D.format("YY"))         }
function Sz(D)   { D = Sez(D) ;
  return D+"/"+(D+1)                    }
function Sn(D)  { return Sez() - Sez(D) }
function S(S,X) { S=String(S) ;
  return X>0? S.slice(0,X) : S.slice(X) }
// ★★ END ★★
