$(document).ready(async function () {
    const userPicture = $(".userPicture");
    const userName = $(".userName");
    const userEmail = $(".userEmail");
    const logout = $(".logout");
    let voteContent = $(".vote-content");

    // total count for this vote topic.
    let totalCount  = 0;
    // vote data
    let dynamicData = null;

    // register "logout" event.
    logOut();
    // generate user information.
    generateUserInformation();
    // generate vote percent.
    generateVotePercent();
    // generate background pictures method
    generateBackgroundPictures();

    // init the total count
    await getAllVoteCount();
    // init vote data
    await initVoteData();

    /**
     * generate background pictures method.
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
     * generate vote percent.
     */
    function generateVotePercent() {
        let dynamicData  = [
            { percent: "10%", content: "Apple" },
            { percent: "12%", content: "BlueBerry" },
            { percent: "52%", content: "Banana" },
            { percent: "3%", content: "WaterMelon" },
            { percent: "2%", content: "Strawberry" },
            { percent: "1%", content: "1" },
            { percent: "12%", content: "2" },
            { percent: "10%", content: "3" },
            { percent: "5%", content: "4" },
            { percent: "6%", content: "5" },
            { percent: "100%", content: "6" },
            { percent: "28%", content: "7" },
            { percent: "90%", content: "8" },
            { percent: "12%", content: "9" },
            { percent: "21%", content: "10" }
        ];
        // generate inner elements for loop.
        dynamicData.forEach(function(data, index) {
            debugger;
            // generate animation
            let animateRule = `@keyframes slideLeftIn${index}{
                from {
                    width: 0;
                }
                to {
                    width: ${data.percent};
                }
            }
            
            @keyframes slideRightIn${index}{
                from {
                    width: 0;
                }
                to {
                    width: ${(100 - (data.percent).slice(0, -1)) + '%'};
                }
            }`

            // insert animateRule to head.
            $('<style>').text(animateRule).appendTo('head');

            // when a vote percent is 100%, the width of it is '32rem'.
            let totalWidth = 32;
            let tmpWidth = Math.round(
                Math.round(Number((
                Number(data.percent.slice(0, -1)) / 100)
                .toFixed(2)
            ) * 100 * totalWidth) / 100
            );

            // generate the div elements which include the animation.
            let processContainer = $('<div>')
                .addClass('progress-container')
                .css('animation', `slideLeftIn${index} 1s ease-in`)
                .css('width', tmpWidth + 'rem')
                // .text(data.percent);
            // generate the div elements which include the animation.
            let notChooseContainer = $('<div>')
                .addClass('not-choose-container')
                .css('animation', `slideRightIn${index} 1s ease-in`)
                .css('width', (totalWidth - tmpWidth) + 'rem')
                .css('background-color', generateRandomColor())
                .css('color', '#000000')

            // add text to div elements
            if (Number(data.percent.slice(0, -1) <= 5)) {
                notChooseContainer.text(data.percent);
            } else {
                processContainer.text(data.percent);
            }

            // generate the p elements which include the main content.
            let pElement = $('<p>')
                .text(data.content);

            // generate the main div element and add the children elements to it.
            let mainDiv = $('<div>')
                .addClass("wrap main-div")
                .append($('<div>').addClass('container').append(pElement),
                    processContainer,
                    notChooseContainer);

            voteContent.append(mainDiv);
        });
    }

    /**
     * generate random color
     */
    function generateRandomColor() {
        // random colors
        let colorLists = [
            "#96EFFF","#5FBDFF","#FAEED1","#DED0B6",
            "#EEF296","#9ADE7B","#FFC5C5","#FFEBD8",
            "#F4DFC8","#F4EAE0","#FFE3BB","#DCBFFF",
            "#B0926A","#E1C78F","#EF9595","#FFEEF4",
            "#91C8E4","#CEE6F3","#D4E2D4","#A78295"
        ];
        let randomIndex = Math.floor(Math.random() * colorLists.length);
        return colorLists[randomIndex];
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

    // 判断一个元素的数据类型
    function typeOf(obj) {
        let res = Object.prototype.toString.call(obj).split(' ')[1];
        res = res.substring(0, res.length - 1).toLowerCase();
        return res;
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
                    dynamicData = response.data.map(item => {
                        return {
                            percent: Number((item.voteCount) / totalCount).toFixed(2) * 100 + "%",
                            content: item.fruitName
                        }
                    });
                    console.error("最终的比例数据为：", dynamicData);
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
});