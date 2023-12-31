$(document).ready(async function () {
    const userPicture = $(".userPicture");
    const userName = $(".userName");
    const userEmail = $(".userEmail");
    const logout = $(".logout");
    const voteContent = $(".vote-content");
    const resetVoteContent = $(".reset");
    const submitVoteResult = $(".submit");
    // all vote options for the page
    let voteOptionNameList = [];
    // vote options have chose
    let voteOptionsChose = [];


    // generate user information.
    generateUserInformation();
    // generate vote data.
    await generateVoteInfo();
    // generate background pictures method.
    generateBackgroundPictures();
    // generate vote event.
    voteEvent();

    // register "logout" event.
    logOut();
    // register "reset" event.
    resetResult();
    // register "submit" event.
    submitResult();


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


    /**
     * generate user information
     */
    function generateUserInformation() {
        let userNameInner = sessionStorage.getItem("userName");
        let userEmailInner = sessionStorage.getItem("userEmail");
        let userPhotoInner = sessionStorage.getItem("userPhoto");

        userName.text(userNameInner);
        userEmail.text(userEmailInner);
        userPicture.attr("src", userPhotoInner);
    }


    async function generateVoteInfo() {
        let voteType = sessionStorage.getItem("voteType");
        await $.ajax({
            type: "POST",
            url: "/fruits/findAllFruits",
            success: function (response) {
                // success deal
                console.log("成功！", response);
                let res = response.data;
                for (let i = 0; i < res.length; i++) {
                    voteOptionNameList.push(res[i].fruitName);
                }
                console.error("成功之后返回的结果集：", voteOptionNameList);
                generateVoteOptions(voteOptionNameList);
            },
            error: function (response) {
                // failed deal
                console.error("失败！", response);
            }
        });
    }


    /**
     * generate vote options
     */
    function generateVoteOptions(voteOptions) {
        // clear vote-content
        voteContent.empty();
        // generate vote options for loop
        voteOptions.forEach(item => {
            let newDiv = $(
                '<div class="wrap main-div">' +
                '<div class="container">' +
                '<p>' + item + '</p>' +
                '</div>' +
                '<div class="overlay">' +
                '<button class="btn details-btn">details</button>' +
                '<button class="btn vote-btn">vote</button>' +
                '</div>' +
                '<div class="drawer">' +
                '<p>' + 'Here is something about apple, you can learn sth more about it.' + '</p>' +
                '</div>' +
                '</div>'
            )
            voteContent.append(newDiv);
        });
    }


    /**
     * logOut
     */
    function logOut() {
        logout.off("click").on("click", function (event) {
            event.preventDefault();
            // 退回登录页面
            // location.replace("/myLogin");
            window.location.href = "/myLogin";
        });
    }


    /**
     * some vote about event.
     */
    function voteEvent() {
        const detailsBtn = $(".details-btn");
        const voteBtn = $(".vote-btn");
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
            let currentContent = wrap.find(".container p").text();

            // 如果不存在则添加对应的 SVG 图片，否则就进行删除操作
            if (currentSvg.length === 0) {
                // add current vote option to the voteChose array
                voteOptionsChose.push(currentContent);
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
                let tmpIndex = voteOptionsChose.indexOf(currentContent);
                voteOptionsChose.splice(tmpIndex, 1);
                currentSvg.remove();
            }
        });
    }





    // main footer button click event
    // reset result
    function resetResult() {
        resetVoteContent.on("click", function (event) {
            event.preventDefault();
            // clear all things have voted
            generateVoteOptions(voteOptionNameList);
            // generate background pictures method
            generateBackgroundPictures();
            // generate vote event.
            voteEvent();
        });
    }

    // submit result
    function submitResult() {
        submitVoteResult.on("click", async function (event) {
            event.preventDefault();
            await $.ajax({
                type: "POST",
                url: "/fruitsVote/saveOrUpdate",
                contentType: 'application/json',
                data: JSON.stringify(voteOptionsChose),
                success: async function (response) {
                    console.error("请求成功！");
                    await userCountAdd();
                    // redirect to the voteResult page
                    window.location.href = "/voteResult";
                },
                error: function (response) {
                    console.error("请求失败！");
                }
            });
        });
    }


    // add user count for vote
    async function userCountAdd() {
        // get the vote topic
        let voteTopic = sessionStorage.getItem("voteTopic");
        let voteInfo = {
            desc: voteTopic,
            func: "count",
            funcDetails: "0"
        };
        await $.ajax({
            type: "POST",
            url: "/voteInfo/userCountAdd",
            contentType: 'application/json',
            data: JSON.stringify(voteInfo),
            success: function (response) {
                console.error("请求成功！", response);
            },
            error: function (response) {
                console.error("请求失败！");
            }
        });
    }
})