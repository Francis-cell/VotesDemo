package com.zmr.fruits.mapper;

import com.zmr.fruits.entity.FruitVote;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/27 21:35
 * @Version 1.0
 * @Description TODO
 **/
@Mapper
public interface FruitVoteMapper {
    /** select all fruits and votes about them. */
    List<FruitVote> findAllFruitsVote();

    /** save or update fruit vote result. */
    Integer saveOrUpdateFruitVoteResult(List<FruitVote> fruitVoteList);
}
