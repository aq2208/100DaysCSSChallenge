let menu_icon = document.getElementById("menu-icon");
let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");
let line3 = document.getElementById("line-3");
let forward = true;

menu_icon.addEventListener("click", function () {

    if (forward) {  //default

        line1.style.animation = "animation-line-1 0.6s ease-in-out forwards";

        line2.style.animation = "animation-line-2 0.3s ease-in-out forwards";

        line3.style.animation = "animation-line-3 0.6s ease-in-out forwards";


    } else {  //reverse

        // line1.style.animationFillMode = "backwards";
        line1.style.animation = "animation-line-1-reverse 0.6s ease-in-out forwards";

        line2.style.animation = "animation-line-2-reverse 0.3s ease-in-out backwards";
        line2.style.animationDelay = "0.3s";

        line3.style.animation = "animation-line-3-reverse 0.6s ease-in-out forwards";

    }

    forward = !forward;

});



