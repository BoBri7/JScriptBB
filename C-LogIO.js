//log(lg( "test 2345"))
// add comments to c:/docs/MDbLg/★.LOG
function lg(t) {
 function m(f){return moment().format(f)}
//o="/storage/98D1-D091/Documents/MmDbLg"
 o ="/sdcard/Documents/MmDbLg"
 o+="/L-"+m("YYMMDD-HH")+".log"; p ="★"
 try { o=file(o); p=o.readAll() }
 catch (e) {   
  p =m("DD.MM.YY HH:mm"
  p+=" ★ LOG ★  Lib:"+lib().title
  p+=" "lib().entries().length +"#"
 }
 finally {
  p=m("HH:mm:SS ")+t+"\n"+p
  o.write( p)
  o.close() 
  return p 
 } 
}
//★★★★
function tlg(x) {
 if (x==null) x =lib().entries()
 return x.length +"★"+lib().title+"★=" //deluje ★
 }
