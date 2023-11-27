package com.zmr.fruits.controller;

import com.zmr.fruits.entity.FruitVote;
import com.zmr.fruits.service.FruitVoteService;
import com.zmr.main.response.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/27 22:33
 * @Version 1.0
 * @Description TODO
 **/
@RestController
@RequestMapping("/fruitsVote")
public class FruitVoteController {
    @Autowired
    private FruitVoteService fruitVoteService;

    @PostMapping("/findAll")
    public ResponseResult findAllFruitsVote() {
        List<FruitVote> allFruitsVote = fruitVoteService.findAllFruitsVote();
        return ResponseResult.success(allFruitsVote);
    }

    @PostMapping("/saveOrUpdate")
    public ResponseResult saveOrUpdateFruitVoteResult(@RequestBody List<String> fruitVoteList) {
        Integer saveOrUpdateCount = fruitVoteService.saveOrUpdateFruitVoteResult(fruitVoteList);
        if (saveOrUpdateCount > 0) {
            return ResponseResult.success();
        } else {
            return ResponseResult.fail(500, "save or update value failed.");
        }
    }
}
