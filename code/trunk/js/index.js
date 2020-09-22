
//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  

    $(".haha").slidebox({
        boxh: 218,//盒子的高度
        w: 330,//图片的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    $(".cloth-lb").slidebox({
        boxh: 330,//盒子的高度
        w: 429,//图片的宽度
        h: 330,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
    // 电子书模块选项卡
    $("#ebook .ebook-left .com-title li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
        let re=$("#ebook .ebook-left .con").eq(index).show().siblings(".con").hide();
        console.log(re);
    })
})
// 畅销书
    $("#ebook .ebook-right ul li").mouseenter(function(){
        $(this).find("div").show();
        $(this).find(".title").hide()
        $(this).siblings().find("div").hide()
        $(this).siblings().find(".title").show()
    })
// 服装

$("#cloth .cloth-title .clothz li").mouseenter(function(){
    
    
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
    let re=$("#cloth .cloth-r").eq(index).show().siblings(".cloth-r").hide();
    console.log(re);
})
// 户外
$("#outdoor .cloth-title .clothz li").mouseenter(function(){
    
    
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
    let re=$("#outdoor .cloth-r").eq(index).show().siblings(".cloth-r").hide();
    console.log(re);
})


// 童装
$("#childcloth .cloth-title .clothz li").mouseenter(function(){
    
    
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    // $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur")
    let re=$("#childcloth .cloth-r").eq(index).show().siblings(".cloth-r").hide();
    console.log(re);
})
// 领卷中心
$(".fx").mouseenter(function(){
    $(".fx-d").animate({right:0})
})

$(".fx").mouseleave(function(){
    $(".fx-d").animate({right:-150})
})