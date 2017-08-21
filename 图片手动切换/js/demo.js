window.onload=function () {
    //先获取dom节点
    var img=document.getElementById('img');
    var num=document.getElementById('num');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var text=document.getElementById('text');
    //定义图片数组
    var arrPic = ["img/img1.jpg", "img/img2.png", "img/img3.jpg", "img/img4.png"]
    //定义底部文字
    var arrtext = ["图片一", "图片二", "图片三", "图片四"]
    var i = 0;
    //问题：如何获取改变图片的路径，js设置background url
    //用图片的src
    /**
    * bug:当一直点下一页，到最后一页的时候，将i置为0；往前翻也会显示到前面没有了
    * */
    //解决办法：去掉next.onclick()中的重置i=0
    function change() {
        img.src=arrPic[i];
        num.innerHTML=i+1+'/'+arrPic.length;
        text.innerHTML=arrtext[i];
    }
    //下一页
    next.onclick=function () {
        i++;
        if(i>3){
            //i=0;
            alert('老板前面也没有了！');
        }else {
            change();
        }
    }
    //前一页
    prev.onclick=function () {
        i--;
        if(i>=0){
            change();
        }else{
            i=0;
            alert("老板这是最后一页了！");
        }
    }
}