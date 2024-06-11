package com.ezen.www.repository;

import com.ezen.www.domain.JoinFileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {
    void JoinFiles(JoinFileVO joinFileVO);
}
