$(".arrow").click(function () {
    $("#stickyNav").toggleClass("stickyNav");
    $(".arrow").toggleClass("active_nav");
});

$(document).ready(function () {
    var navbar = document.getElementById("top");
    var sticky = navbar.offsetTop;
    myFunction();

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        console.log(window.pageYOffset, sticky);
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("stickyNavBar");
        } else {
            navbar.classList.remove("stickyNavBar");
        }
    }
});