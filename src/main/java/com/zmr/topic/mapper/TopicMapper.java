package com.zmr.topic.mapper;

import com.zmr.topic.entity.Topic;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/26 14:53
 * @Version 1.0
 * @Description TODO
 **/
@Mapper
public interface TopicMapper {
    /***
     * insert a topic.
     * @return the affected lines.
     */
    Integer insert(Topic topic);

    /**
     * find all topics.
     * @return all topics.
     */
    List<Topic> findAllTopics();

    /**
     * delete a topic by id.
     * @return the affected lines.
     */
    Integer deleteById(Integer id);

    /**
     * update a topic name and topic class
     * @return the affected lines.
     */
    Integer update(Topic topic);
}
