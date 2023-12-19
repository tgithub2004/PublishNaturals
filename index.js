let bars=document.querySelector("#bar");
let closebtn=document.querySelector("#close");
console.log(bars);
bars.addEventListener('click',()=>{
    gsap.to(".uppernav",{
        top:"0%",
        opacity:1,
        duration:1,
    
    })
    
})
closebtn.addEventListener('click',()=>{
    gsap.to(".uppernav",{
        top:"-40%",
        duration:0.5,
    })
})
gsap.from(".singleh1 h1",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.05,

})

document.addEventListener('mousemove',function(dets){
//  console.log(dets.clientX+"px",dets.clientY+"px");
gsap.to(".gola",{
   x:dets.x,
   y:dets.y,
   
})
})
gsap.from(".text1 h2",{
x:-300,
opacity:0,
duration:1,
scrollTrigger:{
    scroller:"body",
    trigger:".tech",
    //  markers:true,
    start:"top 30%",
     end:"top",
    scrub:1,
}
})
gsap.from(".text1 p",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".tech",
        //  markers:true,
        start:"10% 30%",
         end:"20%",
        scrub:1,
    }
    })
    gsap.from(".visual1",{
        y:300,
       
        opacity:0,
        duration:1,
         scrollTrigger:{
             scroller:"body",
             trigger:".tech",
            //   markers:true,
             start:"top 25%",
              end:"top",
             scrub:1,
         }
        })

        //animate page3//
        gsap.from(".text h2",{
            y:300,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                scroller:"body",
                trigger:".tech2",
                //  markers:true,
                start:"top 30%",
                 end:"top",
                scrub:1,
            }
            })
            gsap.from(".text p",{
                opacity:0,
                duration:2,
                scrollTrigger:{
                    scroller:"body",
                    trigger:".tech2",
                    //  markers:true,
                    start:"10% 30%",
                     end:"20%",
                    scrub:1,
                }
                })
                gsap.from(".visual",{
                    scale:0,
                   
                    opacity:0,
                    duration:1,
                     scrollTrigger:{
                         scroller:"body",
                         trigger:".tech2",
                        //   markers:true,
                         start:"top 25%",
                          end:"top",
                         scrub:1,
                     }
                    })
        //animate page3 end//
gsap.from(".page5 h1",{
  y:-200,
  opacity:0,
  duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".page5",
        // markers:true,
        start:"-20%",
        end:"top",
        scrub:1,
    }
   

    })
    gsap.from(".items",{
scale:0,
opacity:0,
duration:1,
// stagger:0.5,
scrollTrigger:{
    scroller:"body",
    trigger:".page6",
    //  markers:true,
    start:"top 30%",
    end:"top",
    scrub:1,
}

    })

