 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  
  let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#main",
        start: "50% 50%",
        end: "300% 50%",
        markers: true,
        scrub: 6,
        pin: true
    }
  })
  tl.to(".box",{
    rotation: 360,
    x: 1000
  })
 });