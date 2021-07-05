

  var tl = anime.timeline({
    direction: 'normal',
    loop: true,
    duration: 4000,
    easing: 'easeInOutSine',
  });

  tl
.add({
  targets: '.circle',
    rotate: '360deg',
    easing: 'easeInOutSine',
    autoplay: true,
    loop:true 
})

window.onscroll = function(e){
  console.log(window.pageYOffset)
  if(window.pageYOffset <= 215){
    tl.pause();
  }
  if(window.pageYOffset >= 215){
    tl.play();
  }
  if(window.pageYOffset >= 1400){
    tl.pause();
  }
};



