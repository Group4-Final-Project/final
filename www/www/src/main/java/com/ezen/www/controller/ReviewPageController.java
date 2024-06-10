package com.ezen.www.controller;

import com.ezen.www.domain.CommentVO;
import com.ezen.www.domain.TeacherVO;
import com.ezen.www.service.ReviewPageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/rev/*")
public class ReviewPageController {
    private  final ReviewPageService rps;

    @GetMapping("/reviewPage")
    public String review(Model m,@RequestParam("tno") int tno){
        TeacherVO tvo=rps.detail(tno);
        m.addAttribute("tvo",tvo);
        log.info(">>tvo>>{}",tvo);
        return"/review/reviewPage";
    }
    @PostMapping("/post")
    @ResponseBody
    public String post(@RequestBody CommentVO cvo){
        log.info("cvo>>{}",cvo);
        int isOk=rps.post(cvo);
        return isOk>0? "1":"0";
    }
}
