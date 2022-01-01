//== C . field Functions  .js
//== funkcije za js Fields
function h(){var r="fieldFunctions"
 r+=" f(x)field(x)"
 r+=" fd(x)field(x)/dflt/~" 
 return r
}             
function f(x){return field(x)}
function fd(x,df){x=field(x)
 return x!=null?x:df!=null?df:"~"
                  
                  //"99999"
}
// function m(x){return moment(x)}
//== end ==
