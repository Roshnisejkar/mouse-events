
window.onload = function () {
    var img1 = document.getElementById("popcat1");
    var img2 = document.getElementById("popcat2");
    var count = document.getElementById("score");
    var score = 0;

    img1.addEventListener("mousedown", function () {
        increaseScore();
        img1.style.display = "none";
        img2.style.display = "block";
    });

    img2.addEventListener("mousedown", function () {
        img1.style.display = "block";
        img2.style.display = "none";
    });

    function increaseScore() {
        score++;
        count.innerHTML = score;
    }
};