package com.dellnaresh.controller;

import com.dellnaresh.model.Product;
import com.dellnaresh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by nareshm on 6/6/2016.
 */
@RestController
public class ProductController {
    @Autowired
    private ProductRepository repository;
    @RequestMapping(method = RequestMethod.GET, value = "/products", consumes = {"application/json", "application/xml"})
    public List<Product> getProducts(){
        return repository.findAll();
    }
}
