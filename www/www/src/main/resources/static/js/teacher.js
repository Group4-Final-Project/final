function showBigImage(imageSrc, description) {
    const mainImageDiv = document.getElementById('mainImage');
    mainImageDiv.innerHTML = `<img src="${imageSrc}" alt="큰 이미지">`;

    const text = document.getElementById('text');
    text.innerHTML = description;

    window.scrollTo(150, 150);
}