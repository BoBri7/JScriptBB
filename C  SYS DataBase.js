//★★★★ DataBase functions  ★★★
function db(ns) { return lib(ns)} // name.$ /null
function dbe(ns) { return db(ns).entries() }
// dbs DBSort ★★★


//★ polja
function F(f)        {return field(f) }   
function ef(f,E)     { if(E==null) E=e ;return E.field(f) } //★ E~druga baza ★
function mf(x,f)     {if(f==null) f="<YY.MM.DD.HH.mm"
    return moment(x).format(ff)}



//★★★★ SYS return OS # or $ ★★★★
function sys(x)  { s=system().os;
  return x==0?s:x==1?s.slice(8,9): "sys(#) 0=OS, 1=os#, /=help"
//???★★★ "   srt(FN$,/=dsc 1=asc" +"\n" }

