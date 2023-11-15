package com.zmr.main.exception;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:34
 * @description Base Exception Deal Class
 */
public class ServiceException extends RuntimeException{
    public ServiceException() {
        super();
    }
    
    public ServiceException(String message) {
        super(message);
    }
    
    public ServiceException(String message, Throwable cause) {
        super(message, cause);
    }
    
    public ServiceException(Throwable cause) {
        super(cause);
    }
    
    protected ServiceException(String message, Throwable cause, boolean enableSuppression,  boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
