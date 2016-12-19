/**
 * Created by Administrator on 2016/12/19.
 */
(function ($) {

    var mask = $("<div id='mask'></div>");
    var confirm_dialog = $("<div id='confirm_dialog'><p id='confirm_content'></p> " +
        "<div><div id='confirm_button'></div></div>" +
        " <img src='../img/dialog_close.png' width='24px' height='24px' id='confirm_close'> </div>");
    $("body").append(mask);
    $("body").append(confirm_dialog);

    $.extend({
            showConfim: function (option) {
                option = $.extend(defaults, option);
                $("#confirm_content").text(option.content);
                $("#confirm_button").text(option.confirmText);
                setListener();
                setPosition();
                showModal();
                $(window).resize(function () {
                    setPosition(option);
                });
            }});

    function showModal() {
        mask.fadeIn();
        confirm_dialog.fadeIn();
    }

    function hideModal() {
        mask.fadeOut();
        confirm_dialog.fadeOut();
    }
    function setListener() {
        $("#confirm_button,#confirm_close").on("click", function () {
            hideModal();
        });
    }
    function setPosition() {
        $("#confirm_dialog").css({
            left: $(window).width() * 0.5 - $("#confirm_dialog").innerWidth()* 0.5,
            top: $(window).height() * 0.25
        });
    }

    var defaults = {content: "提示信息", confirmText: "确定"};
})(jQuery);
