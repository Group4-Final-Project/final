package com.ezen.www.service;


import com.ezen.www.domain.QnaVO;
import com.ezen.www.domain.PagingVO;
import com.ezen.www.repository.QnaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements CommunityService {

    private final QnaMapper qnaMapper;

    @Override
    public List<QnaVO> getQna(PagingVO pgvo) {
        return qnaMapper.getQna(pgvo);
    }

    @Override
    public int getTotalCount(PagingVO pgvo) {
        return qnaMapper.getTotalCount(pgvo);
    }


}
