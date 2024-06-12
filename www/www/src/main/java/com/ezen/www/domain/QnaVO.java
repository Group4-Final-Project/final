package com.ezen.www.domain;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class QnaVO {
    private int qno;
    private String title;
    private String writer;
    private String content;
    private String regDate;
}
