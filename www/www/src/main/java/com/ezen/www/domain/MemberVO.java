package com.ezen.www.domain;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MemberVO {
    private String id;
    private String pwd;
    private String name;
    private String tell;
    private String address;
    private String regAt;
    private String upAt;
}
