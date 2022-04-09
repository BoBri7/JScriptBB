function isDate(d){var f='YYYY-M-D'
  return moment(d,f,true).isValid() +" "+d
}
function isYear(y){
 return isDate(y+"-1-1")
} 
function isY(y){var f='YYYY-M-D'
  return moment(y+"-1-1",f,true).isValid() +" "+y
}
