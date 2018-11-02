package com.yls.dao;

import java.util.List;
import java.util.Map;

import com.yls.domain.blogData;

/**
 * ����΢�����ݵĽӿ�
 * @author Administrator
 *
 */
public interface blogDataDao {
	public List<blogData> queryAll();
	public blogData queryOne(String pic_id);
	public boolean update(Map<String, Object> map);
	public List<blogData>  pagination(String mon);

}
