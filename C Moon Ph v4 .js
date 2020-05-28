function MP(D,X,Fx) { //var dd = moment(D).format("DD.MM.YY")
 function ii(S,I){ return S.slice(I*2,I*2+2) } //★inFun★
 var F=29.5344
 var MF=" ×. ).D.(D.O.(C.C.( "//. x " 
 
 var Md="000001,010124,100115,190204,190306,190405,"
 Md+="190505,190603,190702,190801,190830,190928,"
 Md+="191028,191126"

 var Mrk="191226s,190702m,190106m,0"; 

 if(D==0) return F
 if(D==1) return MF
 if(D==2) return Md
 if(D==3) return Mrk 
 if(D==9) { 
  D = "★★★ MP(datum, op ) ★★★ \n"
  D+= "★★★ Ver 4.1 29. 9. 2019  ★\n"
  D+= " Mf:[ " +MF+"] "+MF.length +" faz\n"
  D+= " Mf= "+F+" dni \n"
  D+= "★ d  0: faza dni \n"
  D+= "★     1: faze \n"
  D+= "★     2: datumi mlajev \n"
  D+= "★     3: datumi mrkov \n"
  D+= "★     9: help \n"

  D+= "★ op 0/ : Faza \n"
  D+= "★       1: dan faze /29,5 \n"
  D+= "★       2: dan faze / 8 \n"
  D+= "★       3: dan + faza \n"
  D+= "★       6: datum \n"
  D+= "★       7: datum mlaja  \n"
  D+= "★       8: faza dni \n"
  D+= "★       9: faze \n"
  return D }
if ( Fx==null) Fx=0
if ( D==null || isNaN(D) ) D = new Date() 
if ( moment(D).format("Y.MM") < "2000.01"){ 
 return D+"= ? "+moment(D).format("Y.M.D < 2000 ? ")}
 
 Md=Md.split(",").sort(function(a,b){return b-a})
 MF=MF.split(".")
 N=Md.find( function(X) { 
      return X < moment(D).format("YYMMDD") })
 M= new Date(20+ii(N,0),ii(N,1)-1,ii(N,2),12,0)
 N= moment(D).add(0,"day").diff(M,"days") +1
 N= N-F*Math.floor(N / F)
 // N= N.toFixed(Fx) 
 NF= Math.round( N / F * (MF.length-1) )
 N= (String.fromCharCode(9).repeat(9)+(N.toFixed(Fx))).slice(-5) //★★
 Mf= MF[NF]
 switch ( Number(X) ) {
  case 9 :{ return MF.join(", "); break }
  case 8 :{ return F ; break }
  case 7 :{ return moment(D).format("DD.MM.YY") ; break }
  case 6 :{ return moment(M).format("DD.MM.YY") ; break }
  case 5 :{ var d=moment(D) , n=moment()
    d =d.diff(moment(d).startOf("year"),"day") 
    n =n.diff(moment(n).startOf("year"),"day")
    return (n-d)%183; break }  //★ difDoY ★
  case 4 :{ n = 0; d = N
    return n-d; break }  //★ difMF# ★
  case 3 :{ return NF +" = "+Mf ; break }
  case 2 :{ return N ;         break }
  case 1 :{ return NF ;        break }
  case 0 :{ return moment(M).format("DD.MM.YY") ; break }
  default: return Mf
 } //★ end sw}
}//★ END functuon MP ★★★ 
