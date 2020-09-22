$(".selall").click(function(){

    console.log($(this).prop("checked"));
    let bool = $(this).prop("checked");
    $(".singlechk , .selall").prop("checked",bool);
})

$("table .singlechk").click(function(){
    let singleNum = $("table .singlechk:checked").length;
    let singleAll = $("table .singlechk").length
    console.log("选中复选框的个数：",singleNum,"所有子项目复选框的个数：",singleAll);
    if(singleNum===singleAll){
        $(".selall").prop("checked",true);
    }else{
        $(".selall").prop("checked",false);
    }
})
$("#shopcartarea table tbody .addbtn").click(function(){
    let num = $(this).siblings(".count").val()
    ++num;
    console.log(num,typeof num);
    $(this).siblings(".count").val(num);
    let singleprice = $(this).
})