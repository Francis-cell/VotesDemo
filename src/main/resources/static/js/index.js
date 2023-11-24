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
                // save the original content
                $target.data("original-content", $target.html());
                // modify content for detailed information
                $target.html(`
                    <div class="card-inner">
                        <p class="card-title"></p>
                        <div class="card-content">
                          <p class="card-content-detail">Detailed content goes here.</p>
                          <div class="btn btn__secondary"><p>Inner</p></div>
                          <div class="card-content-footer"></div>
                        </div>
                    </div>
                `);
                // set value
                $(".card-title").text($target.data("original-content"));
                // set action event
                $(".btn").on("click", cardButtonClick)

                $(".main-content").addClass("expanded");
                $target.addClass("clicked");
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
     * card inner button click event
     */
    function cardButtonClick(event) {
        event.stopPropagation();
        // redirect to a new page.
    }
});