package com.ezen.www.repository;

import com.ezen.www.domain.CommentVO;
import com.ezen.www.domain.TeacherVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewPageMapper {
    int post(CommentVO cvo);

    TeacherVO  detail(int tno);
}
