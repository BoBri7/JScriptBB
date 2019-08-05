// pon., 29. okt. 2018 
// Reshad94/MDB Javascript functions for Memento Database scripts
function pf(n)     {return parseFloat(n);}
function pi(n)      {return parseInt(n);}
function ps(n)     {return n.toString();}
function tp(n)      {return typeof (n);} //?????  ★
function tf(n, c)   {return n.toFixed(c);}
// _Sent from my "HUAWEI MediaPad M5 10.8""" using [FastHub](https://play.google.com/store/apps/details?id=com.fastaccess.github)_:heart_eyes:
// upd pon., 29. jul. 2019 
function f(x,l)  {return (" ".repeat(l)+x).slice(-l)}
function fn(x,d) {return x.toFixed(d)}
//function fp(n)   { n==null? return "" : if (n>=0) n="+"+n;  return n }
function fp(n) { if(n==null) n = ""
 if (n>=0) n="+"+n
 return n }

function emf(e,f,ff) {return moment(e.field(f)).format(ff)}
function mf(f,ff)    {return moment(  field(f)).format(ff)}
//
function sys(x)  {s=system().os;
  return x==0?s:x==1?s.slice(8,9): "\n"+ 
  "   sys(0=OS, 1=os#, /=help" +"\n"+ 
  "   srt(FN$,/=dsc 1=asc" +"\n" }
//
function sign(x) { return x>0?1:x<0?-1:0 }
