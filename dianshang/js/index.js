// banner的header部分
$(".banner header ul>li").hover(function(){
	$(this).find(".list").stop().slideDown(500);
},function(){
	$(this).find(".list").stop().slideUp(500);
})
//图片轮播  用的插件
var $picList =  $("#picList");
$picList.cycle({
        "fx":"blindX",
        speed:500,
        timeout:2000,
        pause:true,
        "before":function(){
            var index = $(this).index();
            $("#numList li").eq(index)
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
        }
    });
$("#numList li").click(function(){
    var index = $(this).index();
    $picList.cycle(index);
    $(this).addClass("active").siblings().removeClass("active");
});
// main-top图片放大
$(".main-inner .main-top ul li a").mouseover(function(){
    var bigpic ="<div id='bigpic'><img src='"+this.href+"'></div>";
    $("body").append(bigpic);
    $("#bigpic").show("fast");
}).mousemove(function(event){
    $("#bigpic").css({
        "top":(event.pageY+10)+"px",   /*使用margin-top隐藏的bigpic会闪动*/
        "left":(event.pageX+20)+"px",
    });
    $("#x").text(event.pageX+20);
    $("#y").text(event.pageY+10);
}).mouseleave(function(){
    $("#bigpic").remove();
})
