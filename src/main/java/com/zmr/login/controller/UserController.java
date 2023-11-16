package com.zmr.login.controller;

import com.zmr.login.entity.User;
import com.zmr.login.mapper.UserMapper;
import com.zmr.login.service.IUserService;
import com.zmr.main.exception.InsertException;
import com.zmr.main.exception.UserNotFoundException;
import com.zmr.main.exception.UsernameDuplicatedException;
import com.zmr.main.response.ResponseResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;


/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/15 20:18
 * @description
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserMapper userMapper;
    
    @Resource
    private IUserService userService;
    
    @GetMapping("/{userName}")
    public ResponseResult findByUserName(@PathVariable String userName) {
        return ResponseResult.success(userMapper.findByUserName(userName));
    }
    
    @PostMapping("/register")
    public ResponseResult register(@RequestBody User user) {
        try {
            userService.register(user);
            System.out.println(ResponseResult.success("register successfully!"));
            return ResponseResult.success("register successfully!");
        } catch (UsernameDuplicatedException e) {
            return ResponseResult.fail(400, "user name has occupied!");
        } catch (InsertException e) {
            return ResponseResult.fail(502, "register with exception!");
        }
    }
    
    @PostMapping("/login")
    public ResponseResult login(@RequestBody User user) {
        try {
            userService.login(user);
            System.out.println("login success!");
            // redirect to index page
            return ResponseResult.success("Login success!");
        } catch (UserNotFoundException e) {
            return ResponseResult.fail(400, "Login failed!");
        }
    }
}
