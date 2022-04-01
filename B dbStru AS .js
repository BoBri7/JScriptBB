// Thu, 31 Mar 2022 ★★
function H(){ return ("★ dbStru actionScript funkcije★"
 +"\n dbStruW(txt,o){ ★ o/Write file"
 +"\n dbStruR(x)    { ★ Read file"
 +"\n dbStruC()     { ★ Clear file"
 +"\n gfo()         {    get FileObject"
 )
} 
function gfo(n,c){//★★★ get file object
 var pt="/storage/emulated/0/Documents/mDBexport"
 switch(isNaN(n)?0:n){
 case(9):pt="/sdcard/Documents/MmDbLg" ;break
 case(1):pt="/storage/emulated/0/MyDATA";break
 }
 var fn=pt+"/dbStru_"+lib().title+".txt"
 return c==null
  ?file(fn)
  :"f.name= "+fn+"\n"
} //★★>12
function dbStruR(x){ //★★ read file
 var fo=gfo(1)
 try{x=fo.readAll()}
 catch(er){
  fo.close
  x=-2 //" * ni datoteke * ";
 }
 return x==""?-1:x
}  
//★★★★ MAIN FUNCTION ★ CLEAR FILE ★★★★ >22
function dbStruC(){ //★★ clear file
 var fo=gfo(1),x=0
 try{fo.write("");x=1}
 catch (er){ x=-1}
 finally{
  fo.close
  return x
 }
}
//★★★★ MAIN FUNCTION ★ WRITE FILE ★★★   ★★>31
function dbStruW(txt,o){ // Write /add 2 file
 var fo=gfo(1), pt="",rv=0
 var ts="-".repeat(33)+moment().format(" D.M.Y HH:mm:ss")
 try        {pt=fo.readAll();rv=1 }
 catch (er) {pt=ts;rv=2 } 
 finally {
  fo.write( txt+ "\n"+ts+(o!=null?"":"\n"+pt))
  fo.close() 
  return "ws="+rv
 } 
}
//★★★★ END FUNCTIONS ★★★★★★ ★★> 45
