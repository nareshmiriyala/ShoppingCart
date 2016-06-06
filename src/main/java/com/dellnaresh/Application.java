package com.dellnaresh;

import com.dellnaresh.model.Product;
import com.dellnaresh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;

/**
 * Created by nareshm on 6/6/2016.
 */
@SpringBootApplication
public class Application implements CommandLineRunner{
    @Autowired
    private ProductRepository productRepository;

    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        productRepository.save(createProduct());
    }

    private Product createProduct() {
        return new Product("Samsung","images//samsung.jpg", BigDecimal.valueOf(700));
    }
}
