// setTimeout(() => {
$(".addTrailerVideo, .addFullVideo, .addWatchVideo").click(function () {
    $(".modal1").css({
        visibility: "visible",
        opacity: "1",
        zIndex: 9999999999999,
    });
    $("#form").css("display", "none");
    $("#modal_video").css("display", "")
    $("#modal_title").css("display", "")
    $("#modal_description").css("display", "")
    $("#view_post_link").css("display", "");
    $("#modal_video").attr("src", $(this).data("video"));
    $("#modal_title").text($(this).data("title"));
    $("#modal_description").text($(this).data("description"));
    if ($(this).data("view_post_link")) {
        $("#view_post_link").attr("href", $(this).data("view_post_link"));
        $("#view_post_link").text("View Post");
        $("#view_post_link").css("display", "");
    } else {
        $("#view_post_link").css("display", "none");
    }
    console.log($(this).data("modal_image"));
    if ($(this).data("modal_image")) {
        $("#modal_image").attr("src", $(this).data("modal_image"));
    } else {
        $("#modal_image").attr("src", "");
        $("#modal_image").css("display", "none");

    }
});

$(".getUpdateForm").click(function () {
    $(".modal1").css({
        visibility: "visible",
        opacity: "1",
        zIndex: 9999999999999,
    });
    $("#modal_video").css("display", "none")
    $("#modal_title").css("display", "")
    $("#modal_title").text("")
    $("#modal_description").css("display", "none")
    $("#view_post_link").css("display", "none");
    $("#form").css("display", "");
});

$(".showCouncilModal").click(function () {
    $(".modal2").css({
        visibility: "visible",
        opacity: "1",
        zIndex: 9999999999999,
    });
    $("#form").css("display", "none");
    $("#modal_video").css("display", "none")
    $("#modal_title").css("display", "")
    $("#modal_title").text("")
    $("#modal_description").css("display", "none")
    $("#view_post_link").css("display", "none");
    $("#form").css("display", "");
});

// appliance modal
$(".addImage1OnClick,.addImage2OnClick").click(function () {
    $(".modal1").css({
        visibility: "visible",
        opacity: "1",
        zIndex: 9999999999999,
    });
    $("#form").css("display", "none");
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
        $("#modal_video").css("height", "550px");
        $("#modal_video").css("display", "");
    } else {
        $("#modal_video").attr("src", "");
        $("#modal_video").css("width", "");
        $("#modal_video").css("height", "");
        $("#modal_video").css("display", "none");
    }
    if ($(this).data("modal_title")) {
        $("#modal_title").css("display", "");
        $("#modal_title").text($(this).data("modal_title"));
    } else {
        $("#modal_title").css("display", "none");
    }
    if ($(this).data("modal_description")) {
        $("#modal_description").css("display", "");
        $("#modal_description").html($(this).data("modal_description"));
    } else {
        $("#modal_description").css("display", "none");
    }
    if ($(this).data("view_post_link")) {
        $("#view_post_link").attr("href", $(this).data("view_post_link"));
        $("#view_post_link").text("View Post");
        $("#view_post_link").css("display", "");
    } else {
        $("#view_post_link").css("display", "none");
    }
});

// COUNCIL SECTION
$(".addVideoOnClick").click(function () {
    $("#form").css("display", "none");
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