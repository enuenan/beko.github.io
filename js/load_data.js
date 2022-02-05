// setTimeout(() => {
$(".addTrailerVideo, .addFullVideo, .addWatchVideo").click(function () {
    $("#video_modal").attr("src", "");
    $("#video_modal").attr("src", $(this).data("video"));
    $("#video_title").text($(this).data("title"));
    $("#video_description").text($(this).data("description"));
});

// appliance modal
$(".addImage1OnClick,.addImage2OnClick").click(function () {
    if ($(this).data("modal_image")) {
        $("#modal_image").attr("src", $(this).data("modal_image"));
        $("#modal_image").css("width", "100%");
        $("#modal_image").css("height", "100%");
        $("#modal_image").css("display", "");
    } else {
        $("#modal_image").attr("src", "");
        $("#modal_image").css("width", "");
        $("#modal_image").css("height", "");
        $("#modal_image").css("display", "none");
    }
    if ($(this).data("modal_video")) {
        $("#modal_video").attr("src", $(this).data("modal_video"));
        $("#modal_video").css("width", "100%");
        $("#modal_video").css("height", "100%");
        $("#modal_video").css("display", "");
    } else {
        $("#modal_video").attr("src", "");
        $("#modal_video").css("width", "");
        $("#modal_video").css("height", "");
        $("#modal_video").css("display", "none");
    }
    $("#modal_title").text($(this).data("modal_title"));
    $("#modal_description").text($(this).data("modal_description"));
    if ($(this).data("view_post_link")) {
        $("#view_post_link").attr("href", $(this).data("view_post_link"));
        $("#view_post_link").text("View Post");
    }
});

// COUNCIL SECTION
$(".addVideoOnClick").click(function () {
    $("#profile_image").attr("src", $(this).data("image"));
    $("#linked_in").attr("href", $(this).data("linked_in"));
    $("#council_member_name").text($(this).data("council_member_name"));
    $("#title").text($(this).data("title"));

    // SHOWING BUSINESS WEBSITE 1 LINE
    if (!$(this).data("business_website1").trim()) {
        $("#showBusiness").css("display", "none");
        $("#business_website1").text("");
    } else {
        $("#showBusiness").css("display", "");
        $("#business_website1").text($(this).data("business_website1"));
        $("#business_website1").attr(
            "href",
            "https://" + $(this).data("business_website1")
        );
    }

    // SHOWING BUSINESS WEBSITE 2 LINE
    if (!$(this).data("business_website2").trim()) {
        $("#business_website2").text("");
    } else {
        $("#business_website2").text(
            ", " + $(this).data("business_website2")
        );
        $("#business_website2").attr(
            "href",
            "https://" + $(this).data("business_website2")
        );
    }

    // SHOWING BUSINESS EMAIL 1 LINE
    $("#email1").text($(this).data("email1"));
    $("#email1").attr("href", "mailto:" + $(this).data("email1"));

    // SHOWING BUSINESS EMAIL 2 LINE
    if (!$(this).data("email2").trim()) {
        $("#email2").text("");
    } else {
        $("#email2").text(", " + $(this).data("email2"));
        $("#email2").attr("href", "mailto:" + $(this).data("email2"));
    }

    $("#residence").text($(this).data("residence"));
    $("#info").html($(this).data("info"));
});

// $(".addImage2OnClick").click(function () {
//     // $.fn.image();
//     $("#image1_modal").attr("src", "");
//     $("#image1_modal").attr("src", $(this).data("image"));
//     $("#title_modal").text($(this).data("title"));
//     $("#description_modal").text($(this).data("description"));
// });
// }, 1500);