package com.zmr.login.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/16 22:18
 * @description
 */
@Configuration
@EnableWebSecurity
@Order(1)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private static final String LOGIN_PAGE_URL = "/login.html";
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Override
    protected void configure(HttpSecurity http)
            throws Exception {
        http
             .authorizeRequests()
                .antMatchers("/login.html","/html/**", "/css/**", "/js/**", "/JQuery/**", "/pictures/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
             .formLogin()
                .loginPage(LOGIN_PAGE_URL)
                .loginProcessingUrl("/user/login")
                .defaultSuccessUrl("/index")
                .failureUrl(LOGIN_PAGE_URL)
                .usernameParameter("username")
                .passwordParameter("passwd")
                .permitAll()
                .and()
             .logout()
                .and()
                // stop csrf protect for test
             .csrf().disable();
    }

    ///**
    // * Using memory for user storage.
    // * @param auth
    // * @throws Exception
    // */
    //@Override
    //protected void configure(AuthenticationManagerBuilder auth) 
    //        throws Exception {
    //    auth
    //            .inMemoryAuthentication()
    //            .withUser("wangZiDianXia")
    //            .password(passwordEncoder().encode("handsome"))
    //            .authorities("ROLE_USER")
    //            .and()
    //            .withUser("gongZhuDianXia")
    //            .password(passwordEncoder().encode("grace"))
    //            .authorities("ROLE_USER");
    //}
}
