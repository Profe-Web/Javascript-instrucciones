package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundo { 
    @RequestMapping("/")
    public String hola(){
        return "hola mundo con Spring";
    }
}
