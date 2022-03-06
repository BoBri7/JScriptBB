// Err Handling
function LgEr(er,t){
 var l=er.line//number 
 var e="★Er: "+er.message
 e+="\n "+er.name
 e+=l>0?" L="+l:""
 e+=t==null?"<":" - "+t
 return e
} //=8
/* pr.v.
function LgEr(er,t) { 
  t ="Err:"+er.name+""+er.message
  t+="\n >L="+er.linenumbe +" "+ t )
  // alert (t) ;log (t);
  return t
}  //★★10
}
*/
/* err sintax
>rry { throw "myErrror"}
try {  ★ napaka? ★ }
catch(err) { LgEr(err,"txt") }
finaly { ★ close ★  }
★★ 
OnError ErrHandler ????? 
★★
*/
//★★★★★★★★
