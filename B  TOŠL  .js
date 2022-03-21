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
function S(x,n){x=field(x);
 if(x.length==0)return ""
 var s="\nSpec:"+" ".repeat(n-4)
 for(i=0;i<x.length;i++){fi=x[i]
  s+="\n "
  s+=fi.checked?"[×] ":"[ ] " //"✔"
  s+=I(String(fi),n)
 } return s
}

function I(x,n){
 var c=n>0; n=Math.abs(n) 
 var s=" ".repeat(n) 
 var p= x.length>n?"•":"" 
 return (c
  ?(x+s).slice(0,n)+p
  :p+(s+x).slice(-n))
}

function F(t,x){ x=field(x) 
 return x==""
  ?""
  :"\n"+t+":"+I(x,n-t.length)
}

//★★★★★★★
