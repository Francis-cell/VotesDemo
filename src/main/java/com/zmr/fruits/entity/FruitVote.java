package com.zmr.fruits.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @Author franciszmr
 * @Date 2023/11/27 21:47
 * @Version 1.0
 * @Description TODO
 **/
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FruitVote {
    /** id */
    private Integer id;
    /** Fruit ID */
    private Integer fruitId;
    /** fruit name */
    private String fruitName;
    /** vote count */
    private Integer voteCount;

    public void incrementVoteCount() {
        this.voteCount = this.voteCount + 1;
    }
}
