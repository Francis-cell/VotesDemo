package com.zmr.fruits.service;

import com.zmr.fruits.entity.Fruit;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 16:52
 * @Version 1.0
 * @Description TODO
 **/
public interface FruitService {
    /** select all fruits */
    List<Fruit> findAllFruits();
}
