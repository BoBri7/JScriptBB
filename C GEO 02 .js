var l="\n | ", h=l+"Funkcije GeoLok()"+l
h+=l+" ★★ fields:"
h+=l+"fv(fn,e)      ★ fieldValue(fn|,entry() )"
function fv(fn,E){if(E==null)return field(fn)
 return E.field(fn)
}   
function fe(fn){return e.field(fn)}
h+=l+"af(fn,|i)   ★ arayField(fn,|i) > a/a[i]"
function af(fn,i){x=field(x)
 if(i!=null) return fn.split(",")[i]
 return fn.split(",")
}

h+=l+" ★★ math & format:"
h+=l+"df(a:,b)   ★ defaultValue(a:b)"  
function df(a,b){return a==null?b:a} 

h+=l+"q2(n)       ★ kv.koren(#)"
function q2(x){return Math.sqrt(x)}  

h+=l+"n2(n)       ★ kvadrat(#)"
function n2(x){return x*x}

h+=l+"fN(n,x,d:2) ★ numFormat th.sep # pl. dec"
function fN(n,x,d) { d=df(d,2)
 n=df(n,0).toFixed(df(d,2)).split('.');d=d>0?","+n[1]:""
 n=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")+d
 if(x>n.length)n=(" ".repeat(x)+n).slice(-x)
 return " "+n
}

h+=l+"N(n,d:2)    ★ numToFixed(#,dec)"
function N(x,d){
 return Number(x.toFixed(df(d,2)))
}

h+=l+" ★ array"
h+=l+"ai(a,i:2)    ★ arayEl(A,#)"
function ai(a,i){ return a[df(i,2)]}
//diffArr.ENH!(a1,a2,e#:2)

h+=l+"dif(a,b,#:2) ★ diffArr.ENH!(a,b,e#) "
function dif(a,b,i){if(i==null)i=2
 return b[i]-a[i]
}

h+=l+" ★★ GEO distanca azimut"
h+=l+"r(a,b)!ENH   ★ sum.sqw*(dE*,dN*) > [r,R]"
function r(a,b){var h=dif(a,b,2) 
 a=n2(dif(a,b,0))+n2(dif(a,b,1)) 
 return [N(q2(a)),N(q2(a+n2(isNaN(h)?0:h)))]
}

h+=l+"az(a,b)      ★ d.ENH > [az, ah]"
function az(a,b){
 return fe(a)+"  ★!★"
}
h+=l+"L2ENH        ★ Locus+H > ENH"
function L2ENH(x,h){
 function isEr(x){return x==null || isNaN(x)}
 fv(x)==null?x="★ vnesi "+x+" ★"
            :x=(fv(x).split(" ")).slice(1,3)
 isEr(fv(h))?x.push("★ vnesi višino★")
            :x.push(field(h))
 return x 
}
//★★★ END
h+=l+" ★★★ end help  ★★★ "

function gh(x){return x!=null?h:"ver:105'25•18"}

//Tue, 25 May 2021 12:53:17  
// https://github.com/BoBri7/JScriptBB
