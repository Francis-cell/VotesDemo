package com.zmr.login.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

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
public class User implements UserDetails {
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
    
    /** email for user */
    private String email;
    
    /** insert time for info */
    private Long insertTime;
    
    /** update time for info */
    private Long updateTime;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return userName;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
