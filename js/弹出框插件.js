/**
 * Created by Administrator on 2016/12/15.
 */

// 自执行匿名闭包函数
;(function ($) {
    //集成元素
    $.fn.extend({
        confirm: function (values) {
            //设置默认值
            values = $.extend(defaults, values);
            var confirm_dialog = $("<div id='confirm_dialog'><h3 id='confirm_title'>" + values.title + "</h3><p id='confirm_content'>" + values.content + "</p><button id='confirm_button'>" + values.confirmText + "</button></div>");
            //进行赋值
            $("body").append(confirm_dialog);
            //按钮点击
            $(this).on("click", function () {
                confirm_dialog.show();
            });
        }
    });
    var defaults = {
        title: "提示",
        content: "这是一个确认对话框",
        confirmText: "确认"
    }
})(jQuery);