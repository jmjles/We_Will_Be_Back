import anime from 'animejs/lib/anime';
export const landingPageAni = ()=>{
anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
    delay:2000
  })

anime({
  targets:'.background',
  opacity:['0','1'],
  duration:1000,
  easing:'linear',
  delay:4000
})
anime({
  targets:'.completeCenter',
  opacity:['0','1'],
  duration:2000,
  delay:5000
})
}
export const learnMore = {
  mouseOver: function(){
    anime({
    targets:'#learnMore',
    fontSize:'1.5rem',
    backgroundColor:'#e3db7d'
  })},
  mouseLeave: function(){
  anime({
    targets:'#learnMore',
    fontSize:'1rem',
    backgroundColor:'#f8f6dd'
  })}
}
