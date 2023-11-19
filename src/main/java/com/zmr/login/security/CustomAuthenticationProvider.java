package com.zmr.login.security;

import com.zmr.login.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;

import java.util.ArrayList;

/**
 * @Author franciszmr
 * @Date 2023/11/19 12:16
 * @Version 1.0
 * @Description custom filter file
 **/
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getPrincipal().toString();
        String password = authentication.getCredentials().toString();

        //String lastPassword = "";
        //User byUserAccount = userMapper.findByUserAccount(username);
        //if (byUserAccount == null) {
        //    throw new UserNotFoundException("User account can't find!");
        //} else {
        //    String salt = byUserAccount.getSalt();
        //    String truePassword = byUserAccount.getPassword();
        //    lastPassword = getMd5Password(password, salt);
        //    if (!lastPassword.equals(truePassword)) {
        //        throw new UserNotFoundException("User password error!");
        //    }
        //}

        //return new UsernamePasswordAuthenticationToken(username, lastPassword, new ArrayList<>());
        return new UsernamePasswordAuthenticationToken(username, password, new ArrayList<>());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }


    private String getMd5Password(String password, String salt) {
        for (int i = 0; i < 3; i++) {
            // encrypt 3 times
            password = DigestUtils.md5DigestAsHex((salt + password + salt).getBytes()).toUpperCase();
        }
        return password;
    }
}
