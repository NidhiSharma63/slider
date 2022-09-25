const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')


let index = 0;
dots[0].style.opacity='1'

// positioning the slides
slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});


// move slide function
const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}

// remove dots opacity 1 from all dots

const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

// show the previous slide
prevBtn.addEventListener('click',()=>{
  removeDotsOpacity();
  if(index===-1) return index;
  index--;
  dots[index].style.opacity='1'
  moveSlide();
});

// show the next slide
nextBtn.addEventListener('click',()=>{
  removeDotsOpacity();
  if(index===slides.length-1) return index;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
});

// auto play slide
const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
}

window.onload=()=>{
  setInterval(autoPlaySlide,6000);
}