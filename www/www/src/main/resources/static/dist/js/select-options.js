document.getElementById('size').addEventListener('change', updateResult);
document.getElementById('fur').addEventListener('change', updateResult);
document.getElementById('aggression').addEventListener('change', updateResult);
document.getElementById('temporary').addEventListener('change', updateResult);
document.getElementById('CutM').addEventListener('change', updateResult);


function updateResult(event) {
    const idx = getQueryParam('idx');
    const sizeVal = document.getElementById('size').value;
    const furVal = document.getElementById('fur').value;
    const aggressionVal = document.getElementById('aggression').value;
    const CutMVal = document.getElementById('CutM').value;
    const temporaryVal = document.getElementById('temporary').value;

    const fullTotal = document.getElementById('full-total');
    const select = event.target;
    const label = select.options[0].textContent;
    const selected = select.selectedOptions[0].textContent;
    const value = select.value;

    let price = 0;

    // 기본사항에서의 가격 계산
    if (sizeVal !== '크기 (필수)') {
        switch (idx) {
            case '1':
                switch (sizeVal) {
                    case '1':
                        price += 50000;
                        fullTotal.textContent += price;
                        break;
                    case '2':
                        price += 60000;
                        fullTotal.textContent += price;
                        break;
                    case '3':
                        price += 70000;
                        fullTotal.textContent += price;
                        break;
                }
                break;
            case '2':
                switch (sizeVal) {
                    case '1':
                        price += 52000;
                        fullTotal.textContent += price;
                        break;
                    case '2':
                        price += 62000;
                        fullTotal.textContent += price;
                        break;
                    case '3':
                        price += 72000;
                        fullTotal.textContent += price;
                        break;
                }
                break;
        }
    }

    // 추가사항에서의 가격 계산
    if (furVal !== '털엉킴,뭉침 추가 (선택)') {
        switch (furVal) {
            case '1':
                price += 5000;
                fullTotal.textContent += price;
                break;
            case '2':
                price += 10000;
                fullTotal.textContent += price;
                break;
            case '3':
                price += 15000;
                fullTotal.textContent += price;
                break;
        }
    }

    if (aggressionVal !== '공격성 추가 (선택)') {
        switch (aggressionVal) {
            case '1':
                price += 5000;
                fullTotal.textContent += price;
                break;
            case '2':
                price += 10000;
                fullTotal.textContent += price;
                break;
            case '3':
                price += 15000;
                fullTotal.textContent += price;
                break;
        }
    }

    if (CutMVal !== '미리수 (선택)') {
        switch (CutMVal) {
            case '1':
                price += 5000;
                fullTotal.textContent += price;
                break;
            case '2':
                price += 10000;
                fullTotal.textContent += price;
                break;
        }
    }

    if (temporaryVal !== '임시 (선택)') {
        switch (temporaryVal) {
            case '1':
                price += 2000;
                fullTotal.textContent += price;
                break;
            case '2':
                price += 2000;
                fullTotal.textContent += price;
                break;
            case '3':
                price += 1000;
                fullTotal.textContent += price;
                break;
            case '4':
                price += 1000;
                fullTotal.textContent += price;
                break;
        }
    }

    // Update result div with the new selection
    const resultDiv = document.getElementById('result');
    
    const existingBox = document.querySelector(`#result .${select.id}-box`);
    const existingPrice = existingBox ? existingBox.querySelector('.PriceTotal') : null;

    if (value !== label) {
        if (existingBox && existingPrice) {
            existingBox.querySelector('p').textContent = `${label}: ${selected}`;
            existingPrice.textContent = `${price}원`;
        } else {
            resultDiv.appendChild(createResultBox(label, value, selected, select.id, price));
        }
    }

    // Update full total
    fullTotal.textContent = `총액: ${price}원`;

    // Reset the select box to the default option
    select.value = label;
}



    function createResultBox(label, value, selected, selectId, price) {
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
        const text = document.createElement('p');
        text.textContent = `${label}: ${selected}`;
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
        
        const hr = document.createElement('hr');
        box.appendChild(hr);

        const bottombox = document.createElement('div');
        bottombox.id='bottombox';
        const PriceTotal = document.createElement('span');
        PriceTotal.classList.add('PriceTotal');
        PriceTotal.style.fontSize='18px';
        PriceTotal.textContent=`${price}원`;

        bottombox.appendChild(PriceTotal);
        box.appendChild(bottombox);

    
        return box;
    }

