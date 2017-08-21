window.onload=function () {
    //先获取dom节点
    var p=document.getElementsByTagName('p')[0];
    var a=document.getElementsByTagName('a')[0];
    var text=p.innerHTML;
    var sign=true;
    a.onclick=function () {
        if(sign){
            a.innerHTML=">>展开";
            p.innerHTML=text.substring(0,40);
        }else{
            p.innerHTML=text;
            a.innerHTML=">>收缩";
        }
        sign=!sign;
    }
}