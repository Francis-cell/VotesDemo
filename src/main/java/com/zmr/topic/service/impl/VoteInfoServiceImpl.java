package com.zmr.topic.service.impl;

import com.zmr.topic.entity.VoteInfo;
import com.zmr.topic.mapper.VoteInfoMapper;
import com.zmr.topic.service.VoteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author franciszmr
 * @Date 2023/11/28 22:19
 * @Version 1.0
 * @Description TODO
 **/
@Service
public class VoteInfoServiceImpl implements VoteInfoService {

    @Autowired
    private VoteInfoMapper voteInfoMapper;

    @Override
    public Integer insert(VoteInfo voteInfo) {
        return voteInfoMapper.insert(voteInfo);
    }

    @Override
    public List<VoteInfo> findAllVoteInfos() {
        return voteInfoMapper.findAllVoteInfos();
    }

    @Override
    public Integer deleteById(Integer id) {
        return voteInfoMapper.deleteById(id);
    }

    @Override
    public Integer update(VoteInfo voteInfo) {
        return voteInfoMapper.update(voteInfo);
    }

    @Override
    public Integer userCountAdd(VoteInfo voteInfo) {
        // get the old count, if the vote info not exist in the DB, insert one
        if (voteInfo != null && voteInfo.getDesc() != null && !voteInfo.getDesc().isEmpty()) {
            VoteInfo tempVoteInfo = voteInfoMapper.findAVoteInfoByDesc(voteInfo.getDesc());
            if (tempVoteInfo == null) {
                // insert a new record
                return voteInfoMapper.insert(voteInfo);
            } else {
                try {
                    voteInfo.setFuncDetails(Integer.toString(Integer.parseInt(tempVoteInfo.getFuncDetails()) + 1));
                } catch (NumberFormatException e) {
                    throw new RuntimeException(e);
                }
                // update the record funcDetails
                return voteInfoMapper.userCountAdd(voteInfo);
            }
        }
        return -1;
    }
}
