//T=timer // elapsed miliseconds
//lg=log /0=begin/1=end /txt
//msg
// added GH 23. 12. 2021 
function T(tx){
 function m(){return moment()}
 return tx==null
  ?m()//.add(-22,"milisec")
  :m().diff(tx,"milisec")
} 
function lg(xx){var tt=moment()
 tt=tt.format("★H:mm:ss.SSS")
 log( xx==null || xx==0
  ?"BGN. "+tt+"\n.\n"
  :xx==1
   ?"\n> END. "+tt
   :xx
 )
}
function msg(m){message(m)}
//★★ end 
