package com.template.spring.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("example")
public class ExampleController {
    private ExampleService exampleService;

    public ExampleController() {
        this.exampleService = new ExampleService();
    }

    @GetMapping("/")
    public List<ExampleModel> GetAllExampleModels(){
        List<ExampleModel> result = new ArrayList<>();
        result.add(this.exampleService.getSomething("1"));
        result.add(this.exampleService.getSomething("2"));
        result.add(this.exampleService.getSomething("3"));
        result.add(this.exampleService.getSomething("4"));
        return result;
    }

    @GetMapping("/{id}")
    public ExampleModel GetSomething(@PathVariable("id") String id) {
        ExampleModel m = this.exampleService.getSomething(id);
        return m;
    }
}
