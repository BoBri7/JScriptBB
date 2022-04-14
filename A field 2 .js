// Lista v textLinije dolžine n, o=prompt z= zamik(3)
function iL(a,n,o){
 if(o==null)o=a+" :"
 a=field(a)
 for(var i=0;i<a.length;i++){
  var ai=a[i] 
  o+="\n"
  o+=ai.checked?"[×]":"[ ]"
  o+=t2l(String(ai),n)
 } 
 return o
}
// tex v linije dolžine n po besedah
function t2l(s,n){
 function nn(x){
  x1=s.slice(0,x).lastIndexOf(" ")
  x2=s.indexOf(" ",x)
  return 1+(x1<n+4?x1:x2)
 }
 if(s.length<n)return s //★★
 var p="\n   "
 var c=nn(n)
 var o=s.slice(0,c)
 s=s.slice(c)
 while(s.length>n){c=nn(n-3)
  o+=p+s.slice(0,c)
  s=s.slice(c)
 }
 return o+p+s
} 
// status polj +indikacija sprememb
function fid(x,n){if(n==null)n=4
 var p=entry().prev()
 p=p==null?"•":p.field(x)==field(x)?"=":"★"
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
