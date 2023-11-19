package com.zmr.main.constant;

import lombok.Getter;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/15 20:41
 * @description common enum
 */
@Getter
public enum CommonStatusEnum {
    /** success */
    SUCCESS(200, "success"),
    
    /** fail */
    FAIL(400, "fail");
    
    private int code;
    private String value;
    
    CommonStatusEnum(int code, String value) {
        this.code = code;
        this.value = value;
    }
}
