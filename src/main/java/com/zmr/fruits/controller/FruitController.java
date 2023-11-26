package com.zmr.fruits.controller;

import com.zmr.fruits.entity.Fruit;
import com.zmr.fruits.service.FruitService;
import com.zmr.main.response.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 16:58
 * @Version 1.0
 * @Description TODO
 **/
@RestController
@RequestMapping("/fruits")
public class FruitController {
    @Autowired
    private FruitService fruitService;

    @PostMapping("/findAllFruits")
    public ResponseResult findAllFruits() {
        List<Fruit> allFruits = fruitService.findAllFruits();
        return ResponseResult.success(allFruits);
    }
}
