 //★★ n2c/c2n kličeta X funkciji if c >36 ★★
 //★★★★★★★★
 function NumSys(){
  s ="\n ★★ Številski sistemi ★★"
  s+=" X2N(N,C) N/C/max62 => 10"
  s+=" N2X(N,C) N10 => C/max 62"
  s+=" *N2C & C2N  enako do C<=36 "
  s+=" int(n)  >> num ★ "
  return s+"\n ★ EndHelp ★\n" 
 } //★ end help ★

function N2C(N,C) { if (C==null) C=36
  return N.toString(C) }
function C2N(S,C) { if (C==null) C=36
  return parseInt(S,C) }
function int(x) { return Math.floor(x) }

function x2xs() {  Ss ="0123456789" 
  Ss+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  Ss+="abcdefghijklmnopqrstuvwxyz"            
  //   123456789o123456789o123456
  return Ss } //★★★             

function X2N(Nn, Cn) { rv =0  ; Nn=Nn.split(""); // f =1
 if (Cn <37) return C2N(Nn,Cn)
 else {
  if (Cn==null) Cn=62
  Cn = Math.min( Cn,Ss.length)
//  rv+=Nn
  for (ii=0; ii < Nn.length; ii++ ) {
    x = Nn[Nn.length-ii-1]
    rv+=  Ss.indexOf(x) //*f
    //f = f*Cn
  } 
  return rv
}}  // ★★★★  

function N2X( Nn, Cn, X) { 
 if (Cn <37) return N2C(Nn,Cn)
 else {
  if (X==null) { rv = ""
    Ss = x2xs()
    if (Cn==null) Cn=62
    Cn = Math.min( Cn,Ss.length)
  }
  X = null
  N = Math.floor( Nn / (Cn-0) ) ; 
  Nn= Nn-N*(Cn)
  if (N>0) { rv+= N2X(N,Cn,1) ;  }
  rv+= Ss.slice(Nn,Nn+1)  
  return rv 
}} // ★★★★
//>>>>>>>>>>>>>
/*  ★★ test ★★
log ( "★★BEGIN★★\n") ; c = 99
a ="0 1 5 6 7 8 9 10 14 15 16 17 18 "
a+="61 62 63 64 65 255 256"
a =a.split(" ")
for (i =0; i <a.length; i++) { ai =  a[i] 
  n = N2X(ai,c)
  v = " N2X("+ai +" , "+ c +") =>"+ n 
  v+= "<=>"+ X2N( n , c)
  log ( v )
} 
// ★★★★★★★ END F ★★★
*/
