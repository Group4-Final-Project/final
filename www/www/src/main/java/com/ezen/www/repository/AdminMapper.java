package com.ezen.www.repository;


import com.ezen.www.domain.MemberVO;
import com.ezen.www.domain.MenuVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdminMapper {

    List<MenuVO> admin_menuList();

    List<MemberVO> admin_memberList();

    void ModifyAuth(Map<String, String> authM);

    void ManageMeber(Map<String, String> isDelM);

    void authDeleteMember(Map<String, Object> realDeleteMember);

    void realDeleteMember(Map<String, Object> realDeleteMember);

    int getMemberCount(MemberVO memberVO);
}
