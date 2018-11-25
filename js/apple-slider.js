let buttons=$("#menus>ul>li.inact")
let pics=$("#slides")
buttons.eq(0).addClass('active')
let size=buttons.length
for(var i=0;i<size;i++){
    buttons.eq(i).on('click',(e)=>{
        var index=$(e.currentTarget).index()-1
        n=index
        let px=n*$(".slide").width()
        pics.css({'transform':`translateX(-${px}px)`})
        buttons.eq(n).addClass('active')
            .siblings().removeClass('active')
    })
    
}
//自动
var n=0;
var timer=setInterval(()=>{
    buttons.eq(n%size).trigger('click')
        .addClass('active')
        .siblings().removeClass('active')
    n+=1
},3000)
$('.wrapper').on('mouseenter',()=>{
    clearInterval(timer)
})
$('.wrapper').on('mouseleave',()=>{
    var timer=setInterval(()=>{
        buttons.eq(n%size).trigger('click')
            .addClass('active')
            .siblings().removeClass('active')
        n+=1
    },1000)
})