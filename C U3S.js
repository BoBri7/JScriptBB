function u3s() { 
  s =" ★ U3S funkcije ★\n"
  s+=" Sez(d)  Ret: SezYy(datum) d=null=>akt.sezona\n"
  s+="   233 dni zamika =  22.8. \n \n "
  s+=" Sz(d)   Ret: Yy(d)/Y+1  \n"
  s+=" Sn(d)   Ret: actSez- Sez(d)  \n"
  s+=" df(d,f) Ret: format(m(d,f=d.m.yy) \n"
  s+=" S(s,x)  Ret:x>0 left(s.x>0) / right(s.x<0) \n"
  
return s + "★ ★ ★\n" }
  
function Sez(D) { if(D==null) D=new Date()
  D=moment(D).add(-233,"day")
  return Number(D.format("YY"))         }

function Sz(D)   { D = Sez(D) ;
  return D+"/"+(D+1)                    }

function Sn(D)  { return Sez() - Sez(D) }

function df(D,F){ if (F==null) F="D.M.YY"
  return moment(D).format(F)            }

function S(S,X) { S=String(S) ;
  return X>0? S.slice(0,X) : S.slice(X) }

// 4 test ==>★★ test gf(fn) ? e.f() ★★
function gfer(fn) {try { return field(fn) }
  catch (er) { return e.field(fn) }}

function gf(fn,E) {
  return E==null ? field(fn) : E.field(fn)}

// ★★ END ★★
