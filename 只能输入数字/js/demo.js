window.onload=function () {
    //先获取dom节点
    var input=document.getElementsByTagName('input');
    input[1].onclick=function () {
        var val=input[0].value;
        if(check(val)){
            alert("恭喜，你输入的都是数字，过关！");
        }else{
            alert("是不是眼神不好，咱要换副眼镜吗？");
        }
    }
    //check()函数用于判断是否为数字
    //遇到的bug：
    //在未输入任何内容的情况下，点击提交，也会返回成功的提示
    //解决办法：
    //在check()函数前面加一个字符串长度判断，如果字符串长度为0，返回false。
    function check(str) {
        if(str.length==0){
            alert("你什么都没输呢大爷！！！");
            return false;
        }
        for(var i=0;i<str.length;i++){
            var n=0;
            //charCodeAt() 来获得字符串中某个具体字符的 Unicode 编码。
            n=str.charCodeAt(i);
            //数字0~9的Unicode编码的值为48~57
            if(n<48||n>57){
                return false;
            }
        }
        return true;
    }
}
