package com.ezen.www.service;

import com.ezen.www.domain.MemberVO;
import com.ezen.www.domain.MenuVO;

import java.util.List;

public interface AdminService {

    List<MenuVO> admin_menuList();

    List<MemberVO> admin_memberList();


    void ModifyAuth(String id, String auth);

    void ManageMeber(String id, String isDel);

    void realDeleteMember(String id);

    int getMemberCount(MemberVO memberVO);
}