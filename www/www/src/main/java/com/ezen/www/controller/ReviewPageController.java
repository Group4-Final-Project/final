package com.ezen.www.controller;

import com.ezen.www.domain.CommentVO;
import com.ezen.www.domain.TeacherVO;
import com.ezen.www.service.ReviewPageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/rev/*")
public class ReviewPageController {
    private final ReviewPageService rps;

    @GetMapping("/reviewPage")
    public String review(Model m, @RequestParam("tno") int tno) {
        TeacherVO tvo = rps.detail(tno);
        List<TeacherVO> teacherList = rps.getAllTeachers();
        m.addAttribute("tvo", tvo);
        m.addAttribute("teacherList", teacherList);
        log.info(">>tvo>>{}", tvo);
        return "/review/reviewPage";
    }

    @PostMapping("/post")
    @ResponseBody
    public String post(@RequestBody CommentVO cvo) {
        log.info("Received comment: {}", cvo);
        try {
            int isOk = rps.post(cvo);
            return isOk > 0 ? "1" : "0";
        } catch (Exception e) {
            return "0";
        }
    }
    @GetMapping("/list")
    @ResponseBody
    public List<CommentVO> getComments(@RequestParam("tno") int tno, @RequestParam(value = "page", defaultValue = "1") int page) {
        List<CommentVO> comments = rps.getComments(tno);
        return comments;
    }
    @DeleteMapping("/delete")
    @ResponseBody
    public String delete(@RequestParam("cno") int cno) {
        try {
            int isOk = rps.delete(cno);
            return isOk > 0 ? "1" : "0";
        } catch (Exception e) {
            return "0";
        }
    }
    @PutMapping("/modify")
    @ResponseBody
    public String modify(@RequestBody CommentVO cvo) {
        log.info("Modifying comment: {}", cvo);
        try {
            int isOk = rps.update(cvo);
            return isOk > 0 ? "1" : "0";
        } catch (Exception e) {
            return "0";
        }
    }
}
