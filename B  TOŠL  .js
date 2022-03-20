function m(x){return moment(x)}
function f(x,e){return e==null?field(x):e.field(x) } 
function P(e){return e==null?entry().prev():e.prev()}
function V(e,x){if(typeof(e)=="string"){x=e;e=entry()}
 return (f("VOID",e)
  ?x==null
   ?" ★ BRISANO ★ "
   :(typeof(x)=="string" ?x :true)
  :( typeof(x)=="string" ?x :x==0?"":false))
}
//★★★★★★★
