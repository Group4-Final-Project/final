package com.ezen.www.handler;

import com.ezen.www.domain.JoinFileVO;
import com.ezen.www.repository.FileMapper;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@ToString
@Component
@Slf4j
@Service
@RequiredArgsConstructor
public class FileHandler {
    private String UP_DIR = "D:\\_Project\\_java\\_fileUpload\\";
    private final FileMapper fileMapper;



    // 파일을 저장하고 JoinFileVO 객체를 반환하는 메서드
    public JoinFileVO saveFile(JoinFileVO joinFileVO, MultipartFile file) throws IOException {
        // 파일이 비어 있는지 확인
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("파일이 비어 있습니다.");
        }

        // 파일의 원본 파일명과 확장자 추출
        String originalFileName = file.getOriginalFilename();
        String extension = getFileExtension(originalFileName);

        // 지원되는 파일 형식인지 확인
        if (!isValidFileType(extension)) {
            throw new IllegalArgumentException("지원되지 않는 파일 형식입니다.");
        }

        // JoinFileVO 객체 생성 및 파일 크기 설정
        JoinFileVO fvo = new JoinFileVO();
        fvo.setFileSize(file.getSize());
        fvo.setName(joinFileVO.getName());
        fvo.setTell(joinFileVO.getTell());
        fvo.setReport(joinFileVO.getReport());



        // 모든 이미지가 같은 경로에 저장됨을 가정
        String imgPath = LocalDate.now().toString().replace("-", File.separator);
        fvo.setFileImg(imgPath);

        // 파일이 저장될 디렉토리 경로 생성
        File folders = new File(UP_DIR, imgPath);
        if (!folders.exists()) {
            folders.mkdirs(); // 폴더 생성
        }

        // UUID 생성 및 파일명 설정
        String uuidStr = UUID.randomUUID().toString();
        String fullFileName = uuidStr + "_" + originalFileName;
        File storeFile = new File(folders, fullFileName);

        // 파일 저장
        file.transferTo(storeFile);

        // JoinFileVO에 파일 정보 설정
        fvo.setSaveDir(imgPath);
        fvo.setFileName(originalFileName);
        fvo.setUuid(uuidStr);

        log.info("fvo in {}", fvo);
        // 파일 정보를 DB에 저장
        fileMapper.JoinFiles(fvo);



        return fvo;
    }


    // 파일명에서 확장자 추출
    private String getFileExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
    }

    // 지원되는 파일 형식인지 확인
    private boolean isValidFileType(String extension) {
        return extension.equals("docx") || extension.equals("xlsx") || extension.equals("pptx") ||
                extension.equals("doc") || extension.equals("xls") || extension.equals("ppt") ||
                extension.equals("hwp") || extension.equals("jpg") || extension.equals("jpeg") ||
                extension.equals("png");
    }

    // 파일 이름을 기반으로 이미지 경로 생성
    private String generateImagePath(String fileName) {
        // 파일 이름에서 확장자를 제외한 부분을 추출하여 경로로 사용
        String nameWithoutExtension = fileName.substring(0, fileName.lastIndexOf("."));
        // 이미지 경로에 사용될 경로 구분자를 시스템에 맞게 설정
        String separator = File.separator;
        // 현재 날짜를 기반으로한 경로를 생성
        LocalDate date = LocalDate.now();
        String today = date.toString().replace("-", separator);
        // 파일 이름과 현재 날짜를 조합하여 최종 이미지 경로 생성
        return today + separator + nameWithoutExtension;
    }


}