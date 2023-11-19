package com.zmr.login.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

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
                .antMatchers("/html/**", "/css/**", "/js/**", "/JQuery/**", "/pictures/**")
                .permitAll()
                .antMatchers("/login.html")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage(LOGIN_PAGE_URL)
                .loginProcessingUrl("/user/login")
                .successHandler(successHandler())
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

    /**
     * The web and the back is a whole. Using this way to redirect page.
     * @return
     */
    SavedRequestAwareAuthenticationSuccessHandler successHandler() {
        SavedRequestAwareAuthenticationSuccessHandler handler =
                new SavedRequestAwareAuthenticationSuccessHandler();
        handler.setDefaultTargetUrl("/index");
        handler.setTargetUrlParameter("target");
        return handler;
    }
}
