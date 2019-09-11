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
  Rl = Fn.readLines(); Fn.close(); return Rl } 
function FRa(Fn) { Fn = file(Fn); Fn.close(); 
  return Fn.readLines();} 
/* / ★★★★★★★★★★★★★★★★ 
Working with files
With scripts, you can read or write files located in the device's internal memory or on the SD card. All file operations are performed by the File object, which is obtained via a global function called file().

To work with the files, the library should have read/write file access.

File Global Functions
file(name)
Open a file for read or write operations. If the file with the specified name does not exist yet, it will be created.

Argument
name
The name and the full path to the file. For example, if the file is located on the SD card, the path should be something like /sdcard/example.txt.
Result
File object

Object File
This object is returned by the global function file() and provides access to the requested file. After reading or writing, the file should be closed using the method close().

File Methods
close()
Close the file. It can subsequently be reopened.
getLineNumber()
Get the current line number
Returns
The line number, or position, in the file
readAll()
Reads all lines of the file, and then closes the file
Returns
Array containing the lines of the file
readChar()
Reads the next character from the file stream
Returns
The character
readLine()
Reads the next line from the file stream
Returns
The line
readLines()
Reads the remaining lines from the file stream
Returns
Array containing the remaining lines of the file
write(text)
Write string(s). Take a variable number of arguments, converts each argument to a string, and writes that string to the file stream.
writeLine(text)
Write strings and a newline to the file stream
File Properties
exists
true — if and only if the file exists; false otherwise
length
The length, in bytes, of the file, or 0L if the file does not exist.

Files Examples
See Trigger Examples#Files Examples. 
*/
