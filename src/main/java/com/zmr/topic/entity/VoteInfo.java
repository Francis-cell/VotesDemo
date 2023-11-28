package com.zmr.topic.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @Author franciszmr
 * @Date 2023/11/28 22:07
 * @Version 1.0
 * @Description TODO
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VoteInfo {
    /** id */
    private Integer id;
    /** desc */
    private String desc;
    /** func */
    private String func;
    /** funcDetails */
    private String funcDetails;
}
