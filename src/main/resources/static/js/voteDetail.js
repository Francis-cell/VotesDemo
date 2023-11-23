$(document).ready(function () {
    // generate background pictures method
    generateBackgroundPictures();

    /**
     * generate background pictures method
     */
    function generateBackgroundPictures() {
        debugger;
        // Here is script for changing login background picture.
        let backgroundPictureFolderPath = "../pictures/";
        let backgroundPictureUrls = [];
        for (let i = 1; i <= 9; i++) {
            backgroundPictureUrls.push("0" + i + ".jpg");
        }
        // get a random pictures
        let tmpIndex = Math.floor(Math.random() * backgroundPictureUrls.length);
        let backgroundPictureUrl = backgroundPictureUrls[tmpIndex];

        // make the random pictures to background
        $(".container").css('background-image',"url(" + backgroundPictureFolderPath
            + backgroundPictureUrl + (")"));
    }


    const mainDiv = $(".main-div");
    const overlay = $(".overlay");
    const detailsBtn = $(".details-btn");
    const voteBtn = $(".vote-btn");
    const drawer = $(".drawer");

    // 显示抽屉
    detailsBtn.click(function() {
        drawer.css("display", "block");
    });

    // 投票按钮点击事件
    voteBtn.click(function() {
        debugger;
        // 在正中间添加自定义的SVG图片
        const svgContainer = $('<div class="own-svg"></div>');
        $(".own-svg").css('background-image','url("../svg/operate/ok.svg")');
        svgContainer.css({
            "width": "200px",
            "height": "200px",
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)",
            "z-index": 3
        });
        mainDiv.append(svgContainer);
    });
})