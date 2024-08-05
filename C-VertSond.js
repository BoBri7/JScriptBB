// izračun % rel.vl. iz temp°C in Rosišča

function rv(t,r) { f=0.071
function e(x){return Math.exp(x*f)} 
 t = (t==null || r==null) 
 ? "~" 
 : (100*e(r-t)).toFixed(0) 
 return ("   "+t).slice(-3)
}

function rvp(t,r){
 function ex(x){ return Math.exp(Math.log(10)*x) }
 function s(t){return 6.11 * ex(7.5*t/(237.3+t)) }
 return 100*s(r)/s(t)
}
/*
Ustvarjanje odgovorov za vas Za izračun relativne vlažnosti (% RH) 
iz temperature rosišča (Td) in dejanske temperature (T) 
lahko uporabite naslednjo formulo:

 RH = 100 x es(Td) / eS(T)

Kjer je (e_s(T) nasičeni tlak vodne pare pri temperaturi T, ki ga lahko izračunate z uporabo formule:

 es(T) = 6.11 x10^((7.5 * T )/(237.3+T)


Torej, koraki so naslednji:
1. Izračunajte nasičeni tlak vodne pare pri temperaturi rosišča (e_s(Td).
2. Izračunajte nasičeni tlak vodne pare pri dejanski temperaturi (e_s(T).
3. Uporabite zgornjo formulo za izračun relativne vlažnosti.


f=0.05
function rv(t,r) { t=(r==null)?null:r-t
 function e(x){return Math.exp(x*f)}
 t = (t==null)
  ? "~"
  : (100*e(t)).toFixed(0)
 return "???   "+t).slice(-3)
} */
