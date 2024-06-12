package com.ezen.www.service;

import com.ezen.www.domain.MemberVO;
import com.ezen.www.domain.MenuVO;
import com.ezen.www.domain.QnaVO;
import com.ezen.www.repository.AdminMapper;
import com.ezen.www.repository.AuthMapper;
import com.ezen.www.repository.QnaMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminServiceImpl implements AdminService{

    private final AdminMapper adminMapper;
    private final AuthMapper authMapper;
    private final QnaMapper qnaMapper;

    @Override
    public List<MenuVO> admin_menuList() {
        return adminMapper.admin_menuList();
    }

    @Override
    public List<MemberVO> admin_memberList() {
        List<MemberVO> memberVOList = adminMapper.admin_memberList();
        for(MemberVO memberVO : memberVOList){
            memberVO.setAuthList(authMapper.getAuth(memberVO.getId()));
        }
        return memberVOList;
    }

    @Override
    public void ModifyAuth(String id, String auth) {
        Map<String, String> authM = new HashMap<>();
        authM.put("id", id);
        authM.put("auth", auth);
        adminMapper.ModifyAuth(authM);
    }

    @Override
    public void ManageMeber(String id, String isDel) {
        Map<String, String> isDelM = new HashMap<>();
        isDelM.put("id", id);
        isDelM.put("isDel", isDel);
        adminMapper.ManageMeber(isDelM);
    }

    @Override
    public void realDeleteMember(String id) {
        Map<String, Object> realDeleteMember = new HashMap<>();
        realDeleteMember.put("id", id);
        adminMapper.authDeleteMember(realDeleteMember);
        adminMapper.realDeleteMember(realDeleteMember);

    }

    @Override
    public int getMemberCount(MemberVO memberVO) {
        return adminMapper.getMemberCount(memberVO);
    }

    @Override
    public void qna_register(QnaVO qvo) {
        adminMapper.qna_register(qvo);
    }

    @Override
    public List<QnaVO> qna_list(QnaVO qnaVO) {
        log.info("qnalist in!");
        return qnaMapper.qna_list(qnaVO);
    }

    @Override
    public void modifyQna(QnaVO qnaVO) {
        qnaMapper.modifyQna(qnaVO);
    }


}
