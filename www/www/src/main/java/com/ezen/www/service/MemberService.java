package com.ezen.www.service;

import com.ezen.www.domain.MemberVO;

import java.security.Principal;
import java.util.List;

public interface MemberService {
    int insert(MemberVO mvo);

    List<MemberVO> getList();

    void modify(MemberVO mvo);

    void delete(String name);
}
