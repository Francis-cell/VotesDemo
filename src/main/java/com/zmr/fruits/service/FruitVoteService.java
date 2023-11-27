package com.zmr.fruits.service;

import com.zmr.fruits.entity.FruitVote;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/27 22:34
 * @Version 1.0
 * @Description TODO
 **/
public interface FruitVoteService {
    /** select all fruits and votes about them. */
    List<FruitVote> findAllFruitsVote();

    /** save or update fruit vote result. */
    Integer saveOrUpdateFruitVoteResult(List<String> fruitVoteList);
}
