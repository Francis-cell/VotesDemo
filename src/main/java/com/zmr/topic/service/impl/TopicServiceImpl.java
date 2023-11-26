package com.zmr.topic.service.impl;

import com.zmr.topic.entity.Topic;
import com.zmr.topic.mapper.TopicMapper;
import com.zmr.topic.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 15:06
 * @Version 1.0
 * @Description TODO
 **/
@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    private TopicMapper topicMapper;

    @Override
    public List<Topic> getAllTopics() {
        return topicMapper.findAllTopics();
    }
}
