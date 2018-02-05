package com.Ace.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class TestController implements Controller{

	@Override
	public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		ModelAndView mv = new ModelAndView("test");
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("msg", "操作成功");
		map.put("ret", 1);
		//mv.addObject("message", "mytest");
		mv.addObject("result", map);
		return mv;
	}

}
