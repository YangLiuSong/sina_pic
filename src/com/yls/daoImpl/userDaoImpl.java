package com.yls.daoImpl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import com.yls.dao.userDao;
import com.yls.domain.User;

public class userDaoImpl implements userDao {
	@Autowired
	private SqlSessionTemplate sqlSession;
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	@Override
	public boolean checkUser(User user) {
		int id = sqlSession.selectOne("com.lijian.daoImpl.userMapper.getUser", user);
		//System.out.println(id);
		if(id>0){
			return true;
		}
		return false;
	}

}
