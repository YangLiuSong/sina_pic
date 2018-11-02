package com.yls.servicesImpl;

import java.util.List;
import java.util.Map;

import com.yls.dao.blogDataDao;
import com.yls.domain.blogData;
import com.yls.services.blogDataService;

public class blogDataServiceSqlImpl implements blogDataService{

	private blogDataDao dao;
	public blogDataDao getDao() {
		return dao;
	}

	public void setDao(blogDataDao dao) {
		this.dao = dao;
	}
	@Override
	public List<blogData> getAll() {
		return dao.queryAll();
	}


	@Override
	public blogData getOne(String pic_id) {
		return dao.queryOne(pic_id);
	}

	@Override
	public boolean updateOne(Map<String, Object> map) {
		return dao.update(map);
	}

	@Override
	public List<blogData> pagination(String mon) {
		return dao.pagination(mon);
	}


}
