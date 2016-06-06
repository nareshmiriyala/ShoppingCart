package com.dellnaresh.repository;

import com.dellnaresh.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by nareshm on 6/6/2016.
 */
public interface ProductRepository extends JpaRepository<Product,Long> {
}
