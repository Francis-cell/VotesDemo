package com.zmr.main.response;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/15 20:43
 * @description response result.
 * chain = true --> with it, you can use chained calls.
 */

import com.zmr.main.constant.CommonStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class ResponseResult<T> {
    /** code */
    private int code;
    
    /** message */
    private String message;
    
    /** content */
    private T data;

    /**
     * success response.
     * @return
     */
    public static ResponseResult success() {
        return new ResponseResult().setCode(CommonStatusEnum.SUCCESS.getCode())
                .setMessage(CommonStatusEnum.SUCCESS.getValue());
    }


    /**
     * success.
     * @param data
     * @param <T>
     * @return
     */
    public static <T> ResponseResult<T> success(T data) {
        return new ResponseResult().setCode(CommonStatusEnum.SUCCESS.getCode())
                .setMessage(CommonStatusEnum.SUCCESS.getValue())
                .setData(data);
    }

    /**
     * default failed method.
     * @param data
     * @param <T>
     * @return
     */
    public static <T> ResponseResult fail(T data) {
        return new ResponseResult().setData(data);
    }

    /**
     * failed method with owner code and message.
     * @param code
     * @param message
     * @return
     */
    public static ResponseResult fail(int code, String message) {
        return new ResponseResult().setCode(code).setMessage(message);
    }

    /**
     * failed method with owner code、message and data.
     * @param code
     * @param message
     * @param data
     * @return
     */
    public static ResponseResult fail(int code, String message, String data) {
        return new ResponseResult().setCode(code).setMessage(message).setData(data);
    }
}
