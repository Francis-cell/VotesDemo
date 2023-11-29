$(document).ready(function () {
    let voteContent = $(".vote-content");
    let wraps = $(".wrap");

    // generate vote percent.
    generateVotePercent();
    // generate background pictures method
    generateBackgroundPictures();

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

    // 判断一个元素的数据类型
    function typeOf(obj) {
        let res = Object.prototype.toString.call(obj).split(' ')[1];
        res = res.substring(0, res.length - 1).toLowerCase();
        return res;
    }
});