// 添加在页面加载完毕后想执行的函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload != "function"){
        window.onload = func
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}