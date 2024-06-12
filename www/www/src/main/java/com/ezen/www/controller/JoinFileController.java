package com.ezen.www.controller;

import com.ezen.www.domain.JoinFileVO;
import com.ezen.www.handler.FileHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;



@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/joinfile/*")
public class JoinFileController {
    private final FileHandler fh;


    @GetMapping("/job")
    public void job(){}

    @PostMapping("/job")
    public String job(JoinFileVO joinFileVO, @RequestParam(name="files", required = false) MultipartFile files,
                      @RequestParam(name="filesimg", required = false) MultipartFile filesimg) throws IOException {
        log.info(">>>> JoinFileVO >> {}", joinFileVO);
        fh.saveFile(joinFileVO, files, filesimg);

        return "/joinfile/job";
    }
}
