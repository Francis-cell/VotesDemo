$(document).ready(function () {
    const resetVoteContent = $(".reset");
    const submitVoteResult = $(".submit");
    // all vote options for the page
    let voteOptionNameList = [];
    // vote options have chose
    let voteOptionsChose = [];

    // generate background pictures method
    generateBackgroundPictures();

    /**
     * generate background pictures method
     */
    function generateBackgroundPictures() {
        // Here is script for changing login background picture.
        let backgroundPictureFolderPath = "../pictures/";
        let backgroundPictureUrls = [];
        for (let i = 1; i <= 9; i++) {
            backgroundPictureUrls.push("0" + i + ".jpg");
        }

        // make the random pictures to background
        let containerList = $(".vote-content").find(".container");
        for (let i = 0; i < containerList.length; i++) {
            // get a random pictures
            let tmpIndex = Math.floor(Math.random() * backgroundPictureUrls.length);
            let backgroundPictureUrl = backgroundPictureUrls[tmpIndex];

            // set background picture
            $(containerList[i]).css('background-image',"url(" + backgroundPictureFolderPath
                + backgroundPictureUrl + (")"));
        }
    }


    const mainDiv = $(".main-div");
    const overlay = $(".overlay");
    const detailsBtn = $(".details-btn");
    const voteBtn = $(".vote-btn");
    const drawer = $(".drawer");

    // 显示抽屉
    detailsBtn.on("click", function() {
        // 找到最近的父级 .wrap 元素
        let wrap = $(this).closest(".wrap");
        // 获取当前所在父级元素下的 draw 所对应的元素
        let currentDrawer = wrap.find(".drawer");

        if (currentDrawer.css("display") === "none") {
            currentDrawer.css("display", "block");
        } else {
            currentDrawer.css("display", "none");
        }
    });

    // 投票按钮点击事件
    voteBtn.on("click", function() {
        // 找到最近的父级 .wrap 元素
        let wrap = $(this).closest(".wrap");
        // 获取当前所在父级元素下的 draw 所对应的元素
        let currentSvg = wrap.find(".own-svg");
        // 获取当前所在元素的名称
        let currentContent = wrap.first("p").text();
        console.error("currentContent: ", currentContent);

        // 如果不存在则添加对应的 SVG 图片，否则就进行删除操作
        if (currentSvg.length === 0) {
            // add current vote option to the voteChose array
            voteOptionsChose.push()
            // 在正中间添加自定义的SVG图片
            const svgContainer = $('<div class="own-svg"></div>');
            svgContainer.css({
                "width": "100px",
                "height": "100px",
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "transform": "translate(-50%, -50%)"
            });
            wrap.append(svgContainer);
            // after the div append to the page, add the css style to the 'own-svg' class
            $(".own-svg").css('background-image','url("../svg/operate/ok.svg")');
        } else {
            currentSvg.remove();
        }
    });

    // main footer button click event
    // reset result
    function resetResult() {
        resetVoteContent.on("click", function (event) {
            event.preventDefault();
            // clear all things have voted
        });
    }

    // submit result
    function submitResult() {
        submitVoteResult.on("click", function (event) {
            event.preventDefault();
        });
    }
})