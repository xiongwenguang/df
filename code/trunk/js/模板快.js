//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1200,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });   
    $("#banner>#slider>ul>li>a>img").css({
        width:1200,
        height:420
        
    })
    console.log($("#banner>#slider>ul>li>a>img"))
})


$(function (){
    $("#slider2").slidebox({
        boxh: 420,//盒子的高度
        w: 1200,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
})
// 畅销书
$("#ebook .ebook-right ul li").mouseenter(function(){
    $(this).find("div").show();
    $(this).find(".title").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".title").show()
})
// 领卷中心
$(".fx").mouseenter(function(){
    $(".fx-d").animate({right:0})
})

$(".fx").mouseleave(function(){
    $(".fx-d").animate({right:-150})
})
//猜你喜欢
//定义一个变量得索引值
let index=0;
//单个盒子的高度
let singleBoxHeight=$("#ebook>.box .boks").outerheight(tr)


    