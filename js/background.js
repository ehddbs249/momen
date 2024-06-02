const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 선택된 이미지를 body 배경으로 설정
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
