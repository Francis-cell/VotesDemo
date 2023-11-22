$(document).ready(function () {
    // sidebar link active class change event.
    activeSideBarMenuChange();
    // nav item link active class change event.
    activeNavItemChange();
    // card click event.
    cardClick();


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
                $(".main-content").addClass("expanded");
                $target.addClass("clicked");
            }
            else {
                $target.removeClass("clicked");
                $(".main-content").removeClass("expanded");
            }

            // // 使用 toggleClass 切换 clicked 类的状态
            // $(".main-content").toggleClass("expanded", !$target.hasClass("clicked"));
            // $target.toggleClass("clicked");
        });
    }
});