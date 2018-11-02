package com.yls.daoImpl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;

import com.yls.dao.blogDataDao;
import com.yls.domain.blogData;


public class blogDataDaoSqlImpl implements blogDataDao{

	private SqlSessionTemplate sqlSession;
	public SqlSessionTemplate getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public List<blogData> queryAll() {
		return sqlSession.selectList("com.lijian.daoImpl.blogDataSqlMapper.getAll");
	}


	@Override
	public blogData queryOne(String pic_id) {
		return sqlSession.selectOne("com.lijian.daoImpl.blogDataSqlMapper.getOne",pic_id);
	}

	@Override
	public boolean update(Map<String, Object> map) {
		boolean b = (sqlSession.update("com.lijian.daoImpl.blogDataSqlMapper.update", map)==1);
//		sqlSession.commit();
		return b;
	}

	@Override
	public List<blogData> pagination(String mon) {
		List<blogData> list = sqlSession.selectList("com.lijian.daoImpl.blogDataSqlMapper.pagination",mon);
		return list;
	}



}
