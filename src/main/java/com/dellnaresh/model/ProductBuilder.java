package com.dellnaresh.model;

import java.math.BigDecimal;

/**
 * Created by nareshm on 6/18/2016.
 */
public final class ProductBuilder {
    private long id;
    private String name;
    private String description;
    private String image;
    private BigDecimal unitPrice;

    private ProductBuilder() {
    }

    public static ProductBuilder aProduct() {
        return new ProductBuilder();
    }

    public ProductBuilder withId(long id) {
        this.id = id;
        return this;
    }

    public ProductBuilder withName(String name) {
        this.name = name;
        return this;
    }

    public ProductBuilder withDescription(String description) {
        this.description = description;
        return this;
    }

    public ProductBuilder withImage(String image) {
        this.image = image;
        return this;
    }

    public ProductBuilder withUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }

    public Product build() {
        Product product = new Product();
        product.setId(id);
        product.setName(name);
        product.setDescription(description);
        product.setImage(image);
        product.setUnitPrice(unitPrice);
        return product;
    }
}
