package com.zmr.login.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/18 23:18
 * @description
 */
@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        // 在这里进行你的自定义逻辑，例如记录日志、获取用户信息等

        // 重定向到自定义页面
        response.sendRedirect("/custom-success-page");
    }
}