package com.zmr.login.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
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
    private static final String LOGIN_PAGE_URL = "/html/login.html";
    private static final String MY_LOGIN_PAGE_URL = "/myLogin";

    @Override
    protected void configure(HttpSecurity http)
            throws Exception {
        http
                //.addFilterBefore(new JsonAuthenticationFilter(authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                    .antMatchers("/html/**", "/css/**", "/js/**", "/JQuery/**", "/pictures/**")
                    .permitAll()
                    .antMatchers("/login.html", "/register.html")
                    .permitAll()
                    .antMatchers("/user/register")
                    .permitAll()
                    .antMatchers("/error").permitAll()
                    .anyRequest()
                    .authenticated()
                    .and()
                .formLogin()
                    //.loginPage(LOGIN_PAGE_URL)
                    .loginPage(MY_LOGIN_PAGE_URL)
                    .loginProcessingUrl("/user/login")
                    .successHandler(successHandler())
                    .failureHandler(new CustomAuthenticationFailureHandler())
                    //.failureUrl(LOGIN_PAGE_URL)
                    .failureUrl(MY_LOGIN_PAGE_URL)
                    .usernameParameter("username")
                    .passwordParameter("password")
                    .permitAll()
                    .and()
                .logout()
                    .and()
                // stop csrf protect for test
                .csrf().disable();
    }

    /**
     * The web and the back are a whole. Using this way to redirect page.
     * @return
     */
    SavedRequestAwareAuthenticationSuccessHandler successHandler() {
        SavedRequestAwareAuthenticationSuccessHandler handler =
                new SavedRequestAwareAuthenticationSuccessHandler();
        handler.setDefaultTargetUrl("/html/index.html");
        handler.setTargetUrlParameter("target");
        return handler;
    }
}
