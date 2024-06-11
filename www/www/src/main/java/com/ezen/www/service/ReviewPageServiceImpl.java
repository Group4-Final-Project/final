package com.ezen.www.service;

import com.ezen.www.domain.CommentVO;
import com.ezen.www.domain.TeacherVO;
import com.ezen.www.repository.ReviewPageMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewPageServiceImpl implements ReviewPageService{
    private final ReviewPageMapper reviewPageMapper;

    @Override
    public int post(CommentVO cvo) {
        return reviewPageMapper.post(cvo);
    }

    @Override
    public TeacherVO  detail(int tno) {
        return reviewPageMapper.detail(tno);
    }
}
