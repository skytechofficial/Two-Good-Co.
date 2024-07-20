const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoConAnimation() {
    let videoCon = document.querySelector('#video-container');
let playBtn = document.querySelector('#play');
videoCon.addEventListener("mouseenter", function(){
    gsap.to(playBtn,{
        scale:1,
        opacity:1,
    })
})
videoCon.addEventListener("mouseleave", function(){
    gsap.to(playBtn,{
        scale:0,
        opacity:0,
    })
})
videoCon.addEventListener("mousemove", function(dets){
    gsap.to(playBtn,{
        left:dets.x,
        top:dets.y,
    })
})  
}
videoConAnimation()
function loadingAnimation() {
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
    })
    gsap.from("#page1 #video-container",{
        y:100,
        opacity:0,
        delay:1.5,
        duration:0.9,
    })
}
loadingAnimation()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
          backgroundColor: "#D5E6EF"

        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();