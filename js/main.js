function random(min,max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){
  gsap.to(selector,random(1.5,2.5,),{
    y:size,
    repeat:-1,
    yoyo:true,
    ease: 
Power3.
easeInOut,
    delay:random(0,delay)
  });
}
floatingObject('.circle1',1,15);
floatingObject('.bird1',.5,15);
floatingObject('.circle2',1.5,20);
floatingObject('.bg_balloon',1.5,20);
