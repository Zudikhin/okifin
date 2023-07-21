$(document).ready(function() {
    "use strict";

    $(document).click(function(e) {
        var search = $(".header_block_other_lang");
        if (!search.is(e.target) && search.has(e.target).length === 0) {
            $(".header_block_other_lang_top").removeClass("active");
            $(".header_block_other_lang_content").slideUp();
        }
    });

    $(".header_block_other_btn").click(function() {
        $(".back_modal").addClass("active");
        $(".dropdown").addClass("active");
        $("body").addClass("scroll");
    });

    $(".dropdown_top_close").click(function() {
        $(".back_modal").removeClass("active");
        $(".dropdown").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".dropdown").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".header_block_other_lang_top").click(function() {
        $(this).toggleClass("active");
        $(".header_block_other_lang_content").slideToggle();
    });

    $(".portfolio_nav_item").click(function() {
        var attr = $(this).attr("data-target");
        $(".portfolio_nav_item").removeClass("active");
        $(this).addClass("active");
        $(".portfolio_content_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

});