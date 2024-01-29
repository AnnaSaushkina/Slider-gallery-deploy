const showImg = document.querySelectorAll('.show');
const allImages = document.querySelectorAll('.image-wrapper');
const openSlide = document.querySelector('.slider-wrapper');
const imageBox = document.querySelector('.slider');

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let imgIndex = 0;

//Открытие модального окна
openSlide.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})

function currentImageDisplay(imageNum){
    imageBox.style.background = `url(./img/img-${imageNum}.jpg) center/cover no-repeat`;
}


//Переключение слайда
showImg.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        openSlide.style.display = "block";
        imageBox.style.display = "block";
        imgIndex = index + 1;
        currentImageDisplay(imgIndex);
    })
})

prevBtn.addEventListener('click', function(){
    imgIndex--;
    if(imgIndex < 1){
        imgIndex = allImages.length;
    }
    currentImageDisplay(imgIndex);
})

nextBtn.addEventListener('click', function(){
    imgIndex++;
    if(imgIndex > 8){
        imgIndex = 1;
    }
    currentImageDisplay(imgIndex);
})


//Увеличение изображения
let currentScale = 1;
let zoom = document.querySelectorAll('.slider');

function change(element) {
    currentScale += 0.1; 
    element.style.transform = `scale(${currentScale})`;
}

function resetScale(element) {
    currentScale = 1;
    element.style.transform = `scale(${currentScale})`;
  }
  
zoom.forEach(slide => slide.addEventListener('click', function(event) {
    const target = event.target;
    imageBox.style.position = "fixed";
    if (target !== prevBtn && target !== nextBtn) {
        change(this);
    }
}));

document.querySelector('.reset-btn').addEventListener('click', function() {
    resetScale(imageBox);
  });



  