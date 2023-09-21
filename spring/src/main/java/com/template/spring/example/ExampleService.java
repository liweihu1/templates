package com.template.spring.example;

public class ExampleService {
    public ExampleModel getSomething(String id) {
        return new ExampleModel(id);
    }
}
