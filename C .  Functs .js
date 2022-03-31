
/* = splošne $# f
★chk sysf.padEnd / $.padStart(L,$)
★ ne deluje
*/
//
function h(){var r="Functions"
 r+=" sl(x,z,n){ slice"
 r+=" ps(s,n){   pad -l/+r" 
 r+=" mx(a,b){ max"
 r+=" mn(a,b){ min"           
 return r
}    
//= slice
function sl(x,z,n){ 
 if(n==null)return x.slice(z)
 return x.slice(z,z+n)
}
//=pad left/rigth
function ps(s,n){
 return s=n>0
 ?s+" .".repeat(mx(1,n-s.length))
 :" "+". ".repeat(mx(1,-n-s.length))+s
}
//= maximum
function mx(a,b){
 return Math.max(a,b)
}
//= minimum
function mn(a,b){
 return Math.min(a,b)
}
//== end ==
