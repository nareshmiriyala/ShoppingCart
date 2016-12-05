package com.dellnaresh;

import com.dellnaresh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;

import static com.dellnaresh.model.ProductBuilder.aProduct;

/**
 * Created by nareshm on 6/6/2016.
 */
@SpringBootApplication
@EnableAutoConfiguration
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
                .withImage("images//uspolo.jpg").withCategory("Shirts").build());
        productRepository.save(aProduct().
                withName("Samsung S7").
                withDescription("Absolutely great phone, Samsung at its best, great reply to all the negative critics. This is the best phone right now! \n")
                .withUnitPrice(BigDecimal.valueOf(700)).withCategory("Phones")
                .withImage("images//samsung.jpg").build());
        productRepository.save(aProduct().withName("Furnicity Engineered Wood King Bed")
                .withDescription("This bed is of queen size. Which gives a attractive look to ur Bed room. Which gives relaxation when you are tired. Within 6 months free service will be provided if any problem occurs in bed.")
                .withCategory("Furniture").withUnitPrice(BigDecimal.valueOf(500)).withImage("images//bed.jpeg").build());
        productRepository.save(aProduct().withName("Vu 80cm (32) HD Ready Smart LED TV")
                .withDescription(" Enjoy playing games, watching videos on YouTube and browsing through a range of apps now on a bigger screen with this Vu 80 cm TV in your room. With the dBX TV sound, you can now enjoy all your favourite tracks with high quality sound effects.\n")
                .withCategory("Electronics").withUnitPrice(BigDecimal.valueOf(300)).withImage("images//tv.jpeg").build());
    }

}
