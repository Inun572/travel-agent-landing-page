const validateForm = () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const option = document.getElementById("interest").value;

  if (nama === "") {
    alert("Harap masukan nama anda");
  } else if (email === "") {
    alert("Harap masukan email anda");
  } else if (option === "") {
    alert("Harap pilih salah satu ketertarikan anda");
  } else {
    alert("Pesan Terkirim. Terimakasih telah menghubungi kami");
  }
};

var slideIndex = 1;

let imgList = document.getElementsByClassName('img-slide');
console.log(imgList[5]);

const slider = () => {

  if (slideIndex != 0) {
    imgList[slideIndex-1].classList.remove('active');
  }
  
  if (slideIndex > imgList.length-1) {
    slideIndex = 0;
    imgList[imgList.length-1].classList.remove('active');
  }

  imgList[slideIndex].classList.add('active');
  slideIndex++;

}

setInterval( () => {
  slider();
}, 3000)
