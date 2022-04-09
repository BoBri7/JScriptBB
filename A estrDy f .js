function estrDy(y,D){
 function f(x,y){return parseInt(x/y)} 
 //function f(x,y){return x%y}
 if(!moment(y+"-1-1","YYYY-M-D",true).isValid()){
  return y+" ne obstaja"
 }
 if(typeof(D)=="string"){
 switch (D.toUpperCase()){
 case "B"  :D=50;break
 case "P"  :D=-48;break
 case "PS" :D=-47;break
 default: D=0
 }} //*/
 var C = f(y, 100)
 var N = y - 19 * f(y , 19)
 var k = f(C - 17, 25)
 var I = C - f(C , 4) - f(C-k,3) +19*N+15
 I= I - 30 * f(I , 30)
 I=I-f(I,28)*(1-f(I,28))*f(29,I+1)*f(21-N,11)
 var J = y + f(y,4) + I + 2 - C + f(C,4)
 J = J - 7 * f(J,7)
 var L = I - J
 var m = 3 + f(L + 40,44)
 var d = L + 28 - 31 * f(m--,4)
  //  CalculateEaster = DateSerial(y, m, d)
 return moment(new Date(y,m,d)).add(Number(D),"days")
//,"C,N,k,I,J,L"]
}
