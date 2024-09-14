console.log("piatti js");

document.addEventListener("DOMContentLoaded", function() {
    const piatti = document.querySelectorAll(".piatto");
    piatti.forEach(function(piatto) {
        console.log(piatto);  
        piatto.addEventListener("click", function() {
            const title = piatto.getAttribute("data-title");
            const description = piatto.getAttribute("data-description");
            // console.log(title); 
            // console.log(description);
            document.getElementById("modal-title").innerText = title;
            document.getElementById("modal-description").innerText = description;
            document.getElementById("modal").style.display = "block";
            // console.log(document.getElementById("modal").style.display);

        });
    });
    
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == document.getElementById("modal")) {
            document.getElementById("modal").style.display = "none";
        }
    });
});
