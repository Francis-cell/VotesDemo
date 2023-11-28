$(document).ready(async function () {
    const userPicture = $(".userPicture");
    const userName = $(".userName");
    const userEmail = $(".userEmail");
    const logout = $(".logout");
    // total count for this vote topic.
    let totalCount  = 0;
    // vote data
    let voteData = null;


    // generate user information.
    generateUserInformation();
    // generate background pictures method
    generateBackgroundPictures();

    // register "logout" event.
    logOut();

    // init the total count
    await getAllVoteCount();
    // init vote data
    await initVoteData();



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
     * Init vote about data.
     */
    async function initVoteData(type) {
        await $.ajax({
            type: 'POST',
            url: "/fruitsVote/findAll",
            contentType: "application/json",
            success: function (response) {
                console.error("请求成功！", response);
                if (totalCount != 0) {
                    voteData = response.data.map(item => {
                        return {
                            percent: Number((item.voteCount) / totalCount).toFixed(2) * 100 + "%",
                            content: item.fruitName
                        }
                    });
                    console.error("最终的比例数据为：", voteData);
                } else {
                    console.error("total count can't be zero!");
                }
            },
            error: function (response) {
                console.error("请求失败！", response);
            }
        });
    }

    async function getAllVoteCount() {
        let voteTopic = sessionStorage.getItem("voteTopic");
        await $.ajax({
            type: 'POST',
            url: "/voteInfo/findAVoteInfoByDesc",
            contentType: "application/json",
            data: voteTopic,
            success: function (response) {
                console.error("请求成功！", response);
                totalCount = Number(response.data.funcDetails);
            },
            error: function (response) {
                console.error("请求失败！", response);
            }
        });
    }

    /**
     * deal vote data.
     */
    function dealVoteData(voteData) {

    }
});