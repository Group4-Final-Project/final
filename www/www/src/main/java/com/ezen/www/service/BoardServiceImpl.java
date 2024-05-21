package com.ezen.www.service;

import com.ezen.www.domain.BoardDTO;
import com.ezen.www.domain.BoardVO;
import com.ezen.www.domain.FileVO;
import com.ezen.www.domain.PagingVO;
import com.ezen.www.repository.BoardMapper;
import com.ezen.www.repository.FileMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;
    private final FileMapper fileMapper;

    @Transactional
    @Override
    public void insert(BoardDTO bdto) {
        int isOk = boardMapper.insert(bdto.getBvo());
        if(isOk > 0 && bdto.getFlist().size() > 0){
            long bno = boardMapper.getBno();
            for(FileVO fvo : bdto.getFlist()){
                fvo.setBno(bno);
                isOk *= fileMapper.insertFile(fvo);
            }
        }
    }

    @Override
    public List<BoardVO> getList(PagingVO pgvo) {
        return boardMapper.getList(pgvo);
    }

    @Override
    public BoardDTO detail(long bno) {
        BoardDTO bdto = new BoardDTO(
        boardMapper.detail(bno),
        fileMapper.getFileList(bno));

        return bdto;
    }

    @Override
    public void modify(BoardVO bvo) {
        boardMapper.modify(bvo);
    }

    @Override
    public void remove(int bno) {
        boardMapper.remove(bno);
    }

    @Override
    public int getTotalCount(PagingVO pgvo) {
        return boardMapper.getTotalCount(pgvo);
    }
}