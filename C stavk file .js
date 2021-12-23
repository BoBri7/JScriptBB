/* JS Stack 
 = Spush(new) 
 = Spop(c#) 
 = Sfo(x) >fo / f.name
★★★ */
function Sfo(xx){
 const Sfp="/sdcard/MyDATA/Stak_"
 var fn=Sfp+lib().title+".stk"
 return xx!=null?fn:file(fn)
} 
function Spush(xx){const s=Sfo(),L="\n"
 try { xx+=L+s.readAll() }
 catch (er) {
  msg("nov stack")
 } 
 finally {
  s.write(xx) 
  s.close()
  return xx.split(L).length
 }
} 
function SpopX(cn){var s=Sfo(),L="\n"
 try{ var rv= s.readAll() }
 catch (er){rv="" }
 finally {s.close();
  rv=rv.split(L)
  return cn==null
   ?rv.pop()
   :cn<rv.length && cn>=0
    ?rv[cn]
    :rv.join(L)
 }
}
function Spop(cn){const s=Sfo(),L="\n"
 try{ var rv= s.readAll() }
 catch (er){rv="" }
 finally {s.close();
  rv=rv.split(L)
  if(cn==null){ 
   var rv0=rv.pop()
   s.write(rv.join(L))
   s.close()
   return rv0
  }
  else {
   return cn>=0 && cn<rv.length
    ?rv[rv.length-cn-1]
    :cn==-1
     ? L+rv.join(L) +"= join ["+rv.length
     : rv[0]+" =top"
 }
}
}
//★★ END ★★
