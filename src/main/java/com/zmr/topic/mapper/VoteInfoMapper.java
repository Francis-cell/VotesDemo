package com.zmr.topic.mapper;

import com.zmr.topic.entity.VoteInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/28 22:07
 * @Version 1.0
 * @Description TODO
 **/
@Mapper
public interface VoteInfoMapper {
    /***
     * insert a vote info.
     * @return the affected lines.
     */
    Integer insert(VoteInfo voteInfo);

    /**
     * find all vote infos.
     * @return all topics.
     */
    List<VoteInfo> findAllVoteInfos();

    /**
     * delete a vote info by id.
     * @return the affected lines.
     */
    Integer deleteById(Integer id);

    /**
     * update a vote info name and vote info class
     * @return the affected lines.
     */
    Integer update(VoteInfo voteInfo);

    /**
     * add the user count for the vote info.
     * @return the affected lines.
     */
    Integer userCountAdd(VoteInfo voteInfo);

    /**
     * find the vote info by desc.
     * @return the affected lines.
     */
    VoteInfo findAVoteInfoByDesc(String desc);
}
