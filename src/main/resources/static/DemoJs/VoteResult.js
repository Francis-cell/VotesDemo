$(document).ready(function () {
    const userPicture = $(".userPicture");
    const userName = $(".userName");
    const userEmail = $(".userEmail");
    const logout = $(".logout");


    // generate user information.
    generateUserInformation();
    // generate background pictures method
    generateBackgroundPictures();

    // register "logout" event.
    logOut();



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
            url: "/fruitsVote/",
        });
    }
});