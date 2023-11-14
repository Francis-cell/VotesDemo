package com.zmr.login.common.response;

import lombok.Data;

import java.io.Serializable;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:41
 * @description Response result for JSON.
 */
@Data
public class JsonResult<T> implements Serializable {
    /** response code */
    private String state;
    
    /** response message */
    private String message;
    
    /** response data */
    private T data;
}
