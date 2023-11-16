package com.zmr.login.mapper;


import com.zmr.login.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/14 23:05
 */
@Mapper
public interface UserMapper {
    /***
     * insert a user.
     * @param user
     * @return the affected lines.
     */
    Integer insert(User user);

    /**
     * find a user by userName.
     * @param userName
     * @return if the user is found, it will return the user, else return null.
     */
    User findByUserName(String userName);

    /**
     * delete a user by id.
     * @param id
     * @return the affected lines.
     */
    Integer deleteById(Integer id);

    /**
     * update user info for a specific user.
     * @param user
     * @return the affected lines.
     */
    Integer update(User user);

    /**
     * find a user by userAccount
     * @param userAccount
     * @return if the user is found, it will return the user, else return null.
     */
    User findByUserAccount(String userAccount);
}
