Https://github.com/BoBri7/tst01

function xx(x) { if(x==null) x=1

   return "day month year week hour".split(" ")[x]}


function da(d,n,x) { if(d==null) d=new Date();if(x==null) x=0

   if (n==null) n =1

    //xx xx="days months years weeks hours".split(" ")[x]

    return  moment(d).add(n,xx(x)) }

function dd(d)  { return d==null? new Date():d }


function bom(d) { //if(d==null) d=new Date();

d =dd(d); return moment(d).startOf("month") }

function eom(d) { //if(d==null) d=new Date();

d =dd(d); return moment(d).endOf("month") }


function eof(x) {  return moment(dd()).endOf( xx(x))

// return x==null }// xx(x)

}

