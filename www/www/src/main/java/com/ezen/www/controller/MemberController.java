package com.ezen.www.controller;

import com.ezen.www.domain.KakaoProfile;
import com.ezen.www.domain.MemberVO;
import com.ezen.www.domain.OAuthToken;
import com.ezen.www.service.MemberService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.security.Principal;


@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/member/*")
public class MemberController {

    private final MemberService msv;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${cos.key}")
    private String cosKey;

    @Autowired
    private AuthenticationManager authenticationManager;


    // 가입 전 정책 동의
    @GetMapping("/registerpolicy")
    public void registerpolicy(){}

    @GetMapping("/register")
    public void register(){}

    // 회원가입
    @PostMapping("/register")
    public String register(MemberVO mvo){
        MemberVO mvo2 = msv.getMemberId(mvo.getId());
        if(mvo2 != null){
            return "redirect:/member/register";
        }
        mvo.setPwd(passwordEncoder.encode(mvo.getPwd()));
        int isOk = msv.register(mvo);
        return "member/login";
    }

    // 아이디 중복확인
    @GetMapping(value = "/checkSignId/{id}", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<String> checkSignId(@PathVariable("id") String id){
        MemberVO mvo = msv.checkSignId(id);
        return mvo == null ? new ResponseEntity<String>("1", HttpStatus.OK)
                : new ResponseEntity<String>("0", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/member/login")
    public void login(){}


    // 회원정보수정
    @GetMapping("/myPage_info")
    public void myPage_info(){}

    @PostMapping("/myPage_info")
    public String myPage_info(MemberVO mvo){
        if(mvo.getPwd()==null || mvo.getPwd().equals("") || mvo.getPwd().length()==0){
            msv.modify(mvo);
        }else{
            mvo.setPwd(passwordEncoder.encode(mvo.getPwd()));
            msv.pwdModify(mvo);
        }
        return "redirect:/member/logout";
    }


    // 아이디/비밀번호 찾기



    // 마이페이지 주문 조회
    @GetMapping("/myPage_reserve")
    public void myPage_reserve(){}

    // 장바구니
    @GetMapping("/myPage_basket")
    public void myPage_basket(){}

    // 관리자페이지
    @GetMapping("/admin_page")
    public void admin_page(){}

    // 마이페이지 1:1문의
    @GetMapping("/myPage_ask")
    public void myPage_ask(){}

    // 마이페이지 회원탈퇴
    @GetMapping("/myPage_resign")
    public String myPage_resign(Principal principal){
        msv.resign(principal.getName());
        return "redirect:/member/logout?id="+principal.getName();
    }




    // kakao api
    @GetMapping("/auth/kakao/callback")
    public String kakaoCallback(@RequestParam("code") String code){        // Data를 리턴해주는 컨트롤러 함수

        // POST 방식으로 key=value 데이터를 요청(카카오 쪽으로)
        RestTemplate rt = new RestTemplate();

        // HttpHeader 오브젝트 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpBody 오브젝트 생성
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "a45623b5d24ad2311125ad4a2dbd59db");
        params.add("redirect_uri", "http://localhost:8090/member/auth/kakao/callback");
        params.add("code", code);

        // HttpHeader와 HttpBodyty를 하나의 오브젝트에 담기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
            new HttpEntity<>(params, headers);

        // Http 요청하기 - post방식으로 - 그리고 response 변수의 응답 받음.
        ResponseEntity<String> response = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        // Gson, Json Simple, ObjectMapper 등 라이브러리를 사용할 수 있다.
        ObjectMapper objectMapper = new ObjectMapper();

        OAuthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        log.info("카카오 엑세스 토큰 : " + oauthToken.getAccess_token());





        RestTemplate rt2 = new RestTemplate();

        // HttpHeader 오브젝트 생성
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add("Authorization", "Bearer "+ oauthToken.getAccess_token());
        headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpHeader와 HttpBodyty를 하나의 오브젝트에 담기
        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers2);

        // Http 요청하기 - post방식으로 - 그리고 response 변수의 응답 받음.
        ResponseEntity<String> response2 = rt2.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper2 = new ObjectMapper();

        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper2.readValue(response2.getBody(), KakaoProfile.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        // Member 오브젝트 : id, name, password
        log.info("카카오 아이디(번호) : " + kakaoProfile.getId());
        log.info("카카오 이름 : " + kakaoProfile.getProperties().getNickname());

        log.info("내 서버 유저아이디 : " + kakaoProfile.getProperties().getNickname()+"_"+kakaoProfile.getId()+"_kakao");
        log.info("내 서버 유저이름 : " + kakaoProfile.getProperties().getNickname()+"_kakao");
//        UUID garbagePassword = UUID.randomUUID();
        log.info("내 서버 패스워드 : " + cosKey);

//        String rawPassword = cosKey;
//        String encPassword = passwordEncoder.encode(rawPassword);

        MemberVO kakaomvo = MemberVO.builder()
                        .id("kakao_"+kakaoProfile.getProperties().getNickname()+"_"+kakaoProfile.getId())
                        .name("kakao_"+kakaoProfile.getProperties().getNickname())
                        .pwd(passwordEncoder.encode(cosKey))
                        .email("kakao@kakao.kakao")
                        .tell("kakao")
                        .gender("kakao")
                        .address("kakao")
                        .birthY("1900")
                        .birthM("01")
                        .birthD("01")
                        .oauth("kakao")
                        .build();

        // 가입 여부 확인 후 처리
        MemberVO findMemberID = msv.findMember(kakaomvo.getId());

        log.info("111111111111111111111");
        if(findMemberID == null){
            log.info("기존 가입한 회원이 아니므로, 자동로그인을 진행합니다.");
            msv.kakaoregister(kakaomvo);
        }

        log.info("자동로그인 진행");

        // 로그인 처리
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(kakaomvo.getId(), cosKey));
        SecurityContextHolder.getContext().setAuthentication(authentication);


        return "redirect:/";
    }




























}