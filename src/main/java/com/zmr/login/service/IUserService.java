package com.zmr.login.service;

import com.zmr.login.entity.User;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:17
 */
public interface IUserService {
    /***
     * method for user to register
     * @param user
     */
    void register(User user);
}
