function showBigImage(imageSrc, description) {
    console.log("Image Source: ", imageSrc); // 디버깅용
    console.log("Description: ", description); // 디버깅용

    const mainImageDiv = document.getElementById('mainImage');
    mainImageDiv.innerHTML = `<img src="${imageSrc}" alt="큰 이미지">`;

    const text = document.getElementById('text');
    text.innerHTML = description;

    window.scrollTo(600, 600);
}