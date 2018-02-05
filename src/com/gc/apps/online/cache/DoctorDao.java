package com.gc.apps.online.cache;

import com.gc.apps.online.cache.entity.DoctorEntity;



public interface DoctorDao {  
    /** 
     * @param uid 
     * @param address 
     */  
    void save(DoctorEntity user);  
  
    /** 
     * @param uid 
     * @return 
     */  
    DoctorEntity get(String uid);  
  
    /** 
     * @param uid 
     */  
    void delete(String uid);  
    
}