package com.zmr.login.common.exception;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:37
 * @description Insert Exception
 */
public class InsertException extends ServiceException{
    public InsertException() {
        super();
    }
    
    public InsertException(String message) {
        super(message);
    }

    public InsertException(String message, Throwable cause) {
        super(message, cause);
    }

    public InsertException(Throwable cause) {
        super(cause);
    }

    protected InsertException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
