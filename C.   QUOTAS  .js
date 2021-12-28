//= skupne funkcije
function Q(a){
 var q=f("OP").slice(0,1)
 if(a>1)return q
 q="OPQ".indexOf(q)+1
 if(a) return q
 return "?.📮.📬.📌.Xq".split(".")[q]
}
function Qi(x){
 return S(x,6,2)+S(x,8,2)+S(x,10)
}
function S(s,z,n){//★ subString
 return n!=null
 ?s.slice(z,z+n)+"."
 :s.slice(z)
}
/* splošne $# f
function ps(s,n){//=pad left/rigth
 return s=n>0
 ?s+" .".repeat(mx(1,n-s.length))
 :" "+". ".repeat(mx(1,-n-s.length))+s
// return s
}
function mx(a,b){//= maximum
 return Math.max(a,b)
}
function mn(a,b){//= minimum
 return Math.min(a,b)
}
*/
//=== end ===
