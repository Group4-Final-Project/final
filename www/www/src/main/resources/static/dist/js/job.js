const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.col-modal');

btnOpenModal.addEventListener("click", ()=>{
  modal.style.display="flex";
});

const btnclose = document.getElementById('close');
const btnclose2 = document.getElementById('close-btn');
const btnclose3 = document.querySelector('.close-btn2');

btnclose.addEventListener("click", ()=>{
  modal.style.display="none";
});
btnclose2.addEventListener("click", ()=>{
  modal.style.display="none";
});
btnclose3.addEventListener("click",()=>{
  modal.style.display="none"
})


const regExp = new RegExp("\.(exe|sh|bat|jar|dll|msi)$"); //실행파일 막기
const maxSize = 1024*1024*20;

function fileValidation(fileName, fileSize){
  if(regExp.test(fileName)){
      return 0;
  }else if(fileSize > maxSize){
      return 0;
  }else{
      return 1;
  }
}

document.addEventListener('change', (e)=>{
  if(e.target.id=='files'){
      const fileObject = document.getElementById('files').files;
      console.log(fileObject);
      document.getElementById('regiModal').disabled = false;

      const div = document.getElementById('fileZone');
      div.innerHTML="";
      
      let ul=`<ul class="list-group list-group-flush">`;
  
  let isOk = 1;  //여러 파일에 대한 값 확인에 대한 값
  for(let file of fileObject){
    let vaildResult = fileValidation(file.name, file.size);
    isOk *= vaildResult;  //하나씩 모든 파일에 대한 확인
    ul+=`<li class="list-group-item">`;
    ul+=`<div class="ms-2 me-auto">`;
    ul+=`${vaildResult ? '<div class="fw-bold">업로드 가능' : '<div class="fw-bold text-danger">업로드 불가능'} </div>`;
    ul+=`${file.name}</div>`;
  }
  ul+=`</ul>`;
  div.innerHTML = ul;

      if(isOk == 0){
          //파일 중 vaild 결과에 맞지 않는 값이 있다면.
          document.getElementById('regiModal').disabled = true;
      }
  }

  if(e.target.id=='filesimg'){
    const fileObject = document.getElementById('filesimg').files;
    console.log(fileObject);
    document.getElementById('regiModal').disabled = false;

    const div = document.getElementById('ImgZone');
    div.innerHTML="";
    
    let ul=`<ul class="list-group list-group-flush">`;

    let isOk = 1;  //여러 파일에 대한 값 확인에 대한 값
    for(let file of fileObject){
      let vaildResult = fileValidation(file.name, file.size);
      isOk *= vaildResult;  //하나씩 모든 파일에 대한 확인
      ul+=`<li class="list-group-item">`;
      ul+=`<div class="ms-2 me-auto">`;
      ul+=`${vaildResult ? '<div class="fw-bold">업로드 가능' : '<div class="fw-bold text-danger">업로드 불가능'} </div>`;
      ul+=`${file.name}</div>`;
    }
    ul+=`</ul>`;
    div.innerHTML = ul;

        if(isOk == 0){
            //파일 중 vaild 결과에 맞지 않는 값이 있다면.
            document.getElementById('regiModal').disabled = true;
        }
  }


});