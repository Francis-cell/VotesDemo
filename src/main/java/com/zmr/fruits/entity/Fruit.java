package com.zmr.fruits.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @Author franciszmr
 * @Date 2023/11/26 16:51
 * @Version 1.0
 * @Description TODO
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Fruit {
    /** id */
    private Integer fruitId;
    /** fruit name */
    private String fruitName;
}
