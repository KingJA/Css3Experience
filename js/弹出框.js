/**
 * Created by Administrator on 2016/12/15.
 */
$(document).ready(function () {
    var mask = $("#mask")
    var dialog = $("#dialog")
    $(".show_dialog").on("click", function () {
        showDialog();
    })
    mask.on("click", function () {
        hideDialog();
    })


    $(window).resize(function () {
        setDialog();
        console.log("$(window).height() " + $(window).width());
        console.log("$(window).height() " + $(window).height());
    });
    function showDialog() {
        mask.fadeIn();
        setDialog();
        dialog.show();
    }

    function hideDialog() {
        mask.fadeOut();
        dialog.hide();
    }

    function setDialog() {
        dialog.css({
            width: $(window).width() * 0.25 + "px"
        }).css({
            height: dialog.width() * 0.75 + "px"
        }).css({
            right: $(window).width() * 0.5 - dialog.width() / 2 + "px",
            top: $(window).height() * 0.5 - dialog.height() / 2 + "px"
        });
    }
});