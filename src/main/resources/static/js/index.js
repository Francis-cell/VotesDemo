// import {requestHandler} from "./HandlerUtils.js"
// import $ from "../JQuery/jquery-3.7.1.min";

$(document).ready(async function () {
    // 设置一些全局的变量
    const userPicture = $(".userPicture");
    const userName = $(".userName");
    const userEmail = $(".userEmail");
    const logout = $(".logout");
    const mainContent = $(".main-content");

    // all topics
    let topics;


    // sidebar link active class change event.
    activeSideBarMenuChange();
    // nav item link active class change event.
    activeNavItemChange();
    // register "logout" event.
    logOut();


    // Generate username and user email information.
    await generateUserInfo();
    // Generate page topics data
    await selectAllTopicsData();
    // nav change method
    navItemChange();

    /**
     * generate username and user email
     */
    async function generateUserInfo() {
        let userAccount = sessionStorage.getItem("userAccount");
        let requestData = JSON.stringify({ "userAccount": userAccount});
        // let res = await requestHandler("/user/getUserInfo", requestData);
        await $.ajax({
            type: "POST",
            url: "/user/getUserInfo",
            contentType: "application/json",
            data: requestData,
            success: function (response) {
                // success deal
                console.log("成功！", response);
                let res = response.data;
                userName.text(res.userName);
                userEmail.text(res.email);
                let userPhoto = generateUserPictureBySex(res.sex);
                sessionStorage.setItem("userPhoto", userPhoto);
                sessionStorage.setItem("userName", res.userName);
                sessionStorage.setItem("userEmail", res.email);
                // get user sex
                userPicture.attr("src", userPhoto);
            },
            error: function (response) {
                // failed deal
                console.error("失败！", response);
            }
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
     * get all data from topic
     */
    async function selectAllTopicsData() {
        await $.ajax({
            type: "POST",
            url: "/topic/getAllTopics",
            success: function (response) {
                // success deal
                console.log("成功！", response);
                topics = response.data;
                // generate cards for loop
                for (let i = 0; i < topics.length; i++) {
                    let cardDiv = $('<div>', {
                        'class': 'card card-img',
                        'text': topics[i].topicName
                    }).addClass('card-' + (i + 1)).css("background-color", generateRandomColor());
                    mainContent.append(cardDiv);
                }
                // card click event.
                cardClick();
            },
            error: function (response) {
                // failed deal
                console.error("失败！", response);
            }
        })
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
     * generate user picture by user sex.
     */
    function generateUserPictureBySex(sex) {
        // picture path
        let picturePath = "../userPictures/";
        let randomIndex = Math.floor(Math.random() * 4) + 1;
        let lastUserPicturePath = "";
        if (sex === "1") {
            // boy
            lastUserPicturePath = "boy0" + randomIndex + ".svg";
        } else {
            // girl
            lastUserPicturePath = "girl0" + randomIndex + ".svg";
        }
        return picturePath + lastUserPicturePath;
    }


    /**
     * sidebar link active class change event.
     */
    function activeSideBarMenuChange() {
        // sidebar-menu__link class get
        $(".sidebar-menu__link").on("click", function (event) {
            // prevent default event
            event.preventDefault();
            // get the link click now
            $(this).data("target");
            // remove all active class
            $(".sidebar-menu__link").removeClass("active");
            // add 'active' class to target
            $(this).addClass("active");
        });
    }

    /**
     * nav item link active class change event.
     */
    function activeNavItemChange() {
        // sidebar-menu__link class get
        $(".nav-item").on("click", function (event) {
            // prevent default event
            event.preventDefault();
            // get the link click now
            $(this).data("target");
            // remove all active class
            $(".nav-item").removeClass("active");
            // add 'active' class to target
            $(this).addClass("active");
        });
    }

    /**
     * card click event.
     */
    function cardClick() {
        // get card class
        $(".card").off("click").on("click", function (event) {
            // event.stopPropagation();
            // prevent default event
            event.preventDefault();
            // get the link click now
            let $target = $(this);

            if (!$target.hasClass("clicked")) {
                // save the original content
                $target.data("original-content", $target.html());
                // modify content for detailed information
                $target.html(`
                    <div class="card-inner">
                        <p class="card-title"></p>
                        <div class="card-content">
                          <p class="card-content-detail"></p>
                          <div class="btn btn__secondary"><p class="Inner">Inner</p></div>
                          <div class="card-content-footer"></div>
                        </div>
                    </div>
                `);
                // set value
                $(".card-title").text($target.data("original-content"));
                // card-content-detail content
                let topicClicked = topics.filter(item => {
                    return item.topicName === $target.data("original-content");
                })
                $(".card-content-detail").text(topicClicked[0].description);

                $(".main-content").addClass("expanded");
                $target.addClass("clicked");

                innerButtonClick($target.data("original-content"));
            }
            else {
                // restore original content
                $target.html($target.data("original-content"));

                $target.removeClass("clicked");
                $(".main-content").removeClass("expanded");
            }
        });
    }


    /**
     * nav change method
     */
    function navItemChange() {
        function addCardsToMainContent(topicInner) {
            // clear main-content
            mainContent.empty();
            // generate cards for loop
            for (let i = 0; i < topicInner.length; i++) {
                let cardDiv = $('<div>', {
                    'class': 'card card-img',
                    'text': topicInner[i].topicName
                }).addClass('card-' + (i + 1)).css("background-color", generateRandomColor());
                mainContent.append(cardDiv);
            }
        }

        function filterTopics(type) {
            return topics.filter(item => {
               return item.topicClass === type;
            });
        }

        function clearNativeElement() {
            $(".main-content").removeClass("expanded");
        }

        // All
        $("#All").on("click", function (event) {
            event.preventDefault();
            addCardsToMainContent(topics);
            clearNativeElement();
            // card click event.
            cardClick();
        });

        // Favorite
        $("#Favorite").on("click", function (event) {
            event.preventDefault();
            let tmpTopics = filterTopics("Favorite");
            addCardsToMainContent(tmpTopics);
            clearNativeElement();
            // card click event.
            cardClick();
        });

        // Life
        $("#Life").on("click", function (event) {
            event.preventDefault();
            let tmpTopics = filterTopics("Life");
            addCardsToMainContent(tmpTopics);
            clearNativeElement();
            // card click event.
            cardClick();
        });

        // Travel
        $("#Travel").on("click", function (event) {
            event.preventDefault();
            let tmpTopics = filterTopics("Travel");
            addCardsToMainContent(tmpTopics);
            clearNativeElement();
            // card click event.
            cardClick();
        });

        // Books
        $("#Books").on("click", function (event) {
            event.preventDefault();
            let tmpTopics = filterTopics("Books");
            addCardsToMainContent(tmpTopics);
            clearNativeElement();
            // card click event.
            cardClick();
        });

        // Transportation
        $("#Transportation").on("click", function (event) {
            event.preventDefault();
            let tmpTopics = filterTopics("Transportation");
            addCardsToMainContent(tmpTopics);
            clearNativeElement();
            // card click event.
            cardClick();
        });
    }


    /**
     * This method will transfer when inner button is clicked.
     */
    function innerButtonClick(contentType) {
        // inner button click event
        $(".Inner").on("click", function (event) {
            event.preventDefault();
            sessionStorage.setItem("voteType", contentType);

            // Fruit Click
            if (contentType === "Fruit") {
                // redirect to voteDetails
                console.error("redirect to voteDetails!");
                window.location.href = "/voteDetail";
            } else {
                // other Click
                console.error("当前不支持 Fruit 之外的操作！");
            }
        });
    }
});