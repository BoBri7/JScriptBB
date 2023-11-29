function io() { return "v 13. 12. 2019  " }

function Fo(Fns,ext)     { if (ext==null) ext=".txt"
  return file("/sdcard/"+Fns +ext)    } 

function Fc(Fno)     { Fno.close()         }

function Fw( Fno,txt) { Fno.write(txt)    }
function Fwl(Fno,txt) { Fno.writeLine(txt) }

function FW(Fn,txt)     { 
  let o = file( "/sdcard/MyData/"+Fn)   
  o.write(txt) 
  o.close()         
}
function Frc(Fno) { return Fno.readChar()  }
function Frl(Fno) { return Fno.readLine()  }
function FrL(Fno) { return Fno.readLines() }  
function Fra(Fno) { return Fno.readAll()   }

function FR(Fns) { Fno = file("/sdcard/"+Fns); 
  Rl = Fno.readLines(); Fno.close(); //★★???
  return Rl } 
function FRa(Fns) { Fno = file("/sdcard/"+Fns); Fno.close(); 
  return Fno.readLines();} 

function Fx(Fns)     { return Fns.exists() } //??★
function Fl(Fno)     { return Fno.length() }
function Fp(Fno)     { return Fno.getLineNumber() }

function exist(o){ 
  try { let t=o.readChar() ;  return true }
  catch (Er) {return false }
 }
//★★★ END FILE IO ★★★
// f = file("/sdcard/MyData/myfile.txt"); 
