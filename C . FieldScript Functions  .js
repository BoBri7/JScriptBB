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
function L(x){return x.length}
function sj(x,d){
 x=x.split(d==null?" ":d)
 return d+x.join(d)+d
}
function v(x,a,f){x=x.split(" ")
 var s=">"
 for(var i=0;i<x.length;i++){
  var xi=x[i].trim()+"."+a
  var si=" ".repeat(22)+(f>0
         ?pr(xi)
         :field(xi))
  s+=si.slice(-xi.length)+d
 } return s
}




//== end ==
