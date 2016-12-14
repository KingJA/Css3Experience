/**
 * Created by Administrator on 2016/12/14.
 */
// console.log(-menu.width())
$(document).ready(function () {
    var sidebar = $("#sidebar");
    var mask = $("#mask");

    $(".open_sidebar").on("click", function () {
        showSidebar();
    })

    $(".sidebar_select").on("click", function () {
        hideSidebar();
    })
    mask.on("click", function () {
        console.log("隐藏");
        hideSidebar();
    })

    function showSidebar() {
        mask.fadeIn();
        sidebar.animate({right: 0})
    }

    function hideSidebar() {
        mask.fadeOut();
        sidebar.animate({right: -sidebar.width()})
    }
});

