console.log("myPage_info in");

// 내 정보 수정 - 비밀번호 유효성 검사
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('sign_pwd');
    const checkPasswordInput = document.getElementById('sign_check_pwd');
    const stringPasswordMessage = document.querySelector('.stringPassword-message');
    const mismatchMessage = document.querySelector('.mismatch-message');
    // const form = document.getElementById('signup-form');

    // 비밀번호 유효성 검사 함수
    function validatePassword(password) {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex.test(password);
    }

    // 비밀번호 입력 시 유효성 검사
    passwordInput.addEventListener('input', function () {
        if (!validatePassword(passwordInput.value)) {
            stringPasswordMessage.classList.remove('hide');
        } else {
            stringPasswordMessage.classList.add('hide');
        }
    });

    // 비밀번호 확인 입력 시 일치 여부 검사
    checkPasswordInput.addEventListener('input', function () {
        if (passwordInput.value !== checkPasswordInput.value) {
            mismatchMessage.classList.remove('hide');
        } else {
            mismatchMessage.classList.add('hide');
        }
    });

});



// 1:1 문의하기 관련
const askBtn = document.querySelector('.askBtn');
const askEmail = document.getElementById('ask_email');
const askTitle = document.getElementById('ask_title');
const askContent = document.getElementById('ask_content');

// 문의하기 버튼 비활성화
document.addEventListener('DOMContentLoaded', function() {

    askBtnUpdate();

    askEmail.addEventListener('input', askBtnUpdate);
    askTitle.addEventListener('input', askBtnUpdate);
    askContent.addEventListener('input', askBtnUpdate);

    function askBtnUpdate(){
        if(askEmail.value.trim() === "" || askTitle.value.trim() === "" || askContent.value.trim() === ""){
            askBtn.disabled = true;
        } else {
            askBtn.disabled = false;
        }
    }

})





