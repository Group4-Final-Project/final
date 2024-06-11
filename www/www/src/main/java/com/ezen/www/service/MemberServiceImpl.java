package com.ezen.www.service;

import com.ezen.www.domain.MemberVO;
import com.ezen.www.repository.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberMapper memberMapper;

    private final PasswordEncoder passwordEncoder;

    @Override
    public int register(MemberVO mvo) {
        int isOk = memberMapper.register(mvo);
        return isOk > 0 ? memberMapper.registerAuth(mvo.getId()) : 0;
    }

    @Override
    public MemberVO checkSignId(String id) {
        return memberMapper.checkSignId(id);
    }

    @Override
    public MemberVO getMemberId(String id) {
        return memberMapper.getMemberId(id);
    }

    @Override
    public void modify(MemberVO mvo) {
        memberMapper.modify(mvo);
    }

    @Override
    public void pwdModify(MemberVO mvo) {
        memberMapper.pwdModify(mvo);
    }

    @Override
    public void resign(String name) {
        memberMapper.resign(name);
    }

    @Override
    public void kakaoregister(MemberVO kakaomvo) {
        String encodedPwd = passwordEncoder.encode(kakaomvo.getPwd());
        kakaomvo.setPwd(encodedPwd);
        memberMapper.kakaoregister(kakaomvo);
        if(kakaomvo != null){
            memberMapper.registerKakaoAuth(kakaomvo.getId());
        }

    }


    @Override
    @Transactional(readOnly = true)
    public MemberVO findMember(String id) {
        return memberMapper.findMember(id);
    }

//    @Override
//    public MemberVO findMember(String id) {
//        return memberMapper.findMember(id);
//    }


}
