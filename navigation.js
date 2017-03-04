console.log("loading lnmtl nav");
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "ArrowRight":
        {
            document.getElementsByClassName("next")[0].children[0].click();
            break;
        }
        case "ArrowLeft":
        {
            document.getElementsByClassName("previous")[0].children[0].click();
            break;
        }
    }
});

window.onload = function() {
    console.log("loading original text");
    var eles = document.getElementsByClassName("original");
    for (var i = 0; i < eles.length; i++) {
        eles[i].style.display = "block";
    }
}