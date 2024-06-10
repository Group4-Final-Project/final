console.log("연결확인");
document.getElementById('cmtAddBtn').addEventListener('click',()=>{
    const cmtText=document.getElementById('cmtText').value;
    const cmtWriter=document.getElementById('cmtWriter').innerHTML;
    if (cmtText==null||cmtText==''){
        alert("댓글을 입력해주세요")
        document.getAnimations('cmtText').focus();
        return false;
    }else{
        let cmtDate={
            teacher:teacher,
            writer:cmtWriter,
            content:cmtText
        };
        console.log(cmtDate);
        
    }
});

async function postCommentServer(cmtDate){
    try {
        const url="/rev/post"
        const config={
            method:"post",
            headers:{
                "content-type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(cmtDate)
        };
        const resp=await fetch(url,config);
        const result=await resp.text();
        return result;
    } catch (error) {
        console.log(error)
    }
}