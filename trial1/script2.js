const scroll = new LocomotiveScroll({
    el: document.getElementById('main'),
    smooth: true
});

function CircleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}


CircleMouseFollower();
