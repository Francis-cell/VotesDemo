package com.zmr.fruits.service.impl;

import com.zmr.fruits.entity.FruitVote;
import com.zmr.fruits.mapper.FruitVoteMapper;
import com.zmr.fruits.service.FruitVoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/27 22:34
 * @Version 1.0
 * @Description TODO
 **/
@Service
public class FruitVoteServiceImpl implements FruitVoteService {
    @Autowired
    private FruitVoteMapper fruitVoteMapper;

    @Override
    public List<FruitVote> findAllFruitsVote() {
        return fruitVoteMapper.findAllFruitsVote();
    }

    @Override
    public Integer saveOrUpdateFruitVoteResult(List<String> fruitVoteList) {
        // find all fruits and vote about.
        List<FruitVote> allFruitsVote = fruitVoteMapper.findAllFruitsVote();
        // insert or update vote data.
        for (String fruitVote : fruitVoteList) {
            for (FruitVote vote : allFruitsVote) {
                if (vote.getFruitName() != null &&
                        fruitVote.equals(vote.getFruitName())) {
                    vote.incrementVoteCount();
                }
            }
        }
        return fruitVoteMapper.saveOrUpdateFruitVoteResult(allFruitsVote);
    }
}
