//== C . field Functions  .js
//== funkcije za js Fields
function h(){var r="fieldFunctions"
 r+="\n f(x)field(x)"
 r+="\n fd(x)field(x)/dflt/~" 
 return r
}             
function f(x){return field(x)}
function fd(x,df){x=field(x)
 return x!=null?x:df!=null?df:"~"
  //"99999"
}
function pr(x){
 var e=entry().prev()
 return e==null?"~":e.field(x)
}
//== end ==
