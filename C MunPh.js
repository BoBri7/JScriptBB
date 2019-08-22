// Moon Phases
function MP(d,x) { md=29.5344;
  M="191226s,190702m,190106m,0"; //mrki
  m="191126,191028,190928,190830,190801,190702,";
  m+="190603,190505,190405,190306,190204,100115,010124";
// preveri ★★★★ 
  f=m.split(",").find( function(e) {
  return e <= moment(d).format("YYMMDD") }) 

  n=new Date(20+f.slice(0,2),f.slice(2,4)-1,f.slice(-2)) 
  r=moment(d).diff(n,"days") 
  r=Math.round(r-Math.floor(r/md) *md)
  if (x!=null) { return r } 
else {  m="× ) D (D O (C C (".split(" ") 
  return m[Math.round(r/md*(m.length-1.2))] }
}
//★★★★★★★
