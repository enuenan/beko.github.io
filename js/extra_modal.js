// setTimeout(() => {
    $(document).ready(function () {
        $(".show-modal").on("click", function () {
            $(".modal").css({
                visibility: "visible",
                opacity: "1",
                zIndex: 9999999999999,
            });
        });
        $(".modal .modal-box .icon img").on("click", function () {
            $(".modal").css({
                visibility: "hidden",
                opacity: "0"
            });
        });
    });
// }, 2000);