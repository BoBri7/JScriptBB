function Fo(Fns)     { return file(Fns)    } 
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

function FR(Fns) { Fno = file(Fns); 
  Rl = Fno.readLines(); Fno.close(); //★★???
  return Rl } 
function FRa(Fns) { Fno = file(Fns); Fno.close(); 
  return Fno.readLines();} 
//★★★ END FILE IO ★★★
