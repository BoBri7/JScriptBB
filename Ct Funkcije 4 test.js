// date moment
function mf(d,f) { if(f==null) f="DD.MM.YY HH:mm";
  return moment(d).format(f) }
function bod(d)  { return mbe(d,0) }
function bom(d)  { return mbe(d,1) }
function boy(d)  { return mbe(d,2) }
function eod(d)  { return mbe(d,-0) }
function eom(d)  { return mbe(d,-1) }
function eoy(d)  { return mbe(d,-2) }
function dmyh(x) { s="day,month,year,hour,minute,week"
  return x==null?s: s.split(",")[Math.abs(x)]}
function mbe(d,x){ d=moment(d==null?new Date():d);e=(x>0)
  x= dmyh(x) //11
  return e==true ? d.startOf(x) : d.endOf(x) }
function nwd(a) {  if(a==null) return new Date()
 else { a=a.split(".")
   return new Date(20+a[0],a[1]-1,a[2],a[3],a[4],0,0) }}
function mad(d,n,x) { if(x==null)x=0; if(n==null)n=1
  return moment(d).add(n,dmyh(x))//+"s")  
}
