package com.ezen.www.controller;

import com.ezen.www.domain.QnaVO;
import com.ezen.www.domain.PagingVO;
import com.ezen.www.handler.PagingHandler;
import com.ezen.www.service.CommunityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/community/*")
@RequiredArgsConstructor
@Slf4j
public class CommunityController {

    private final CommunityService csv;


    // about us 관련
    @GetMapping("/announcement")
    public void announcement() {}

    // qna 관련
    @GetMapping("/qna")
    public String qna(Model m, PagingVO pgvo){
        log.info("test");
        log.info("pgvo>>{}",pgvo);
        int totalCount=csv.getTotalCount(pgvo);
        PagingHandler ph=new PagingHandler(pgvo,totalCount);
        List<QnaVO> qna=csv.getQna(pgvo);
        m.addAttribute("qna",qna);
        m.addAttribute("ph",ph);
        return "/community/qna";
    }

    // event 관련
    @GetMapping("/event")
    public String event() {
        return "/community/event";
    }



}

