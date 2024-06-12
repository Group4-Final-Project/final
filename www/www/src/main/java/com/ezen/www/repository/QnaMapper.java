package com.ezen.www.repository;

import com.ezen.www.domain.QnaVO;
import com.ezen.www.domain.PagingVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QnaMapper {

    List<QnaVO> getQna(PagingVO pgvo);

    int getTotalCount(PagingVO pgvo);

    List<QnaVO> qna_list(QnaVO qnaVO);

    void modifyQna(QnaVO qnaVO);
}
