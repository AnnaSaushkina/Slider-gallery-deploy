const sliderWrapper = document.querySelector('.slider-wrapper');
let slider = document.querySelector('.slider');

const openImgBtn = document.querySelectorAll('.show');
const allImages = document.querySelectorAll('.image');

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let imgIndex = 0;


//Отображение основного слайдера по клику и получение порядкового номера картинки
openImgBtn.forEach(function(openBtn, index){
    openBtn.addEventListener('click', function(){
        sliderWrapper.style.display = "block";
        slider.style.display = "block";
        imgIndex = index + 1;
        currentImageDisplay(imgIndex);
    })
})

function currentImageDisplay(imageNum){
    slider.style.background = `url(./img/img-${imageNum}.jpg) center/cover no-repeat`;
}


//Закрытие модального окна
sliderWrapper.addEventListener('click', function(){
    sliderWrapper.style.display = "none";
    slider.style.display = "none";
})


//Перещелкивание слайда
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

function changeScale(element) {
    currentScale += 0.1; 
    element.style.transform = `scale(${currentScale})`;
}

function resetScale(element) {
    currentScale = 1;
    element.style.transform = `scale(${currentScale})`;
  }
  
slider.addEventListener('click', function(event) {
    const target = event.target;
    if (target !== prevBtn && target !== nextBtn) {
        changeScale(slider);
    }
});

document.querySelector('.reset-btn').addEventListener('click', function() {
    resetScale(slider);
  });



  