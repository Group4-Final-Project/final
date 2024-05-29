package com.ezen.www.repository;

import com.ezen.www.domain.CommunityVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {

    int register(CommunityVO cvo);
}
