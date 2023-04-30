const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', e => {
    console.log(document.querySelector('.alumni-pic').src);
    if(document.querySelector('.alumni-pic').src.endsWith("tanya.jpg")){
        document.querySelector('.alumni-pic').src = 'images/image-john.jpg'
        
    } else {
        document.querySelector('.alumni-pic').src = 'images/image-tanya.jpg'
    }
})

nextBtn.addEventListener('click', e => {
    console.log(document.querySelector('.alumni-pic').src);
    if(document.querySelector('.alumni-pic').src.endsWith("tanya.jpg")){
        document.querySelector('.alumni-pic').src = 'images/image-john.jpg'
        
    } else {
        document.querySelector('.alumni-pic').src = 'images/image-tanya.jpg'
    }
})