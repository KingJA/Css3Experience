/**
 * Created by Administrator on 2016/12/15.
 */

;(function ($) {

    $.fn.extend({
        confirm:function (values) {

            // var confirmTitle = $("#confirm_title");
            // var confirmContent = $("#confirm_content");
            // var confirmButton = $("#confirm_button");

            
            values=$.extend({
                title:"提示",
                content:"这是一个确认对话框",
                confirmText:"确认"
            },values);

            console.info("title:"+values.title);
            console.info("content:"+values.content);
            console.info("confirmText:"+values.confirmText);
            var confirm_dialog = $("<div id='confirm_dialog'><h3 id='confirm_title'>"+values.title+"</h3><p id='confirm_content'>"+values.content+"</p><button id='confirm_button'>"+values.confirmText+"</button></div>");
            // confirmTitle.text(values.title);
            // confirmContent.text(values.content);
            // confirmButton.text(values.confirmText);
            $("body").append(confirm_dialog);
            $(this).on("click",function () {
                confirm_dialog.show();
            });
            
        }
    });

})(jQuery);