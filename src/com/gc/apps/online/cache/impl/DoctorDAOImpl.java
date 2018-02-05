package com.gc.apps.online.cache.impl;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;

import com.gc.apps.online.cache.DoctorDao;
import com.gc.apps.online.cache.entity.DoctorEntity;


public class DoctorDAOImpl implements DoctorDao {

    @Autowired
    protected RedisTemplate<Serializable, Serializable> redisTemplate;

    public void save(final DoctorEntity doctor) {
        redisTemplate.execute(new RedisCallback<Object>() {

            @Override
            public Object doInRedis(RedisConnection connection) throws DataAccessException {
            	System.out.println("id=" + doctor.getDoctorID());
                connection.set(redisTemplate.getStringSerializer().serialize("user.uid." + doctor.getDoctorID()),
                               redisTemplate.getStringSerializer().serialize(doctor.getDoctorName()));
                return null;
            }
        });
    }

    @Override
    public DoctorEntity get(final String id) {
        return redisTemplate.execute(new RedisCallback<DoctorEntity>() {
            @Override
            public DoctorEntity doInRedis(RedisConnection connection) throws DataAccessException {
                byte[] key = redisTemplate.getStringSerializer().serialize("user.uid." + id);
                if (connection.exists(key)) {
                    byte[] value = connection.get(key);
                    String name = redisTemplate.getStringSerializer().deserialize(value);
                    DoctorEntity doctor = new DoctorEntity();
                    doctor.setDoctorID(Integer.valueOf(id));
                    doctor.setDoctorName(name);
                    return doctor;
                }
                return null;
            }
        });
    }

    public void delete(final String id) {
    	
    }

}
