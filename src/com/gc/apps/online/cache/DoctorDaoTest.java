package com.gc.apps.online.cache;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gc.apps.online.cache.entity.DoctorEntity;

  
public class DoctorDaoTest {  
    private ApplicationContext app;  
    private DoctorDao doctorDao;  
  
    @Before  
    public void before() throws Exception {  
        app = new ClassPathXmlApplicationContext("redis-context.xml");
        //app = new FileSystemXmlApplicationContext("webRoot/WEB-INF/conf/redis-context.xml");
        doctorDao = (DoctorDao) app.getBean("doctorDAO");  
    }  
  
    @Test  
    public void crud() {  
        // -------------- Create ---------------  
        int uid = 12345;
        String doctorName = "寮犲尰鐢�";

        DoctorEntity doctorUser = new DoctorEntity();  
        doctorUser.setDoctorID(uid);
        doctorUser.setDoctorName(doctorName);
        doctorUser.setServerStatus("AA01");
        doctorDao.save(doctorUser);  
  
        // ---------------Read ---------------  
        doctorUser = doctorDao.get(String.valueOf(uid));
        assertEquals(doctorName, doctorUser.getDoctorName());  
  
        // --------------Update ------------  
        doctorUser.setDoctorName("鐜嬩簩");
        doctorDao.save(doctorUser);
        doctorUser = doctorDao.get(String.valueOf(uid));  
        assertEquals("鐜嬩簩", doctorUser.getDoctorName());  
  
        // --------------Delete ------------  
        doctorDao.delete(String.valueOf(uid));  
        doctorUser = doctorDao.get(String.valueOf(uid));  
        assertNull(doctorUser);  
    }  
}