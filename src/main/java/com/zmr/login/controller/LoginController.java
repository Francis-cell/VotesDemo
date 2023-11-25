package com.zmr.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author franciszmr
 * @Date 2023/11/25 18:21
 * @Version 1.0
 * @Description TODO
 **/
@Controller
public class LoginController {
    @GetMapping("/myLogin")
    public String login(){
        return "myLogin";
    }

    @RequestMapping("/index")
    public String index(){
        return "index";
    }
}
