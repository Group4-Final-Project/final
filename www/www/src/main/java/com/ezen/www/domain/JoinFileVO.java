package com.ezen.www.domain;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class JoinFileVO {
    private String name;
    private String tell;
    private String report;
    private String uuid;
    private String saveDir;
    private String fileName;
    private String fileImg;
    private int fileType;
    private long fileSize;
}
