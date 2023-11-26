package com.zmr.login.service.Impl;

import com.zmr.login.entity.User;
import com.zmr.login.entity.UserAccount;
import com.zmr.login.entity.UserInfo;
import com.zmr.login.mapper.UserMapper;
import com.zmr.login.service.IUserService;
import com.zmr.main.exception.InsertException;
import com.zmr.main.exception.UserNotFoundException;
import com.zmr.main.exception.UsernameDuplicatedException;
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
        User result = userMapper.findByUserName(user.getUsername());
        // if the result is not null, throw Exception
        if (result != null) {
            throw new UsernameDuplicatedException("The user name has occupied.");
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
                throw new InsertException("User register failed.");
            }
        }
    }

    @Override
    public void login(User user, String numberCode) {
        // TODO append
    }

    @Override
    public void login(User user) {
        String userAccount = user.getUserAccount();
        String password = user.getPassword();
        // select salt for userAccount
        User byUserAccount = userMapper.findByUserAccount(userAccount);
        if (byUserAccount == null) {
            throw new UserNotFoundException("User account can't find!");
        } else {
            String salt = byUserAccount.getSalt();
            String truePassword = byUserAccount.getPassword();
            String md5Password = getMd5Password(password, salt);
            if (!md5Password.equals(truePassword)) {
                throw new UserNotFoundException("User password error!");
            }
            // redirect to index page
        }
    }

    @Override
    public UserInfo getUserInfo(UserAccount userAccount) {
        UserInfo userInfo = new UserInfo();
        String account = userAccount.getUserAccount();
        // select user info with userAccount
        User user = userMapper.findByUserAccount(account);
        if (user == null) {
            throw new UserNotFoundException("User account can't find!");
        } else {
            userInfo.setUserAccount(user.getUserAccount());
            userInfo.setUserName(user.getUsername());
            userInfo.setEmail(user.getEmail());
            userInfo.setSex(user.getSex());
            return userInfo;
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
