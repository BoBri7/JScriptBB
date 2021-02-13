function pr(o) { 
 switch (o.toLowerCase()) { 
 case "r" : o= 4142 ;break 
 case "s" : o=17729 ;break
 case "k" : o=26078 ;break
 case "h" : o= 9139 ;break
 case "z" : o=16402 ;break
 default  : o=9999999 } 
 return o 
} 
function f(o,x,s,n){
 if(n==null)n=8
 if(s==null)s=""
 o =field(o+"."+x) 
 if(isNaN(o)||o==null)o="~ "
 if(parseInt(s)>0)o+=x.slice(0,s)
 else o+=s
 return ("     "+o).slice(-n) 
}
function obcn(o){ 
 if(!field("F"))return " ~ ~\n ~ ~"
 i =f(o,"potr","ok:")
 i+=("    "+(parseInt(i)*100/pr(o)).toFixed(1)).slice(-5)+"%;"
 i+=f(o,"vsi",";")
 i+="\n"
 i+=f(o,"umrl",1,5)
 //i+="\n"
 i+=f(o,"novi",3)+ f(o,"d.po2","/pd")
 if(o=="R")i+=f(o,"tnp","/t")
 return i 
}               
//★★★★
