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
    private final FileMapper fileMapper;
    private final String UP_DIR = "D:\\_myProject\\_java\\_fileUpload\\";

    // 파일 및 이미지 저장 메서드
    public JoinFileVO saveFile(JoinFileVO joinFileVO, MultipartFile file, MultipartFile imageFile) throws IOException {
        if (file == null || file.isEmpty() || imageFile == null || imageFile.isEmpty()) {
            throw new IllegalArgumentException("파일이 비어 있습니다.");
        }

        String originalFileName = file.getOriginalFilename();
        String extension = getFileExtension(originalFileName);

        // 파일 형식 및 이미지 형식 확인
        if (!isValidFileType(extension) || !isValidImageType(getFileExtension(imageFile.getOriginalFilename()))) {
            throw new IllegalArgumentException("지원되지 않는 파일 형식입니다.");
        }

        JoinFileVO fvo = new JoinFileVO();
        fvo.setFileSize(file.getSize());
        fvo.setName(joinFileVO.getName());
        fvo.setTell(joinFileVO.getTell());
        fvo.setReport(joinFileVO.getReport());

        String imgPath = LocalDate.now().toString().replace("-", File.separator);
        fvo.setFileImg(imgPath);

        File folders = new File(UP_DIR, imgPath);
        if (!folders.exists()) {
            folders.mkdirs(); // 폴더 생성
        }

        String uuidStr = UUID.randomUUID().toString();
        String fullFileName = uuidStr + "_" + originalFileName;
        File storeFile = new File(folders, fullFileName);

        file.transferTo(storeFile);

        // 이미지 업로드
        String imageFileName = uuidStr + "_" + imageFile.getOriginalFilename();
        File imageStoreFile = new File(folders, imageFileName);
        imageFile.transferTo(imageStoreFile);

        fvo.setSaveDir(imgPath);
        fvo.setFileName(originalFileName);
        fvo.setUuid(uuidStr);

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
                extension.equals("hwp");
    }

    // 지원되는 이미지 형식인지 확인
    private boolean isValidImageType(String extension) {
        return extension.equals("jpg") || extension.equals("jpeg") || extension.equals("png");
    }



}