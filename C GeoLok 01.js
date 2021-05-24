// fieldValue(fn)
function fv(fn){return field(fn)}    
// defaultValue(a:b)
function df(a,b){return a==null?b:a} 
//kv.koren(#)
function q2(x){return Math.sqrt(x)}  
//kvadrat(#)
function n2(x){return x*x}
// numFormat tisoč (# dec:2 n#)
function fN(n,d,x) { d=df(d,2)
 n=df(n,0).toFixed(df(d,2)).split('.');d=d>0?","+n[1]:""
 n=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")+d
 if(x>n.length)n=(" ".repeat(x)+n).slice(-x)
 return " "+n
}
// numToFixed(#,dec:2)
function N(x,d){d=df(n,2)
 return Number(x.toFixed(df(d,2)))
}
//arayField(fn,|i)
function af(fn,i){x=field(x)
 if(i!=null) return fn.split(",")[i]
 return fn.split(",")
}
//arayEl(A,#:2)
function ai(a,i){ return a[df(i,2)]}
//diffArr.ENH!(a1,a2,e#:2) 
function dif(a,b,i){if(i==null)i=2
 return b[i]-a[i]
}
//sum.sqw*(a1,a2/ENH) > [r=sr(dE*+dN*;R=sr(r*+dH*)]
function r(a,b){var h=dif(a,b,2)
 a=n2(dif(a,b,0))+n2(dif(a,b,1))
 return [N(q2(a)),N(q2(a+n2(h)))]
}
/* ★★★★★★ TEST:
a=[3,4,5];b=[7,7,5]
n=123456789;d=.123456789
t=fN(n+d) +" t.l<n:"+fN(n/99,1,2)+" t.null:"+fN(null,3,9)
 +"\nx= "+N(1.23456789)
 +"\ndf "+ df(null,5)
 +"\n a"+a+" b"+b+" ★"+ r(a,b)//+" //"+r(a,b)[1]
 +"\n dh "+(ai(a)-ai(b))
 +"\nR="+fN(q2(n2(5)+n2(dif(a,b))))
 +"\n ===========+\n"

log("★"+4321+t)
*/
