package com.gc.apps.online.cache.entity;

import java.io.Serializable;

/**
 * 
 * DoctorEntity.java
 *
 * @Description: 医生实体
 *
 * @version  
 * @Creator haiwang  @Date:2015�?8�?13�? 上午10:34:36
 * @Copyright gc-isoft 2002-2015
 */
public class DoctorEntity implements Serializable {

    private int doctorID;
    private int doctorUserId;
    private String doctorName;
    private String birthDay;
    private String mobile;
    private String sex;
    private String serviceFlag;
    private String certFlag;
    private String title;
    private String email;
    private String photo;
    private String doctorIntro;
    private String loginName;
    private String evalPercent;
    private String consultCount;
    private String deptCatId;
    private String deptCatName;
    private String serverStatus;
    private String flowers;
    private String skilled;
    public int getDoctorID() {
        return doctorID;
    }
    public void setDoctorID(int doctorID) {
        this.doctorID = doctorID;
    }
    public int getDoctorUserId() {
        return doctorUserId;
    }
    public void setDoctorUserId(int doctorUserId) {
        this.doctorUserId = doctorUserId;
    }
    public String getDoctorName() {
        return doctorName;
    }
    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }
    public String getBirthDay() {
        return birthDay;
    }
    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getServiceFlag() {
        return serviceFlag;
    }
    public void setServiceFlag(String serviceFlag) {
        this.serviceFlag = serviceFlag;
    }
    public String getCertFlag() {
        return certFlag;
    }
    public void setCertFlag(String certFlag) {
        this.certFlag = certFlag;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoto() {
        return photo;
    }
    public void setPhoto(String photo) {
        this.photo = photo;
    }
    public String getDoctorIntro() {
        return doctorIntro;
    }
    public void setDoctorIntro(String doctorIntro) {
        this.doctorIntro = doctorIntro;
    }
    public String getLoginName() {
        return loginName;
    }
    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }
    public String getEvalPercent() {
        return evalPercent;
    }
    public void setEvalPercent(String evalPercent) {
        this.evalPercent = evalPercent;
    }
    public String getConsultCount() {
        return consultCount;
    }
    public void setConsultCount(String consultCount) {
        this.consultCount = consultCount;
    }
    public String getDeptCatName() {
        return deptCatName;
    }
    public void setDeptCatName(String deptCatName) {
        this.deptCatName = deptCatName;
    }
    public String getServerStatus() {
        return serverStatus;
    }
    public void setServerStatus(String serverStatus) {
        this.serverStatus = serverStatus;
    }
    public String getFlowers() {
        return flowers;
    }
    public void setFlowers(String flowers) {
        this.flowers = flowers;
    }
    public String getSkilled() {
        return skilled;
    }
    public void setSkilled(String skilled) {
        this.skilled = skilled;
    }
    public String getDeptCatId() {
        return deptCatId;
    }
    public void setDeptCatId(String deptCatId) {
        this.deptCatId = deptCatId;
    }
    
}
