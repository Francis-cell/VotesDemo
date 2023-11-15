import com.zmr.login.entity.User;
import com.zmr.login.mapper.UserMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;


/**
 * @author franciszmr
 * @version 1.0
 * @date 2023/11/15 20:57
 * @description test method
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class UserMapperTest {
    @Resource
    private UserMapper userMapper;
    
    @Test
    public void insert() {
        User user = new User();
        user.setUserName("admin");
        user.setUserAccount("admin");
        Integer rows = userMapper.insert(user);
        System.out.println(rows);
    }
    
    @Test
    public void deleteById() {
        Integer rows = userMapper.deleteById(3);
        System.out.println(rows);
    }
    
    @Test
    public void update() {
        User user = new User();
        user.setUserId(2L);
        user.setUserName("xiaoHei");
        user.setUserAccount("xiaoHei");
        user.setEmail("xiaohei@example.com");
        Integer rows = userMapper.update(user);
        System.out.println(rows);
    }
}
