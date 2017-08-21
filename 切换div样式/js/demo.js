window.onload=function(){
    //先获取dom节点
  var set=document.getElementById('set');
  var box=document.getElementById('box');
  var cover=document.getElementById('cover');
  var square=document.getElementById('square');
  var red=document.getElementById('red');
  var yellow=document.getElementById('yellow');
  var blue=document.getElementById('blue');
  var wd1=document.getElementById('wd1');
  var wd2=document.getElementById('wd2');
  var wd3=document.getElementById('wd3');
  var ht1=document.getElementById('ht1');
  var ht2=document.getElementById('ht2');
  var ht3=document.getElementById('ht3');
  //设置点击出现设置盒子
  set.onclick=function(){
    box.style.opacity='1';
  }
  //改变颜色
    red.onclick=function () {
        square.style.background='red';
    }
    yellow.onclick=function () {
        square.style.background='yellow';
    }
    blue.onclick=function () {
        square.style.background='blue';
    }
  //改变宽度
    wd1.onclick=function () {
        square.style.width='160px';
    }
    wd2.onclick=function () {
        square.style.width='170px';
    }
    wd3.onclick=function () {
        square.style.width='180px';
    }
  //改变高度
    ht1.onclick=function () {
        square.style.height='160px';
    }
    ht2.onclick=function () {
        square.style.height='170px';
    }
    ht3.onclick=function () {
        square.style.height='180px';
    }
  //点击恢复按钮，恢复到原来的样式，并且设置页恢复到隐藏状态
    cover.onclick=function () {
      //removeAttribute 删除指定属性
        box.removeAttribute('style');
        square.removeAttribute('style');
    }
};
