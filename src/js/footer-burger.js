var xmlns = "http://www.w3.org/2000/svg",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  svg = select('svg'),
  hit = select('#hit'),
  isDevice,
  interactionUp,
  interactionDown, interactionOut, interactionOver, interactionMove;

isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

if (isDevice) {

  interactionUp = "touchend";
  interactionDown = "touchstart";
  interactionOut = interactionUp;
  interactionOver = interactionDown;
  interactionMove = 'touchmove';

} else {

  interactionUp = "mouseup";
  interactionDown = "mousedown";
  interactionOut = "mouseout";
  interactionOver = "mouseover";
  interactionMove = 'mousemove';

};
if(isDevice){
    hit.addEventListener(interactionUp, deviceBurger)
  

} else {
  hit.addEventListener(interactionOver, function(){
    tl.play();
  })
  hit.addEventListener(interactionOut, function(e){
    tl.reverse();
  })
  
}


function deviceBurger(e) {

  if (tl.time() > 0) {
    tl.reverse();
  } else {
    tl.play(0)
  }
}

TweenMax.set(['#seedGroup', '#cheese'], {
  fill: '#B62125'
})
TweenMax.set('svg', {
  visibility: 'visible',
  transformOrigin:'50% 50%',
  scale: 2
})

//TweenLite.defaultEase = Elastic.easeInOut.config(0.3, 0.84)
TweenLite.defaultEase = Power3.easeInOut;
var tl = new TimelineMax({
  paused: true
});
tl.to('#bottom', 2, {
    morphSVG: {
      shape: '#bottomBun'
    }
  })
  .to('#middle', 2, {
    morphSVG: {
      shape: '#meat'
    }
  }, '-=1.8')
  .to('#top', 2, {
    morphSVG: {
      shape: '#topBun'
    }
  }, '-=1.8')
  .staggerFrom('#seedGroup path', 0.41, {
    //y:-60,,
    transformOrigin: '50% 50%',
    scale: 0,
    ease: Back.easeOut
  }, 0.1, '-=1')
  .from('#cheese', 1, {
    scaleY: 0,
    x: -22,
    ease: Back.easeOut,
    transformOrigin: '50% 0%'
  }, '-=1')

tl.timeScale(2.3);
