package com.zmr.fruits.service.impl;

import com.zmr.fruits.entity.Fruit;
import com.zmr.fruits.mapper.FruitMapper;
import com.zmr.fruits.service.FruitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 16:53
 * @Version 1.0
 * @Description TODO
 **/
@Service
public class FruitServiceImpl implements FruitService {

    @Autowired
    private FruitMapper fruitMapper;

    @Override
    public List<Fruit> findAllFruits() {
        return fruitMapper.findAllFruits();
    }
}
