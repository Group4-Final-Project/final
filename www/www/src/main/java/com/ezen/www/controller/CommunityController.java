package com.ezen.www.controller;

import com.ezen.www.domain.CommunityVO;
import com.ezen.www.service.CommunityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/comm/*")
@RequiredArgsConstructor
@Slf4j
public class CommunityController {
    private final CommunityService cts;

    @GetMapping("/register")
    public String register(){
    return "/board/register";
    }
    @PostMapping("/register")
    public String register(CommunityVO cvo){
       log.info(">>cvo>>{}",cvo);
        log.info(">>test>>");
        int isOk=cts.register(cvo);
        return "/board/qna";
    }

    @GetMapping("/announcement")
    public String announcement() {

        return "/board/announcement";
    }

    @GetMapping("/qna")
    public String qna(){
        return "/board/qna";
    }



}

