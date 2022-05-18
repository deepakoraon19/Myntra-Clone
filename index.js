let slideShowImg = document.getElementsByClassName("ss-img");
slideShowImg[0].classList.add("display");

let slideShow = () => {
  let i = 0;
  let j = 0;
  setInterval(() => {
    if (i > slideShowImg.length - 1) {
      console.log("UP " + i);
      slideShowImg[i - 1].classList.remove("display");
      i = 0;
      slideShowImg[i].classList.add("display");
    } else {
      console.log(i);
      slideShowImg[i].classList.remove("display");
      if (i == slideShowImg.length - 1) {
        slideShowImg[0].classList.add("display");
        i++;
      }
      else{
        slideShowImg[++i].classList.add("display");
      }
    }
  }, 5000);
};
slideShow();
