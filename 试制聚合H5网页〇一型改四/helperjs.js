//android broswers have autofill function, but cannot block HTML elements like fusionapp
//therefore I use this hack to auto fill the login form
//didn't include auto click login in case users want to change account

//taobao intl
//autofill
window.onload=function(){ 
    document.getElementsByName('TPL_username')[0].value='your_username';
    document.getElementsByName('TPL_password')[0].value='your_password';
    } 
//blocked elements
//m.intl.taobao.com
//#J_7714002273

//jd
//autofill
//window.onload fails on jd, reason unknown...Probably caused by incompelete document loading.
//used zepto and CtoH function from loaded resources by jd.com
if($('#loginBtn').hasClass('infoinserted')){}
else{
    var input_username=document.getElementById('username');
    input_username.value='your_username';
    //fullwidth halfwidth convert? same to official code
    CtoH(input_username);
    var input_password=document.getElementById('password');
    input_password.value='your_password';
    CtoH(input_password);
    $('#loginBtn').addClass('btn-active');
    $('#loginBtn').addClass('infoinserted');
}
//blocked elements
//m.jd.com
//#m_common_tip
//pro.m.jd.com
//#content_02

//nga
//autofill and open bbs page
var iframe=document.getElementById('iff');
if(iframe.classList.contains("changed")){
}
else{
    iframe.contentWindow.document.getElementById('name').value='your_username';
    iframe.contentWindow.document.getElementById('password').value='your_password';
    var loginbtn=iframe.contentWindow.document.getElementById('main').children[0].children[9];
    loginbtn._on();
    iframe.classList.add("changed");
}
if(iframe.style.display=='none'){
    alert('jumping');
    window.location.href = "https://bbs.ngacn.cc";
}
//blocked elements
//nga这个05年的祖传代码啊，连class都不标的，看得眼睛都瞎了
$(document.body).children().filter(function() {
    var thisZ = $(this).css('z-index')
    return parseInt(thisZ) == 6;
}).each(function() {
    $(this).css("display","none"); 
});