// ★★★ format N th.delimited  
// ★★ n => th.delimited format ★★
function fN(n,d) { if(n==null)n=0;if(d==null)d=2
  n=n.toFixed(d).split('.');d=d>0? ","+n[1] :""
  return n[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")+d}
// ★ th.d => num ★
function td2n(n) {  function sj(s,i,j) {
                    return s.split(i).join(j)}
 // return n.split(".").join("").split(",").join(".")}
  return sj(sj(n,".",""),",",".")}
// ★ th.d => num ★
function td2n2(s) { s = s.replace(/\./g,"")
function fN(n,d) {s=(Number(n) < 0)?"-":"+"; 
  n=n.toFixed(d).split('.');
  n=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")
  return n+","+n[1]}
function td2n(n) {  function sj(s,i,j) {
                    return s.split(i).join(j)}
 // return n.split(".").join("").split(",").join(".")}
  return sj(sj(n,".",""),",",".")}

function td2n2(s) { s = s.replace(/\./g,"")
  return s.replace(",",".") }
// ★★★★★

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

/*  ★★★★★  TEST
function in(n,d,l) ★★★ππππ★★★~~~
function fN2(n,d) { n = n.toFixed(d) // .split('.');
  m = parseInt(n).toString();
  d = n.length > m.length ? ',' + n-m : '';
  // while (rx.test(m)) {m=m.replace(rx, '$1'+','+'$2')}
  m = m.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  return  m  +" d"+ (parseFloat(n)- parseInt(n)) //★★★
} //****~~~~~~~★★★

function typ(x) { return typeof(x) }
function isI(x) { return Number.isInteger(x) }
function isD(x) { return typeof(x) }
function isN(x) { return isNumber(x)}
function isA(x) { return isArray(x) }
function isS(x) { return typeof(x)=="string" }
function isEr(x){ return isNaN(x) }
function intg(x){ return Math.trunc(x) }
function abs(x) { return Math.abs(x) }
★★★ */

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
