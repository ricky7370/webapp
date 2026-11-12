<!-- Hiding
/*         HTML point
Il sito italiano sul Web publishing
       http://www.html.it
       webmaster@html.it
*/

var base= new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"

var z=23;
var y=28;
var f= new Array();
var K= new Array();
var login=new Array();
var lgnum=0;
for (x=0; x<10; x++){
f[x]=x<<9
f[x]+=23
}
for (x=10; x<36; x++){
y=y<<1
v= Math.sqrt(y)
v = parseInt(v,16)
v+=5
f[x]=v
y++
}
for (x=36; x<62; x++){
z=z<<1
v= Math.sqrt(z)
v = parseInt(v,16)
v+=74
f[x]=v
z++
}

function encode (OrigString, CipherVal) {
        Ref="0123456789abcdefghijklmnopqrstuvwxyz._~"
        Ref=Ref+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        CipherVal = parseInt(CipherVal)
        var Temp=""
        for (Count=0; Count < OrigString.length; Count++) {
                var TempChar = OrigString.substring (Count, Count+1)
                var Conv = cton(TempChar)
                var Cipher=Conv^CipherVal
                Cipher=ntoc(Cipher)
                Temp += Cipher
        }
        return (Temp)
}

function cton (Char) {
        return (Ref.indexOf(Char));
}

function ntoc (Val) {
        return (Ref.substring(Val, Val+1))
}

function inc(){
iCounter--
if (iCounter > 0){
alert('Login / Password non corretta\n\nProva nuovamente')
document.lgform.user.value=""
document.lgform.passwd.value=""
lgnum=0
}
else
location.href='amici-negato.htm'
}

function check(){
if (lgnum<login.length){
if (document.lgform.user.value==login[lgnum].usid)
pwdchk()
else{
lgnum++
check()
}
}
else
inc()
}


function pwdchk(){
var pass=document.lgform.passwd.value
var lpass=pass.length
for (l=0; l<lpass; l++){
K[l]=pass.charAt(l)
}
var code=0;
for (y=0; y<lpass; y++){
for(x=0; x<62; x++){
if (K[y]==base[x])
code+=(y+1)*f[x]
}
}
if (code==login[lgnum].pwd) 
go(encode(document.lgform.passwd.value, lpass))
else
inc()
}


function go(site){
location.href= site + '.htm'
}

function id(usid,pwd){
this.usid=usid;
this.pwd=pwd;
}

var iCounter=3


login[0]=new id("moanese",81002)
login[1]=new id("mike",140346)


//Done Hiding -->