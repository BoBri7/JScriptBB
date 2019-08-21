// Moon Phases
// izračuna dan v lunini fazi
function MPh(d) { md=29.5344
  M = "191226s,190702m,190106m,0"
  m ="191126,191028,190928,190830,190801,190702,"
  m+="190603,190505,190405,190306,190204,0"
  f=m.split(",").find( function(e) {
    return e <= moment(d).format("YYMMDD") })
  n= new Date(20+f.slice(0,2),f.slice(2,4)-1,f.slice(-2))
  r= moment(d).diff(n,"days")
  return  r -Math.floor(r/md) *md
}
// vrne sliko faze iz dneva faze
function MPs(d) {m=29.5344;f="O ) D (D ★ (C C (".split(" ")
  d = (d/m*(f.length-1)).toFixed(0)
  return f[d]
}
// vrne sliko iz datuma
function MP(d) { return MPs(MPh(d)) } //★★
//★★★★★★
