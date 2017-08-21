window.onload=function () {
    //获取dom
    //问题类型转换  解决办法 用alert(typeof())来查件并更改

    var li = document.getElementsByTagName('li');
    var sub = document.getElementsByClassName('sub'); //减
    var count = document.getElementsByClassName('count');  //得到的是object对象
    var plus = document.getElementsByClassName('plus'); //加
    var totalPrice = document.getElementsByClassName('totalPrice'); //总计
    // alert(li.length);   //5
    //方法一 利用index下标值获取每次点击时的下标
    for (var i = 0; i < li.length; i++) {
        //把加号和减号都赋予一个下标 用于点击的时候知道是哪个下标被点击
        sub[i].index = i;
        plus[i].index = i;
        //加法
        //     plus[i].onclick = function () {
        //         var p_count = count[this.index].innerHTML-0;//得到number类型
        //         var p_totalPrice = totalPrice[this.index].innerHTML-0;//得到number类型
        //         if (p_count <= 4 && p_count >= 0) {
        //             p_count++;
        //             p_totalPrice = p_count * 12.5;
        //             count[this.index].innerHTML=p_count;
        //             totalPrice[this.index].innerHTML=p_totalPrice;
        //         } else {
        //             p_count == 5;
        //         }
        //     }
        //减法
            sub[i].onclick = function () {
                // alert(i);  //5
                // alert(this.index);
                // alert(typeof (count))  //object
                var s_count = count[this.index].innerHTML-0;  //得到number类型
                // alert(count) //成功
                var s_totalPrice = totalPrice[this.index].innerHTML-0;//得到number类型
                if (s_count >= 1) {
                    s_count--;
                    s_totalPrice = s_count * 12.5;
                    count[this.index].innerHTML=s_count;
                    totalPrice[this.index].innerHTML=s_totalPrice;
                } else {
                    s_count == 0;
                }
            }
        }
        //方法二 利用闭包 使for 循环输出 i 为不同一值的问题  以后用这种了
        //加一层闭包，i以函数参数形式传递给内层函数 减法就不写了
        for (var i = 0; i < li.length; i++) {
            (function (arg) {
                plus[i].onclick = function () {
                    // alert(arg);  //测试成功
                    var p_count = count[arg].innerHTML - 0;
                    var p_totalPrice = totalPrice[arg].innerHTML - 0;
                    if (p_count <= 4 && p_count >= 0) {
                        p_count++;
                        p_totalPrice = p_count * 12.5;
                        count[arg].innerHTML = p_count;
                        totalPrice[arg].innerHTML = p_totalPrice;
                    } else {
                        p_count == 5;
                    }
                }
                // sub[i].onclick = function () {
                //     alert(arg);
                // }
            })(i);
        }
    }