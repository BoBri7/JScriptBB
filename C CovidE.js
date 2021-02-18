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
 i+=("   "+(parseInt(i)*100/pr(o)).toFixed(1)).slice(-4)+"%;"
 i+=f(o,"vsi","}\n",12)
 i+=f(o,"novi","n,",7)        //novi/
 i+=f(o,"umrl","u",8)      // umrli
 
 i+=f(o,"d.po2","d×",11)    //dni/podvojit
 if(o=="R")i+=f(o,"tnp","°/t") //nov/teden
 return i 
}
// ★★ 
//c="potr;novi;vsi;d.po2".split(";")
//cpt(c[0])
// case / 1000 prebivalcev
function cpt(c) {
function f(o,c) { 
 c=field(o+"."+c)*1000/pr(o)
 o=o+"="+("     "+c.toFixed(1)).slice(-4)
return o }
s =""; o ="RSKHZ"
for(i=0;i<o.length;i++){
 s+=f(o[i],c)
 s+=(i==2)?"\n ":";     "
}
return s }
//★★


/★★★★
