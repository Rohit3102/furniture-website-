    var page = document.querySelector(".page3");
    var main = document.querySelector(".page2");
    var cursor = document.querySelector(".cursor");

let tl = gsap.timeline();

function page2animation() {
    main.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            y: dets.y - 59 + "px",
            x:dets.x - 65 + "px"
        })
    });
    main.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            opacity: 1,
            scale: 1
        })
    });
    main.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            opacity: 0,
            scale: 0
        })
    });    
};

page2animation();

function page3animation() {
    page.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            y: dets.y - 59 + "px",
            x:dets.x - 65 + "px"
        })
    });
    page.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            opacity: 1,
            scale: 1
        })
    });
    page.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            opacity: 0,
            scale: 0
        })
    }) ;   
};
page3animation();

function page1animation(){
tl.from(".nav-btm h4",{
    y:100,
    opacity:0,
    stagger:.1,
    scale:0
});

gsap.from(".imgdiv1 .over-img1",{
    x:-100,
    opacity:0,
    stagger:1,
    delay: 1
});

tl.from(".mid h1",{
    y:100,
    opacity:0,
    stagger:.1,
    scale:0
});

tl.from(".mid p",{
    y:100,
    opacity:0,
    stagger:.1,
    scale:0
});

tl.from(".mid button",{
    y:100,
    opacity:0,
    stagger:.1,
    scale:0
});

gsap.from(".imgdiv2 .over-img2",{
    x:100,
    opacity:0,
    stagger:1,
    delay:1
});
};
page1animation();


