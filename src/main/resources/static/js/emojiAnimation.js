(function() {
        var flag = false;
        var chars = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷'];
        jQuery(document).ready(function($) {
            $("html").mousemove(function(e) {
                if (flag) {
                    var color = "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
                    var id = Math.ceil(Math.random() * 62);
                    var xr = Math.ceil(Math.random() * 400) - 200;
                    var yr = Math.ceil(Math.random() * 400) - 200;
                    var $i;
                    $i = $("<b></b>").text(chars[id]);
                    var n = Math.round(Math.random() * 10 + 16);
                    var x = e.pageX
                        , y = e.pageY;
                    $i.css({
                        "z-index": 9999,
                        "color": color,
                        "top": y,
                        "left": x,
                        "position": "absolute",
                        "font-size": n,
                        "-moz-user-select": "none",
                        "-webkit-user-select": "none",
                        "-ms-user-select": "none"
                    });
                    $("body").append($i);
                    $i.animate({
                        "top": y + yr,
                        "left": x + xr,
                        "opacity": 0,
                    }, 1000, function() {
                        $i.remove();
                    });
                }
            });

            $("html").click(function(e) {
                if (!flag) {
                    var color = "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
                    var id = Math.ceil(Math.random() * 62);
                    var xr = Math.ceil(Math.random() * 400) - 200;
                    var yr = Math.ceil(Math.random() * 400) - 200;
                    var $i;
                    $i = $("<b></b>").text(chars[id]);
                    var n = Math.round(Math.random() * 10 + 26);
                    var x = e.pageX
                        , y = e.pageY;
                    $i.css({
                        "z-index": 9999,
                        "color": color,
                        "top": y,
                        "left": x,
                        "position": "absolute",
                        "font-size": n,
                        "-moz-user-select": "none",
                        "-webkit-user-select": "none",
                        "-ms-user-select": "none"
                    });
                    $("body").append($i);
                    $i.animate({
                        "top": y + yr,
                        "left": x + xr,
                        "opacity": 0,
                    }, 1000, function() {
                        $i.remove();
                    });
                }
            });

        });
    }
)();


(function() {
        var click_cnt = 0;
        jQuery(document).ready(function($) {
            $("html").click(function(e) {
                var n = 18;
                var $i;
                click_cnt++;
                if (click_cnt == 10) {
                    $i = $("<b></b>").text("OωO");
                } else if (click_cnt == 20) {
                    $i = $("<b></b>").text("(๑•́ ∀ •̀๑)");
                } else if (click_cnt == 30) {
                    $i = $("<b></b>").text("(๑•́ ₃ •̀๑)");
                } else if (click_cnt == 40) {
                    $i = $("<b></b>").text("(๑•̀_•́๑)");
                } else if (click_cnt == 50) {
                    $i = $("<b></b>").text("（￣へ￣）");
                } else if (click_cnt == 60) {
                    $i = $("<b></b>").text("(╯°口°)╯(┴—┴");
                } else if (click_cnt == 70) {
                    $i = $("<b></b>").text("૮( ᵒ̌皿ᵒ̌ )ა");
                } else if (click_cnt == 80) {
                    $i = $("<b></b>").text("╮(｡>口<｡)╭");
                } else if (click_cnt == 90) {
                    $i = $("<b></b>").text("( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃");
                } else if (click_cnt >= 100 && click_cnt <= 105) {
                    $i = $("<b></b>").text("(ꐦ°᷄д°᷅)");
                } else {
                    $i = $("<b></b>").text("❤");
                    n = Math.round(Math.random() * 14 + 6)
                }
                var x = e.pageX
                    , y = e.pageY;
                $i.css({
                    "z-index": 9999,
                    "top": y - 20,
                    "left": x,
                    "position": "absolute",
                    "color": "#E94F06",
                    "font-size": n,
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "-ms-user-select": "none"
                });
                $("body").append($i);
                $i.animate({
                    "top": y - 180,
                    "opacity": 0
                }, 1500, function() {
                    $i.remove();
                });
            });
        });
    }
)();