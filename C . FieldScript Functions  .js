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
function v(x,a,f){x=x.split("|")
 var s=">"
 for(var i=0;i<x.length;i++){
  var xi=x[i].trim()+"."+a
  var si=" ".repeat(22)
  si+=(f>0
         ?pr(xi)
         :field(xi))
  s+=si.slice(-x[i].length)+d
 }return s
}
function I(x){var s=">"
 x=x.split("|")
 for(var i=0;i<x.length;i++){
  xi=x[i]
  fi=field(xi.trim())
  ti=(typeof(fi)).slice(0,1)
  fi=ti!="b"?fi:(fi?"Yes":"NO")
  fi=" ".repeat(22)+fi
  s+=fi.slice(-xi.length)+d
 } //>10
 return s
}
function V(x,a,f){var f=" ".repeat(22), s=""
 x=x.split(";") 
 for(var i=0;i<x.length;i++){var v="",xi=x[i].split(",")
  s+=xi[0]
  if(xi.length>1){ xi1=xi[1].trim()+"."+a
   v=(f>0 ?pr(xi1) :field(xi1))
   s+=": "+(f+v).slice(-xi[1].length)  
  }s+=i<x.length-1?"\n":""
 }
 return s
} 
//== end ==
