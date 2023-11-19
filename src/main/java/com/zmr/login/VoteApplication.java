package com.zmr.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 22:50
 * @description
 */
@SpringBootApplication(exclude = {
        //org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        //org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
})
public class VoteApplication {
    public static void main(String[] args) {
        SpringApplication.run(VoteApplication.class, args);
    }
}
