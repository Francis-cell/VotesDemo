$(document).ready(function () {
    var i = 60;
    $wrapTen = $('#wrap');
    $wrapOne = $('#wrap1');

    // 初始的ten的值
    let oldTen = -1;
    function countdown(){
        let ten = Math.floor(i / 10);
        let one = i % 10;

        if (oldTen !== ten) {
            $wrapTen.removeAttr('class');
        }
        $wrapOne.removeAttr('class');
        setTimeout(function(){
            if (oldTen !== ten) {
                $wrapTen.addClass('wrap-' + ten);
                oldTen = ten;
            }
            $wrapOne.addClass('wrap-' + one);
            setTimeout(function(){
                if (i-- !== 0) {
                    countdown();
                } else {
                    console.error("倒计时结束！");
                }
            }, 1000);
        }, 600);
    }
    countdown();
});

