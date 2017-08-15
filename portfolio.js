"use strict"

$("document").ready(function () {
    var projectClassName;
    $("button").click(function (e) {
        projectClassName = $(this).attr("value");
        $(".project-box").hide();
        $(`.${projectClassName}`).show();
    });


});