function CreatureCaptcha(name, width, height, timer, run, ping, top, left){ 
var ABC=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
var CVET=["A","B","C","D","F","0","1","2","3","4","5","6","7","8","9"];
var parol;
var FG;
var name=name;
var width=width; 
var height=height; 
var timer=timer; 
var run=run;
var ping=ping; 
var top=top; 
var left=left;

//функция рандомайзер
var RandomInteger=function (min, max) {
rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);
return rand;}

//длина пароля
var DlinaParol=function(){
var S=run*(timer/1000)/ping;//нижняя граница возможных паролей 
var j1=1;
while(S>Math.pow(ABC.length,j1)) {j1++;} //минимальное количество символов в пароле
var j2=j1+2;//максимальное количетсов символов в пароле
return RandomInteger(j1, j2); 
}

//генерация случайных цветов
var RandomColor=function(){
var rc="#";
for(var j=0;j<3;j++){rc=rc+CVET[RandomInteger(0,CVET.length-1)];}
return rc;}


//генерация фона 
var BackgroundСaptcha=function(){
$('#CANVASINA').drawRect({
fillStyle: SelectionBackgroundСaptcha(),
strokeWidth: 0,
x: 0, y: 0,
fromCenter: false,
width:width/10*9*4,
height:height/2*4});}


//выбор между градиентами
var  SelectionBackgroundСaptcha=function(){
switch(RandomInteger(1, 2)){
case 1:
return LinearGradient();
break;
case 2:
return RadialGradient();
break;}}

//линейный градиент
var LinearGradient=function(){
var cofx=RandomInteger(0, width);
var cofy=RandomInteger(0, height);
var linear = $('canvas').createGradient({
x2:cofx*2, y2: cofy*2,
x3:cofx*3, y3: cofy*3,
x4:cofx*4,  y4: cofy*4,
c1: RandomColor(), 
c2: RandomColor(), 
c3: RandomColor(), 
c4: RandomColor(), 
});return linear;}

 //радиальный градиент
var RadialGradient=function(){
var cof1=RandomInteger(width/2,width/4*3);
var cof2=RandomInteger(height/2,height/4*3);
var radial = $('canvas').createGradient({
x1: cof1, y1: cof2,
x2:cof1, y2: cof2,
r1:(width+height)/RandomInteger(7,10), r2:(width+height)/RandomInteger(4,6),
c1:  RandomColor(),
c2:  RandomColor(),
c3:  RandomColor(),
});return radial;}

//рисует линии
var  DrawLinesСaptcha=function(){
for(var j=0;j<(width*height/3000);j++)        
$('#CANVASINA').drawPath({
strokeStyle:"#000",
strokeWidth:1,
x:0, y:0,
p1: {
type:'line',
x1: RandomInteger(0, width/10*9*2), y1: RandomInteger(0, height),
x2: RandomInteger(0, width/10*9*2) , y2: RandomInteger(0, height)}});}

//рисует точки
var  DrawPointsCaptcha=function(){
for(var j=0;j<width*height/150;j++)    
$('#CANVASINA').drawArc({
fillStyle: '#000',
strokeStyle: '#000',
strokeWidth: 1,
x: RandomInteger(0, width/10*9*2), y: RandomInteger(0, height),
radius: 1})}

//рисует символы
var  DrawSymbolsCapcha=function(){
parol=new Array(DlinaParol());
for(var i=0;i<parol.length;i++){
parol[i]=ABC[RandomInteger(0, ABC.length-1)];
$('#CANVASINA').drawText({
text:parol[i],
fontFamily: 'cursive',
fontSize: RandomInteger(height/(height/50),height/(height/80)),                        
x:(width/(parol.length)+i*30), y:(height/4)+RandomInteger(-15, 15),
fillStyle: RandomColor(),                                 
strokeWidth: RandomInteger(1, 5),
rotate: RandomInteger(-30, 30)
});}}

var forma=function(){  
        $("#frm1").css({
                "width":width+"px",
                "height":height+"px",
                'border':(width+height)/200+'px  solid darkturquoise',
                'background-color':'azure',
                'position':'fixed',                              
                'top':top+"px",
                'left':left+"px",
                'border-radius':'10px'});
                                            }                  
var cartoon=function (){
        $("#CANVASINA").css({
               "width":width/10*9+"px",
                "height":height/2+"px",
                "background":"linear-gradient(-45deg, #fefcea, #f1da36)",
                'border':(width+height)/200+'px  solid darkturquoise',
                'margin':height/20+'px 0px '+0+'px '+width/24+'px',
                'border-radius':'10px'
                });}

var pass=function(){
        $("#txt2").css({
                "width":width/10*4+"px",
                "height":height/10+"px",
                'placeholder':'Введите текст с картинки',
                'border':'2px solid darkturquoise',
                'margin':height/40+'px 0px 0px '+width/24+'px',
                'border-radius':'10px'
                });}
       
 var but1css=function(){
         $("#button1").css({
                'width':width/15+"px",
                'height':height/15+"px",
                'border':'2px  solid darkturquoise',
                'margin':height/40+'px 0px 0px 10px',
                'border-radius':'90px'});
                                        }       
        
var but2css=function(){
         $("#button2").css({
                'width':width/10*4+"px",
                'height':height/12*2+"px",
                'background-color':'white',
                "color":"darkturquoise",
                'border':'2px  solid darkturquoise',
                'margin':height/30+'px 10px 10px '+width/7*2+'px',
                'border-radius':'10px'});
                                   }

this.butdo1=function(){
var self=this;
clearTimeout(FG);
$("#txt2").val('');
self.show();}
  
this.butdo2=function(){
  var self=this;
  var password = $("#txt2").val();
  var b=true;
  for(i=0;i<parol.length;i++)
  if (password.charAt(i)!=parol[i]) { b=false;break;};
  if (b==true) alert("ты прав!");
  else alert("ты не прав!");
   clearTimeout(FG);
  $("#txt2").val('');
    self.show();
  }

this.show=function(){
     var self=this;
     if(!$("#frm1").length){
     $("body").append("<form id=frm1> </form>"); forma();
     $("#frm1").append("<canvas id=CANVASINA> </canvas><br>"); cartoon();
     $("#frm1").append("<INPUT TYPE=TEXT  id=txt2 autocomplete=off >");pass();
     $("#frm1").append("<img src=replays.jpg id=button1 ONCLICK="+name+".butdo1()><BR>");but1css();
     $("#frm1").append("<INPUT TYPE=BUTTON VALUE=go  id=button2 ONCLICK="+name+".butdo2()>");but2css();
       }
     BackgroundСaptcha();
     DrawLinesСaptcha ();
     DrawSymbolsCapcha();
     DrawLinesСaptcha ();
     DrawPointsCaptcha();
     FG=setTimeout(function(){alert("ты опоздал!!!"); $("#txt2").val(''); self.show();},timer);
  }
  this.delete=function(){$("#frm1").remove();}
  }
