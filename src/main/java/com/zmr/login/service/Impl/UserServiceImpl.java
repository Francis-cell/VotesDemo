package com.zmr.login.service.Impl;

import com.sun.xml.internal.ws.api.message.Packet;
import com.zmr.login.entity.User;
import com.zmr.login.mapper.UserMapper;
import com.zmr.login.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.UUID;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:19
 * @description
 */
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;
    
    @Override
    public void register(User user) {
        // select if the user has occupied
        User result = userMapper.findByUserName(user.getUserName());
        // if the result is not null, throw Exception
        if (result != null) {
            throw new RuntimeException("The user name has occupied.");
        } else {
            // start login
            String oldPassword = user.getPassword();
            String salt = UUID.randomUUID().toString().toUpperCase();
            user.setSalt(salt);
            String md5Password = getMd5Password(oldPassword, salt);
            System.out.println(md5Password);
            user.setPassword(md5Password);
            // insert user into user table
            Integer rows = userMapper.insert(user);
            if (rows != 1) {
                throw new RuntimeException("User register failed.");
            }
        }
    }

    /**
     * Use MD5 encryption
     * @param password
     * @param salt
     * @return
     */
    private String getMd5Password(String password, String salt) {
        for (int i = 0; i < 3; i++) {
            // encrypt 3 times
            password = DigestUtils.md5DigestAsHex((salt + password + salt).getBytes()).toUpperCase();
        }
        return password;
    }
}