// 쿼리스트링 값을 특정 이름의 파라미터로 받기
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// idx 쿼리 파라미터에 따라 h3의 내용과 temp의 html을 바꾸기
document.addEventListener('DOMContentLoaded', function() {
    const idx = getQueryParam('idx');
    const fur = document.getElementById('fur');
    const aggression = document.getElementById('aggression');
    const temporary = document.getElementById('temporary');
    const CutM = document.getElementById('CutM');

    if(idx === '1'){
        fur.style.display="block";
        aggression.style.display="block";
        temporary.style.display="block";
        CutM.style.display="block";

        fur.innerHTML=`
        <option value="털엉킴,뭉침 추가 (선택)" selected>털엉킴,뭉침 추가 (선택)</option>
        <option value="1">1kg-9.9kg</option>
        <option value="2">10kg-14.9kg</option>
        <option value="3">15kg-30kg</option>
        `;

        aggression.innerHTML=`
        <option value="공격성 추가 (선택)" selected>공격성 추가 (선택)</option>
        <option value="1">1kg-9.9kg</option>
        <option value="2">10kg-14.9kg</option>
        <option value="3">15kg-30kg</option>
        `;

        CutM.innerHTML=`
        <option value="미리수 (선택)" selected>미리수 (선택)</option>
        <option value="1">6mm</option>
        <option value="2">1cm</option>
        `;

        temporary.innerHTML=`
        <option value="추가부분 (선택)" selected>추가부분 (선택)</option>
        <option value="1">얼굴</option>
        <option value="2">귀</option>
        <option value="3">발</option>
        <option value="4">꼬리</option>
        `;

    }


});




function setSelectSizeOption() {
    const idx = getQueryParam('idx');
    const size = document.getElementById('size');

    function setInnerHTML(html) {
        size.innerHTML = html;
    }

    if (idx === '1') {
        setInnerHTML(`
            <option value="크기 (필수)" selected>크기 (필수)</option>
            <option value="1">소형</option>
            <option value="2">중형</option>
            <option value="3">대형</option>
        `);
    }else if(idx === '2'){
        setInnerHTML(`
            <option value="크기 (필수)" selected>크기 (필수)</option>
            <option value="1">소형</option>
            <option value="2">중형</option>
            <option value="3">대형</option>
        `);
    }
}

setSelectSizeOption();



function setIdxDiplay(){
    const idx = getQueryParam('idx');
    const idxDisplay = document.getElementById('idx-display');

    function setInnerHTML(html) {
        idxDisplay.innerHTML = html;
    }
    if(idx === '1'){
        setInnerHTML(`<p>미용 (소형견 기준/옵션 추가)</p>`);
    }else if(idx === '2'){
        setInnerHTML(`<p>목욕 (소형견 기준/옵션 추가)</p>`);
    }else if(idx === '3'){
        setInnerHTML(`<p>발톱정리 위생미용(Only)</p>`);
    }else if(idx === '4'){
        setInnerHTML(`<p>돌봄(+60분,+120분)</p>`);
    }else if(idx === '5'){
        setInnerHTML(`<p>[이벤트]펫VIP 서비스 100만원 정액권</p>`);
    }else if(idx === '6'){
        setInnerHTML(`<p>[이벤트]펫VIP 서비스 50만원 정액권</p>`);
    }else if(idx === '7'){
        setInnerHTML(`<p>[이벤트]펫VIP 서비스 30만원 정액권</p>`);
    }else if(idx === '8'){
        setInnerHTML(`<p>[이벤트] 꽃단장,나들이 촬영 패키지</p>`);
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