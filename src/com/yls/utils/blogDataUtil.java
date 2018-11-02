package com.yls.utils;

import org.json.JSONException;
import org.json.JSONObject;
import com.yls.domain.new_blog_data;
import com.yls.domain.blogData;

public class blogDataUtil {
	public static String imgtype = ".jpg";
	public static String webPath;
	public static String imgSaveFile = "blogimgs";

	public static new_blog_data bluidOneBlogUnTagDatas(blogData data) {
		new_blog_data nd;
		JSONObject jsb = builblogData(data);
		String new_id = data.getPic_id();
		String new_context = jsb.toString();
		nd = new new_blog_data(new_id, new_context);
		return nd;
	}
	public static JSONObject builblogData(blogData blogData) {
		System.out.println(blogData);
		JSONObject rObject = new JSONObject();
		try {
			rObject.put("pic_url", blogData.getPic_url());
			rObject.put("month", blogData.getMonth());
			rObject.put("count", blogData.getCount());
			rObject.put("tag_ids", blogData.getTag_ids());
			rObject.put("tag_names", blogData.getTag_names());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return rObject;
	}
}

//	public static JSONArray getImgs(blogData object){
//		JSONArray rArray = new JSONArray();
//		String pic = object.getPic_ids();
//
//		String[] p1 = pic.split("\\[");
//		String[] p2 = p1[1].split("\\]");
//		String[] p3 = p2[0].split(",");
//		List<String> pic_url = new ArrayList<>();
//		for(int i = 0;i<p3.length;i++){
//			String pi = p3[i].split("\"")[1];
//			pic_url.add(pi);
//		}
//				/**
//				 * ����ͼƬ
//				 **/
//		imageUtil.downloadImgs(pic_url,webPath + "\\" + imgSaveFile);
//		System.out.println(webPath + imgSaveFile);
//		for(int i =0;i<pic_url.size();i++){
//			rArray.put(imgSaveFile + "/" +pic_url.get(i)+imgtype);
////			System.out.println("img/blogimgs/"+pic_url.get(i)+imgtype);
//		}
//		return rArray;
//	}
//}
