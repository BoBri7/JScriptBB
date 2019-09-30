function io() { return "v 30. 9. 2019 " }
function Fo(Fns,ext)     { if (ext==null) ext=".txt"
  return file("/sdcard/"+Fns +ext)    } 
function Fc(Fno)     { Fno.close()         }
function Fx(Fns)     { return Fns.exists() } //??★
function Fl(Fno)     { return Fno.length() }
function Fp(Fno)     { return Fno.getLineNumber() }

function Fw( Fno,txt) { Fno.write(txt)    }
function Fwl(Fno,txt) { Fno.writeLine(txt) }

function Frc(Fno) { return Fno.readChar()  }
function Frl(Fno) { return Fno.readLine()  }
function FrL(Fno) { return Fno.readLines() }  
function Fra(Fno) { return Fno.readAll()   }

function FR(Fns) { Fno = file("/sdcard/"+Fns); 
  Rl = Fno.readLines(); Fno.close(); //★★???
  return Rl } 
function FRa(Fns) { Fno = file("/sdcard/"+Fns); Fno.close(); 
  return Fno.readLines();} 
//★★★ END FILE IO ★★★

// f = file("/sdcard/myfile.txt"); 
