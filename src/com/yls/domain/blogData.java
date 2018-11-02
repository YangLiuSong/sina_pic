package com.yls.domain;

public class blogData {
	private String weibo_id;
	private String pic_id;
	private String pic_url;
	private String tag_ids;
	private String tag_names;
	private int count;
	private String month;

	public String getWeibo_id() {
		return weibo_id;
	}

	public void setWeibo_id(String weibo_id) {
		this.weibo_id = weibo_id;
	}

	public String getPic_id() {
		return pic_id;
	}

	public void setPic_id(String pic_id) {
		this.pic_id = pic_id;
	}

	public String getPic_url() {
		return pic_url;
	}

	public void setPic_url(String pic_url) {
		this.pic_url = pic_url;
	}

	public String getTag_ids() {
		return tag_ids;
	}

	public void setTag_ids(String tag_ids) {
		this.tag_ids = tag_ids;
	}

	public String getTag_names() {
		return tag_names;
	}

	public void setTag_names(String tag_names) {
		this.tag_names = tag_names;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public blogData() {
		this.weibo_id = weibo_id;
		this.pic_id = pic_id;
		this.pic_url = pic_url;
		this.tag_ids = tag_ids;
		this.tag_names = tag_names;
		this.count = count;
		this.month = month;
	}

	@Override
	public String toString() {
		return "blogData{" +
				"weibo_id" + weibo_id + '\'' +
				"pic_id='" + pic_id + '\'' +
				", pic_url='" + pic_url + '\'' +
				", tag_ids='" + tag_ids + '\'' +
				", tag_names='" + tag_names + '\'' +
				", count='" + count + '\'' +
				", month='" + month + '\'' +
				'}';
	}
}
