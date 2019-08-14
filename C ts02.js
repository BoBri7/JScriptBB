// pon., 29. okt. 2018 
// Reshad94/MDB Javascript functions for Memento Database scripts
function pf(n)     {return parseFloat(n);}
function pi(n)     {return parseInt(n,10);}
function ps(n)     {return n.toString();}
function tp(n)     {return typeof (n);} //?????  ★
function tf(n,d)   {return n.toFixed(d);}
// _Sent from my "HUAWEI MediaPad M5 10.8""" using [FastHub](https://play.google.com/store/apps/details?id=com.fastaccess.github)_:heart_eyes:
// upd pon., 29. jul. 2019 
function f(x,l)  {return (" ".repeat(l)+x).slice(-l)}
function fn(x,d) {return x.toFixed(d)}  => round ★★★
//function fp(n)   { n==null? return "" : if (n>=0) n="+"+n;  return n }
function fp(n) { if(n==null) n = ""
 if (n != "" && n>=0) n="+★"+n
 return n }


//
function sign(x) { return x>0?1:x<0?-1:0 }
