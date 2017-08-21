window.onload=function () {
    //先获取dom节点
    var input=document.getElementsByTagName('input');
    input[1].onclick=function () {
        var val=input[0].value;
        if(val.length==0){
            alert("你这是搞事情啊！麻溜的输入加密内容！！！");
        }else{
            var str1='';
            for(var i=0;i<val.length;i++){
                //fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
                str1+=String.fromCharCode((val.charCodeAt(i)-100));
            }
            alert("加密后的结果为："+str1);
        }

    }
}