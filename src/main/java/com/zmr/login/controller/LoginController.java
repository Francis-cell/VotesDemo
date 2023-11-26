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

    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @RequestMapping("/index")
    public String index(){
        return "index";
    }

    @RequestMapping("/voteDetail")
    public String voteDetail(){
        return "voteDetail";
    }
}
