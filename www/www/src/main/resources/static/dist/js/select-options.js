document.getElementById('size').addEventListener('change', updateResult);
document.getElementById('fur').addEventListener('change', updateResult);
document.getElementById('aggression').addEventListener('change', updateResult);
document.getElementById('temporary').addEventListener('change', updateResult);

     // 이미지 URL을 저장하는 객체
    const imageUrls = {
        1: '/dist/image/cut.jpg',
        2: '/dist/image/petBath.jpg',
        3: '/dist/image/pethygieneCare.jpg',
        4: '/dist/image/petCare.jpg',
        5: '/dist/image/ticket-100.jpg',
        6: '/dist/image/ticket-50.jpg',
        7: '/dist/image/ticket-30.jpg',
        8: '/dist/image/petFilming.png',
    };

    // idx 값에 따라 이미지를 변경하는 함수
    function changeImage(idx) {
        const imageUrl = imageUrls[idx];
        if (imageUrl) {
            const imgElement = document.querySelector('.item-img');
            imgElement.src = imageUrl;
        }
    }

    function updateResult(event) {
        const select = event.target;
        const label = select.options[0].textContent;
        const selected = select.selectedOptions[0].textContent;
        const value = select.value;

        // Update result div with the new selection
        const resultDiv = document.getElementById('result');
        const existingBox = document.querySelector(`#result .${select.id}-box`);



        if (value !== label) {
            if (existingBox) {
                existingBox.querySelector('span').textContent = `${label}: ${selected}: ${value}`;
            } else {
                resultDiv.appendChild(createResultBox(label, value, selected, select.id));
            }
        }

        // Reset the select box to the default option
        select.value = label;
    }



    function createResultBox(label, value, selected, selectId) {

        
        const box = document.createElement('div');
        box.classList.add(`${selectId}-box`);
        box.style.border = '1px solid #ccc';
        box.style.padding = '10px';
        box.style.margin = '5px';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';

         // text와 deleteButton을 포함할 wrapper 요소 생성
        const contentWrapper = document.createElement('div');
        contentWrapper.style.display = 'flex'; // 요소들을 가로로 배치합니다.
        contentWrapper.style.justifyContent = 'space-between';

        // 텍스트 표시용 span 요소 생성
        const text = document.createElement('span');
        text.textContent = `${label}: ${selected}: ${value}`;
        // text 요소를 contentWrapper에 추가합니다.
        contentWrapper.appendChild(text);

        // 삭제 버튼 생성
        const deleteButton = document.createElement('a');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>`;
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.cursor = "pointer";
        deleteButton.style.lineHeight = "24px";
        deleteButton.onclick = () => box.remove();
        // deleteButton 요소를 contentWrapper에 추가합니다.
        contentWrapper.appendChild(deleteButton);

        // contentWrapper를 box에 추가합니다.
        box.appendChild(contentWrapper);
        

        // 하단 박스 생성
        const bottombox = document.createElement('div');
        bottombox.classList.add('bottombox');
        bottombox.style.marginTop = '10px'; // 상단 여백 설정

        // 하단 박스에 수평선 추가
        const hr = document.createElement('hr');
        hr.style.width = '100%';
        hr.style.marginTop = '10px';
        hr.style.marginBottom = '10px';
        box.appendChild(hr);

        bottombox.innerHTML=`<span class="PriceTotal"></span>`;


        // 상위 박스에 하단 박스 추가
        box.appendChild(bottombox);

        return box;
    }

    // 쿼리스트링 값을 특정 이름의 파라미터로 받기
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

            

            // idx 쿼리 파라미터에 따라 h3의 내용과 temp의 html을 바꾸기
            window.onload = function() {
                const idx = getQueryParam('idx');
                const idxDisplay = document.getElementById('idx-display');
                const idxHtml = document.getElementById('temporary');

                if (idx === '1') {
                    idxDisplay.textContent = '미용 (소형견 기준/옵션 추가)';
                    idxHtml.innerHTML = `
                        <option value="부분스타일 (선택)" selected>부분스타일 (선택)</option>
                        <option value="4">얼굴</option>
                        <option value="5">귀</option>
                        <option value="6">발</option>
                        <option value="7">꼬리</option>
                    `;
                } else if (idx === '2') {
                    idxDisplay.textContent = '목욕 (소형견 기준/옵션 추가)';
                    idxHtml.innerHTML = `
                        <option value="머드팩 (선택)" selected>머드팩 (선택)</option>
                        <option value="1">소형</option>
                        <option value="2">중형</option>
                        <option value="3">대형</option>
                    `;
                }

            }

            function setIdxDiplay(){
                const idx = getQueryParam('idx');
                const idxDisplay = document.getElementById('idx-display');

                function setInnerHTML(html) {
                    idxDisplay.innerHTML = html;
                }

                if(idx === '3'){
                    setInnerHTML(`발톱정리 위생미용(Only)`);
                }else if(idx === '4'){
                    setInnerHTML(`돌봄(+60분,+120분)`);
                }else if(idx === '5'){
                    setInnerHTML(`[이벤트]펫VIP 서비스 100만원 정액권`);
                }else if(idx === '6'){
                    setInnerHTML(`[이벤트]펫VIP 서비스 50만원 정액권`);
                }else if(idx === '7'){
                    setInnerHTML(`[이벤트]펫VIP 서비스 30만원 정액권`);
                }else if(idx === '8'){
                    setInnerHTML(`[이벤트] 꽃단장,나들이 촬영 패키지`);
                }
            }

            setIdxDiplay();


            function setOptionTitle(){
                const idx = getQueryParam('idx');
                const idxTitleDisplay = document.getElementById('option-title');

                function setInnerHTML(html) {
                    idxTitleDisplay.innerHTML = html;
                }

                if(idx === '1' || idx === '2' || idx === '3' || idx === '4'){
                    setInnerHTML('반려견 서비스');
                }else{
                    setInnerHTML('이벤트');
                }
            }
            setOptionTitle();
// 상세 내용 이미지

const DetailimageUrls = {
    1: '/dist/image/CareService-cut.webp', // 800X 5000px
    2: '/dist/image/CareService-bath.webp', // 800X 4000px
    3: '/dist/image/CareService-hygiene.webp', // 720X 710px
    4: '/dist/image/CareService-work.webp', // 1250X 4000px
    5: '/dist/image/CareService-cut.webp', // 800X 5000px
    6: '/dist/image/CareService-cut.webp', // 800X 5000px
    7: '/dist/image/CareService-cut.webp', // 800X 5000px
    8: '/dist/image/CareServiceEvent-filming.webp', // 1125 X 10384px
    // 다른 idx에 대한 이미지 URL들을 추가할 수 있음
};

// idx 값에 따라 이미지를 변경하는 함수
function DetailchangeImage(idx) {
    const DetailimageUrl = DetailimageUrls[idx];
    if (DetailimageUrl) {
        const imgElement = document.querySelector('.ServiceCareDetail-img');
        imgElement.src = DetailimageUrl;
    }
}

// idx 값에 따라 이미지 크기를 변경하는 함수
function setDetailImageSize(idx) {
    const DetailimgElement = document.querySelector('.ServiceCareDetail-img');
    let width = ''; // 이미지 폭
    let height = ''; // 이미지 높이

    // 각 idx에 따라 이미지 크기를 설정
    switch (idx) {
        case '1':
            width = '800px';
            height = '5000px';
            break;
        case '2':
            width = '800px';
            height = '4000px';
            break;
        case '3':
            width = '720px';
            height = '710px';
            break;
        case '4':
            width = '1250px';
            height = '4000px';
            break;
        case '5':
            width = '800px';
            height = '5000px';
            break;
        case '6':
            width = '800px';
            height = '5000px';
            break;
        case '7':
            width = '800px';
            height = '5000px';
            break;
        case '8':
            width = '1125px';
            height = '10300px';
            break;
        default:
            // 기본 값 설정
            width = 'auto';
            height = 'auto';
            break;
    }

    // 이미지 크기 설정
    DetailimgElement.style.width = width;
    DetailimgElement.style.height = height;
}

document.addEventListener('DOMContentLoaded', function() {
    const idx = getQueryParam('idx');
    setDetailImageSize(idx);
    DetailchangeImage(idx);
    changeImage(idx);
});