package com.zmr.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/19 10:05
 * @description
 */
@Controller
public class MyLoginController {
    @RequestMapping("/myLogin.html")
    public String myLogin() {
        return "myLogin";
    }
}
