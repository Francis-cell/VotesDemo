package com.zmr.login.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @Author franciszmr
 * @Date 2023/11/26 10:08
 * @Version 1.0
 * @Description TODO
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    private String userAccount;
    private String userName;
    private String email;
    private String sex;
}
