window.onload=function () {
    var timer=0;
    var isTop=true;
    //滚动条在滚动的时候触发
    window.onscroll=function () {
        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;
    }
    var topDiv=document.getElementById('topDiv');
    topDiv.onclick=function () {
        //设置定时器
        timer=setInterval(function () {
            //获取距离顶部的距离,number
            var osTop=document.body.scrollTop;
            //isspeed用于来让上升的速度有一个逐渐变慢的过程,让效果变得更加圆滑
            var isspeed=Math.ceil(osTop/3);  //向上取整
            document.body.scrollTop=osTop-isspeed;
            isTop=true;
            if(osTop==0){
                clearInterval(timer);
            }
        },30) //这里的话不添加onscroll判断是无法中断上升的
    }
}