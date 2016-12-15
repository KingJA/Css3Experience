/**
 * Created by Administrator on 2016/12/15.
 */
// © 2010 by zhangxinxu http://www.zhangxinxu.com/
// zxxbox.js v1.0 2010-03-20
// v1.1 2010-04-03 #添加拖拽功能，参数为drag，Boolean型，默认为false

(function (b) {
    var a = '<style type="text/css">#blank{position:absolute; z-index:2000; left:0; top:0; width:100%; height:0; background:black;}.wrap_out{position:absolute; padding:5px; background:#eeeeee; z-index:2000;}.wrap_in{background:#fafafa; border:1px solid #cccccc;}.wrap_bar{width:100%; background:#f7f7f7; border-top:3px solid #f9f9f9; border-bottom:3px solid #eeeeee; margin-top:2px;}.wrap_title{line-height:4px; background:#f3f3f3; border-top:4px solid #f5f5f5; border-bottom:5px solid #f1f1f1; margin-top:3px;}.wrap_title span{position:relative; margin-left:10px;}.wrap_body{border-top:1px solid #dddddd; background:white;}.wrap_close{color:#34538b; float:right; font-weight:bold; margin-right:10px; margin-top:-15px; font-family:black arial; text-decoration:none;}.wrap_close:hover{text-decoration:none; color:#f30;}.wrap_remind{width:16em; padding:30px 40px 20px;}.wrap_remind p{margin:20px 0 0;}.submit_btn{display:-moz-inline-stack; display:inline-block; padding:3px 12px 1.99px; background:#486aaa; border:1px solid; border-color:#a0b3d6 #34538b #34538b #a0b3d6; color:#f3f3f3; line-height:16px; cursor:pointer; overflow:visible;}.submit_btn:hover{text-decoration:none; color:#ffffff;}.cancel_btn{display:-moz-inline-stack; display:inline-block; padding:3px 12px 1.99px; background:#eeeeee; border:1px solid; border-color:#f0f0f0 #bbbbbb #bbbbbb #f0f0f0; color:#333333; line-height:16px; cursor:pointer; overflow:visible;}</style>';
    b("head").append(a);
    b.fn.zxxbox = function (q) {
        var p = b(this);
        q = q || {};
        var m = {
            title: "\u5bf9\u8bdd\u6846",
            shut: "\u00d7",
            bar: true,
            closeable: true,
            fix: false,
            bg: true,
            drag: false,
            index: 2000,
            opacity: 0.5,
            ask: false,
            remind: false,
            asktext: "\u60a8\u786e\u8ba4\u6267\u884c\u6b64\u64cd\u4f5c\uff1f",
            remindtext: "\u60a8\u5c1a\u672a\u8f93\u5165\u63d0\u9192\u7684\u5185\u5bb9\u3002",
            delay: 0,
            closeobject: []
        };
        var k = b.extend({}, m, q);
        if (k.ask) {
            k.main = b('<div class="wrap_remind">' + k.asktext + '<p><button id="sureBtn" class="submit_btn">\u786e\u8ba4</button>&nbsp;&nbsp;<button id="cancelBtn" class="cancel_btn">\u53d6\u6d88</button></p></div>')
        } else {
            if (k.remind) {
                k.main = b('<div class="wrap_remind">' + k.remindtext + '<p><button id="submitBtn" class="submit_btn">\u786e\u8ba4</button</p></div>')
            } else {
                p.show();
                k.main = p
            }
        }
        var d = '<div id="blank"></div><div class="wrap_out" id="wrapOut"><div class="wrap_in" id="wrapIn"><div id="wrapBar" class="wrap_bar"><div class="wrap_title"><span>' + k.title + '</span></div><a href="javasctipt:void(0);" class="wrap_close" id="wrapClose">' + k.shut + '</a></div><div class="wrap_body" id="wrapBody"></div></div></div>';
        if (b("#wrapOut").length) {
            if (!b("#blank").length && k.bg) {
                b("body").prepend('<div id="blank"></div>')
            }
            b("#wrapOut").show()
        } else {
            b("body").prepend(d);
            b("#wrapBody").append(k.main);
            if (!k.bar) {
                b("#wrapBar").hide()
            }
            b("#blank").each(function () {
                k.cHeight = function () {
                    if (b.browser.msie) {
                        return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight
                    } else {
                        return self.innerHeight
                    }
                }();
                k.cWidth = function () {
                    if (b.browser.msie) {
                        return document.compatMode == "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth
                    } else {
                        return self.innerWidth
                    }
                }();
                k.bgheight = (b("body").height() > k.cHeight) ? b("body").height() : k.cHeight;
                if (k.bg) {
                    b(this).css({zIndex: k.index, opacity: k.opacity, height: k.bgheight, width: "100%"})
                } else {
                    b(this).remove()
                }
            });
            b("#wrapOut").each(function () {
                b("body").append('<div id="wrapClone" style="position:absolute; left:-3000px;"></div>');
                b("#wrapClone").append(k.main.clone());
                var s = b("#wrapClone").width() + 2, v = b(this).height();
                var i = function () {
                    var y = 0;
                    var x = document.documentElement, l = document.body, t = window;
                    if (typeof t.pageYOffset !== "undefined") {
                        y = t.pageYOffset
                    } else {
                        if (typeof document.compatMode !== "undefined" && document.compatMode !== "BackCompat") {
                            y = x.scrollTop
                        } else {
                            if (typeof l !== "undefined") {
                                y = l.scrollTop
                            }
                        }
                    }
                    return y
                }();
                var u = i + (k.cHeight - v) / 2, r = (k.cWidth - s) / 2;
                b(this).css({width: s, height: v, left: r, top: u, zIndex: k.index});
                if (k.fix && window.XMLHttpRequest) {
                    b(this).css("position", "fixed")
                }
                b("#wrapClone").remove()
            });
            if (k.drag) {
                var o = false;
                var g = 0, f = 0, e = b("#wrapOut").css("left"), c = b("#wrapOut").css("top");
                b("#wrapBar").mousedown(function (i) {
                    o = true;
                    document.getElementById("wrapOut").onselectstart = function () {
                        return false
                    };
                    g = i.clientX;
                    f = i.clientY
                });
                b(document).mousemove(function (t) {
                    if (o) {
                        var l = t.clientX, i = t.clientY;
                        var s = l - g, r = i - f;
                        b("#wrapOut").css("left", parseInt(e) + s);
                        b("#wrapOut").css("top", parseInt(c) + r)
                    }
                });
                b(document).mouseup(function () {
                    o = false;
                    e = b("#wrapOut").css("left");
                    c = b("#wrapOut").css("top")
                })
            }
        }
        var j = function () {
            if (!k.ask && !k.remind) {
                k.main.hide().appendTo(b("body"))
            }
            b("#wrapOut").remove();
            if (b("#blank").length) {
                b("#blank").remove()
            }
            return false
        };
        b("#wrapClose").bind("click", j).each(function () {
            if (k.shut !== "\u00d7") {
                b(this).css("font", "12px/14px normal arial")
            }
        });
        b("#submitBtn").bind("click", j);
        b("#cancelBtn").bind("click", j);
        if (k.closeable) {
            b("#blank").bind("click", j)
        }
        if (parseInt(k.delay)) {
            setTimeout(j, k.delay)
        }
        if (k.closeobject.length) {
            var h = k.closeobject.length;
            for (var n = 0; n < h; n += 1) {
                k.closeobject[n].bind("click", j)
            }
        }
    }
})(jQuery);