function tteesstt(x){return "x ="+x}

/* ss="\n"
function f(x,e){return e.field(x)}
function fd(d){
 return d.format(" ddd DD.MM.")
}
function M(s){s=s.split(" ")
 if(s[0]<s[1])s=[s[1],s[0]] 
 return s.join(" ")
} //8
function m(d){return moment(d)}
//============
function prepis2(e){var i=0
//function f(x){return e.field(x)}
//function m(d){return moment(d)} 
 function v(x){return Number(x)}
 function F(d){
  return d.format(" DD.MM. ")
 } //====★★ 17
 var E=e,d="dan"//,k="krit°C",
 //s="FC xmd",t="Hist",
 //fc="FC",fg="FC.g"
 dd=m(f(d,E))
 var N=db.length
 var tt=("H"+F(dd)).slice(0,8)
 var o=Gg(tt,4,"-",35)
 //"$"+f("id",E)
 for(i=0;i<N;i++){
  //o+=f("id",db[i])
  if(db[i].id==E.id){
   E=db[i]
   break
  }
 } // 31
 //o+="hist data :"+fd(m(f(d,e)))
 //o+=" i="+i+" db.l="+N
 for(r=0;r<6;r++){
  if(i+r<N){
   E=db[i+r]
   o+="\n"
   //o+=F(m(f(d,E)).add(-r,"day"))
   o+=F(dd);dd=dd.add(-1,"day")
   var x=f("FC xmd",E)
   x=x.split("\n\n")[r]
   x=x.split(" ")
   var y=v(x[0]),z=v(x[1])
   //o+=z+" "+y 
   o+=Gr("-•-",[z,y,35],0)
  }else o+="\n <???"+(i+r)
 }
 return o
}
// 50
function Gr(c,a,n){var o="|",p=0 
 p=a.length-c.length
 if(p>0){c+=c.slice(-1).repeat(p)
  p=0
 }
 function r(i){
 var ai=a[i]
  if(typeof(ai)=="string"){
   p+=ai.length
   return ai
  } // 61
  ai+=n-p,ci=c[i]
  p+=ai
  if(ai<0){p++;return "<"}
  return ci.repeat(ai)
 } 
 for(i=0;i<a.length;i++){
  o+=r(i)
 }
 return o+"|"//+"\n. >"+a
} 71
//>>>>>>>>>
function Gg(fn,d,p,n){
 if(p==null)p=" "
 var g=isNaN(fn)
  ?fn
  :" ".repeat(fn)
 var a=[]
 for(var i=0;i<d;i++){
  a.push(i*10+9)
  if(i<d-1)a.push(String(i+1))
 }  82
 g+=Gr(p,a,0)
 return (isNaN(n)
  ?g
  :g.slice(0,n+fn.length+1)+"|")
}

// TEST //
*/
