package com.zmr.main.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/16 22:18
 * @description
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * Using memory for user storage.
     * @param auth
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) 
            throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("wangZiDianXia")
                .password("handsome")
                .authorities("ROLE_USER")
                .and()
                .withUser("gongZhuDianXia")
                .password("grace")
                .authorities("ROLE_USER");
    }

    @Override
    protected void configure(HttpSecurity http)
            throws Exception {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/user/login").hasRole("ROLE_USER")
                .antMatchers("/user/register").hasRole("ROLE_USER")
                .and()
                .formLogin();
                
    }
}
