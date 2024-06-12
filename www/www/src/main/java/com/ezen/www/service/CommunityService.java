package com.ezen.www.service;

import com.ezen.www.domain.QnaVO;
import com.ezen.www.domain.PagingVO;

import java.util.List;

public interface CommunityService {

    List<QnaVO> getQna(PagingVO pgvo);

    int getTotalCount(PagingVO pgvo);
}
