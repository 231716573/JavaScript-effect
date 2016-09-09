//设置cookie
function setCookie(sName,sValue,iDay){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+iDay);
    
    document.cookie=sName+"="+sValue+"; expires="+oDate;
    
    //若上述不能保存，则用下面方式
    //var doMain = window.location.host
    //var path = "/"
    //cookieStr = sName + "=" + sValue + "; " + "domain=" + doMain + "; path=" + path + "; max-age=3000000; ";
    //document.cookie=cookieStr+"expires="+setExpiration(iDay);

}
//获取cookie
function getCookie(sName){
    var sCookie = document.cookie;
    var arr = sCookie.split("; ");
    
    for(var i=0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == sName){
            return arr2[1];
        }
    }
}
//删除cookie
function removeCookie(sName){
    setCookie(sName,".",-1);
}

