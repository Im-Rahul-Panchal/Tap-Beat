window.addEventListener("load", () => {
    const sound = document.querySelectorAll(".sound");
    const pad = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = ["yellow", "purple", "orange", "lime", "red", "cyan"]
 

    //sound play
    pad.forEach((pad ,index) =>{
        pad.addEventListener("click", function(){
            sound[index].currentTime = 0;
            sound[index].play()

            createBubbles(index);
        })
    });

//      // create bubbles
        const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble)
        bubble.style.backgroundColor = color[index]
        bubble.style.animation = "jump 3s ease";
    }
})

      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
});
