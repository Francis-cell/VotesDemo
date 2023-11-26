package com.zmr.topic.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @Author franciszmr
 * @Date 2023/11/26 14:53
 * @Version 1.0
 * @Description TODO
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Topic {
    /** id */
    private Integer Id;
    /** topic name */
    private String topicName;
    /** topic class */
    private String topicClass;
    /** description */
    private String description;
}
