// Moon Phases
function MPh(d) { md=29.305
  m="191126,191028,190928,190830,190801,190603,"
  m+="190505,190405,190306,190204,0"
  f=m.split(",").find( function(e) {
    return e <= moment(d).format("YYMMDD") })
  n= new Date(20+f.slice(0,2),f.slice(2,4)-1,f.slice(-2))
  r= moment(d).diff(n,"days")
  return  r -Math.floor(r/md) *md
}
function MP(d) {m=29.305;f="O ) D (D ★ (C C (".split(" ")
  d = (d/m*f.length).toFixed(0)
  return f[d]
}
