var div_screen=document.getElementById('screen');
var screen=div_screen.innerHTML;
var equal=document.getElementById('equal');
var clear=document.getElementById('clear');
var plus=document.getElementById('plus');
var sub=document.getElementById('sub');
var mult=document.getElementById('mult');
var divi=document.getElementById('divi');
//定义三个全局变量
var num1=0;
var num2=0;
var tag=0;  //用于判断运算符类型，用于switch
function calculater(a) {
        screen += a;
        div_screen.innerHTML=screen
        num1=screen-0;  //转化为number类型
}
//加
plus.onclick=function () {
    tag=1;
    op();
}
//减法
sub.onclick=function () {
    tag=2;
    op();
}
mult.onclick=function () {
    tag=3;
    op();
}
divi.onclick=function () {
    tag=4;
    op()
}
//等于  判断tag
equal.onclick=function () {
    switch (tag){
        case 1:
            div_screen.innerHTML=num2+num1;
            num1=num2+num1;
            break;
        case 2:
            div_screen.innerHTML=num2-num1;
            num1=num2-num1;
            break;
        case 3:
            div_screen.innerHTML=num2*num1;
            num1=num2*num1;
            break;
        case 4:
            div_screen.innerHTML=num2/num1;
            num1=num2/num1;
            break;
        default:
            alert("瓜皮");
    }
}
//通用运算
function op() {
    num2=num1;
    num1=0;
    clear_num();
}
//清除
function clear_num() {
    div_screen.innerHTML='';
    screen='';
}
clear.onclick=function () {
    clear_num();
    num1='';
    num2='';
    tag=0;
}