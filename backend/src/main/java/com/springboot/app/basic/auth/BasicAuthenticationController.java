package com.springboot.app.basic.auth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://54.193.127.148:3000")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }   
}