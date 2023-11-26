package com.zmr.fruits.mapper;

import com.zmr.fruits.entity.Fruit;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 16:54
 * @Version 1.0
 * @Description TODO
 **/
@Mapper
public interface FruitMapper {
    /** select all fruits */
    List<Fruit> findAllFruits();
}
