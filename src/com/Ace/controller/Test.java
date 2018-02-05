package com.Ace.controller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gc.apps.online.cache.UserDao;
import com.util.SpringContextHolder;

public class Test {
	private static ApplicationContext app;

	public static void main(String[] args) {
		// UserDao userdao2 = SpringContextHolder.getBean("userDAO");
		// userdao2.testAppContext();
		 app = new ClassPathXmlApplicationContext("redis-context.xml");
	}

}
