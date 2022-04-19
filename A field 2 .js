// izpis Liste v linije
function iL(a,n,o,d){
 if(o==null)o=a+" :"
 a=field(a)
 if(a.length>0){
 for(var i=0;i<a.length;i++){
  var ai=a[i] 
  o+="\n"
  o+=ai.checked?"[×]":"[ ]"
  o+=t2l(String(ai),n,d)
 } }
 return o
}
//text>lin.dolž. n /besedah
function t2l(s,n,d){s=s.trim()+""
 function nn(x){if(x<15)x=15
  var x1=s.slice(0,x).lastIndexOf(" ")
  var x2=s.indexOf(" ",x)
  return 1+(x1<n+d?x1:(x2<11?11:x2))
 }
 d=isN(d,4)
 n=isN(n,44)
 if(s.length<n)return s //★★
 var p="\n   "
 var c=nn(n-d)
 var o=s.slice(0,c);s=s.slice(c)
 while(s.length>n){c=nn(n-d)  
  o+=p+s.slice(0,c);s=s.slice(c)
 }
 return o+p+s
}
// default value
function isN(x,v){return x==null?v:x} 
//★★★★★
function f(x){return field(x)} 
// ChkList 2 lines
function iCL(x,c,h){var n=0;o="",h=h==null?x:h
 x=field(x);//c=field(c)
 for(i=0;i<x.length;i++){xi=x[i]
  if(xi.slice(0,1)=="!"){n++;o+="\n  ="+xi }
  else if(!c)o+="\n    "+t2l(xi)
 }
 return h+(n>0&&c?" [ krit= "+n+" ]":":")+o
} 

// status polj +indikacija sprememb
function fii(x,n){if(n==null)n=4
 var p=entry().prev()
 p=p==null?"•":(p.field(x)==field(x)?"=":"★")
 a.push(x.slice(0,n)+" "+field(x)+" "+p)
} 
/* prev verzion 
function fp(x,n){if(n==null)n=4
 a.push(x.slice(0,n)+" "+field(x))
} */
//★★★★★★★

// izpiše prev. ★prompr za nov vnos
function fi(x,l,n,d){if(n==null)n=13
 var v=p==null?"~":p.field(x)
 if(moment(v).isValid())v=moment(v).format("DD.MM.YY")
 v=" ".repeat(n)+v+" "+x+(d==null?"":d)
 return v.slice(-n)+"\n".repeat(l==null?2:l)
}
