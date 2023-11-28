package com.zmr.topic.service;

import com.zmr.topic.entity.VoteInfo;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/28 22:17
 * @Version 1.0
 * @Description TODO
 **/
public interface VoteInfoService {
    /** insert a vote info. */
    Integer insert(VoteInfo voteInfo);

    /** find all vote infos. */
    List<VoteInfo> findAllVoteInfos();

    /** delete a vote info by id. */
    Integer deleteById(Integer id);

    /** update a vote info name and vote info class */
    Integer update(VoteInfo voteInfo);

    /** add the user count for the vote info. */
    Integer userCountAdd(VoteInfo voteInfo);
}
