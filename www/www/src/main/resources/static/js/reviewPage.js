console.log("연결확인");
document.addEventListener('DOMContentLoaded', function() {
    const cmtAddBtn = document.getElementById('cmtAddBtn');
    if (cmtAddBtn) {
        cmtAddBtn.addEventListener('click', async () => {
            const cmtText = document.getElementById('cmtText').value;
            const cmtWriter = document.getElementById('cmtWriter').innerHTML;
            const tnoElement = document.querySelector('.review_image');
            const tno = tnoElement ? parseInt(tnoElement.dataset.tno, 10) : NaN;

            console.log("tno 값:", tno);

            if (cmtText == null || cmtText === '') {
                alert("댓글을 입력해주세요");
                document.getElementById('cmtText').focus();
                return false;
            } else {
                let cmtData = {
                    tno: tno,
                    writer: cmtWriter,
                    content: cmtText
                };
                console.log("댓글 데이터:", cmtData);

                const result = await postCommentServer(cmtData);
                if (result === "1") {
                    alert("댓글이 등록되었습니다.");
                    document.getElementById('cmtText').value = '';
                } else {
                    alert("댓글 등록에 실패했습니다.");
                }
            }
            spreadCommentList(tno, 1); // page를 1로 설정
        });
    }

    const tnoElement = document.querySelector('.review_image');
    const tno = tnoElement ? parseInt(tnoElement.dataset.tno, 10) : NaN;
    spreadCommentList(tno, 1); // 페이지 로드 시 댓글 목록을 불러옴, page를 1로 설정

    document.getElementById('cmtListArea').addEventListener('click', async (e) => {
        if (e.target.classList.contains('del')) {
            const cno = e.target.dataset.cno;
            const result = await deleteComment(cno);
            if (result === "1") {
                alert("댓글이 삭제되었습니다.");
                spreadCommentList(tno, 1); // 삭제 후 댓글 목록 갱신
            } else {
                alert("댓글 삭제에 실패했습니다.");
            }
        } else if (e.target.classList.contains('mod')) {
            const cno = e.target.dataset.cno;
            const content = e.target.closest('li').querySelector('.comment-content').textContent.replace('리뷰 내용:', '');
            document.getElementById('modifyCno').value = cno;
            document.getElementById('modifyContent').value = content;
        }
    });

    document.getElementById('saveModifyBtn').addEventListener('click', async () => {
        const cno = document.getElementById('modifyCno').value;
        const content = document.getElementById('modifyContent').value;

        if (content == null || content === '') {
            alert("내용을 입력해주세요");
            document.getElementById('modifyContent').focus();
            return false;
        } else {
            let modifyData = {
                cno: cno,
                content: content
            };
            const result = await modifyComment(modifyData);
            if (result === "1") {
                alert("댓글이 수정되었습니다.");
                document.querySelector('.btn-close').click();
                const tnoElement = document.querySelector('.review_image');
                const tno = tnoElement ? parseInt(tnoElement.dataset.tno, 10) : NaN;
                spreadCommentList(tno, 1); // 수정 후 댓글 목록 갱신
            } else {
                alert("댓글 수정에 실패했습니다.");
            }
        }
    });
});

function spreadCommentList(tno, page = 1) {
    CommentList(tno, page).then(result => {
        console.log("댓글 목록: ", result);
        const ul = document.getElementById('cmtListArea');
        if (result.length > 0) {
            if (page === 1) {
                ul.innerHTML = '';
            }
            for (let cvo of result) {
                let li = `<li class="list-group-item" data-tno="${cvo.tno}">`;
                li += `<div class="teacher-name">매니저 이름: ${cvo.teacherName}</div>`;
                li += `<div class="comment-writer">작성자: ${cvo.writer}</div>`;
                li += `<div class="comment-content">리뷰 내용:${cvo.content}</div>`;
                li += `<div class="comment-regdate">작성시간:${cvo.regDate}</div>`;
                li += `<button type="button" class="btn btn-outline-warning btn-sm mod" data-bs-toggle="modal" data-bs-target="#myModal" data-cno="${cvo.cno}">수정</button>`;
                li += `<button type="button" data-cno="${cvo.cno}" class="btn btn-outline-danger btn-sm del">삭제</button>`;
                li += `</li>`;
                ul.innerHTML += li;
            }
        } else {
            ul.innerHTML = '';
        }
    }).catch(error => {
        console.error("댓글 목록을 불러오는 중 오류 발생: ", error);
    });
}

async function postCommentServer(cmtData) {
    try {
        const url = "/rev/post";
        const config = {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(cmtData)
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function CommentList(tno, page) {
    try {
        const resp = await fetch(`/rev/list?tno=${tno}&page=${page}`); // 수정: 경로를 변경
        const result = await resp.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function deleteComment(cno) {
    try {
        const url = `/rev/delete?cno=${cno}`;
        const config = {
            method: "delete"
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function modifyComment(modifyData) {
    try {
        const url = "/rev/modify";
        const config = {
            method: "put",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(modifyData)
        };
        const resp = await fetch(url, config);
        const result = await resp.text();
        return result;
    } catch (error) {
        console.log(error);
    }
}
