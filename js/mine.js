let open_menu = document.getElementById('open')
let close_menu = document.getElementById('close')
let seconds = document.getElementById('seconds')
let txtarea = document.getElementById("txtarea")


close_menu.onclick = function(){
    let a = $('.sidenav').innerWidth()
    $('.sidenav').css('left',-a)
    $('.headers span').css('left',0)
}
open_menu.onclick = function(){
    let a = $('.sidenav').innerWidth()
    $('.sidenav').css('left',0)
    $('.headers span').css('left',a)
}

$("a").click(function(){
    
    var sectionid= $(this).attr("href");
    
    var positionofsection = $(sectionid).offset().top;
    
    $("html , body").animate({scrollTop:positionofsection},2000);
    
})

$(document).ready(function()
{                
    $(".slide div:first").css("display","block");
    $(".slide h3").click(function(){
    $(this).next().slideToggle(500);
    $(".slide div").not($(this).next()).slideUp(500);
    });                    
});

function counttime(){
    let timenow = new Date();
    let mytime = new Date(2018,10,14);
    let timeNow = timenow.getTime();
    let myTime = mytime.getTime();
    let alltime =  myTime - timeNow;
    let s = Math.floor(alltime/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let y = Math.floor(h/24)-30;
    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("days").innerHTML = "<h3>"+  y + " D"+"</h3>";
    document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(counttime, 1000);    
}
counttime()

txtarea.addEventListener('keyup',function(){
    let max = 100
    let length1=$(this).val().length;
    let nam1 = max - length1;
    (nam1 < 0) ? $(num1).text("your available character finished"):$(num1).text(nam1);
})