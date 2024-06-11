package com.ezen.www.repository;

import com.ezen.www.domain.AuthVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AuthMapper {

    List<AuthVO> getAuth(String id);




}
