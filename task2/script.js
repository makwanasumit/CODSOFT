

 
function page1animation(){
    var tl = gsap.timeline();

tl.from(".navbar, .logo",{
    opacity: 0,
    duration: 0.3,
    y: -100,
},"1")

tl.from(".navbar nav li",{
    opacity: 0,
    y: -30,
    stagger:0.1
})

function breaktext(){
    let h1 = document.querySelector(".h1").textContent;
    let arr = h1.split("");
    let halfsplt = arr.length / 2;
    let clutter = ""
    arr.forEach(function (e) {

        if (arr.indexOf(e) < halfsplt) {
            clutter = clutter + `<span class="a">${e}</span>`;
        } else {
            clutter = clutter + `<span class="b">${e}</span>`;
        }

        
        document.querySelector(".h1").innerHTML = clutter
    });
        console.log(clutter)
}

breaktext();

tl.from(".h1 .a",{
    opacity: 0,
    y: 30,
    stagger:0.1
},"1")

tl.from(".h1 .b",{
    opacity: 0,
    y: 30,
    stagger:-0.2
},"1")

tl.from(".subcontainer",{
    opacity: 0,
    y: 30,
    stagger:0.2
})

}
page1animation()



function page2animation(){

    var tl2 = gsap.timeline(
        {
            scrollTrigger:{
                trigger: ".destination",
                scroller: "body",
                start: "top 50%",
                end : "top 5%",
                scrub: 2
            }
        }
    )
    
    tl2.from(".destination h1",{
        y:10,
        duration:0.7,
        opacity:0,
    })
    
    tl2.from(".destination .card .card_container",{
        y:40,
        duration:1,
        opacity:0,
        scale:0,
        stagger:0.5,
        scrub:2,
        pin:true
    })
}

page2animation();


function page3animation(){
    var tl3 = gsap.timeline(
        {
            scrollTrigger:{
                trigger: ".footer",
                scroller: "body",
                start: "top 50%",
                end : "top 5%",
                scrub: 2
            }
        }
    )
    
    tl3.from(".footer h1 p",{
        y:10,
        duration:0.7,
        opacity:0,
        stagger:0.5
    })
    
    tl3.from(".footer .video video",{
        y:40,
        duration:1,
        opacity:0,
        scale:0,
        stagger:0.5,
        scrub:2,
        pin:true
    })

}

page3animation();




var tl4 = gsap.timeline(
    {
        scrollTrigger:{
            trigger: "footer",
            scroller: "body",
            start: "top 130%",
            end : "top 100%",
            scrub: 3
        }
    }
)


tl4.from("footer",{
    y:30,
    delay:8,
    duration:2,
    opacity:0,
    stagger:0.5
})
