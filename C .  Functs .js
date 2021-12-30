
//= splošne $# f
function sl(x,z,n){ //= slice
 if(n==null)return x.slice(z)
 return x.slice(z,z+n)
}
function ps(s,n){//=pad left/rigth
 return s=n>0
 ?s+" .".repeat(mx(1,n-s.length))
 :" "+". ".repeat(mx(1,-n-s.length))+s
}
function mx(a,b){//= maximum
 return Math.max(a,b)
}
function mn(a,b){//= minimum
 return Math.min(a,b)
}
//== end ==
