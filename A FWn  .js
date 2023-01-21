function FWn(t,fn,fx) {
 if(fn==null)fn="FW_"
 if(fx==null)fx="txt"
 if(fx[0]!=".")fx="."+fx
 var ff="/sdcard/MyData/"
 var lt=lib().title
 var d=moment()
 d=d.format(" DD.MM HH:mm ")
 var h=lt+"•"
 h+=lib().entries().length
 h+=+">"+d+"\n"
 ff=ff+lt+"-"+fn+"-"
 var i=0
 do{
  var fn=ff+(i++)+fx
  var o=file(fn)
 } while(o.exists)
 var s=0
 try{ o.write(h+t) ;s++ }
 finally {
  o.close() ;
  return s+"\nFw="+fn+"\n>"
 }
}
//tx="test 0123456"
//log(FWn(tx,"test fw","csv"))
