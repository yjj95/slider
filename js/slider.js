let buttons=$("#buttons>button")
let pics=$("#pics")
//dom对象
console.log(buttons)
//jq对象
console.log($(buttons))
//console.log(pics)
//console.log(n)
let size=buttons.length
for(var i=0;i<size;i++){
    buttons.eq(i).on('click',(e)=>{
        var index=$(e.currentTarget).index()
        let px=index*$("#pics").width()
        //要接着点的那个播
        n=index
        pics.css({'transform':`translateX(-${px}px)`})
        buttons.eq(n).addClass('red')
    .siblings().removeClass('red')
    })
    
}
//自动
var n=0;
var timer=setInterval(()=>{
    buttons.eq(n%size).trigger('click')
        .addClass('red')
        .siblings().removeClass('red')
    n+=1
},3000)
$('.windows').on('mouseenter',()=>{
    clearInterval(timer)
})
$('.windows').on('mouseleave',()=>{
    var timer=setInterval(()=>{
        buttons.eq(n%size).trigger('click')
            .addClass('red')
            .siblings().removeClass('red')
        n+=1
    },1000)
})