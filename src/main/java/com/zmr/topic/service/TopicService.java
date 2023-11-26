package com.zmr.topic.service;

import com.zmr.topic.entity.Topic;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 15:05
 * @Version 1.0
 * @Description TODO
 **/
public interface TopicService {
    /**
     * get all topics
     */
    List<Topic> getAllTopics();
}
