package com.ezen.www.controller;

import com.ezen.www.domain.JoinFileVO;
import com.ezen.www.domain.MemberVO;
import com.ezen.www.handler.FileHandler;
import com.ezen.www.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/member/*")
public class MemberController {

    private final MemberService msv;
    private final FileHandler fh;

    @GetMapping("/register")
    public void register(){}





    @GetMapping("/login")
    public void login(){}

    @GetMapping("/job")
    public void job(){}

    @PostMapping("/job")
    public String job(JoinFileVO joinFileVO, @RequestParam(name="files", required = false)MultipartFile files) throws IOException {
        log.info(">>>> JoinFileVO >> {}",joinFileVO);
        fh.saveFile(joinFileVO, files);

        return "/member/job";
    }
}
