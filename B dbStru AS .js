// Thu, 31 Mar 2022 ★★
function H(){ return ("★ dbStru actionScript funkcije★"
 +"\n=dbStru(fld,act,len)"
 +"\n.             /ArayLen [fld.n,typ,oo]/"
 +"\n.           act Write Over Read Clear Log CANCEL "
 +"\n.       fld.name (flds)"
 +"\n=vls($f.n,t,oo  { write to 1.entry field(dbStL) "
 +"\n-msg($)         { message()"               
 +"\n=dbStruW(txt,o){ ★ o/Write file"
 +"\n=dbStruR(x)    { ★ Read file"
 +"\n=dbStruC()     { ★ Clear file"
 +"\n-gfo()         {    get FileObject"
)} 
//★★★★ dbStru ★★★★★★★★★
function msg(x){message(x)}
// 
function vls(vl){var db=lib().entries()
 var e=db[db.length-1]
 e.set("dbStL",vl)
 e.set("id",0)      //?0/1     
 e.recalc()              
 return "["+vl+"]"
} 
//★★ main f ★★
function dbStru(fld,act,len){//★★ MAIN F ★5
 if(act.slice(0,2)=="CA"){act+= "  =>  C a n c e l e d ★"
  msg(act);return act
 }
 var rx=act+"★"
 act=act.slice(0,1)
 rx+=act+"<" 
 if(len!=null){rv+=" [vl] ";vsl(len)}
//★★★★               //★★> 10
 db=lib().entries()
 var z=db.length
 var s ="Lib: "+lib().title+" "
 msg(s+" /a:"+act+"")
 s+=" /št.z.="+z+"\n"
 s+=" <<db["+z+"].field("+fld+") :\n"
 s+=db[z-1].field(fld)
 s+="\n ~ ~ END stru ~ ~ "
 rx+=" befSw:"
 switch(act){          //★★> 19
 case "W":rx+=dbStruW(s)  ;break // write file
 case "O":rx+=dbStruW(s,0);break // write file
 case "R":rx+=dbStruR()   ;break // read  file
 case "C":rx+=dbStruC()   ;break // CLEAR File
 case "L":rx=s            ;break // return 4 LOG ★★>24
 //case "LO":rv+=" ★LogLog ★\n"+s ;break
 //case "CA":msg("???")  ;break // cancel=doNothing 
 }
 return rx
} 
//★★★ END FUNCTION dbStru ★★★★★★★★★★★★★★
// get file object
function gfo(n,c){//★★★ get file object
 var pt="/storage/emulated/0/Documents/mDBexport"
 switch(isNaN(n)?0:n){
 case(9):pt="/sdcard/Documents/MmDbLg" ;break
 case(1):pt="/storage/emulated/0/MyDATA";break //★1
 }
 var fn=pt+"/dbStru_"+lib().title+".txt"
 return c==null
  ?file(fn)
  :"f.name= "+fn+"\n"
} 
// dbStruR read 
function dbStruR(x){ //★★ read file
 var fo=gfo(1)
 try{x=fo.readAll()}
 catch(er){
  fo.close
  x=-2 //" * ni datoteke * ";
 }
 return x==""?-1:x
}  
//★★★★ FUNCTION ★ CLEAR FILE ★★★★ >22
function dbStruC(){ //★★ clear file
 var fo=gfo(1),x=0
 try{fo.write("");x=1}
 catch (er){ x=-1}
 finally{
  fo.close
  return x
 }
}
//★★★★ FUNCTION ★ WRITE FILE ★★★   ★★>31
function dbStruW(txt,o){ // Write /add 2 file
 if(txt==""){var db=lib().entries()
  txt=db[db.length-1].field("flds")
 } 
 var fo=gfo(1), pt="",rv=0
 var ts="-".repeat(33)+moment().format(" D.M.Y HH:mm:ss")
 try        {pt=fo.readAll();rv=1 }
 catch (er) {pt=ts;rv=2 } 
 finally {
  fo.write( txt+ "\n"+ts+(o!=null?"":"\n"+pt))
  fo.close() 
  db=null
  return "ws="+rv
 } 
}
//★★★★ END FUNCTIONS ★★★★★★ ★★> 45
