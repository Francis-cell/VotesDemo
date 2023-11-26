import $ from "../JQuery/jquery-3.7.1.min";

/**
 * function to deal with request
 * @param url
 * @param data
 * @param requestType
 * @param contentType
 */
export function requestHandler(url, data, requestType, contentType) {
    // post default
    if (!requestType) {
        requestType = "POST";
    }
    // json type default
    if (!contentType) {
        contentType = "application/json";
    }
    return new Promise((resolve, reject) => {
        // ajax request
        $.ajax({
            type: requestType,
            url,
            contentType,
            data,
            success: function (response) {
                // success deal
                return responseHandler(response, "success");
            },
            error: function (response) {
                // failed deal
                return responseHandler(response, "failed");
            }
        });
    });
}

/**
 * function to deal with response
 * @param response
 * @param responseType
 */
function responseHandler(response, responseType) {
    // success deal
    if (responseType === "success") {
        return JSON.parse({"code": 200, "response": response});
    }
    // failed deal
    else {
        return JSON.parse({"code": 400, "response": response});
    }
}