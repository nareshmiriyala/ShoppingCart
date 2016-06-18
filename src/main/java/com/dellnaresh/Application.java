package com.dellnaresh;

import com.dellnaresh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;

import static com.dellnaresh.model.ProductBuilder.aProduct;

/**
 * Created by nareshm on 6/6/2016.
 */
@SpringBootApplication
public class Application implements CommandLineRunner {
    @Autowired
    private ProductRepository productRepository;

    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        productRepository.save(aProduct().
                withName("Us Polo").
                withDescription("Women's U.S. Polo Assn. Casual Flip-Flops. Make laid back style a breeze in the U.S. Polo Assn. Breeze! These flip-flops feature durable synthetic uppers, a foam cushioned footbed, and flexible rubber traction outsole. Kick back and relax in the U.S. Polo Assn. Breeze!")
                .withUnitPrice(BigDecimal.TEN)
                .withImage("images//uspolo.jpg").build());
        productRepository.save(aProduct().
                withName("Samsung S7").
                withDescription("Absolutely great phone, Samsung at its best, great reply to all the negative critics. This is the best phone right now! \n")
                .withUnitPrice(BigDecimal.valueOf(700))
                .withImage("images//samsung.jpg").build());
    }

}
