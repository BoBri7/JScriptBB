
function pf(n)     {return parseFloat(n);}
function pi(n)     {return parseInt(n,10);}
function ps(n)     {return n.toString();}
function tp(n)     {return typeof (n);} //?????  ★
function tf(n,d)   {return n.toFixed(d);}
function f(x,l)    {return (" ".repeat(l)+x).slice(-l)}
function fn(x,d)   {return x.toFixed(d)}  //=> round ★★★
function round(x,d){return x.toFixed(d)}  //=> 
function fp(n)     { n==null? return "" : if (n>=0) n="+"+n;  return n }
function fp(n)     { if(n==null) n=""; if(n!="" && n>=0) n="+"+n
                    return n } // ★★ isNan ★★
function sign(x)   { return x>0?1:x<0?-1:0 } 

//★★★★★

function GHnums() { 
  s =  "★ GHnum   ret.v. ★ "
  s+="\n nmn(x,y) = min "
  s+="\n nmx(x,y) = max "
  s+="\n N(x)     = num /0 /parelseFloat (x,10) "
  s+="\n fNtd(x,d) # => th.delim # "
  s+="\n n(s)      $. => #  /#.3#,#=>#" // ★★★★
  s+="\n pf(x)   = parseFloat($) "
  s+="\n pi(x)   = parseInt($) "
  s+="\n ps(x)   = ★> string  "
  s+="\n S(x)    = str /><   ???"
  s+="\n typ(x)  = varType "
  s+="\n f(n,d)  = toFixed   /round(#,d)"
  s+="\n chr(n)   #=> char "
  s+="\n asc($)   ascii#(ch) "
  s+="\n = "
  s+="\n test    = 2test"
  s+="\n nmod(x,m)= mod"
  s+="\n = "
  s+="\n sp(n) = spaces " //★★★★<<<<
  return s }
//★★★★★
