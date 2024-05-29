package com.ezen.www.service;


import com.ezen.www.domain.CommunityVO;
import com.ezen.www.repository.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements CommunityService {
    private final BoardMapper boardMapper;


    @Override
    public int register(CommunityVO cvo) {
        return boardMapper.register(cvo);
    }
}
