let slideShowImg = document.getElementsByClassName("ss-img");
let btn = document.getElementsByClassName("round-btn");
slideShowImg[0].classList.add("display");
btn[0].classList.add("grey");
for(let z=0;z<btn.length;z++)
{
  btn[z].addEventListener('click',()=>{
    i=z;
  })
}

let slideShow = () => {
  let i = 0;
  let j = 0;
  setInterval(() => {
    j=i%slideShowImg.length;
    // console.log("Before  "+i,j);
    
    slideShowImg[j++].classList.remove("display");
    btn[j-1].classList.remove("grey");
    
    
    if(j==slideShowImg.length-1)
    {
      slideShowImg[0].classList.add("display");
      btn[0].classList.add("grey");
      i=0;   
    }
    else{
      slideShowImg[j].classList.add("display");
      btn[j].classList.add("grey");
      i++;
    }
    
    // console.log("After  "+i,j);
    
  }
  , 2000);
};
slideShow();
