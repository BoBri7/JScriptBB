function m(x){return moment(x)}
function f(x,e){return e==null?field(x):e.field(x) } 
function P(e){return e==null?entry().prev():e.prev()}

function V(e,y,n){
 if(typeof(e)!="object"){n=y;y=e;e=entry()}
 if(y==null){y=" ★ BRISANO ★ ";n=""}
 if(n==null)n=""
 return (f("VOID",e)?y:n)
}
//izpis SEZNAMA
function S(x){x=field(x);
 if(x.length==0)return ""
 var s="spec: "
 for(i=0;i<x.length;i++){fi=x[i]
  s+="\n "
  s+=fi.checked?"[×] ":"[ ] " //"✔"
  s+=String(fi)
 } return s
}

/*xxxxxx
function Vx(e,x){if(typeof(e)=="string"){x=e;e=entry()}
 return (f("VOID",e)
  ?x==null
   ?" ★ BRISANO ★ "
   :(typeof(x)=="string" ?x :true)
  :( typeof(x)=="string" ?x :x==0?"":false))
}
*/
//★★★★★★★
