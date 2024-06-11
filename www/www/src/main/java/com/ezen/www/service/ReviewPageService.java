package com.ezen.www.service;

import com.ezen.www.domain.CommentVO;
import com.ezen.www.domain.TeacherVO;

public interface ReviewPageService {
    int post(CommentVO cvo);

    TeacherVO  detail(int tno);
}
