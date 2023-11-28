package com.zmr.topic.controller;

import com.zmr.main.response.ResponseResult;
import com.zmr.topic.entity.VoteInfo;
import com.zmr.topic.service.VoteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/28 22:17
 * @Version 1.0
 * @Description TODO
 **/
@RestController
@RequestMapping("/voteInfo")
public class VoteInfoController {
    @Autowired
    private VoteInfoService voteInfoService;

    @PostMapping("/insert")
    public ResponseResult insert(@RequestBody VoteInfo voteInfo) {
        Integer insert = voteInfoService.insert(voteInfo);
        if (insert > 0) {
            return ResponseResult.success();
        } else {
            return ResponseResult.fail(400, "insert vote info failed.");
        }
    }

    @PostMapping("/findAllVoteInfos")
    public ResponseResult findAllVoteInfos() {
        List<VoteInfo> allVoteInfos = voteInfoService.findAllVoteInfos();
        return ResponseResult.success(allVoteInfos);
    }

    @PostMapping("/deleteById")
    public ResponseResult deleteById(@RequestParam Integer id) {
        Integer count = voteInfoService.deleteById(id);
        if (count > 0) {
            return ResponseResult.success();
        } else {
            return ResponseResult.fail(400, "Delete vote info failed.");
        }
    }

    @PostMapping("/update")
    public ResponseResult update(@RequestBody VoteInfo voteInfo) {
        Integer update = voteInfoService.update(voteInfo);
        if (update > 0) {
            return ResponseResult.success();
        } else {
            return ResponseResult.fail(400, "Update vote info failed.");
        }
    }

    @PostMapping("/userCountAdd")
    public ResponseResult userCountAdd(@RequestBody VoteInfo voteInfo) {
        Integer userCountAdd = voteInfoService.userCountAdd(voteInfo);
        if (userCountAdd > 0) {
            return ResponseResult.success();
        } else {
            return ResponseResult.fail(400, "User count add failed.");
        }
    }

    @PostMapping("/findAVoteInfoByDesc")
    public ResponseResult findAVoteInfoByDesc(@RequestBody String desc) {
        VoteInfo aVoteInfoByDesc = voteInfoService.findAVoteInfoByDesc(desc);
        if (aVoteInfoByDesc == null) {
            return ResponseResult.fail(400, "It doesn't exist for the vote info you want to find!");
        } else {
            return ResponseResult.success(aVoteInfoByDesc);
        }
    }
}
