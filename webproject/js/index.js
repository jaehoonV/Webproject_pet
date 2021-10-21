
$(function () {
    $(".headC").click(function () {
        $(".headB").slideToggle();
    });
});

$(function () {
    $(".bodynav_c").hide();
    $(".bodynav_b").click(function () {
        $(".bodynav_c").animate({ width: "toggle" }, 600);
    });
});
