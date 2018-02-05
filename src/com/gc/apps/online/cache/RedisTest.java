package com.gc.apps.online.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gc.apps.online.cache.entity.DoctorEntity;
import com.gc.apps.online.cache.impl.DoctorDAOImpl;


/**
 * RedisTest.java
 * 
 * @Description: TODO(描述这个类的作用)
 * 
 * @version
 * @Creator haiwang @Date:2015-12-24 下午1:37:09
 * @Copyright gc-isoft 2002-2015
 */
public class RedisTest {
	
	private ApplicationContext app;
	
	private DoctorDao doctorDao;

	public static void main(String[] args) {
		RedisTest redisTest = new RedisTest();
		redisTest.test();
	}

	private void test() {
		app = new ClassPathXmlApplicationContext("/WEB-INF//redis-context.xml");
		// app = new
		// FileSystemXmlApplicationContext("webRoot/WEB-INF/conf/redis-context.xml");
		
		int uid = 12345;
		String doctorName = "张医生";
		DoctorEntity doctorUser = new DoctorEntity();
		doctorUser.setDoctorID(uid);
		doctorUser.setDoctorName(doctorName);
		doctorUser.setServerStatus("AA01");
		doctorDao.save(doctorUser);
		
		//read
		DoctorEntity doctorUser2 = new DoctorEntity();
		doctorUser2 = doctorDao.get(String.valueOf(uid));
		System.out.println("uid :"+doctorUser2.getDoctorID()+" "+doctorUser2.getDoctorName());
		
		
		//update
		doctorUser.setDoctorName("王二");
	    doctorDao.save(doctorUser);
	    DoctorEntity doctorUser3 = new DoctorEntity();
	    doctorUser3 = doctorDao.get(String.valueOf(uid));  
	    System.out.println("uid :"+doctorUser3.getDoctorID()+" "+doctorUser3.getDoctorName());
	}
}
