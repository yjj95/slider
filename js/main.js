var n=1
$('img:nth-child(1)').addClass('current')
$('img:nth-child(2)').addClass('enter')
$('img:nth-child(3)').addClass('enter')
function x(n){
  if(n>3){n=n%3
   if(n===0){n=3;}
   }
  return n
}
setInterval(function(){
 
  o=x(n)
  p=x(n+1)
  $('img:nth-child('+o+')').removeClass('current').addClass('leave').one('transitionend',function(e){                                          $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('img:nth-child('+p+')').removeClass('enter').addClass('current')
  console.log($('img:nth-child('+(n+1)+')'))
  n+=1
},1000)
/*setTimeout(function(){
  $('img:nth-child(1)').css({'transform':'translateX(-100%)'})
  $('img:nth-child(2)').css({'transform':'translateX(-100%)'})
  $('img:nth-child(1)').one('transitionend',function(){
    $('img:nth-child(1)').css({'transform':'translateX(100%)'})
  })
},1000)
setTimeout(function(){
  $('img:nth-child(2)').css({'transform':'translateX(-200%)'})
  $('img:nth-child(3)').css({'transform':'translateX(-100%)'})
  $('img:nth-child(2)').one('transitionend',function(){
    $('img:nth-child(2)').css({'transform':'translateX(0%)'})
  })
},2000)
setTimeout(function(){
  $('img:nth-child(3)').css({'transform':'translateX(-200%)'})
  $('img:nth-child(1)').css({'transform':'translateX(0%)','z-index':'1'})
  $('img:nth-child(3)').one('transitionend',function(){
    $('img:nth-child(3)').css({'transform':'translateX(0%)'})
  })
},3000)*/
/*
  1.第一张left：0;其他所有left:100%;
    当前：translateX(0)/translateX(-100%)
    leave:translateX(-100%)/translateX(-200%)
    enter:translateX(100%)/translateX(0)
  2.所有left：0;第一张z-index:1;
    当前：translateX(0)
    leave:translateX(-100%)
    enter:translateX(100%)
*/