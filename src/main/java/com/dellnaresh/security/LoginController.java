package com.dellnaresh.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by nmiriyal on 1/12/2016.
 */
@RestController
public class LoginController {
    @Autowired
    private AuthenticationManager authManager;
    @RequestMapping(method = RequestMethod.POST, value = "/authenticate", produces= {"application/json", "application/xml"})
    public void authenticate(@RequestParam("username") String username, @RequestParam("password") String password){

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(username, password);
        Authentication authentication = this.authManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Object principal = authentication.getPrincipal();
        System.out.println(principal);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/logout", produces= {"application/json", "application/xml"})
    public void logout(){
        SecurityContextHolder.clearContext();

    }
}
