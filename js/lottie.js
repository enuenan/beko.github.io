onResizeWindow();
window.onresize = function () {
    onResizeWindow();
}

function onResizeWindow() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        var mobileVideo = document.getElementById(
            "w-node-_75afc7b1-fca0-5357-fa28-5052cbcf25f6-e53849ae"
        );
        mobileVideo.setAttribute(
            "data-src",
            "documents/top_video_1080_1920_mobile_1_31_22.json"
        );
    } else {
        var desktopVideo = document.getElementById(
            "w-node-_75afc7b1-fca0-5357-fa28-5052cbcf25f6-e53849ae"
        );
        desktopVideo.setAttribute(
            "data-src",
            "documents/top_video_1080_1_31_22.json"
        );
    }
}