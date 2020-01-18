var Button = document.getElementById("topBtn");

window.onscroll = function() {detect_scroll()};

function detect_scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Button.style.display = "inline-block";
    } else {
        Button.style.display = "none";
    }
}

function return_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}