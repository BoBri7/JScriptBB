/* // ★★★★ DataBase functions  ★★★
 lines (38 sloc)  880 Bytes
 
★+ pr(fld,val) najde prejšnji zapis# (-1 =ne obstaja) kjer (e#.field(fls)==val)
5 => dbFunct!
*/
//
function dbf() {
  s ="\n ★★★ DB & SYS FUNCTIONS ★★ \n"
  s+=" db( n)      ret lib  \n"
  s+=" dbe(n)      ret entries  \n"
  s+=" dbs(o,s,n)  ret db/sorted  ★OS \n"
  s+=" F( n)       ret   field \n"
  s+=" eF(n,e)     ret e.field \n"
  s+=" sys(x)      ret OS.ver \n"
  s+="  "
  return s 
}    
function db( ns) { return lib(ns) } // name.$ /null
function dbe(ns) { return db(ns).entries() }
// dbs DBSort ★★★

function dbs(ord,sfn,dbn) {  db = lib(dbn).entries()
  if(sfn==null)sfn="S"
  if(ord==null)ord=-1 
 
  try { // os>8.  ★★10
    db.sort( {compare: function (a,b) {  
     return (a.field(sfn) > b.field(sfn)) ? ord:-ord
    }  // f
    }) // sort
  }    // try
  catch(er) { // os < 8
    db.sort( function (a,b) {
     return ( a.field(sfn) > b.field(sfn) ) ? ord:-ord  
    } ) // sort
  }     // catch
  return db
} 
//★ polja
function F(f)        {return field(f) }   
function eF(f,E)     { if(E==null) E=e ;
  return E.field(f) } //★ E~druga baza ★
function mf(D,f)     {if(f==null) f="<YY.MM.DD.HH.mm"
  return moment(D).format(ff) }

//★★★★ SYS return OS # or $ ★★★★
function sys(x)  { var s=system().os;
  switch ( x ) {
  case null : return s ; break
  case 0 : return s ; break
  case 1 : return Number(s.slice(8,9)) ; break
  default: return "\n   sys(0=OS, 1=os#, /=help \n" }
} // end f sys

/*  ★★ TEST ★★   
log( sys(1 ) )

db = dbs(1) 
for (i = 0; i < db.length; i++ ) { 
  log( i+" "+eF("s", db[ i]).slice(0,4) )
}
★★ END TEST ★★   
*/ // 
