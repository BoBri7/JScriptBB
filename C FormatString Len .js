

function Chr(N){ return String.fromCharCode(N) }
function N2C(N,C) { if (C==null) C=36
  return N.toString(36) }
function C2N(S,C) { if (C==null) C=36
  return parseInt(S,36) }

function FS( SS, LL) { NN =0 // pad right ★★
  for ( ii=0; ii< SS.length; ii++) {
    NN+= CL( SS.charCodeAt(ii) ) }
  return SS + " ".repeat( Math.max(0,LL-NN/20 )* 2.15 ) 
  // +">"+NN.toFixed(1)
}
function CL( Ch) { 
 s ="b1bbbbbbk1bb9bbgggggggggggzg1gg999mkqm4dcfk7a9akkkkk"
 s+="kkkkk87ijihvnmnnkjopajmjvpomomllnmvmll9e9fgbjkikjckj"
 s+="98i9vjkkkcibjhqhhhc9cogggggggggggggggmgggggggggggggg"
 s+="ghg99jkpi8lfsggj1sgdjddbkh99dggqrrhnnnnnnxnkkkkaaaan"
 s+="poooopjonnnmllljjjjjjuijjjj9999ljkkkkkkkjiijhkh"
 return parseInt( s.charAt( Ch.charCodeAt(0) ),36 )
}

//★★★★★
/*
function xFS( SS, LL) { NN =0 // pad right ★★★
s ="b1bbbbbbk1bb9bbgggggggggggzg1gg999mkqm4dcfk7a9akkkkk"
s+="kkkkk87ijihvnmnnkjopajmjvpomomllnmvmll9e9fgbjkikjckj"
s+="98i9vjkkkcibjhqhhhc9cogggggggggggggggmgggggggggggggg"
s+="ghg99jkpi8lfsggj1sgdjddbkh99dggqrrhnnnnnnxnkkkkaaaan"
s+="poooopjonnnmllljjjjjjuijjjj9999ljkkkkkkkjiijhkh"
  for ( ii=0; ii< SS.length; ii++) { ch=SS.charCodeAt(ii)
    NN+= n( s.charAt( SS.charCodeAt(ii) ) )/20
  }
  return SS + " ".repeat( (LL-NN)*2.15 ) 
  //+">"+s.length+">"+NN.toFixed(1)
}*/
