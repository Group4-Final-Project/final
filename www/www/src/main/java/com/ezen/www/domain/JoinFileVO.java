package com.ezen.www.domain;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class JoinFileVO {
    /*
    * joinfile DBtable
    * name varchar(10) not null (primarykey)
    * tell varchar(30) not null
    * report varchar(500) not null
    * uuid varchar(256) not null
    * save_dir varchar(256) not null
    * file_name varchar(256) not null
    * file_img varchar(256) not null
    * file_type int(0) not null
    * file_size bigint not null
    * reg_at datetiem default now()
    * */

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
