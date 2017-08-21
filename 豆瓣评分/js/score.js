window.onload=function () {
 var li=document.getElementsByTagName('li');
 var bgImg=document.getElementsByClassName('bgImg');
 var arr=['很差','较差','还行','推荐','力荐'];
 var span=document.getElementsByTagName('span')[0];
 var tag=true;  //设置一个标志位，用来判断是点击还是第二次点击.
    var k=0;
 //使用闭包
 for(var i=0;i<li.length;i++){
     (function (arg) {
         bgImg[i].onclick=function () {
             if(tag){  //如果还未被点击过
                 //用一个for循环来将所有以前的下标都实现
                 for(var j=0;j<arg+1;j++) {
                     bgImg[j].src = 'img/stary.png';
                     span.innerHTML = arr[arg];
                     k=arg;
                 }
             }else{  //已经被点击过了，恢复原来
                 //同上
                 for(var j=0;j<k+1;j++) {
                     bgImg[j].src = 'img/starw.png';
                     span.innerHTML = '';
                 }
             }
            tag=!tag;  //取反
         }
     })(i)
 }
}