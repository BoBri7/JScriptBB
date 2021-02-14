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
 if(n==null)n=9
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
 i+=("    "+(parseInt(i)*100/pr(o)).toFixed(1)).slice(-4)+"%;"
 i+=f(o,"vsi","}\nn:",12)
 i+=f(o,"novi",";u:")        //novi/
 i+=f(o,"umrl","",8)      // umrli
 
 i+=f(o,"d.po2","d2×",12)    //dni/podvojit
 if(o=="R")i+=f(o,"tnp","°/t") //nov/teden
 return i 
}               
//★★★★
