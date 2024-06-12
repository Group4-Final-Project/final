package com.ezen.www.controller;


import com.ezen.www.domain.MemberVO;
import com.ezen.www.domain.MenuVO;
import com.ezen.www.domain.QnaVO;
import com.ezen.www.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Controller
@RequestMapping("/admin/*")
public class AdminController {

    private final AdminService asv;

    // 메인페이지
    @GetMapping("/admin_main")
    public void admin_main(){}

    // main_index 페이지 리스트 출력
    @GetMapping("/admin_main_index")
    public String admin_main_index(Model m, MemberVO memberVO){
        List<MenuVO> menuList = asv.admin_menuList();
        m.addAttribute("admin_menuList", menuList);
        log.info("menuList {}", menuList);
        int MemberCount = asv.getMemberCount(memberVO);
        m.addAttribute("membCount", MemberCount);
        return "/admin/admin_main_index";
    }

    // 상품관리페이지
    @GetMapping("/admin_product")
    public void admin_product(){}










    // 회원관리페이지
    @GetMapping("/admin_member")
    public String admin_member(Model m, MemberVO memberVO){
        List<MemberVO> memberList = asv.admin_memberList();
        m.addAttribute("admin_member", memberList);
        int MemberCount = asv.getMemberCount(memberVO);
        m.addAttribute("membCount", MemberCount);
        return "/admin/admin_member";
    }

    // 권한 설정
    @PostMapping("/ModifyAuth")
    public String ModifyAuth(@RequestParam("id")String id, @RequestParam(value = "auth", required = false) String auth) {
        asv.ModifyAuth(id, auth);
        return "redirect:/admin/admin_member";
    }

    // 계정활성화/비활성화 설정
    @PostMapping("/ManageMeber")
    public String ManageMeber(@RequestParam("id") String id, @RequestParam(value = "isDel", required = false) String isDel) {
        asv.ManageMeber(id, isDel);
        return "redirect:/admin/admin_member";
    }

    // 계정 영구삭제
    @PostMapping("/realDeleteMember")
    public String realDeleteMember(@RequestParam("id") String id) {
        asv.realDeleteMember(id);
        return "redirect:/admin/admin_member";
    }


    // QNA 관리페이지
    // QNA 게시글 등록
    @PostMapping("/qna_register")
    public String qna_register(QnaVO qvo){
        asv.qna_register(qvo);
        return "redirect:/admin/admin_qna";
    }

    // QNA 게시글 리스트(admin)
    @GetMapping("/admin_qna")
    public String qna_list(Model m, QnaVO qnaVO){
        List<QnaVO> qnaVOList = asv.qna_list(qnaVO);
        m.addAttribute("qnaList", qnaVOList);
        log.info("qnaVOList {}", qnaVOList);
        return "/admin/admin_qna";
    }

    // QNA 게시글 수정(admin)
    @PostMapping("/modifyQna")
    public String modifyQna(QnaVO qnaVO){
        asv.modifyQna(qnaVO);
        return "redirect:/admin/admin_qna";
    }






}
