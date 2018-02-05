package com.Ace.controller;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.gc.apps.online.cache.UserDao;
import com.util.SpringContextHolder;

@Controller
public class Hello {

	private UserDao userdao;

	@RequestMapping(value = "/hello")
	public ModelAndView test(HttpServletRequest request, HttpServletResponse response) {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json");
		ModelAndView mv = new ModelAndView("test");
		try {
			PrintWriter printWriter = response.getWriter();
			printWriter.print("1111111111111111111111111111111");

			// 1、
			userdao = SpringContextHolder.getBean("userDAO");
			userdao.testAppContext();
			// ApplicationContext app = SpringContextHolder
			// .getApplicationContext();
			// userdao = app.getBean(UserDao.class);
			// userdao.testAppContext();

			// 2、
			// WebApplicationContext app =
			// ContextLoader.getCurrentWebApplicationContext();
			// ServletContext context = request.getServletContext();
			// WebApplicationContext webapp =
			// (WebApplicationContext)context.getAttribute("org.springframework.web.servlet.FrameworkServlet.CONTEXT.dispatcherServlet");
			// userdao = webapp.getBean(UserDao.class);
			// userdao.testAppContext();

			// 3
			// RequestContextUtils.getWebApplicationContext(request)
			
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			for (int i = 0; i < 3; i++) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("msg", "操作成功" + i);
				map.put("ret", i);
				list.add(map);
			}
			
			mv.addObject("result", list);

			mv.addObject("message", "mytest");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return mv;
	}

	@RequestMapping(value = "/ok")
	@ResponseBody
	public Object ok() {

		System.out.println("ok");

		List<String> list = new ArrayList<String>();

		list.add("���ӻ�");

		list.add("����");

		list.add("ɽ��ʡ");

		list.add("�෢��");

		list.add("D���");

		list.add("�淶");

		list.add("222");

		list.add("������");

		list.add("���߶�");

		return list;

	}

	@RequestMapping(value = "/hello2", method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Spring 3 MVC Hello World");
		return "hello2";
	}
}