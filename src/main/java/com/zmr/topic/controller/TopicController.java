package com.zmr.topic.controller;

import com.zmr.main.response.ResponseResult;
import com.zmr.topic.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author franciszmr
 * @Date 2023/11/26 15:04
 * @Version 1.0
 * @Description TODO
 **/
@RestController
@RequestMapping("/topic")
public class TopicController {
    @Autowired
    private TopicService topicService;

    @PostMapping("/getAllTopics")
    public ResponseResult getAllTopics() {
        return ResponseResult.success(topicService.getAllTopics());
    }
}
