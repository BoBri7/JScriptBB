function Fo(Fn)     { return file(Fn)    } 
function Fc(Fn)     { Fn.close()         }
function Fx(Fn)     { return Fn.exists() }
function Fl(Fn)     { return Fn.length() }
function Fp(Fn)     { return Fn.getLineNumber() }

function Fw( Fn,txt) { Fn.write(text)    }
function Fwl(Fn,txt) { Fn.writeLine(txt) }

function Frc(Fn) { return Fn.readChar()  }
function Frl(Fn) { return Fn.readLine()  }
function FrL(Fn) { return Fn.readLines() }  
function Fra(Fn) { return Fn.readAll()   }

function FR(Fn) { Fn = file(Fn); 
  Rl = Fn.readLines(); Fn.close(); 
  return Rl } 
function FRa(Fn) { Fn = file(Fn); Fn.close(); 
  return Fn.readLines();} 
