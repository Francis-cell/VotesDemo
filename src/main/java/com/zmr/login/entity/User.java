package com.zmr.login.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 22:55
 * @description User for register and login
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    /** ID for user */
    private Long userId;
    
    /** name for user */
    private String userName;
    
    /** account for user */
    private String userAccount;
    
    /** password for user */
    private String password;
    
    /** salt */
    private String salt;
    
    /** mail for user */
    private String mail;
    
    /** insert time for info */
    private Long insertTime;
    
    /** update time for info */
    private Long updateTime;
}
